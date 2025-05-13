module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',       // all route files
        './components/**/*.{js,ts,jsx,tsx}',      // all components
        './app/**/*.{js,ts,jsx,tsx}',             // if using /app directory
        './posts/**/*.{md,mdx}',                  // your markdown blog content
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            fontFamily: "var(--font-header)",
                            fontWeight: "700",
                            fontSize: "1.75rem"
                        }
                    }
                }
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
}
