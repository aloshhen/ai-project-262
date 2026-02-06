export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Tight', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: '#020204',
        toxic: '#BFFF00',
        magenta: '#FF00FF',
        cyan: '#00FFFF',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grain': 'grain 0.5s steps(1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(5%, 5%)' },
          '30%': { transform: 'translate(-5%, 5%)' },
          '40%': { transform: 'translate(5%, -5%)' },
          '50%': { transform: 'translate(-5%, 0%)' },
          '60%': { transform: 'translate(5%, 0%)' },
          '70%': { transform: 'translate(0%, 5%)' },
          '80%': { transform: 'translate(0%, -5%)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)', filter: 'hue-rotate(0deg)' },
          '20%': { transform: 'translate(-2px, 2px)', filter: 'hue-rotate(90deg)' },
          '40%': { transform: 'translate(-2px, -2px)', filter: 'hue-rotate(180deg)' },
          '60%': { transform: 'translate(2px, 2px)', filter: 'hue-rotate(270deg)' },
          '80%': { transform: 'translate(2px, -2px)', filter: 'hue-rotate(360deg)' },
          '100%': { transform: 'translate(0)', filter: 'hue-rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'translateY(-20px) rotateX(5deg) rotateY(5deg)' },
        },
      },
    },
  },
  plugins: [],
}