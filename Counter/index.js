const DEFAULT = 0
let counter = DEFAULT

const counterDOM = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')

/**
 * Listener
 */
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        if (e.currentTarget.id === 'btnDecr') {
            onDecreaseClicked()
        } else if (e.currentTarget.id === 'btnIncr') {
            onIncreaseClicked()
        } else {
            onResetClicked()
        }
    })
})

/**
 * Controllers
 */

/**
 * Actions taken after 'Decrease button clicked.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after 'Increase' button clicked.
 */
function onIncreaseClicked() {
    increaseCounter()
}

/**
 * Actions taken after 'Reset' button clicked.
 */
function onResetClicked() {
    resetCounter()
}


/**
 * Model
 */
function decreaseCounter() {
    counter--
    showCounter(counter)
}

function increaseCounter() {
    counter++
    showCounter(counter)
}

function resetCounter() {
    counter = DEFAULT;
    showCounter(counter);
}

/**
 * View
 */
function showCounter(counter) {
    counterDOM.innerHTML = counter
    styleCounter(counter)
}

function styleCounter(counter) {
    if (counter > 0) {
        counterDOM.style.color = '#FF69B4';
    } else if (counter < 0) {
        counterDOM.style.color = '#DC143C'
    } else {
        counterDOM.style.color = '#000000'
    }
}