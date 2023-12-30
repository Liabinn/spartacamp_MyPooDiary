import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    },

    // Customized Font Size
    fontSize: {
      h1: "4.257rem",
      h2: "3.784rem",
      h3: "3.364rem",
      h4: "2.99rem",
      h5: "2.658rem",
      h6: "2.363rem",
      base: "2.1rem",
      sm: "1.767rem"
    },

    // Customized Colors
    colors: {
      primaryColor: "#00a9ff",
      secondaryColor: "#c1eaff",
      accentColor: "#f3fbff"
    }
  },
  plugins: []
};
export default config;
