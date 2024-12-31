import { useState, useCallback } from "react";

type cookieValue = string | string[] | null;

export const useCookie = (name: string, defaultValue: cookieValue) => {
  const [value, setValue] = useState(() => {
    const cookie = localStorage.getItem(name);
    if (cookie) {
      return JSON.parse(cookie);
    }
    localStorage.setItem(name, JSON.stringify(defaultValue));
    return defaultValue;
  });

  const updateCookie = useCallback(
    (newValue: cookieValue) => {
      localStorage.setItem(name, JSON.stringify(newValue));
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    localStorage.removeItem(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie];
};
