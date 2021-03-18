const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    extend: {
      colors: {
        // electric: '#db00ff',
        // ribbon: '#0047ff',
        'light-blue': colors.lightBlue,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
