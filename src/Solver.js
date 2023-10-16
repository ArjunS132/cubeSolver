
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

    bottomCross(cube) {
        while( !this.solvedCross(cube) ) {

        }
    }

    /*
     * returns true if the white cross on the bottom cross is solved
     */
    solvedCross(cube) {
        var raycaster = new THREE.Raycaster();
        var rightVector = new THREE.Vector3(1, 0, 0);
        var leftVector = new THREE.Vector3(-1, 0, 0);
        var topVector = new THREE.Vector3(0, 1, 0);
        var bottomVector = new THREE.Vector3(0, -1, 0);
        var frontVector = new THREE.Vector3(0, 0, 1);
        var backVector = new THREE.Vector3(0, 0, -1);
        var materials = [ "red", "orange", "white", "yellow", "green", "blue" ];

        var front = cube.blocks[11].blockGroup.children[0];
        var right = cube.blocks[19].blockGroup.children[0];
        var back = cube.blocks[9].blockGroup.children[0];
        var left = cube.blocks[1].blockGroup.children[0];


        // getting the white + green block
        raycaster.ray.origin.copy(front.parent.position);
        raycaster.ray.direction.copy(bottomVector);
        var intersects = raycaster.intersectObject(front);
        // front side's bottom color
        console.log(front);
        console.log(intersects);
        var fbFaceIndex = intersects[0].face.materialIndex;
        var fbFaceColor = materials[fbFaceIndex];
        console.log("bottom face color: " + fbFaceColor);

        raycaster.ray.direction.copy(frontVector);
        var intersects = raycaster.intersectObject(front);
        var bfFaceIndex = intersects[0].face.materialIndex;
        var bfFaceColor = materials[bfFaceIndex];
        console.log("bottom face color: " + bfFaceColor);


        // getting the white + red block
        raycaster.ray.origin.copy(right.parent.position);
        raycaster.ray.direction.copy(bottomVector);
        var intersects = raycaster.intersectObject(right);
        // right side's bottom color
        var rbFaceIndex = intersects[0].face.materialIndex;
        var rbFaceColor = materials[rbFaceIndex];
        console.log("bottom face color: " + rbFaceColor);

        raycaster.ray.direction.copy(rightVector);
        var intersects = raycaster.intersectObject(right);
        var brFaceIndex = intersects[0].face.materialIndex;
        var brFaceColor = materials[brFaceIndex];
        console.log("bottom face color: " + brFaceColor);


        // getting the white + blue block
        raycaster.ray.origin.copy(back.parent.position);
        raycaster.ray.direction.copy(bottomVector);
        var intersects = raycaster.intersectObject(back);
        // back side's bottom color
        var bbFaceIndex = intersects[0].face.materialIndex;
        var bbFaceColor = materials[bbFaceIndex];
        console.log("bottom face color: " + bbFaceColor);

        raycaster.ray.direction.copy(backVector);
        var intersects = raycaster.intersectObject(back);
        var bbbFaceIndex = intersects[0].face.materialIndex;
        var bbbFaceColor = materials[bbbFaceIndex];
        console.log("bottom face color: " + bbbFaceColor);

        // getting the white + orange block
        raycaster.ray.origin.copy(left.parent.position);
        raycaster.ray.direction.copy(bottomVector);
        var intersects = raycaster.intersectObject(left);
        // left side's bottom color
        var lbFaceIndex = intersects[0].face.materialIndex;
        var lbFaceColor = materials[lbFaceIndex];
        console.log("bottom face color: " + lbFaceColor);

        raycaster.ray.direction.copy(leftVector);
        var intersects = raycaster.intersectObject(left);
        var blFaceIndex = intersects[0].face.materialIndex;
        var blFaceColor = materials[blFaceIndex];
        console.log("bottom face color: " + blFaceColor);

        console.log( fbFaceColor + rbFaceColor + bbFaceColor + lbFaceColor);
        console.log( bfFaceColor + brFaceColor + bbbFaceColor + blFaceColor);
        console.log( fbFaceColor == "yellow" && rbFaceColor == "yellow" && bbFaceColor == "yellow"
               && lbFaceColor == "yellow" && bfFaceColor == "green" && brFaceColor == "red"
               && bbbFaceColor == "blue" && blFaceColor == "orange");
        return fbFaceColor == "yellow" && rbFaceColor == "yellow" && bbFaceColor == "yellow"
               && lbFaceColor == "yellow" && bfFaceColor == "green" && brFaceColor == "red"
               && bbbFaceColor == "blue" && blFaceColor == "orange";
    }
}
