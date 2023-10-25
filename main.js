import './style.css'
import Cube from './src/cube.js'
import TWEEN from '@tweenjs/tween.js'
import Scrambler from './src/Scrambler.js'
import Solver from './src/Solver.js'
import Tester from './test.js'

import * as THREE from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, ( window.innerWidth * 0.70) / window.innerHeight, 0.1, 1000);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#cube-canvas'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth * 0.70, window.innerHeight );

camera.position.setZ(5);
camera.position.setX(5);
camera.position.setY(5);
camera.rotation.x =  Math.PI / 6 ;

renderer.render( scene, camera );

const controls = new OrbitControls(camera, renderer.domElement);
const cube = new Cube(3);
const gridLines = new THREE.GridHelper(50, 50)

const axesHelper = new THREE.AxesHelper(8);

scene.add(gridLines, axesHelper);
function animate(t) {
    requestAnimationFrame( animate );
    controls.update;
    TWEEN.update(t);
    renderer.render( scene, camera );
}

animate()

const tester = new Tester(scene);
// tester.testPll();
// tester.testGreenYellow();
tester.testScrambleIntoSolve(1);
// tester.testYRotation();
// tester.testMInvertedRotation(50);
// tester.testF2LHelper();
// tester.test2Rotation();
// tester.testrRotation(300);
// tester.testCase("r U R' U R U2 r'", 20);
// tester.testlRotation();
// tester.testlIRotation(3);
// tester.testOLL();
