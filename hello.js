const fs = require('fs')
const { browserSync } = require('vibium')

// Launch a browser (you'll see it open!)
const vibe = browserSync.launch()

// Go to a website
vibe.go('https://www.saucedemo.com/')
console.log('Loaded sauce demo')

// Take a screenshot
const png1 = vibe.screenshot()
fs.writeFileSync('screenshot1.png', png1)
console.log('Saved screenshot1.png')

// Login
vibe.find('#user-name').fill('standard_user')
vibe.find('#password').fill('secret_sauce')
vibe.find('#login-button').click()

const app_logo = vibe.find('.app_logo')

console.log('Found App Logo: ', app_logo.text())
console.log('Logged in!')

// Take a screenshot
const png2 = vibe.screenshot()
fs.writeFileSync('screenshot2.png', png2)
console.log('Saved screenshot2.png')

// Close the browser
vibe.quit()
console.log('Done!')