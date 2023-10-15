
import * as THREE from 'three'
import Block from './block.js'
import Cube from './cube.js'
import TWEEN from '@tweenjs/tween.js'

export default class Solver {
    constructor() {
    }


    async Solve(cube) {
        function until(conditionFunction) {
          const poll = resolve => {
            if(conditionFunction()) resolve();
            else setTimeout(_ => poll(resolve), 1000);
          }
          return new Promise(poll);
        }

        var raycaster = new THREE.Raycaster();
        var rightVector = new THREE.Vector3(1, 0, 0);
        var leftVector = new THREE.Vector3(-1, 0, 0);
        var topVector = new THREE.Vector3(0, 1, 0);
        var bottomVector = new THREE.Vector3(0, -1, 0);
        var frontVector = new THREE.Vector3(0, 0, 1);
        var backVector = new THREE.Vector3(0, 0, -1);

        var materials = [ "red", "orange", "white", "yellow", "green", "blue" ];
        var currBlock = cube.blocks[0].blockGroup.children[0];
        raycaster.ray.origin.copy(currBlock.position);

        raycaster.ray.direction.copy(leftVector);
        var intersects = raycaster.intersectObject(currBlock);
        console.log(intersects);
        var leftFaceIndex = intersects[0].face.materialIndex;
        var leftFaceColor = materials[leftFaceIndex];
        console.log("left face color: " + leftFaceColor);
        console.log(leftFaceIndex);

        raycaster.ray.direction.copy(backVector);
        var intersects = raycaster.intersectObject(currBlock);
        console.log(intersects);
        var backFaceIndex = intersects[0].face.materialIndex;
        var backFaceColor = materials[backFaceIndex];
        console.log("back face color: " + backFaceColor);

        raycaster.ray.direction.copy(bottomVector);
        var intersects = raycaster.intersectObject(currBlock);
        console.log(intersects);
        var bottomFaceIndex = intersects[0].face.materialIndex;
        var bottomFaceColor = materials[bottomFaceIndex];
        console.log("bottom face color: " + bottomFaceColor);
    }
}
