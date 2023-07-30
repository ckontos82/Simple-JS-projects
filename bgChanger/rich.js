let color = undefined

/**
 * Listener
 */
document.querySelector('#btn').addEventListener('click', function () {
    onClickMeClicked()
})

/**
 * Controller
 * Actions taken after 'Click me' button clicked
 */
function onClickMeClicked() {
    updateBg()
}

/**
 * Model
 * Gets a color and updates the UI background
 */
function updateBg() {
    color = getBgColor()
    showBgColor(color)
}

/**
 * Chooses randomly a color from a standard list
 * @returns the background color
 */
function getBgColor() {
    const colorsLetters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let finalColor = '#'
    for (let i = 1; i <= 6; i++) {
        finalColor += colorsLetters[Math.floor(Math.random() * colorsLetters.length)]
    }
    
    return finalColor
}


/**
 * View
 * Fills the values of the corresponding UI elements.
 * @param {string} bgColor - the given color
 */
function showBgColor(bgColor) {
    document.querySelector('#hex').innerHTML = bgColor
    document.body.style.backgroundColor = bgColor
}