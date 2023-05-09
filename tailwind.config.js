/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth': "url('/images/auth/login-page-background.svg')",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "background": '#FAFAFA',
        'primary': '#272727',
        'secondary': '#797979',
        "third": '#EEEEEE',
        "pink": "#E9568B"
      },
    },
  },
  plugins: [],
}
