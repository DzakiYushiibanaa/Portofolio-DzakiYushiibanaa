const f = (size, lineHeight, fontWeight) => [size, { lineHeight, fontWeight }];
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#653e00", "on-secondary-fixed": "#001e2c", "on-primary-container": "#613b00",
        "on-tertiary": "#ffffff", primary: "#855300", "inverse-on-surface": "#f3f0f4", outline: "#867461",
        surface: "#fbf8fc", secondary: "#00668a", "tertiary-fixed-dim": "#ffb2b7", "tertiary-fixed": "#ffdadb",
        "surface-container-lowest": "#ffffff", tertiary: "#bc0b3b", "on-error-container": "#93000a",
        "outline-variant": "#d8c3ad", "inverse-surface": "#303033", "primary-fixed": "#ffddb8",
        "on-tertiary-fixed": "#40000d", "secondary-fixed": "#c4e7ff", "primary-fixed-dim": "#ffb95f",
        "tertiary-container": "#ff919a", "surface-dim": "#dcd9dd", "secondary-container": "#40c2fd",
        "surface-bright": "#fbf8fc", "on-tertiary-fixed-variant": "#92002a", error: "#ba1a1a",
        "primary-container": "#f59e0b", "on-tertiary-container": "#8c0028", "surface-container-highest": "#e4e1e6",
        "on-primary": "#ffffff", "on-surface": "#1b1b1e", "surface-container": "#f0edf1", background: "#fbf8fc",
        "inverse-primary": "#ffb95f", "on-secondary-fixed-variant": "#004c69", "on-primary-fixed": "#2a1700",
        "on-secondary": "#ffffff", "on-secondary-container": "#004d6a", "error-container": "#ffdad6",
        "surface-container-high": "#eae7eb", "surface-container-low": "#f6f2f7", "on-error": "#ffffff",
        "surface-tint": "#855300", "on-surface-variant": "#534434", "secondary-fixed-dim": "#7bd0ff",
        "surface-variant": "#e4e1e6", "on-background": "#1b1b1e",
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        "space-md": "1.25rem", "space-xs": "0.375rem", "gutter-mobile": "1rem", "space-lg": "2rem", gutter: "1.5rem",
        "space-sm": "0.75rem", "margin-mobile": "1.25rem", "space-xl": "3.5rem", margin: "3rem",
      },
      fontFamily: {
        "headline-lg-mobile": ["Bricolage Grotesque"], "headline-md": ["Bricolage Grotesque"],
        "headline-sm": ["Bricolage Grotesque"], "headline-lg": ["Bricolage Grotesque"],
        "display-hero-mobile": ["Bricolage Grotesque"], "display-hero": ["Bricolage Grotesque"],
        "body-sm": ["Plus Jakarta Sans"], "body-md": ["Plus Jakarta Sans"], "body-lg": ["Plus Jakarta Sans"],
        "label-badge": ["Plus Jakarta Sans"], "label-code": ["Space Mono"],
      },
      fontSize: {
        "headline-lg-mobile": f("28px", "36px", "700"), "headline-md": f("26px", "34px", "700"),
        "body-sm": f("14px", "20px", "400"), "body-md": f("16px", "24px", "400"), "body-lg": f("18px", "28px", "500"),
        "headline-sm": f("20px", "28px", "700"), "display-hero-mobile": f("40px", "48px", "800"),
        "headline-lg": f("38px", "46px", "700"), "label-code": f("14px", "20px", "700"),
        "label-badge": f("12px", "16px", "800"), "display-hero": f("64px", "72px", "800"),
      },
      keyframes: { marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } } },
      animation: { marquee: "marquee 32s linear infinite" },
    },
  },
  plugins: [],
};
