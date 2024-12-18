import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";

export const theme = {
  colors: {
    primary: "#0a0908",
    secondary: "#22333b",
    secondaryLight: lighten(0.2, "#22333b"),
    tertiary: "#eae0d5",
    text: "#0a0908",
    textContrast: "#fff",
  },
  fontSize: 16,
  spacing: 8,
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    font-size: ${({ theme }) => theme.fontSize}px;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 300px;
    padding: ${({ theme }) => theme.spacing * 2}px;
  }
  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
