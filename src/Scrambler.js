import Solver from './Solver.js'
export default class Scrambler {
    constructor() {
    }

    async scramble(cube, depth, speed) {
        var tween;

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
        await cube.parseRotations(rotations, speed);
    }
}
