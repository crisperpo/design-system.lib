/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    important: '.ui',
    plugins: [],
    prefix: 'ui:',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif', 'system-ui'],
                expressive: ['Bebas Neue', 'times', 'system-ui'],
            },
            colors: {
                background: 'var(--color-background)',
                foreground: 'var(--color-foreground)',
                link: 'var(--color-link)',
                'link-hover': 'var(--color-link-hover)',
                'button-foreground': 'var(--color-button-border)',
                'button-foreground-hover': 'var(--color-button-border-hover)',
            },
        },
    },
}
