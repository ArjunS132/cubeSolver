
import * as THREE from 'three'
import Block from './block.js'
import Cube from './cube.js'
import TWEEN from '@tweenjs/tween.js'

export default class Solver {
    constructor() {
    }


    async Solve(cube) {
        await this.bottomCross(cube);
    }

    async bottomCross(cube) {
        // get yellow + green to right position
        let position = cube.findPiece(["yellow", "green"]);
        let blockColors = cube.getSides();
        let rotations = "";
        // fixing yellow green orientation
        console.log(position);
        switch (position) {
            case 1:
                if( blockColors.get("down")[3] === "yellow" ) {
                    rotations += "L L U' F F";
                }
                else {
                    rotations += "L' F'";
                }
                break;
            case 3:
                if( blockColors.get("left")[3] === "green" ) {
                    rotations += "L U' L' F F"
                }
                else {
                    rotations += "B' U U B F F"
                }
                break;
            case 5:
                if( blockColors.get("front")[3] === "green" ) {
                    rotations += "F'";
                }
                else {
                    rotations += "D' L D";
                }
                break;
            case 7:
                if( blockColors.get("left")[1] === "green" ) {
                    rotations += "U' F F";
                }
                else {
                    rotations += "L F' L'";
                }
                break;
            case 9:
                if( blockColors.get("down")[7] === "yellow" ) {
                    rotations += "D D";
                }
                else {
                    rotations += "D' R F";
                }
                break;
            case 11:
                if( blockColors.get("down")[1] === "green" ) {
                    rotations += "F D' L D";
                }
                // else in the right position
                break;
            case 15:
                if( blockColors.get("back")[1] === "green" ) {
                    rotations += "U U F F";
                }
                else {
                    rotations += "B' D R D' R'"
                }
                break;
            case 17:
                if( blockColors.get("front")[1] === "green" ) {
                    rotations += "F F";
                }
                else {
                    rotations += "F' D' L D";
                }
                break;
            case 19:
                if( blockColors.get("right")[7] === "green" ) {
                    rotations += "R' D R D'";
                }
                else {
                    rotations += "R F";
                }
                break;
            case 21:
                if( blockColors.get("right")[5] === "green" ) {
                    rotations += "D R D'";
                }
                else {
                    rotations += "D D B' D D";
                }
                break;
            case 23:
                if( blockColors.get("front")[5] === "green" ) {
                    rotations += "F";
                }
                else {
                    rotations += "D R' D'";
                }
                break;
            case 25:
                if( blockColors.get("right")[1] === "green" ) {
                    rotations += "U F F"
                }
                else {
                    rotations += "R' F R";
                }
                break;
            default:
                break; // Optional default case with a break
        }
        console.log(rotations);
        await cube.parseRotations(rotations, 2);

        // get yellow + red to right position
        position = cube.findPiece(["yellow", "red"]);
        blockColors = cube.getSides();
        rotations = "";
        // fixing yellow red orientation
        switch (position) {
            case 1:
                if( blockColors.get("down")[3] === "yellow" ) {
                    rotations += "L L U' U' R' R'";
                }
                else {
                    rotations += "L L U' U' R' D' F D";
                }
                break;
            case 3:
                if( blockColors.get("left")[3] === "red" ) {
                    rotations += "L U' L' U' R R"
                }
                else {
                    rotations += "B' U B R R"
                }
                break;
            case 5:
                if( blockColors.get("front")[3] === "red" ) {
                    rotations += "F U' F' R R";
                }
                else {
                    rotations += "F F R' F F";
                }
                break;
            case 7:
                if( blockColors.get("left")[1] === "red" ) {
                    rotations += "U' U' R R";
                }
                else {
                    rotations += "U' U' R' D' F D";
                }
                break;
            case 9:
                if( blockColors.get("down")[7] === "yellow" ) {
                    rotations += "B B U R R";
                }
                else {
                    rotations += "B R";
                }
                break;
            // shouldn't reach here, as green was put into the right position earlier
            // case 11:
            //     if( blockColors.get("down")[1] === "red" ) {
            //         rotations += "F D' L D";
            //     }
            //     // else in the right position
            //     break;
            case 15:
                if( blockColors.get("back")[1] === "red" ) {
                    rotations += "U R R";
                }
                else {
                    rotations += "B' R B"
                }
                break;
            case 17:
                if( blockColors.get("front")[1] === "red" ) {
                    rotations += "U' R R";
                }
                else {
                    rotations += "F R' F'";
                }
                break;
            case 19:
                if( blockColors.get("right")[7] === "yellow" ) {
                    rotations += "R D' F D";
                }
                // else in the right position
                break;
            case 21:
                if( blockColors.get("right")[5] === "red" ) {
                    rotations += "R";
                }
                else {
                    rotations += "D B' D'";
                }
                break;
            case 23:
                if( blockColors.get("front")[5] === "yellow" ) {
                    rotations += "R'";
                }
                else {
                    rotations += "D' F D";
                }
                break;
            case 25:
                if( blockColors.get("right")[1] === "red" ) {
                    rotations += "R R"
                }
                else {
                    rotations += "R' D' F D";
                }
                break;
            default:
                break; // Optional default case with a break
        }
        console.log(rotations);
        await cube.parseRotations(rotations, 2);

        // get yellow + blue to right position
        position = cube.findPiece(["yellow", "blue"]);
        blockColors = cube.getSides();
        rotations = "";
        // fixing yellow blue orientation
        switch (position) {
            case 1:
                if( blockColors.get("down")[3] === "yellow" ) {
                    rotations += "L L U B B";
                }
                else {
                    rotations += "L B";
                }
                break;
            case 3:
                if( blockColors.get("back")[5] === "blue" ) {
                    rotations += "B"
                }
                else {
                    rotations += "D L' D'"
                }
                break;
            case 5:
                if( blockColors.get("front")[3] === "blue" ) {
                    rotations += "F U U F' B B";
                }
                else {
                    rotations += "F U U F' B' D' R D";
                }
                break;
            case 7:
                if( blockColors.get("left")[1] === "blue" ) {
                    rotations += "U B B";
                }
                else {
                    rotations += "L' B L";
                }
                break;
            case 9:
                if( blockColors.get("down")[7] === "blue" ) {
                    rotations += "B D' R D";
                }
                // else in the right position
                break;
            // shouldn't reach here, as green was put into the right position earlier
            // case 11:
            //     if( blockColors.get("down")[1] === "red" ) {
            //         rotations += "F D' L D";
            //     }
            //     // else in the right position
            //     break;
            case 15:
                if( blockColors.get("back")[1] === "blue" ) {
                    rotations += "B B";
                }
                else {
                    rotations += "B' D' R D"
                }
                break;
            case 17:
                if( blockColors.get("front")[1] === "blue" ) {
                    rotations += "U U B B";
                }
                else {
                    rotations += "U U B' D' R D";
                }
                break;
            // shouldn't reach here, as red was put into the correct position earlier
            // case 19:
            //     if( blockColors.get("right")[7] === "yellow" ) {
            //         rotations += "R D' F D";
            //     }
            //     // else in the right position
            //     break;
            case 21:
                if( blockColors.get("back")[3] === "blue" ) {
                    rotations += "B'";
                }
                else {
                    rotations += "D' R D";
                }
                break;
            case 23:
                if( blockColors.get("right")[3] === "blue" ) {
                    rotations += "R U' R' B B";
                }
                else {
                    rotations += "R R B' R R";
                }
                break;
            case 25:
                if( blockColors.get("right")[1] === "blue" ) {
                    rotations += "U' B B"
                }
                else {
                    rotations += "U' B' D' R D";
                }
                break;
            default:
                break; // Optional default case with a break
        }
        console.log(rotations);
        await cube.parseRotations(rotations, 2);

        // get yellow + orange to right position
        position = cube.findPiece(["yellow", "orange"]);
        blockColors = cube.getSides();
        rotations = "";
        // fixing yellow orange orientation
        switch (position) {
            case 1:
                if( blockColors.get("down")[3] === "orange" ) {
                    rotations += "L' D F' D'";
                }
                // else in the right position
                break;
            case 3:
                if( blockColors.get("left")[3] === "orange" ) {
                    rotations += "L'"
                }
                else {
                    rotations += "D' B D"
                }
                break;
            case 5:
                if( blockColors.get("left")[5] === "orange" ) {
                    rotations += "L";
                }
                else {
                    rotations += "D F' D'";
                }
                break;
            case 7:
                if( blockColors.get("left")[1] === "orange" ) {
                    rotations += "L L";
                }
                else {
                    rotations += "L D F' D'";
                }
                break;
            // shouldn't reach here, as blue was put into the right position earlier
            // case 9:
            //    if( blockColors.get("down")[7] === "blue" ) {
            //        rotations += "B D' R D";
            //    }
            //    // else in the right position
            //    break;
            // shouldn't reach here, as green was put into the right position earlier
            // case 11:
            //     if( blockColors.get("down")[1] === "red" ) {
            //         rotations += "F D' L D";
            //     }
            //     // else in the right position
            //     break;
            case 15:
                if( blockColors.get("back")[1] === "orange" ) {
                    rotations += "U' L L";
                }
                else {
                    rotations += "U' L D F' D'"
                }
                break;
            case 17:
                if( blockColors.get("front")[1] === "orange" ) {
                    rotations += "U L L";
                }
                else {
                    rotations += "U L D F' D'";
                }
                break;
            // shouldn't reach here, as red was put into the correct position earlier
            // case 19:
            //     if( blockColors.get("right")[7] === "yellow" ) {
            //         rotations += "R D' F D";
            //     }
            //     // else in the right position
            //     break;
                // TODO
            case 21:
                if( blockColors.get("back")[3] === "orange" ) {
                    rotations += "D' B' D";
                }
                else {
                    rotations += "D D R D D";
                }
                break;
            case 23:
                if( blockColors.get("right")[3] === "orange" ) {
                    rotations += "D D R' D D";
                }
                else {
                    rotations += "D F D'";
                }
                break;
            case 25:
                if( blockColors.get("right")[1] === "orange" ) {
                    rotations += "U U L L"
                }
                else {
                    rotations += "U U L D F' D'";
                }
                break;
            default:
                rotations == "";
                break; // Optional default case with a break
        }
        console.log(rotations);
        await cube.parseRotations(rotations, 2);
        return position + rotations;
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

