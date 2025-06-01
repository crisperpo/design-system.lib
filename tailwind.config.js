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
                heading: 'var(--color-heading)',
                link: 'var(--color-link)',
                'link-hover': 'var(--color-link-hover)',
                'button-primary-background': 'var(--color-button-background)',
                'button-primary-background-hover': 'var(--color-button-background-hover)',
                'button-primary-foreground': 'var(--color-button-primary-foreground)',
                'button-secondary-background': 'var(--color-button-secondary-background)',
                'button-secondary-background-hover': 'var(--color-button-secondary-background-hover)',
                'button-secondary-foreground': 'var(--color-button-secondary-foreground)',
            },
        },
    },
}
