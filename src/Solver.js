
import * as THREE from 'three'
import Block from './block.js'
import Cube from './cube.js'
import TWEEN from '@tweenjs/tween.js'

export default class Solver {
    constructor() {
    }


    async Solve(cube) {
        var tween;

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

        var materials = [
            "red", "orange", "white", "yellow", "green", "blue"
            // 0xb71234, //(Red)
            // 0xff5800, //(Orange)
            // 0xffffff, //(White)
            // 0xffdf00, //(Yellow)
            // 0x009b58, //(Green)
            // 0x0046ad  //(Blue)
        ];
        var currBlock = cube.blocks[0].blockGroup.children[0];
        raycaster.ray.origin.copy(currBlock.position);
        raycaster.ray.direction.copy(backVector);
        var intersects = raycaster.intersectObject(currBlock);
        if (intersects.length > 0) {
            console.log(intersects);
            var frontFaceIndex = intersects[0].face.materialIndex;
            var frontFaceColor = materials[frontFaceIndex];
            console.log("curr face color: " + frontFaceColor);
            console.log(frontFaceIndex);
        }
        else {
            console.log(currBlock.position);
            console.log(intersects);
            console.log(currBlock);
            console.log("what???");
        }
    }
}
