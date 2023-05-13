let option1 = document.querySelector('#option-1')
let option2 = document.querySelector('#option-2')
const stateDescription = document.querySelector('#state-description')
const gameOverText = document.createElement('p')
const restartGameBtn = document.querySelector('#restartGameBtn')
let currentState = 0
let nextStateOption1 = 1
let nextStateOption2 = 2

window.onload = () => {
    if (localStorage.getItem('currentState')) {
        currentState = localStorage.getItem('currentState')
    }

    stateInfo[currentState]()   
}

option1.onclick = () => {
    stateInfo[currentState]()
    currentState = nextStateOption1
    localStorage.setItem('currentState', currentState)
    stateInfo[currentState]()
}

option2.onclick = () => {
    stateInfo[currentState]()
    currentState = nextStateOption2
    localStorage.setItem('currentState', currentState)
    stateInfo[currentState]()
}

restartGameBtn.onclick = () => {
    if (currentState > 0) {
        currentState = 0
        localStorage.setItem('currentState', currentState)
        gameOverText.innerText = ''

        stateInfo[currentState]()
        option2.style.marginLeft = '4.5px'

        document.body.querySelector('#button-container').appendChild(option1)
        document.body.querySelector('#button-container').appendChild(option2)
    }
}

const stateInfo = {
    0: () => {
        stateDescription.innerText = 'You notice people getting sick…'
        option1.innerText = 'Invest in a cure!'
        option2.innerText = 'Wait and understand the disease…'
        restartGameBtn.innerText = 'Restart game'
        nextStateOption1 = 1
        nextStateOption2 = 2
    }, 1: () => {
        stateDescription.innerText = 'You invest in a cure, but scientists claim they need 18 months to even start developing a cure…'
        option1.innerText = 'Send people to quarantine.'
        option2.innerText = 'Invest more!'
        restartGameBtn.innerText = 'Restart game'
        nextStateOption1 = 5
        nextStateOption2 = 6
    }, 2: () => {
        stateDescription.innerText = 'You wait and try to understand the disease, but more people start getting sick and death rates go up!'
        option1.innerText = 'Send people to quarantine.'
        option2.innerText = 'Wait even more?!'
        restartGameBtn.innerText = 'Restart game'
        nextStateOption1 = 3
        nextStateOption2 = 4
    }, 3: () => {
        stateDescription.innerText = 'You sent people to quarantine but since you didn’t invest in research, no cure gets developed and people get depressed and die…'
        displayGameOver()
        restartGameBtn.innerText = 'Try again'
    }, 4: () => {
        stateDescription.innerText = 'You wait more and to your surprise, people start developing a stronger immune system on their own and the disease goes away!'
        option1.remove()
        option2.remove()
        gameOverText.innerText = 'YOU WIN!'
        gameOverText.id = 'game-over-text'
        gameOverText.style.color = '#318c20';
        document.body.querySelector('#button-container').append(gameOverText)
        restartGameBtn.innerText = 'Play again'
    }, 5: () => {
        stateDescription.innerText = 'You force people to quarantine but people start getting depressed because they can’t see their family and friends in person…'
        option1.innerText = 'Let people get out of quarantine and freely live their lives!'
        option2.innerText = 'Force people to stay in quarantine until scientists develop a cure!'
        restartGameBtn.innerText = 'Restart game'
        nextStateOption1 = 7
        nextStateOption2 = 8
    }, 6: () => {
        stateDescription.innerText = 'You invest even more… Scientists find the cure and the disease is gone but your economy is dead from all the investing. Poverty and unemployment rates go up and EVERYONE DIES!'
        displayGameOver()
    }, 7: () => {
        stateDescription.innerText = 'You let people go out of quarantine and ✨freely✨ live their lives! Too bad their immune system is weak and as soon as they get out THEY ALL DIE!'
        displayGameOver();
    }, 8: () => {
        stateDescription.innerText = 'You force everyone to stay in quarantine until scientists develop the cure. People are depressed and millions have lost their jobs     but it does work…'
        option1.remove()
        option2.remove()
        gameOverText.innerText = 'You win?'
        gameOverText.id = 'game-over-text'
        gameOverText.style.color = '#79009a'
        document.body.querySelector('#button-container').append(gameOverText)
        restartGameBtn.innerText = 'Try again'
    }
}

function displayGameOver() {
    option1.remove()
    option2.remove()
    gameOverText.innerText = 'GAMEOVER'
    gameOverText.id = 'game-over-text'
    gameOverText.style.color = '#540000'
    document.body.querySelector('#button-container').append(gameOverText)
    restartGameBtn.innerText = 'Try again'

}
