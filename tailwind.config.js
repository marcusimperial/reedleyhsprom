/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient':"url('/gradient.png')",
      },
      colors: {
        cream: '#fffceb',
        lightgreen: '#6ac165',
        darkgreen: '#37ae79',
        blue: '#348aa7',
        lightpurple: '#525174',
        darkpurple: '#513b56'
      },
    },
  },
  plugins: [],
}
