import type { Config } from "tailwindcss";

export default {
    content: [
        "@/app/pages/**/*.tsx",
        "@/app/components/**/*.tsx",
        "@/app/**/*.tsx",

    ],
    theme: {
        extend: {
            colors: {
                "background": "var(--background)",
                "foreground": "var(--foreground)",

                camellia: "#1f1e33",
                woodsmoke: "#2F1A32",
                lilac: "#e1abeb",
                wisteria: "#b475bf",
            },
        },
    },
    plugins: [],
} satisfies Config;