module.exports = {
  content: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      knockout: ['Knockout', 'cursive'],
      oxygen: ['Oxygen', 'cursive'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      '0sm' : '18px',
      '1sm' : '21px',
      '2sm' : '24px',
      '3sm' : '28px',
      '4sm' : '32px',
      '5sm' : '60px',
      '6sm' : '64px',
      '7sm' : '40px',
      
    },
    extend: {
      colors: {
        'yellow': '#FFB017',
        'white' : '#FFFFFF',
        'black' : '#343A2E',
        'grey'  : '#D9D9D9',
        'red'   : '#BA3C4E',
      },
      spacing: {
        'm1': '-20px',
      }
    },
  },
  plugins: [],
}
