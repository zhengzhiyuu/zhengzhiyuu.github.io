class Game {
    constructor(gameContainer) {
        this.gameContainer = document.querySelector(gameContainer)
        this._init()
    }
    _init() {

        this.gameContainer.style.position = 'relative'
        this.gameContainer.style.overflow = 'hidden'
        this.gameContainer.style.width = window.screen.width + 'px'
        this.gameContainer.style.height = window.screen.height + 'px'
    }
    addGameBackground(url, width = '100%', height = '100%') {
        this.gameContainer.style.backgroundImage = `url(${url})`
        this.gameContainer.style.backgroundSize = `${width} ${height}`
        return this.gameContainer.style.backgroundSize
    }
    addGameImage(url, width = 0, height = 0) {
        let img = document.createElement('img')
        img.setAttribute('src', url)
        width === 0 ? img.style.width = img.style.width : img.style.width = width + 'px'
        height === 0 ? img.style.height = img.style.height : img.style.height = height + 'px'
        img.style.position = 'absolute'
        img.style.top = '0'
        this.gameContainer.appendChild(img)
        return {
            _this: img,
            getTop() {
                return parseInt(img.style.top)
            },
            setTop(number) {
                img.style.top = number + 'px'
            },
            getLeft() {
                return parseInt(img.style.left)
            },
            setLeft(number) {
                img.style.left = number + 'px'
            },
            getWidth() {
                return parseInt(img.style.width)
            },
            getHeight() {
                return parseInt(img.style.height)
            }
        }
    }
    getContainerWAndH() {
        return {
            width: parseInt(this.gameContainer.style.width),
            height: parseInt(this.gameContainer.style.height)
        }
    }
}

let myGame = new Game('.app_container')

myGame.addGameBackground('./image/background.png')

let hero = myGame.addGameImage('./image/hero1.png', 100, 124)
hero.setTop(myGame.getContainerWAndH().height - hero.getHeight())
hero.setLeft(myGame.getContainerWAndH().width / 2 - hero.getWidth() / 2)
hero._this.ontouchstart = e => {
    let touchStartX, touchStartY, touchMoveX, touchMoveY, heroLeft, heroTop
    touchStartX = e.targetTouches[0].pageX
    touchStartY = e.targetTouches[0].pageY
    heroLeft = touchStartX - hero._this.offsetLeft
    heroTop = touchStartY - hero._this.offsetTop
    hero._this.ontouchmove = e => {
        if (e.targetTouches[0].pageX <= heroLeft) {
            touchMoveX = heroLeft
            touchMoveY = e.targetTouches[0].pageY
        } else if (e.targetTouches[0].pageX >= myGame.getContainerWAndH().width - hero.getWidth() / 2) {
            touchMoveX = myGame.getContainerWAndH().width - hero.getWidth() / 2 + 11
            touchMoveY = e.targetTouches[0].pageY
        } else if (e.targetTouches[0].pageY <= heroTop) {
            touchMoveX = e.targetTouches[0].pageX
            touchMoveY = heroTop
        } else if (e.targetTouches[0].pageY >= myGame.getContainerWAndH().height - hero.getHeight() / 2) {
            touchMoveX = e.targetTouches[0].pageX
            touchMoveY = myGame.getContainerWAndH().height - hero.getHeight() / 2 - 10
        } else {
            touchMoveX = e.targetTouches[0].pageX
            touchMoveY = e.targetTouches[0].pageY
        }
        hero.setLeft(touchMoveX - heroLeft)
        hero.setTop(touchMoveY - heroTop)
    }
}