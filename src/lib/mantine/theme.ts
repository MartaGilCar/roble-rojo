import { MantineThemeOverride } from "@mantine/core";

export const robleRojoTheme: MantineThemeOverride = {
  primaryColor: "brown",
  fontFamily: "Inter, sans-serif",
  fontFamilyMonospace: "Inter, sans-serif",
  colors: {
    brown: [
      "#FBF4EC",
      "#F5E8DA",
      "#ECD6C1",
      "#D5B69D",
      "#BF9B7F",
      "#A07A61",
      "#8A6350",
      "#6E4F43",
      "#503A31",
      "#362921",
    ],
  },
  primaryShade: 6,
  radius: {
    xs: "8px",
    sm: "12px",
    md: "18px",
    lg: "24px",
    xl: "32px",
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "18px",
    lg: "26px",
    xl: "38px",
  },
  shadows: {
    xs: "0 1px 4px rgba(43, 41, 39, 0.05)",
    sm: "0 4px 18px rgba(43, 41, 39, 0.08)",
    md: "0 10px 35px rgba(43, 41, 39, 0.1)",
    lg: "0 18px 55px rgba(43, 41, 39, 0.12)",
  },
  headings: {
    fontFamily: "Cormorant Garamond, serif",
    fontWeight: "600",
    sizes: {
      h1: { fontSize: "44px", lineHeight: "1.05" },
      h2: { fontSize: "36px", lineHeight: "1.08" },
      h3: { fontSize: "30px", lineHeight: "1.1" },
      h4: { fontSize: "24px", lineHeight: "1.2" },
      h5: { fontSize: "20px", lineHeight: "1.3" },
      h6: { fontSize: "16px", lineHeight: "1.4" },
    },
  },
  components: {
    Button: {
      defaultProps: {
        radius: "xl",
      },
    },
    Card: {
      defaultProps: {
        radius: "xl",
        withBorder: true,
      },
    },
    TextInput: {
      defaultProps: {
        radius: "lg",
      },
    },
    Textarea: {
      defaultProps: {
        radius: "lg",
      },
    },
    Select: {
      defaultProps: {
        radius: "lg",
      },
    },
  },
};
