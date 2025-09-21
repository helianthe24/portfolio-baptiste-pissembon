module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      mob: '375px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      laptopl: '1440px',
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-soft': 'var(--bg-soft)',
        surface: 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        'primary-600': 'var(--primary-600)',
      },
      boxShadow: {
        elev: 'var(--shadow-elev)',
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
