module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F7F3", // light-forest-green
          100: "#D4E8DC", // pale-forest-green
          200: "#A9D1B8", // soft-forest-green
          300: "#7EBA94", // medium-forest-green
          400: "#539970", // forest-green
          500: "#2C5F41", // deep-forest-green
          600: "#234C34", // darker-forest-green
          700: "#1A3927", // darkest-forest-green
          800: "#11261A", // very-dark-forest-green
          900: "#08130D", // almost-black-forest-green
          DEFAULT: "#2C5F41", // deep-forest-green
        },
        secondary: {
          50: "#F7F2ED", // light-saddle-brown
          100: "#EBD9C7", // pale-saddle-brown
          200: "#D7B38F", // soft-saddle-brown
          300: "#C38D57", // medium-saddle-brown
          400: "#AF671F", // darker-saddle-brown
          500: "#8B4513", // saddle-brown
          600: "#6F370F", // deep-saddle-brown
          700: "#53290B", // darkest-saddle-brown
          800: "#371B07", // very-dark-saddle-brown
          900: "#1B0D04", // almost-black-saddle-brown
          DEFAULT: "#8B4513", // saddle-brown
        },
        accent: {
          50: "#FFF4F0", // light-coral-orange
          100: "#FFE0D4", // pale-coral-orange
          200: "#FFC1A9", // soft-coral-orange
          300: "#FFA27E", // medium-coral-orange
          400: "#FF8353", // bright-coral-orange
          500: "#FF6B35", // coral-orange
          600: "#E5552A", // deep-coral-orange
          700: "#B8441F", // darker-coral-orange
          800: "#8B3314", // darkest-coral-orange
          900: "#5E220A", // very-dark-coral-orange
          DEFAULT: "#FF6B35", // coral-orange
        },
        background: "#FEFCF8", // warm-off-white
        surface: "#F7F5F1", // light-warm-gray
        text: {
          primary: "#2D3748", // deep-charcoal
          secondary: "#718096", // medium-gray
        },
        success: {
          50: "#F0FFF4", // light-natural-green
          100: "#C6F6D5", // pale-natural-green
          200: "#9AE6B4", // soft-natural-green
          300: "#68D391", // medium-natural-green
          400: "#48BB78", // bright-natural-green
          500: "#38A169", // natural-green
          600: "#2F855A", // deep-natural-green
          700: "#276749", // darker-natural-green
          800: "#22543D", // darkest-natural-green
          900: "#1C4532", // very-dark-natural-green
          DEFAULT: "#38A169", // natural-green
        },
        warning: {
          50: "#FFFBEB", // light-golden-amber
          100: "#FEF5E7", // pale-golden-amber
          200: "#FAE5B7", // soft-golden-amber
          300: "#F6D55C", // medium-golden-amber
          400: "#ECC94B", // bright-golden-amber
          500: "#D69E2E", // golden-amber
          600: "#B7791F", // deep-golden-amber
          700: "#975A16", // darker-golden-amber
          800: "#744210", // darkest-golden-amber
          900: "#5F370E", // very-dark-golden-amber
          DEFAULT: "#D69E2E", // golden-amber
        },
        error: {
          50: "#FED7D7", // light-warm-red
          100: "#FEB2B2", // pale-warm-red
          200: "#FC8181", // soft-warm-red
          300: "#F56565", // medium-warm-red
          400: "#E53E3E", // warm-red
          500: "#C53030", // deep-warm-red
          600: "#9C1C1C", // darker-warm-red
          700: "#742A2A", // darkest-warm-red
          800: "#63171B", // very-dark-warm-red
          900: "#521B1B", // almost-black-warm-red
          DEFAULT: "#E53E3E", // warm-red
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        caption: ['Source Sans Pro', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 1.5vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 1.8vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 2.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 3.5vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 4vw, 3rem)',
        'fluid-4xl': 'clamp(2.25rem, 5vw, 4rem)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(45, 55, 72, 0.08)',
        'hover': '0 2px 8px rgba(45, 55, 72, 0.06)',
        'modal': '0 20px 40px rgba(45, 55, 72, 0.12)',
        'warm': '0 4px 20px rgba(139, 69, 19, 0.1)',
      },
      backdropBlur: {
        'soft': '8px',
        'strong': '16px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
      },
      borderRadius: {
        'card': '8px',
        'element': '4px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 200ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}