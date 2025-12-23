import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { browser } from 'vibium'
const fs = require('fs')
const { browserSync } = require('vibium')

var vibe

describe('Verify that login works correctly', () => { 

    beforeAll(async () => {

        // Launch a browser (you'll see it open!)
        vibe = await browser.launch()
                
        // Go to a website
        await vibe.go('https://www.saucedemo.com/')
        console.log('Loaded sauce demo')

        // Take a screenshot
        // var png1 = vibe.screenshot()
        // fs.writeFileSync('screenshot1.png', png1)
        // console.log('Saved screenshot1.png')
    })


    afterAll(async () => {

        // Close the browser
        await vibe.quit()
        console.log('Done!')
    })

    it('should login successfully with valid credentials', async () => {
    
        // Login
        await vibe.find('#user-name').type('standard_user')
        await vibe.find('#password').type('secret_sauce')
        await vibe.find('#login-button').click()

        const app_logo = vibe.find('.app_logo')
    
        console.log('Found App Logo: ', await app_logo.text())
        console.log('Logged in!')
    
        // Take a screenshot
        // var png2 = vibe.screenshot()
        // fs.writeFileSync('screenshot2.png', png2)
        // console.log('Saved screenshot2.png')
    })








});