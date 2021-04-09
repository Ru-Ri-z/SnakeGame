document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0
    let appleIndex = 0
    let currentSnake = [2,1,0]
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0


    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('sanke'))
        squares [appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }













    function control(e) {
        squares(currentIndex).classList.remove('snake')

        if(e.keycode === 39) {
            direction = 1
        } else if (e.keycode === 38) {
            direction = -width
        } else if (e.keycode === 37) {
            direction -1
        } else if (e.keycode === 40) {
            direction = +width
        }
    }


    document.addEventListener('keyup', control)

})