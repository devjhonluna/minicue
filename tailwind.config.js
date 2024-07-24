/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens:{
        xs:"480px"
      },
      fontFamily:{
        'courier-prime':'courier-prime, monospace',
        'open-sans':'Open Sans, sans-serif'
      },
      colors:{
        corbeau:'#0B1320',
        silentsea:'#394d5f',
        dawnfeather:'#fef9e6'
      }
    },
  },
  plugins: [],
}

