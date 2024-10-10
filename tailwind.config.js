/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'turqoise': '#03C5C5',
        'lightcream': '#FFF2DF',
        'darkcream': '#E2D0B4',
        'orange': '#EC9A20',
        'background': '#2C2C2C',
        'groupHover': '#464646',
        'bdbg': '#603900',
        'formError': '#DB2B2B',
        'lightGreen': '#C0DFC9',
        'medGreen': '#86B994',
        'darkGreen': '#4A7355',
        'charcoal': '#414141',
        'whiteBackground': '#F9F9F9'
      },
      fontFamily: {
      'gotham': ['Ubuntu', 'sans-serif'],
      'inter': ['Gotham', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

