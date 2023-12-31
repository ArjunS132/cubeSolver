import './style.css'
import Cube from './src/cube.js'
import { scramble } from './src/Scrambler.js'
import Solver from './src/Solver.js'
import * as THREE from 'three'

export default class Tester {
    constructor(scene) {
        this.cube = new Cube(3);
        this.solver = new Solver();
        this.scene = scene;
        this.scene.add(this.cube.cubeGroup);
    }

    async testCase(scramble, speed) {
        await this.cube.parseRotations(scramble, speed);
        await this.solver.Solve(this.cube, speed);

    }

    async testlRotation() {
        await this.cube.parseRotations("l", 500);
        await this.testScrambleIntoSolve(500);
    }

    async testlIRotation(speed) {
        await this.cube.parseRotations("l'");
        await this.testScrambleIntoSolve(speed);
    }

    async testYRotation() {
        await this.cube.parseRotations("y", 500);
        await this.testScrambleIntoSolve(500);
    }

    async testYIRotation() {
        await this.cube.parseRotations("y'");
        this.testScrambleIntoSolve(this.cube);
    }

    async test2Rotation() {
        await this.cube.parseRotations("y L' U2 L U L' U' L y'");
    }

    async testMRotation(speed) {
        await this.cube.parseRotations("M");
        this.testScrambleIntoSolve(speed);
    }

    async testrRotation(speed) {
        await this.cube.parseRotations("r");
        this.testScrambleIntoSolve(speed);
    }
    async testrIRotation(speed) {
        await this.cube.parseRotations("r'");
        this.testScrambleIntoSolve(speed);
    }

    async testMInvertedRotation(speed) {
        await this.cube.parseRotations("M'");
        this.testScrambleIntoSolve(speed);
    }

    async testF2LHelper() {
        const map = new Map();
        while( map.size < 41) {
            this.scene.remove(this.cube.cubeGroup);
            this.cube = new Cube(3);
            this.scene.add(this.cube.cubeGroup);
            const randNumber = Math.floor( Math.random() * (15)) + 5;
            await scramble(this.cube, randNumber);
            await this.solver.bottomCross(this.cube);
            let permutation = await this.solver.f2lHelper(this.cube);
            if(permutation.length > 0 ) {
                map.set( permutation[0], await this.cornerInPlace()
                                      && await this.edgeInPlace());
            }
        }
    }

    async testOLL() {
        const map = new Map();
        while( map.size < 57 ) {
            this.scene.remove(this.cube.cubeGroup);
            this.cube = new Cube(3);
            this.scene.add(this.cube.cubeGroup);
            const randNumber = Math.floor( Math.random() * (15)) + 5;
            await scramble(this.cube, randNumber, 1);
            await this.solver.bottomCross(this.cube, 2);
            await this.solver.f2l(this.cube, 2);
            let permutation = await this.solver.oll(this.cube, 2);
            console.log(permutation);
            if( this.topIsSolid() ) {
                console.log("solid");
                map.set( permutation[0], true);
            } else {
                console.log("!solid");
                map.set( permutation[0], permutation[1] );
            }
        }
        console.log(map);
    }

    async testPll() {
        const map = new Map();
        let runs = 0;
        while( map.size < 22 && runs < 250) {
            this.scene.remove(this.cube.cubeGroup);
            this.cube = new Cube(3);
            this.scene.add(this.cube.cubeGroup);
            const randNumber = Math.floor( Math.random() * (15)) + 5;
            await scramble(this.cube, randNumber, 1);
            await this.solver.bottomCross(this.cube, 2);
            await this.solver.f2l(this.cube, 2);
            await this.solver.oll(this.cube, 2);
            let permutation = await this.solver.pll(this.cube, 2);
            if( await this.solved() ) {
                map.set( permutation[0], true);
            } else {
                map.set( permutation[0], permutation[1] );
            }
            runs++;
        }
        console.log(map);
        console.log(runs);
    }

    async testGreenYellow() {
        const map = new Map();
        while( map.size < 18) {
            this.scene.remove(this.cube.cubeGroup);
            this.cube = new Cube(3);
            this.scene.add(this.cube.cubeGroup);
            await scramble(this.cube, 10);
            let permutation = await this.solver.bottomCross(this.cube);
            map.set( permutation, await this.greenYellowIsCorrect()
                    && await this.greenRedIsCorrect()
                    && await this.greenBlueIsCorrect()
                    && await this.greenOrangeIsCorrect()
            );
        }
    }

    async testScrambleIntoSolve(speed) {
        await scramble(this.cube, 10, speed);
        await this.solver.Solve(this.cube, speed);
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
                && sides.get("right")[6] == rightColor
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
    }

    topIsSolid() {
        return this.cube.getSides().get("up").every( (ele, index, arr) => ele === arr[0]);
    }
    async solved() {
        return this.cube.getSides().get("up").every( (ele, index, arr) => ele === arr[0])
            && this.cube.getSides().get("down").every( (ele, index, arr) => ele === arr[0])
            && this.cube.getSides().get("left").every( (ele, index, arr) => ele === arr[0])
            && this.cube.getSides().get("right").every( (ele, index, arr) => ele === arr[0])
            && this.cube.getSides().get("front").every( (ele, index, arr) => ele === arr[0])
            && this.cube.getSides().get("back").every( (ele, index, arr) => ele === arr[0])
     }
}
