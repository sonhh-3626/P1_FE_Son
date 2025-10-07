export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-purple': 'var(--dark-purple)',
        'dark-gray': 'var(--dark-gray)',
        'green-badge': 'var(--green-badge)',
      },
    }
  },
  plugins: []
}
