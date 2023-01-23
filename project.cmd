# https://www.youtube.com/watch?v=SH6Y_MQzFVw

npm i -D webpack webpack-cli

npx webpack

# For css
npm i -D css-loader style-loader
vi webpack.config.js

# Add sass
npm i -D sass sass-loader

# To extract css into a file, replace style loader with MiniCssExtractPlugin.loader
npm i -D mini-css-extract-plugin

# Support Postcss
npm i -D postcss postcss-loader postcss-preset-env
# Create postcss.config.js file

# Add the tailwind support by adding the includes in style.scss
npm i -D tailwindcss

# Use the html-webpack-plugin so that index.html can be generated from template
npm i -D html-webpack-plugin
