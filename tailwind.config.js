module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#D84727",
        "primary-hover": "#B0361B",
        "ui-02": "#FAFAFC",
        "alert-background": "#FCF8E3",
        "alert-text": "#896D3B",
        "text-01": "#313735",
        "text-02": "#505565",
        "brand-01": "#477665",
        "brand-02": "#2878A6",
        "brand-04": "#D84727",
        "brand-04-hover": "#B63B20",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "128": "27rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
