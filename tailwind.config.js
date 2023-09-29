module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      backgroundImage: () =>({
        'landing-image' : 'url(\'@/assets/content.png\')',
      }),
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }