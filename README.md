# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resource](#useful-resource)
- [Author](#author)

## Overview
This is a responsive and interactive card detail form prototype.

`#warning: Do not fill in your credit card info !`

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot
![](./screenshot.png)
### Links

- Solution URL: [solution URL](https://github.com/abdullahmuslim/interactive-card-component)
- Live Site URL: [live site](https://abdullahmuslim.github.io/interactive-card-component)

## My process
The design for the [mobile](design/mobile-design.jpg) and [desktop](design/desktop-design.jpg) have a lot in common.
It can be broken into two parts, the card and the form. This is the point where a shift is make depending on the screen resolution.
I have to update the card with the detail user inputs in the form simultaneously while keeping in mind to replace empty position on some display with zero.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
I learn to add gradient color to border using `border-image` 

### Useful resource
[Video on border image](https://youtu.be/SmR6-R01nOs)

## Author

- Website - [Abdullah Muslim](https://abdullahmuslim.github.io/portfolio)
- Frontend Mentor - [@abdullahmuslim](https://www.frontendmentor.io/profile/abdullahmuslim)
