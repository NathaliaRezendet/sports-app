module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
    'node_modules/preline/dist/*.js',  
  ],
  plugins: [
    require('preline/plugin'), 
  ],
};
