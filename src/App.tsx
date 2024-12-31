import { useEffect, useState } from "react";
import ProfileItem from "./ProfileItem";
import { Button } from "./components/Buttons";
import { Header } from "./components/Header";
import { Profile, ProfileLocation, ProfileName } from "./types";
import { MultiCheckboxes } from "./components/MultiCheckboxes";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing}px;

  & > *:last-child {
    margin-top: ${({ theme }) => theme.spacing * 2}px;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing * 2}px;
`;

const nationalities = [
  { key: "us", name: "United States" },
  { key: "gb", name: "United Kingdom" },
];

const App = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [selectedNationalities, setSelectedNationalities] = useState<string[]>(
    nationalities.map((n) => n.key)
  );

  useEffect(() => {
    const cachedProfile = localStorage.getItem("randomNameGenerator_cachedProfile");
    if (cachedProfile) {
      const profile = JSON.parse(cachedProfile);
      setProfile(profile);
    } else {
      generateProfile();
    }
  }, []);

  const fetchProfile = async () => {
    const response = await fetch(
      `https://randomuser.me/api/?inc=name,phone,location,id,nat&nat=${selectedNationalities.join(
        ","
      )}`
    );
    const data = await response.json();
    const profile = data.results[0] as Profile;
    return profile;
  };

  const generateProfile = async () => {
    const profile = await fetchProfile();
    localStorage.setItem("randomNameGenerator_cachedProfile", JSON.stringify(profile));
    setProfile(profile);
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  const getNameString = (name: ProfileName) => {
    return `${name.first} ${name.last}`;
  };

  const getEmail = (name: ProfileName) => {
    return `${name.first.toLowerCase()}.${name.last.toLowerCase()}@test.com`;
  };

  const getCountry = (location: ProfileLocation) => {
    return location.country;
  };

  const removeTaxIdFormatting = (taxId: string) => {
    // Tax ids are NINO in the UK and SSN in the US
    return taxId.replace(/[- ]/g, "");
  };

  const handleNationalitySelectionChange = (key: string, checked: boolean) => {
    if (checked) {
      setSelectedNationalities([...selectedNationalities, key]);
    } else {
      setSelectedNationalities(selectedNationalities.filter((n) => n !== key));
    }
  };

  if (!profile) {
    return null;
  }

  const taxId = profile.id.value;

  return (
    <>
      <Header>Random Name Generator</Header>
      <Content>
        <ProfileItem
          label="Full Name"
          value={getNameString(profile.name)}
          onCopy={() => copyToClipboard(getNameString(profile.name))}
        />
        <ProfileItem
          label="Email"
          value={getEmail(profile.name)}
          onCopy={() => copyToClipboard(getEmail(profile.name))}
        />
        <ProfileItem
          label="Country"
          value={getCountry(profile.location)}
          onCopy={() => copyToClipboard(getCountry(profile.location))}
        />
        <ProfileItem
          label="Phone"
          prefix="TEL."
          value={profile.phone}
          onCopy={() => copyToClipboard(profile.phone)}
        />
        {taxId && (
          <ProfileItem
            label="Tax ID"
            prefix={profile.id.name}
            value={profile.id.value}
            onCopy={() => copyToClipboard(removeTaxIdFormatting(profile.id.value))}
          />
        )}
        <Controls>
          <Button onClick={generateProfile}>New name</Button>
          <MultiCheckboxes
            options={nationalities}
            handleChange={handleNationalitySelectionChange}
            selected={selectedNationalities}
          />
        </Controls>
      </Content>
    </>
  );
};

export default App;
