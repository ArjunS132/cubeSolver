import './style.css'
import Cube from './src/cube.js'
import Scrambler from './src/Scrambler.js'
import Solver from './src/Solver.js'
import * as THREE from 'three'

export default class Tester {
    constructor(scene) {
        this.cube = new Cube(3);
        this.scrambler = new Scrambler();
        this.solver = new Solver();
        this.scene = scene;
        this.scene.add(this.cube.cubeGroup);
    }

    async testYRotation() {
        await this.cube.parseRotations("Y");
        this.testScrambleIntoSolve(this.cube);
    }

    async testGreenYellow() {
        const map = new Map();
        while( map.size < 18) {
            this.scene.remove(this.cube.cubeGroup);
            this.cube = new Cube(3);
            this.scene.add(this.cube.cubeGroup);
            await this.scrambler.scramble(this.cube, 10);
            var permutation = await this.solver.bottomCross(this.cube);
            map.set( permutation, await this.greenYellowIsCorrect()
                    && await this.greenRedIsCorrect()
                    && await this.greenBlueIsCorrect()
                    && await this.greenOrangeIsCorrect()
            );
        }
        console.log(map);
    }

    async testScrambleIntoSolve() {
        await this.scrambler.scramble(this.cube, 30);
        await this.solver.Solve(this.cube);
    }

    async greenYellowIsCorrect() {
        const sides = this.cube.getSides();
        return sides.get("down")[1] == "yellow" && sides.get("front")[7] == "green";
    }
    async greenRedIsCorrect() {
        const sides = this.cube.getSides();
        return sides.get("down")[5] == "yellow" && sides.get("right")[7] == "red";
    }
    async greenBlueIsCorrect() {
        const sides = this.cube.getSides();
        return sides.get("down")[7] == "yellow" && sides.get("back")[7] == "blue";
    }
    async greenOrangeIsCorrect() {
        const sides = this.cube.getSides();
        return sides.get("down")[3] == "yellow" && sides.get("left")[7] == "orange";
    }
}
