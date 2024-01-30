/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#22D497',
        'royal-blue': '#3734A9',
        'orange': '#FF7F5C',
        'sea-green': '#009F9D',
        'soft-green': '#D8F5F1',
        'soft-pink': '#FFE4E3',
        'soft-blue': '#D9F1FD',
        'soft-purpel': '#D9F1FD',
        'hash':'#64607D',
        'light-blue':'#F3F7FA',
      },
      fontFamily: {
       'manrope' :['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'btn-shadow': '0px 1.241px 3.148px 0px rgba(55, 52, 169, 0.02), 0px 5.459px 6.519px 0px rgba(55, 52, 169, 0.03), 0px 13.4px 13px 0px rgba(55, 52, 169, 0.04), 0px 25.807px 25.481px 0px rgba(55, 52, 169, 0.04), 0px 43.426px 46.852px 0px rgba(55, 52, 169, 0.05), 0px 67px 80px 0px rgba(55, 52, 169, 0.07)',
        'btn-org-shadow': '0px 1.241px 3.148px 0px rgba(55, 52, 169, 0.02), 0px 5.459px 6.519px 0px rgba(55, 52, 169, 0.03), 0px 13.4px 13px 0px rgba(55, 52, 169, 0.04), 0px 25.807px 25.481px 0px rgba(55, 52, 169, 0.04), 0px 43.426px 46.852px 0px rgba(55, 52, 169, 0.05), 0px 67px 80px 0px rgba(55, 52, 169, 0.07)',
        'btn-green-shadow':'0px 1.852px 3.148px 0px rgba(34, 212, 151, 0.02), 0px 8.148px 6.519px 0px rgba(34, 212, 151, 0.03), 0px 20px 13px 0px rgba(34, 212, 151, 0.04), 0px 38.519px 25.481px 0px rgba(34, 212, 151, 0.04), 0px 64.815px 46.852px 0px rgba(34, 212, 151, 0.05), 0px 100px 80px 0px rgba(34, 212, 151, 0.07)',
      }
    },
  },
  plugins: [  require('flowbite/plugin')],
}

