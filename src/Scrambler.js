import Solver from './Solver.js'
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

        let rotations = "";
        for(let i =0; i < depth; i++) {
            const randNumber = Math.floor( Math.random() * (11));
            switch (randNumber) {
                case 0:
                    rotations += "R' ";
                    break;
                case 1:
                    rotations += "R ";
                    break;
                case 2:
                    rotations += "L ";
                    break;
                case 3:
                    rotations += "L' ";
                    break;
                case 4:
                    rotations += "U ";
                    break;
                case 5:
                    rotations += "U' ";
                    break;
                case 6:
                    rotations += "D ";
                    break;
                case 7:
                    rotations += "D' ";
                    break;
                case 8:
                    rotations += "F ";
                    break;
                case 9:
                    rotations += "F' ";
                    break;
                case 10:
                    rotations += "B ";
                    break;
                case 11:
                    rotations += "B' ";
                    break;
                default:
                    break;
            }
        }
        await cube.parseRotations(rotations, 2);
    }
}
