const ShadowVariants = {
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 color, 0 1px 2px -1px color",
  md: "0 4px 6px -1px color, 0 2px 4px -2px color",
  lg: "0 10px 15px -3px color, 0 4px 6px -4px color",
  xl: "0 20px 25px -5px color, 0 8px 10px -6px color",
  "2xl": "0 25px 50px -12px color",
  inner: "inset 0 2px 4px 0 color",
  none: "none",
};

type ShadowVariantType = keyof typeof ShadowVariants;

const getShadow = (variant: ShadowVariantType, color: string = ""): string => {
  return ShadowVariants[variant].replaceAll("color", color);
};

const Shadow = {
  xs: (color: string = "rgb(0 0 0 / 0.1)") => getShadow("xs", color),
  sm: (color: string = "rgb(0 0 0 / 0.1)") => getShadow("sm", color),
  md: (color: string = "rgb(0 0 0 / 0.1)") => getShadow("md", color),
  lg: (color: string = "rgb(0 0 0 / 0.1)") => getShadow("lg", color),
  xl: (color: string = "rgb(0 0 0 / 0.1)") => getShadow("xl", color),
  "2xl": (color: string = "rgb(0 0 0 / 0.25)") => getShadow("2xl", color),
  inner: (color: string = "rgb(0 0 0 / 0.05)") => getShadow("inner", color),
  none: () => getShadow("none"),
};

export const tokens = {
  colors: {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000000",
    white: "#ffffff",
    neutral: {
      50: "#f9fafb",
      100: "#f2f4f7",
      200: "#eaecf0",
      300: "#d0d5dd",
      400: "#98a2b3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1d2939",
      900: "#101828",
    },
    darkGray: {
      50: "#525c7a",
      100: "#49536e",
      200: "#414962",
      300: "#394056",
      400: "#313749",
      500: "#292e3d",
      600: "#212530",
      700: "#191c24",
      800: "#111318",
      900: "#0b0d10",
    },
    gray: {
      50: "#f9fafb",
      100: "#f2f4f7",
      200: "#eaecf0",
      300: "#d0d5dd",
      400: "#98a2b3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1d2939",
      900: "#101828",
    },
    blue: {
      25: "#F5FAFF",
      50: "#EFF8FF",
      100: "#D1E9FF",
      200: "#B2DDFF",
      300: "#84CAFF",
      400: "#53B1FD",
      500: "#2E90FA",
      600: "#1570EF",
      700: "#175CD3",
      800: "#1849A9",
      900: "#194185",
    },
    green: {
      25: "#F6FEF9",
      50: "#ECFDF3",
      100: "#D1FADF",
      200: "#A6F4C5",
      300: "#6CE9A6",
      400: "#32D583",
      500: "#12B76A",
      600: "#039855",
      700: "#027A48",
      800: "#05603A",
      900: "#054F31",
    },
    red: {
      25: "#FFFBFA",
      50: "#FEF3F2",
      100: "#FEE4E2",
      200: "#FECDCA",
      300: "#FDA29B",
      400: "#F97066",
      500: "#F04438",
      600: "#D92D20",
      700: "#B42318",
      800: "#912018",
      900: "#7A271A",
    },
    yellow: {
      25: "#FFFCF5",
      50: "#FFFAEB",
      100: "#FEF0C7",
      200: "#FEDF89",
      300: "#FEC84B",
      400: "#FDB022",
      500: "#F79009",
      600: "#DC6803",
      700: "#B54708",
      800: "#93370D",
      900: "#7A2E0E",
    },
    purple: {
      25: "#FAFAFF",
      50: "#F4F3FF",
      100: "#EBE9FE",
      200: "#D9D6FE",
      300: "#BDB4FE",
      400: "#9B8AFB",
      500: "#7A5AF8",
      600: "#6938EF",
      700: "#5925DC",
      800: "#4A1FB8",
      900: "#3E1C96",
    },
    unknown: {
      25: "",
      50: "",
      100: "",
      200: "",
      300: "",
      400: "",
      500: "",
      600: "",
      700: "",
      800: "",
      900: "",
    },
  },
  alpha: {
    100: "ff",
    90: "e5",
    80: "cc",
    70: "b3",
    60: "99",
    50: "80",
    40: "66",
    30: "4d",
    20: "33",
    10: "1a",
    0: "00",
  },
  font: {
    size: {
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    lineHeight: {
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "1.75rem",
      xl: "1.75rem",
      "2xl": "2rem",
      "3xl": "2.25rem",
      "4xl": "2.5rem",
      "5xl": "1",
      "6xl": "1",
      "7xl": "1",
      "8xl": "1",
      "9xl": "1",
    },
    weight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  border: {
    radius: {
      none: "0px",
      xs: "0.125rem",
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
  },
  size: {
    0: "0px",
    0.25: "0.0625rem",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    4.5: "1.125rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  shadow: Shadow,
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
};

export type ThemeConfigType = typeof tokens;
export type ThemeColorsAll = {
  [key in keyof ThemeConfigType["colors"]]: key;
}[keyof ThemeConfigType["colors"]];
export type AtomicThemeColors = "white" | "black" | "transparent" | "current" | "inherit";
export type ThemeColors = Exclude<ThemeColorsAll, AtomicThemeColors>;
