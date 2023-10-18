
import * as THREE from 'three'
import Block from './block.js'
import Cube from './cube.js'
import TWEEN from '@tweenjs/tween.js'

export default class Solver {
    constructor() {
    }


    async Solve(cube) {
        await this.bottomCross(cube);
        await this.f2l(cube);
    }

    async bottomCross(cube) {
        // get yellow + green to right position
        let downColor = cube.getSides().get("down")[4];
        let frontColor = cube.getSides().get("front")[4];
        let rightColor = cube.getSides().get("right")[4];
        let leftColor = cube.getSides().get("left")[4];
        let backColor = cube.getSides().get("back")[4];
        let position = cube.findPiece([downColor, frontColor]);
        let blockColors = cube.getSides();
        let rotations = "";
        // fixing yellow green orientation
        switch (position) {
            case 1:
                if( blockColors.get("down")[3] === downColor ) {
                    rotations += "L L U' F F";
                }
                else {
                    rotations += "L' F'";
                }
                break;
            case 3:
                if( blockColors.get("left")[3] === frontColor ) {
                    rotations += "L U' L' F F"
                }
                else {
                    rotations += "B' U U B F F"
                }
                break;
            case 5:
                if( blockColors.get("front")[3] === frontColor ) {
                    rotations += "F'";
                }
                else {
                    rotations += "D' L D";
                }
                break;
            case 7:
                if( blockColors.get("left")[1] === frontColor ) {
                    rotations += "U' F F";
                }
                else {
                    rotations += "L F' L'";
                }
                break;
            case 9:
                if( blockColors.get("down")[7] === downColor ) {
                    rotations += "D D";
                }
                else {
                    rotations += "D' R F";
                }
                break;
            case 11:
                if( blockColors.get("down")[1] === frontColor ) {
                    rotations += "F D' L D";
                }
                // else in the right position
                break;
            case 15:
                if( blockColors.get("back")[1] === frontColor ) {
                    rotations += "U U F F";
                }
                else {
                    rotations += "B' D R D' R'"
                }
                break;
            case 17:
                if( blockColors.get("front")[1] === frontColor ) {
                    rotations += "F F";
                }
                else {
                    rotations += "F' D' L D";
                }
                break;
            case 19:
                if( blockColors.get("right")[7] === frontColor ) {
                    rotations += "R' D R D'";
                }
                else {
                    rotations += "R F";
                }
                break;
            case 21:
                if( blockColors.get("right")[5] === frontColor ) {
                    rotations += "D R D'";
                }
                else {
                    rotations += "D D B' D D";
                }
                break;
            case 23:
                if( blockColors.get("front")[5] === frontColor ) {
                    rotations += "F";
                }
                else {
                    rotations += "D R' D'";
                }
                break;
            case 25:
                if( blockColors.get("right")[1] === frontColor ) {
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
        position = cube.findPiece([downColor, rightColor]);
        blockColors = cube.getSides();
        rotations = "";
        // fixing yellow red orientation
        switch (position) {
            case 1:
                if( blockColors.get("down")[3] === downColor ) {
                    rotations += "L L U' U' R' R'";
                }
                else {
                    rotations += "L L U' U' R' D' F D";
                }
                break;
            case 3:
                if( blockColors.get("left")[3] === rightColor ) {
                    rotations += "L U' L' U' R R"
                }
                else {
                    rotations += "B' U B R R"
                }
                break;
            case 5:
                if( blockColors.get("front")[3] === rightColor ) {
                    rotations += "F U' F' R R";
                }
                else {
                    rotations += "F F R' F F";
                }
                break;
            case 7:
                if( blockColors.get("left")[1] === rightColor ) {
                    rotations += "U' U' R R";
                }
                else {
                    rotations += "U' U' R' D' F D";
                }
                break;
            case 9:
                if( blockColors.get("down")[7] === downColor ) {
                    rotations += "B B U R R";
                }
                else {
                    rotations += "B R";
                }
                break;
            // shouldn't reach here, as green was put into the right position earlier
            // case 11:
            //     if( blockColors.get("down")[1] === rightColor ) {
            //         rotations += "F D' L D";
            //     }
            //     // else in the right position
            //     break;
            case 15:
                if( blockColors.get("back")[1] === rightColor ) {
                    rotations += "U R R";
                }
                else {
                    rotations += "B' R B"
                }
                break;
            case 17:
                if( blockColors.get("front")[1] === rightColor ) {
                    rotations += "U' R R";
                }
                else {
                    rotations += "F R' F'";
                }
                break;
            case 19:
                if( blockColors.get("right")[7] === downColor ) {
                    rotations += "R D' F D";
                }
                // else in the right position
                break;
            case 21:
                if( blockColors.get("right")[5] === rightColor ) {
                    rotations += "R";
                }
                else {
                    rotations += "D B' D'";
                }
                break;
            case 23:
                if( blockColors.get("front")[5] === downColor ) {
                    rotations += "R'";
                }
                else {
                    rotations += "D' F D";
                }
                break;
            case 25:
                if( blockColors.get("right")[1] === rightColor ) {
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
        position = cube.findPiece([downColor, backColor]);
        blockColors = cube.getSides();
        rotations = "";
        // fixing yellow blue orientation
        switch (position) {
            case 1:
                if( blockColors.get("down")[3] === downColor ) {
                    rotations += "L L U B B";
                }
                else {
                    rotations += "L B";
                }
                break;
            case 3:
                if( blockColors.get("back")[5] === backColor ) {
                    rotations += "B"
                }
                else {
                    rotations += "D L' D'"
                }
                break;
            case 5:
                if( blockColors.get("front")[3] === backColor ) {
                    rotations += "F U U F' B B";
                }
                else {
                    rotations += "F U U F' B' D' R D";
                }
                break;
            case 7:
                if( blockColors.get("left")[1] === backColor ) {
                    rotations += "U B B";
                }
                else {
                    rotations += "L' B L";
                }
                break;
            case 9:
                if( blockColors.get("down")[7] === backColor ) {
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
                if( blockColors.get("back")[1] === backColor ) {
                    rotations += "B B";
                }
                else {
                    rotations += "B' D' R D"
                }
                break;
            case 17:
                if( blockColors.get("front")[1] === backColor ) {
                    rotations += "U U B B";
                }
                else {
                    rotations += "U U B' D' R D";
                }
                break;
            // shouldn't reach here, as red was put into the correct position earlier
            // case 19:
            //     if( blockColors.get("right")[7] === downColor ) {
            //         rotations += "R D' F D";
            //     }
            //     // else in the right position
            //     break;
            case 21:
                if( blockColors.get("back")[3] === backColor ) {
                    rotations += "B'";
                }
                else {
                    rotations += "D' R D";
                }
                break;
            case 23:
                if( blockColors.get("right")[3] === backColor ) {
                    rotations += "R U' R' B B";
                }
                else {
                    rotations += "R R B' R R";
                }
                break;
            case 25:
                if( blockColors.get("right")[1] === backColor ) {
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
        position = cube.findPiece([downColor, leftColor]);
        blockColors = cube.getSides();
        rotations = "";
        // fixing yellow orange orientation
        switch (position) {
            case 1:
                if( blockColors.get("down")[3] === leftColor ) {
                    rotations += "L' D F' D'";
                }
                // else in the right position
                break;
            case 3:
                if( blockColors.get("left")[3] === leftColor ) {
                    rotations += "L'"
                }
                else {
                    rotations += "D' B D"
                }
                break;
            case 5:
                if( blockColors.get("left")[5] === leftColor ) {
                    rotations += "L";
                }
                else {
                    rotations += "D F' D'";
                }
                break;
            case 7:
                if( blockColors.get("left")[1] === leftColor ) {
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
                if( blockColors.get("back")[1] === leftColor ) {
                    rotations += "U' L L";
                }
                else {
                    rotations += "U' L D F' D'"
                }
                break;
            case 17:
                if( blockColors.get("front")[1] === leftColor ) {
                    rotations += "U L L";
                }
                else {
                    rotations += "U L D F' D'";
                }
                break;
            // shouldn't reach here, as red was put into the correct position earlier
            // case 19:
            //     if( blockColors.get("right")[7] === downColor ) {
            //         rotations += "R D' F D";
            //     }
            //     // else in the right position
            //     break;
            case 21:
                if( blockColors.get("back")[3] === leftColor ) {
                    rotations += "D' B' D";
                }
                else {
                    rotations += "D D R D D";
                }
                break;
            case 23:
                if( blockColors.get("right")[3] === leftColor ) {
                    rotations += "D D R' D D";
                }
                else {
                    rotations += "D F D'";
                }
                break;
            case 25:
                if( blockColors.get("right")[1] === leftColor ) {
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

    async f2l(cube) {
        // do all 4 pairs
        for (let i = 0; i < 1; i++) {
            cube.parseRotations("Y");
            await this.f2lHelper(cube);
        }
    }

    async f2lHelper(cube) {
        let downColor = cube.getSides().get("down")[4];
        let upColor = cube.getSides().get("up")[4];
        let frontColor = cube.getSides().get("front")[4];
        let rightColor = cube.getSides().get("right")[4];
        let leftColor = cube.getSides().get("left")[4];
        let backColor = cube.getSides().get("back")[4];

        let cornerPosition = cube.findPiece( [ downColor, rightColor, frontColor ]);
        let edgePosition = cube.findPiece( [ rightColor, frontColor ] );
        var rotations = ""
        let returnStatement = [];

        // if in the bottom and not front right, then get to top
        switch(cornerPosition) {
            case 0:
                rotations += "L U L'";
                break
            case 2:
                rotations += "L' U L";
                break;
            case 18:
                rotations += "R' U R";
                break
            default:
                break;
        }
        console.log("f2l part1 rotations", rotations);
        await cube.parseRotations(rotations, 50);
        rotations = "";
        cornerPosition = cube.findPiece( [ downColor, rightColor, frontColor ]);

        switch (cornerPosition) {
            // if in the top, then get the piece to front right
            case 6:
                rotations += "U U";
                break;
            case 24:
                rotations += "U";
                break;
            case 8:
                rotations += "U'";
                break;
            default:

        }
        console.log("f2l part2 rotations", rotations);
        await cube.parseRotations(rotations, 5);
        edgePosition = await cube.findPiece( [ rightColor, frontColor ] );
        rotations = "";
        switch (edgePosition) {
            case 3:
                rotations += "L U' L' U";
                break;
            case 5:
                rotations += "L' U' L U";
                break;
            case 21:
                rotations += "B U B' U'";
                break;
            default:
                break;
        }
        console.log("f2l part3 rotations", rotations);
        await cube.parseRotations(rotations, 5);
        edgePosition = await cube.findPiece( [ rightColor, frontColor ] );
        let blockColors = cube.getSides();
        rotations = "";

        // cases where white is facing up on corner piece
        if(blockColors.get("up")[8] === downColor && edgePosition != 23) {
            switch(edgePosition) {
                case 7:
                    if( blockColors.get("up")[3] === frontColor ) {
                        rotations += "y F R U U R' F' y'";
                    }
                    else {
                        rotations += "y U' L' U2 L U' L' U L y'"
                    }
                    break;
                case 15:
                    if( blockColors.get("up")[1] === frontColor ) {
                        rotations += "U R U2 R' U R U' R'";
                    }
                    else {
                        rotations += "F' L' U U L F"
                    }
                    break;
                case 25:
                    if( blockColors.get("up")[5] === frontColor ) {
                        rotations += "R U U R' U' R U R'";
                    }
                    else {
                        rotations += "F U R U' R' F' R U' R'"
                    }
                    break;
                case 17:
                    if( blockColors.get("up")[7] === frontColor ) {
                        rotations += "U F R' F' R U R U R'";
                    }
                    else {
                        rotations += "y L' U2 L U L' U' L y'"
                    }
                    break;
                default:
                    break;
            }
            await cube.parseRotations(rotations, 2);
            // returnStatement.push("white up" + edgePosition + rotations);
        }
        // cases where green is facing up
        if(blockColors.get("up")[8] === frontColor && edgePosition !=23) {
            switch(edgePosition) {
                case 7:
                    if( blockColors.get("up")[3] === rightColor ) {
                        rotations += "y L' U' L y'";
                    }
                    else {
                        rotations += "U' R U2 R' U2 R U' R'"
                    }
                    break;
                case 15:
                    if( blockColors.get("up")[1] === rightColor ) {
                        rotations += "R U R'";
                    }
                    else {
                        rotations += "y U L' U2 L U2 L' U L y'"
                    }
                    break;
                case 25:
                    if( blockColors.get("up")[5] === rightColor ) {
                        rotations += "y L U2 L2' U' L2 U' L'";
                    }
                    else {
                        rotations += "U R U' R'"
                    }
                    break;
                case 17:
                    if( blockColors.get("up")[7] === rightColor ) {
                        rotations += "R' U2 R2 U R2' U R";
                    }
                    else {
                        rotations += "y U' L' U L"
                    }
                    break;
                default:
                    break;
            }
            await cube.parseRotations(rotations, 2);
            returnStatement.push("green up" + edgePosition + rotations);
        }
        return returnStatement;
    }
}
