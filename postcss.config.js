module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./dist/index.html",
        "./src/**/*.{html,js}"
      ],
      theme: {
        extend: {},
      },
      plugins: [],      
    },
    autoprefixer: {}
  }
}