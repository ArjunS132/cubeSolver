import './style.css'
import Block from './src/block.js'
import Cube from './src/cube.js'
import TWEEN from '@tweenjs/tween.js'
import Scrambler from './src/Scrambler.js'
import Solver from './src/Solver.js'


import * as THREE from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.setZ(8);
camera.position.setX(3);
camera.position.setY(3);
camera.rotation.x =  Math.PI / 6 ;

renderer.render( scene, camera );

const controls = new OrbitControls(camera, renderer.domElement);
const cube = new Cube(3);
const gridLines = new THREE.GridHelper(50, 50)
const block = new Block(5, 5, 5);

const axesHelper = new THREE.AxesHelper(8);

const scrambler = new Scrambler();
scrambler.scramble(cube, 6);
// const solver = new Solver();
// solver.solvedCross(cube);

scene.add(cube.cubeGroup, gridLines, axesHelper, block.blockGroup);
function animate(t) {
    requestAnimationFrame( animate );
    controls.update;
    TWEEN.update(t);
    renderer.render( scene, camera );
}

animate()
