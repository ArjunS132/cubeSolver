import TWEEN from '@tweenjs/tween.js'

export default class Scrambler {
    constructor() {
    }

    scramble(cube, depth) {
        var tween;

        for( let i = 0; i < depth ; i++ ) {
            let timer = Date.now();
            let now = Date.now();
            let change = now - timer;
            const randNumber = Math.floor( Math.random() * (11));
            switch (randNumber) {
                case 0:
                    tween = cube.rotateRight()
                    break;
                case 1:
                    tween = cube.rotateRightInverted()
                    break;
                case 2:
                    tween = cube.rotateLeft()
                    break;
                case 3:
                    tween = cube.rotateLeftInverted()
                    break;
                case 4:
                    tween = cube.rotateUp()
                    break;
                case 5:
                    tween = cube.rotateUpInverted()
                    break;
                case 6:
                    tween = cube.rotateDown()
                    break;
                case 7:
                    tween = cube.rotateDownInverted()
                    break;
                case 8:
                    tween = cube.rotateFront()
                    break;
                case 9:
                    tween = cube.rotateFrontInverted()
                    break;
                case 10:
                    tween = cube.rotateBack()
                    break;
                case 11:
                    tween = cube.rotateBackInverted()
                    break;
                default:
                    break;
            }
            while( change < 30000 ) {
                now = Date.now();
                change = now - timer;
            }
            tween.start();
            console.log( tween );
        }
    }
}
