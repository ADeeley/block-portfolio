'use strict';

const utilsModule = require('./utils.js');
const Fish = require('./fish.js').Fish;
const CANVAS = utilsModule.CANVAS;
const MYAPP = utilsModule.MYAPP;

/**
 * Stores the evil fish array and good fish array and associated
 * methods.
 * @param {Number} numGoodFish The number of good fish required
 * @param {Number} numEvilFish The number of evil fish required
 */
function Shoal(numGoodFish, numEvilFish) {
    let goodFishSprite = new Image(),
        evilFishSprite = new Image(),
        x = null,
        y = null,
        width = 30,
        height = 20,
        xDelta = CANVAS.width-30,
        yDelta = (CANVAS.height/2-20);

    evilFishSprite.src = 'img/evilfish.png';
    goodFishSprite.src = 'img/goldfish.png';

    this.fish = (() => {
        let fishArr = [];

        for (let i = 0; i < numGoodFish; i++) {
            x = Math.floor(Math.random() * xDelta),
            y = Math.floor(Math.random() * yDelta) + CANVAS.height/2;
            fishArr.push(new Fish(x, y, width, height, goodFishSprite));
        }

        return fishArr;
    })();

    this.evilFish = (() => {
        let evilFishArr = [];

        for (let i = 0; i < numEvilFish; i++) {
            x = Math.floor(Math.random() * xDelta),
            y = Math.floor(Math.random() * yDelta) + CANVAS.height/2;
            evilFishArr.push(new Fish(x, y, width, height, evilFishSprite));
        }

        return evilFishArr;
    })();


    this.drawAll = function() {
        for (let i = 0; i < this.fish.length; i++) {
            this.fish[i].draw();
        }
        for (let i = 0; i < this.evilFish.length; i++) {
            this.evilFish[i].draw();
        }
    };

    this.removeFish = () => {
        for (let i = 0; i < this.fish.length; i++) {
            if (this.fish[i].caught) {
                this.fish.splice(i, 1);
                console.log('Sliced fish array');
                MYAPP.game.incrementScore();
            }
        }
        for (let i = 0; i < this.evilFish.length; i++) {
            if (this.evilFish[i].caught) {
                this.evilFish.splice(i, 1);
                console.log('Sliced fish array');
                MYAPP.game.decrementScore();
            }
        }
    };
}

module.exports = {
    Shoal: Shoal,
};
