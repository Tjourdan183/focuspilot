// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        // Professional floating animations
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slower": "pulse-slower 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slowest": "pulse-slowest 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        
        // Subtle professional animations
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        
        // Professional gradient animation
        "gradient": "gradient 6s linear infinite",
        "gradient-slow": "gradient-slow 8s linear infinite",
        
        // Shimmer effect for badges
        "shimmer": "shimmer 2s linear infinite",
        
        // Professional hover animations
        "bounce-gentle": "bounce-gentle 1s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        // New pattern animations
        "pattern-shift": "pattern-shift 12s ease-in-out infinite",
        "pattern-rotate": "pattern-rotate 20s linear infinite",
        "pattern-morph": "pattern-morph 15s ease-in-out infinite",
      },
      keyframes: {
        // Professional floating animations
        float: {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
            opacity: "0.7"
          },
          "50%": { 
            transform: "translateY(-20px) rotate(5deg)",
            opacity: "1"
          },
        },
        "float-delayed": {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)",
            opacity: "0.6"
          },
          "50%": { 
            transform: "translateY(-15px) rotate(-3deg)",
            opacity: "0.9"
          },
        },
        "pulse-slow": {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        "pulse-slower": {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        "pulse-slowest": {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        
        // Entrance animations
        "fade-in": {
          "0%": { 
            opacity: "0" 
          },
          "100%": { 
            opacity: "1" 
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        
        // Professional gradient animation
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-slow": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "0% 50%",
          },
          "50%": {
            "background-size": "400% 400%",
            "background-position": "100% 50%",
          },
        },
        
        // Professional shimmer effect
        shimmer: {
          "0%": {
            "background-position": "-200% 0",
          },
          "100%": {
            "background-position": "200% 0",
          },
        },
        
        // Gentle professional animations
        "bounce-gentle": {
          "0%, 100%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "rotate-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        // New pattern keyframes
        "pattern-shift": {
          '0%, 100%': { 
            transform: 'translateX(0) translateY(0) rotate(0deg)',
            opacity: '0.5'
          },
          '50%': { 
            transform: 'translateX(30px) translateY(-30px) rotate(5deg)',
            opacity: '0.8'
          }
        },
        "pattern-rotate": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        "pattern-morph": {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
            opacity: '0.6'
          },
          '50%': { 
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%',
            opacity: '0.8'
          }
        },
      },
      backgroundImage: {
        "shimmer-gradient": 
          "linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'professional': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'professional-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'professional-xl': '0 12px 60px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.4)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
