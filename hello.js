const fs = require('fs')
const { browserSync } = require('vibium')

// Launch a browser (you'll see it open!)
const vibe = browserSync.launch()

// Go to a website
vibe.go('https://www.saucedemo.com/')
console.log('Loaded example.com')

// Login
vibe.find('#user-name').fill('standard_user')
vibe.find('#password').fill('secret_sauce')
vibe.find('#login-button').click()

const app_logo = vibe.find('.app_logo')

console.log('Found App Logo: ', app_logo.text())
console.log('Logged in!')

// Take a screenshot
const png = vibe.screenshot()
fs.writeFileSync('screenshot.png', png)
console.log('Saved screenshot.png')

// Close the browser
vibe.quit()
console.log('Done!')