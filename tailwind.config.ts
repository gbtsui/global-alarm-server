import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                camellia: "var(--background)",
                ebony: "var(--background-dark)",
                lilac: "var(--foreground)",
                wisteria: "var(--foreground-dark)",
            },
        },
    },
    plugins: [],
} satisfies Config;