import { IconButton } from "./components/Buttons";
import { CopyIcon } from "./components/CopyIcon";
import styled from "styled-components";
import { Tooltip } from "./components/Tooltip";

type ProfileItemProps = {
  label: string;
  value: string;
  onCopy: () => void;
  prefix?: string;
};

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: ${({ theme }) => theme.spacing}px;
`;
const ItemContent = styled.div`
  position: relative;
  font-size: 0.75rem;
  margin: ${({ theme }) => theme.spacing}px 0;
  padding: ${({ theme }) => theme.spacing}px;
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.spacing / 2}px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;
`;

const Content = styled.div`
  flex: 1;
`;

const Prefix = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  top: 0;
  padding: 0 ${({ theme }) => theme.spacing}px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.spacing / 2}px 0 0 ${({ theme }) => theme.spacing / 2}px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileItem = ({ label, value, onCopy, prefix }: ProfileItemProps) => {
  return (
    <Item>
      <ItemContent className="item-content-wrapper">
        {prefix ? <Prefix id="phone-prefix">{prefix}</Prefix> : null}
        <Content id="phone">{value}</Content>
      </ItemContent>
      <Tooltip text={`Copied!`}>
        <IconButton onClick={onCopy} aria-label={`Copy ${label} to Clipboard`}>
          <CopyIcon />
        </IconButton>
      </Tooltip>
    </Item>
  );
};

export default ProfileItem;
