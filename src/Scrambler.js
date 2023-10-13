import TWEEN from '@tweenjs/tween.js'

export default class Scrambler {
    constructor() {
    }

    async scramble(cube, depth) {
        var tween;

        function until(conditionFunction) {

          const poll = resolve => {
            if(conditionFunction()) resolve();
            else setTimeout(_ => poll(resolve), 1000);
          }

          return new Promise(poll);
        }


        for(let i =0; i < depth; i++) {
            const randNumber = Math.floor( Math.random() * (11));
            switch (randNumber) {
                case 0:
                    tween = cube.rotateRightInverted(500)
                    break;
                case 1:
                    tween = cube.rotateRight(500)
                    break;
                case 2:
                    tween = cube.rotateLeft(500)
                    break;
                case 3:
                    tween = cube.rotateLeftInverted(500)
                    break;
                case 4:
                    tween = cube.rotateUp(500)
                    break;
                case 5:
                    tween = cube.rotateUpInverted(500)
                    break;
                case 6:
                    tween = cube.rotateDown(500)
                    break;
                case 7:
                    tween = cube.rotateDownInverted(500)
                    break;
                case 8:
                    tween = cube.rotateFront(500)
                    break;
                case 9:
                    tween = cube.rotateFrontInverted(500)
                    break;
                case 10:
                    tween = cube.rotateBack(500)
                    break;
                case 11:
                    tween = cube.rotateBackInverted(500)
                    break;
                default:
                    break;
            }
            tween.start();
            await until(_ => tween.isPlaying() === false );
        }
    }
}
