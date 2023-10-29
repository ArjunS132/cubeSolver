import './style.css'
import Cube from './src/cube.js'
import TWEEN from '@tweenjs/tween.js'
import { scramble } from './src/Scrambler.js'
import Solver from './src/Solver.js'
<<<<<<< HEAD
import Tester from './test.js'
import {iterativeDeepeningAStar, turnD, turnB, turnF, turnL, turnR, turnU, turnBPrime, turnDPrime, turnFPrime, turnLPrime, turnRPrime, turnUPrime } from './src/IDACross.js'

=======
>>>>>>> IDA
import * as THREE from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, ( window.innerWidth * 0.80) / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#cube-canvas'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth * 0.80, window.innerHeight );

camera.position.setZ(5);
camera.position.setX(5);
camera.position.setY(5);

renderer.render( scene, camera );

const targetPoint = new THREE.Vector3(1, 1, 1);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(targetPoint);
camera.lookAt(targetPoint);

const cube = new Cube(3);

scene.add(cube.cubeGroup);
function animate(t) {
    requestAnimationFrame( animate );
    controls.update;
    TWEEN.update(t);
    renderer.render( scene, camera );
}

animate()

let solver = new Solver();

document.addEventListener("DOMContentLoaded", function () {
    const scrambleButton = document.getElementById("scrambleButton");
    const solveButton = document.getElementById("solveButton");
    const backButton = document.getElementById("backButton");
    const forwardButton = document.getElementById("forwardButton");
    const speedSlider = document.getElementById("speedSlider");
    const speedValue = document.getElementById("speedValue");
    const customScramble = document.getElementById("customScramble");
    const terminal = document.getElementById("console");
    let stepCount = 0;

    // Add event listeners and implement functionality here
    scrambleButton.addEventListener("click", async function () {
        // TODO Add the functionality for the scramble button here
        let scrambleTitle = document.createElement("b");
        scrambleTitle.textContent = "Scramble";
        terminal.appendChild(scrambleTitle);
        terminal.appendChild(document.createElement("br"));
        if(customScramble.value === "") {
            scramble(cube, 20, speedValue.innerText);
        } else {
            let scramblePattern = customScramble.value;
            await cube.parseRotations(scramblePattern, speedValue.innerHTML);
        }
    });

    solveButton.addEventListener("click", function () {
        solver.Solve(cube, speedValue.innerText);
    });

    speedSlider.addEventListener("change", function () {
        speedValue.innerText = speedSlider.value;
    });

    forwardButton.addEventListener("click", async function () {
<<<<<<< HEAD
        console.log( iterativeDeepeningAStar( cube.getSides(), 7));
        // console.log("finished search");
        // console.log("button clicked");
        // solver.solveNextStep(cube, speedValue.innerText);
=======
        solver.solveNextStep(cube, speedValue.innerText);
>>>>>>> IDA
    });
});
