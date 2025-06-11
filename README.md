# Captcha-Generator-
A simple and beautiful Captcha Generator web app built with HTML, CSS, and JavaScript.Generates a random captcha code that users must input correctly to verify.

## Features

- Generates a random 5-character captcha (letters and digits).
- Refresh button to generate a new captcha.
- Submit button to check user input against the captcha.
- Smooth animated pastel gradient background across the entire page.
- Clean, centered, white translucent container box for the UI.
- Responsive and user-friendly interface.

---

## How It Works

### HTML Structure

- A main container box holds:
  - A heading showing the title.
  - A readonly input displaying the captcha.
  - An input field for user to type the captcha.
  - Submit and Refresh buttons.

### CSS Styling

- The **whole page** has a pastel-colored animated gradient background cycling slowly.
- The `.container` is a centered translucent white box with rounded corners and subtle shadow.
- Buttons and inputs are styled for good visibility and hover effects.

### JavaScript Functionality

- On page load and when clicking **Refresh**, a new random 5-character captcha is generated.
- When clicking **Submit**, the user input is checked against the captcha:
  - If matched, a success message is shown.
  - Otherwise, an error message appears and input is cleared.

---

## Usage

1. Open `index.html` in a modern web browser.
2. Enter the captcha shown in the readonly box.
3. Click **Submit** to verify.
4. Click **Refresh** for a new captcha.

## 🖼️ Preview

![Captcha Generator Screensho](https://github.com/Intelli2Byte/Captcha-Generator-/blob/5ae7ff705fde2df43725ed13f0598e2014f26f35/Screenshot_2.png)
![Captcha Generator Screenshot](https://github.com/Intelli2Byte/Captcha-Generator-/blob/5ae7ff705fde2df43725ed13f0598e2014f26f35/Screenshot_1.png)


## 🚀 How to Use

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Intelli2Byte/Captcha-Generator.git
   cd captcha-generator
