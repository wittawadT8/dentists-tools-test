## New project
npx create-next-app@latest dentists-tools-test

## tailwindcss
yarn add -D prettier prettier-plugin-tailwindcss
yarn add @tailwindcss/forms
yarn add @headlessui/react @heroicons/react


## Install Mui 
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/styled-engine-sc styled-components
yarn add @mui/icons-material

## Redux
yarn add @reduxjs/toolkit react-redux axios
yarn add formik yup

## ใช้งาน Environment variables ใน Next.js
yarn add dotenv

## Three.js
yarn add three
yarn add dat.gui

## Chart.js
yarn add chart.js react-chartjs-2
yarn add @types/chart.js

----------------------------------------------------------------

#  for macOS and Linux
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# 👇️ clean npm cache
npm cache clean --force

# 👇️ install packages
npm install

----------------------------------------------------------------

# for Windows
rd /s /q "node_modules"
del package-lock.json
del -f yarn.lock

# 👇️ clean npm cache
npm cache clean --force

# 👇️ install packages
npm install
