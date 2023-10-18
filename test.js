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

    async testYIRotation() {
        await this.cube.parseRotations("Y'");
        this.testScrambleIntoSolve(this.cube);
    }

    async test2Rotation() {
        await this.cube.parseRotations("y L' U2 L U L' U' L y'");
    }

    async testF2LHelper() {
        const map = new Map();
        while( map.size < 41) {
            this.scene.remove(this.cube.cubeGroup);
            this.cube = new Cube(3);
            this.scene.add(this.cube.cubeGroup);
            const randNumber = Math.floor( Math.random() * (15)) + 5;
            await this.scrambler.scramble(this.cube, randNumber);
            await this.solver.bottomCross(this.cube);
            var permutation = await this.solver.f2lHelper(this.cube);
            if(permutation.length > 0 ) {
                map.set( permutation[0], await this.cornerInPlace()
                                      && await this.edgeInPlace());
            }
        }
        console.log(map);
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

    async cornerInPlace() {
        const sides = this.cube.getSides();
        let downColor = sides.get("down")[4];
        let upColor = sides.get("up")[4];
        let frontColor = sides.get("front")[4];
        let rightColor = sides.get("right")[4];
        let leftColor = sides.get("left")[4];
        let backColor = sides.get("back")[4];

        return sides.get("down")[2] == downColor && sides.get("front")[8] == frontColor
                && sides.get("right")[6] == rightColor         // return this.cube.findPiece( [ sides.get("down")[4], sides.get("front")[4], sides.get("right")[4] ] ) === 20
        //     || this.cube.findPiece( [ sides.get("down")[4], sides.get("front")[4], sides.get("right")[4] ] ) === 26;
    }
    async edgeInPlace() {
        const sides = this.cube.getSides();
        let downColor = sides.get("down")[4];
        let upColor = sides.get("up")[4];
        let frontColor = sides.get("front")[4];
        let rightColor = sides.get("right")[4];
        let leftColor = sides.get("left")[4];
        let backColor = sides.get("back")[4];

        return sides.get("front")[5] == frontColor && sides.get("right")[3] == rightColor;

        // return this.cube.findPiece( [ sides.get("front")[4], sides.get("right")[4] ] ) === 23
        //     || this.cube.findPiece( [ sides.get("front")[4], sides.get("right")[4] ] ) === 17
        //     || this.cube.findPiece( [ sides.get("front")[4], sides.get("right")[4] ] ) === 25
        //     || this.cube.findPiece( [ sides.get("front")[4], sides.get("right")[4] ] ) === 15
        //     || this.cube.findPiece( [ sides.get("front")[4], sides.get("right")[4] ] ) === 7
    }
}
