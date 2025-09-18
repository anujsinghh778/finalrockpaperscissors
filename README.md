Rock Paper Scissors Game
A simple, interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. Play against the computer and track your wins, losses, and ties with persistent score storage.
🎮 Features

Interactive Gameplay: Click buttons to make your move
Visual Feedback: See both your move and the computer's move with emoji images
Score Tracking: Persistent score storage using localStorage
Responsive Design: Clean, dark-themed interface
Reset Function: Clear your score anytime

🚀 Getting Started
Prerequisites

A modern web browser (Chrome, Firefox, Safari, Edge)
No additional software required!

Installation

Download or clone this repository
You need three emoji images in the images/ folder:

rock-emoji.png - Rock emoji image
paper-emoji.png - Paper emoji image
scissors-emoji.png - Scissors emoji image

Image Requirements:

Format: PNG (recommended)
Size: Any size (will be resized to 50px height)
Naming: Must match exactly (case-sensitive)

🎯 How to Play

Choose Your Move: Click one of the three buttons (Rock, Paper, or Scissors)
See Results: The game will show:

Your move vs Computer's move (with images)
Whether you won, lost, or tied
Updated score count


Track Progress: Your score persists between browser sessions
Reset Score: Click "Reset Score" button to start fresh

🎲 Game Rules

Rock beats Scissors
Scissors beats Paper
Paper beats Rock
Same choices result in a Tie

💾 Technical Details
Technologies Used

HTML5: Structure and layout
CSS3: Styling and responsive design
Vanilla JavaScript: Game logic and interactions

Features

localStorage: Score persistence across browser sessions
Responsive buttons: Circular design with hover effects
Dynamic content: Real-time updates of moves and scores
Alert notifications: Immediate feedback after each round

Browser Compatibility

✅ Chrome 80+
✅ Firefox 75+
✅ Safari 13+
✅ Edge 80+

🛠️ Customization
Styling
Modify the CSS in the <style> section to change:

Colors (background, text, borders)
Font sizes and families
Button sizes and shapes
Spacing and layout

Game Logic
The JavaScript section allows you to:

Modify win/lose conditions
Change alert messages
Adjust score display format
Add new features

🐛 Troubleshooting
Images Not Showing
Problem: Move images appear blank sometimes
Solution: Ensure image file names match exactly:

File names should be lowercase: rock-emoji.png, paper-emoji.png, scissors-emoji.png
Check that images are in the images/ folder
Verify file extensions are .png

Score Not Saving
Problem: Score resets when closing browser
Solution:

Ensure you're not in incognito/private browsing mode
Check that localStorage is enabled in your browser
Clear browser cache if issues persist

Buttons Not Working
Problem: Clicking buttons doesn't trigger game
 Check browser console for JavaScript errors (F12)
 Ensure all script tags are properly closed
 Verify function names match exactly (case-sensitive)




🎉 Enjoy Playing!
Have fun playing Rock Paper Scissors! Try to beat the computer and see how high you can get your win streak!

Check browser console for JavaScript errors (F12)
Ensure all script tags are properly closed
Verify function names match exactly (case-sensitive)
