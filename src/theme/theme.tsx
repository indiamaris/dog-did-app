
import { createTheme, ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import { deepmerge } from "@mui/utils";



const brand = {
  mint: "#4ECDC4", // primário — fresh/marinho
  mintDark: "#3DB4AC",
  mintLight: "#7BE2DB",
  coral: "#FF6B6B", // destaque / promoções
  coralDark: "#E05555",
  coralLight: "#FFA3A3",
  amber: "#FF9F1C", // CTAs
  amberDark: "#CC7F16",
  amberLight: "#FFC266",
  violet: "#6C63FF", // info/brand alt
  violetDark: "#5850EC",
  violetLight: "#A29BFE",
  leaf: "#22C55E", // sucesso
  sky: "#0EA5E9", // info
  slate900: "#0F172A",
  slate800: "#111827",
  slate100: "#F1F5F9",
  slate50: "#F8FAFC",
};

const commonExtras = {
  custom: {
    brand,
    gradients: {
      hero: `linear-gradient(135deg, ${brand.mint} 0%, ${brand.violet} 100%)`,
      highlight: `linear-gradient(135deg, ${brand.coral} 0%, ${brand.amber} 100%)`,
    },
    chart: {
      1: brand.mint,
      2: brand.coral,
      3: brand.violet,
      4: brand.amber,
      5: brand.leaf,
      6: brand.sky,
    },
    status: {
      success: brand.leaf,
      info: brand.sky,
      warning: brand.amber,
      danger: brand.coral,
    },
  },
};

export const lightTheme = createTheme(
  deepmerge(
    {
      palette: {
        mode: "light",
        primary: {
          main: brand.mint,
          light: brand.mintLight,
          dark: brand.mintDark,
          contrastText: "#06231F",
        },
        secondary: {
          main: brand.coral,
          light: brand.coralLight,
          dark: brand.coralDark,
          contrastText: "#2A0A0A",
        },
        error: {
          main: brand.coral,
        },
        warning: {
          main: brand.amber,
        },
        info: {
          main: brand.violet,
        },
        success: {
          main: brand.leaf,
        },
        background: {
          default: brand.slate50, // app bg
          paper: "#FFFFFF", // cards/surfaces
        },
        text: {
          primary: "#0B1220",
          secondary: "#3C4257",
          disabled: "#9AA4B2",
        },
        divider: "#E6EAF0",
        grey: {
          50: brand.slate50,
          100: brand.slate100,
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        contrastThreshold: 3,
        tonalOffset: 0.18,
      },
      shape: {
        borderRadius: 16,
      },
      typography: {
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
        h1: { fontWeight: 800 },
        h2: { fontWeight: 800 },
        h3: { fontWeight: 700 },
        h4: { fontWeight: 700 },
        h5: { fontWeight: 700 },
        button: { textTransform: "none", fontWeight: 700 },
      },
      components: {
        MuiPaper: {
          styleOverrides: {
            rounded: { borderRadius: 24 },
          },
        },
        MuiButton: {
          defaultProps: { disableElevation: true },
          styleOverrides: {
            root: { borderRadius: 9999, paddingInline: 16 },
            containedPrimary: { color: "#06231F" },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: { borderRadius: 9999 },
          },
        },
      },
    },
    commonExtras
  )
);

export const darkTheme = createTheme(
  deepmerge(
    {
      palette: {
        mode: "dark",
        primary: {
          main: brand.mint,
          light: brand.mintLight,
          dark: brand.mintDark,
          contrastText: "#061411",
        },
        secondary: {
          main: brand.coral,
          light: brand.coralLight,
          dark: brand.coralDark,
          contrastText: "#1E0A0A",
        },
        error: { main: brand.coral },
        warning: { main: brand.amber },
        info: { main: brand.violet },
        success: { main: brand.leaf },
        background: {
          default: brand.slate900, // app bg (quase preto azulado)
          paper: brand.slate800, // cards
        },
        text: {
          primary: "#E5ECF5",
          secondary: "#B8C1D4",
          disabled: "#7A8599",
        },
        divider: "#263146",
        grey: {
          50: "#0B1020",
          100: "#111827",
          200: "#1F2937",
          300: "#283248",
          400: "#334155",
          500: "#475569",
          600: "#64748B",
          700: "#94A3B8",
          800: "#CBD5E1",
          900: "#E2E8F0",
        },
        contrastThreshold: 3,
        tonalOffset: 0.12,
        action: {
          hover: "rgba(255,255,255,0.06)",
          selected: "rgba(255,255,255,0.1)",
          disabled: "rgba(255,255,255,0.3)",
          disabledBackground: "rgba(255,255,255,0.12)",
        },
      },
      shape: { borderRadius: 16 },
      typography: {
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
        button: { textTransform: "none", fontWeight: 700 },
      },
      components: {
        MuiPaper: {
          styleOverrides: {
            rounded: { borderRadius: 24 },
          },
        },
        MuiButton: {
          defaultProps: { disableElevation: true },
          styleOverrides: {
            root: { borderRadius: 9999, paddingInline: 16 },
            containedPrimary: { color: "#061411" },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: { borderRadius: 9999 },
          },
        },
      },
    },
    commonExtras

)
);


