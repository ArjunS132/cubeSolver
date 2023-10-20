
import * as THREE from 'three'
import Block from './block.js'
import Cube from './cube.js'
import TWEEN from '@tweenjs/tween.js'

export default class Solver {

    constructor() {
    }


    async Solve(cube, speed) {
        await this.bottomCross(cube, speed);
        console.log("finished cross");
        await this.f2l(cube, speed);
        console.log("finished f2l");
        await this.oll(cube, speed);
        console.log("finished oll");
        await this.pll(cube, speed);
        console.log("finished pll");
    }

    async bottomCross(cube, speed) {
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
        await cube.parseRotations(rotations, speed);

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
        await cube.parseRotations(rotations, speed);

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
        await cube.parseRotations(rotations, speed);

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
        await cube.parseRotations(rotations, speed);
        return position + rotations;
    }

    async f2l(cube, speed) {
        // do all 4 pairs
        for (let i = 0; i < 4; i++) {
            await this.f2lHelper(cube, speed)
            await cube.parseRotations("y", speed);
        }
    }

    async f2lHelper(cube, speed) {
        let downColor = cube.getSides().get("down")[4];
        let upColor = cube.getSides().get("up")[4];
        let frontColor = cube.getSides().get("front")[4];
        let rightColor = cube.getSides().get("right")[4];
        let leftColor = cube.getSides().get("left")[4];
        let backColor = cube.getSides().get("back")[4];

        let cornerPosition = cube.findPiece( [ downColor, rightColor, frontColor ]);
        let edgePosition = cube.findPiece( [ rightColor, frontColor ] );
        let rotations = ""
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
        await cube.parseRotations(rotations, speed);
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
        await cube.parseRotations(rotations, speed);
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
        await cube.parseRotations(rotations, speed);
        edgePosition = await cube.findPiece( [ rightColor, frontColor ] );
        cornerPosition = cube.findPiece( [ downColor, rightColor, frontColor ]);
        let blockColors = cube.getSides();
        rotations = "";

        // cases where edge and corner in right place buy misoriented
        if( edgePosition === 23 && cornerPosition === 20 ) {
            if(blockColors.get("front")[5] === frontColor ) {
                if(blockColors.get("front")[8] === downColor) {
                    rotations += "R U' R' U' R U R' U2 R U' R'"
                } else if( blockColors.get("front")[8] === rightColor ) {
                    rotations += "R U' R' U R U2 R' U R U' R'"
                }
            } else {
                if(blockColors.get("front")[8] === downColor) {
                    rotations += "F' L' U2 L F R U R'"
                } else if( blockColors.get("front")[8] === rightColor ) {
                    rotations += "R U' R' F' L' U2 L F"
                } else {
                    rotations += "R' R' U' U' F R2 F' U' U' R' U R'"
                }
            }
            await cube.parseRotations(rotations, speed);
            returnStatement.push("misoriented" + edgePosition + rotations);
        }
        // cases where edge is right spot
        else if( edgePosition === 23 ) {
            // correct orientation
            if( blockColors.get("front")[5] === frontColor ) {
                if(blockColors.get("up")[8] === downColor ) {
                    rotations += "U R U' R' U R U' R' U R U' R'";
                } else if(blockColors.get("up")[8] === frontColor) {
                    rotations += "U' R U' R' U2 R U' R'";
                } else {
                    rotations +="U R U R' U2 R U R'";
                }
            }
            // incorrect orientation
            else {
                if(blockColors.get("up")[8] === downColor ) {
                    rotations += "R U' R' F' U2 F";
                } else if(blockColors.get("up")[8] === frontColor ) {
                    rotations += "U2 R U R' F R' F' R";
                } else {
                    rotations +="U F' U' F U' R U R'";
                }
            }
            await cube.parseRotations(rotations, speed);
            returnStatement.push("edge in place " + edgePosition + rotations);
        }
        // cases where corner in right position
        else if( cornerPosition === 20) {
            // get edge to right position
            switch (edgePosition) {
                case 7:
                    if( blockColors.get("up")[3] === frontColor ) {
                        rotations += "U U ";
                    } else {
                        rotations += "U' ";
                    }
                    break;
                case 15:
                    if( blockColors.get("up")[1] === frontColor ) {
                        rotations += "U ";
                    } else {
                        rotations += "U U ";
                    }
                    break;
                case 17:
                    if( blockColors.get("up")[7] === frontColor ) {
                        rotations += "U' ";
                    }
                    break;
                case 25:
                    if( blockColors.get("up")[5] === rightColor ) {
                        rotations += "U ";
                    }
                    break;
                default:
                    break;
            }
            await cube.parseRotations(rotations, speed);
            edgePosition = await cube.findPiece( [ rightColor, frontColor ] );
            rotations = "";
            if( blockColors.get("front")[8] === downColor ) {
                if(edgePosition === 25 ) {
                    rotations += "R U' R' U R U' R'"
                } else {
                    rotations += "R' F R F' R' F R F'"
                }
            } else if( blockColors.get("front")[8] === frontColor ) {
                if(edgePosition === 25 ) {
                    rotations += "U' R' F R F' R U R'"
                } else {
                    rotations += "U R U' R' F R' F' R"
                }
            } else {
                if(edgePosition === 25 ) {
                    rotations += "R U R' U' R U R'"
                } else {
                    rotations += "y L' U L U' L' U L y'"
                }
            }
            await cube.parseRotations(rotations, speed);
            returnStatement.push("corner in place" + edgePosition + rotations);
        }
        // cases where white is facing up on corner piece
        else if(blockColors.get("up")[8] === downColor ) {
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
            await cube.parseRotations(rotations, speed);
            returnStatement.push("white up" + edgePosition + rotations);
        }
        // cases where green is facing up
        else if(blockColors.get("up")[8] === frontColor ) {
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
                        rotations += "y U L' U' L U' L' U' L y'";
                    }
                    else {
                        rotations += "U' R U R' U2 R U' R'"
                    }
                    break;
                case 25:
                    if( blockColors.get("up")[5] === rightColor ) {
                        rotations += "y L' U L U' L' U L U2 L' U L y'";
                    }
                    else {
                        rotations += "U R U' R'"
                    }
                    break;
                case 17:
                    if( blockColors.get("up")[7] === rightColor ) {
                        rotations += "y U L' U L U' L' U' L y'";
                    }
                    else {
                        rotations += "y L' U L y' U2 R U R'"
                    }
                    break;
                default:
                    break;
            }
            await cube.parseRotations(rotations, speed);
            returnStatement.push("green up" + edgePosition + rotations);
        }

        // cases where red is facing up
        else if(blockColors.get("up")[8] === rightColor ) {
            switch(edgePosition) {
                case 7:
                    if( blockColors.get("up")[3] === rightColor ) {
                        rotations += "y U L' U' L U2 L' U L y'";
                    }
                    else {
                        rotations += "U' R U R' U R U R'"
                    }
                    break;
                case 15:
                    if( blockColors.get("up")[1] === rightColor ) {
                        rotations += "y U L' U2 L U2 L' U L y'";
                    }
                    else {
                        rotations += "R U R'"
                    }
                    break;
                case 25:
                    if( blockColors.get("up")[5] === rightColor ) {
                        rotations += "R U' R' y U2 L' U' L y'";
                    }
                    else {
                        rotations += "U' R U' R' U R U R'"
                    }
                    break;
                case 17:
                    if( blockColors.get("up")[7] === rightColor ) {
                        rotations += "y U' L' U L y'";
                    }
                    else {
                        rotations += "R' U2 R2 U R' R' U R"
                    }
                    break;
                default:
                    break;
            }
            await cube.parseRotations(rotations, speed);
            returnStatement.push("red up" + edgePosition + rotations);
        }
        return returnStatement;
    }

    async oll(cube, speed) {
        let sides = cube.getSides();
        const OllCases = [
            // case 1
            [
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
                "R U2 R2 F R F' U2 R' F R F'"
            ],
            // case 2
            [
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
                [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1],
                "r U r' U2 r U2 R' U2 R U' r'"
            ],
            // case 3
            [
                [0, 0, 0, 0, 1, 0, 1, 0, 0],
                [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
                "r' R2 U R' U r U2 r' U M'"
            ],
            // case 4
            [
                [0, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
                "M U' r U2 r' U' R U' R' M'"
            ],
            // case 5
            [
                [1, 1, 0, 1, 1, 0, 0, 0, 0],
                [0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
                "l' U2 L U L' U l"
            ],
            // case 6
            [
                [0, 1, 1, 0, 1, 1, 0, 0, 0],
                [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
                "r U2 R' U' R U' r'"
            ],
            // case 7
            [
                [0, 1, 0, 1, 1, 0, 1, 0, 0],
                [0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0],
                "r U R' U R U2 r'"
            ],
            // case 8
            [
                [0, 1, 0, 0, 1, 1, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0],
                "l' U' L U' L' U2 l"
            ],
            // case 9
            [
                [0, 1, 0, 1, 1, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
                "R U R' U' R' F R2 U R' U' F'"
            ],
            // case 10
            [
                [0, 0, 1, 1, 1, 0, 0, 1, 0],
                [0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
                "R U R' U R' F R F' R U2 R'"
            ],
            // case 11
            [
                [0, 1, 1, 1, 1, 0, 0, 0, 0],
                [0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
                "r U R' U R' F R F' R U2 r'"
            ],
            // case 12
            [
                [1, 1, 0, 0, 1, 1, 0, 0, 0],
                [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
                "M' R' U' R U' R' U2 R U' R r'"
            ],
            // case 13
            [
                [0, 0, 0, 1, 1, 1, 1, 0, 0],
                [0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0],
                "F U R U' R2 F' R U R U' R'"
            ],
            // case 14
            [
                [0, 0, 0, 1, 1, 1, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
                "R' F R U R' F' R F U' F'"
            ],
            // case 15
            [
                [1, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
                "l' U' l L' U' L U l' U l"
            ],
            // case 16
            [
                [0, 0, 1, 1, 1, 1, 0, 0, 0],
                [1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
                "r U r' R U R' U' r U' r'"
            ],
            // case 17
            [
                [1, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
                "F R' F' R2 r' U R U' R' U' M'"
            ],
            // case 18
            [
                [1, 0, 1, 0, 1, 0, 0, 0, 0],
                [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0],
                "r U R' U R U2 r2 U' R U' R' U2 r"
            ],
            // case 19
            [
                [1, 0, 1, 0, 1, 0, 0, 0, 0],
                [0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1],
                "r' R U R U R' U' M' R' F R F'"
            ],
            // case 20
            [
                [1, 0, 1, 0, 1, 0, 1, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
                "r U R' U' M2 U R U' R' U' M'"
            ],
            // case 21
            [
                [0, 1, 0, 1, 1, 1, 0, 1, 0],
                [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                "R U2 R' U' R U R' U' R U' R'"
            ],
            // case 22
            [
                [0, 1, 0, 1, 1, 1, 0, 1, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
                "R U2 R2 U' R2 U' R2 U2 R"
            ],
            // case 23
            [
                [0, 1, 0, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                "R2 D' R U2 R' D R U2 R"
            ],
            // case 24
            [
                [0, 1, 1, 1, 1, 1, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                "r U R' U' r' F R F'"
            ],
            // case 25
            [
                [0, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                "F' r U R' U' r' F R"
            ],
            // case 26
            [
                [0, 1, 1, 1, 1, 1, 0, 1, 0],
                [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
                "R U2 R' U' R U' R'"
            ],
            // case 27
            [
                [0, 1, 0, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                "R U R' U R U2 R'"
            ],
            // case 28
            [
                [1, 1, 1, 1, 1, 0, 1, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                "r U R' U' r' R U R U' R'"
            ],
            // case 29
            [
                [0, 1, 1, 1, 1, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                "R U R' U' R U' R' F' U' F R U R'"
            ],
            // case 30
            [
                [0, 1, 0, 1, 1, 0, 1, 0, 1],
                [0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
                "F R' F R2 U' R' U' R U R' F2"
            ],
            // case 31
            [
                [0, 1, 1, 0, 1, 1, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
                "R' U' F U R U' R' F' R"
            ],
            // case 32
            [
                [1, 1, 0, 1, 1, 0, 1, 0, 0],
                [0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
                "L U F' U' L' U L F L'"
            ],
            // case 33
            [
                [0, 0, 1, 1, 1, 1, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                "R U R' U' R' F R F'"
            ],
            // case 34
            [
                [0, 0, 0, 1, 1, 1, 1, 0, 1],
                [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
                "R U R2 U' R' F R U R U' F'"
            ],
            // case 35
            [
                [1, 0, 0, 0, 1, 1, 0, 1, 1],
                [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
                "R U2 R2 F R F' R U2 R'"
            ],
            // case 36
            [
                [1, 1, 0, 0, 1, 1, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
                "L' U' L U' L' U L U L F' L' F"
            ],
            // case 37
            [
                [1, 1, 0, 1, 1, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
                "F R' F' R U R U' R'"
            ],
            // case 38
            [
                [0, 1, 1, 1, 1, 0, 1, 0, 0],
                [0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0],
                "R U R' U R U' R' U' R' F R F'"
            ],
            // case 39
            [
                [0, 0, 1, 1, 1, 1, 1, 0, 0],
                [0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
                "L F' L' U' L U F U' L'"
            ],
            // case 40
            [
                [1, 0, 0, 1, 1, 1, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
                "R' F R U R' U' F' U R"
            ],
            // case 41
            [
                [0, 1, 0, 1, 1, 0, 1, 0, 1],
                [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
                "R U R' U R U2 R' F R U R' U' F'"
            ],
            // case 42
            [
                [1, 0, 1, 1, 1, 0, 0, 1, 0],
                [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
                "R' U' R U' R' U2 R F R U R' U' F'"
            ],
            // case 43
            [
                [0, 1, 1, 0, 1, 1, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                "F' U' L' U L F"
            ],
            // case 44
            [
                [1, 1, 0, 1, 1, 0, 1, 0, 0],
                [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                "F U R U' R' F'"
            ],
            // case 45
            [
                [0, 0, 1, 1, 1, 1, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
                "F R U R' U' F'"
            ],
            // case 46
            [
                [1, 1, 0, 0, 1, 0, 1, 1, 0],
                [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
                "R' U' R' F R F' U R"
            ],
            // case 47
            [
                [0, 1, 0, 0, 1, 1, 0, 0, 0],
                [1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
                "R' U' R' F R F' R' F R F' U R"
            ],
            // case 48
            [
                [0, 1, 0, 1, 1, 0, 0, 0, 0],
                [0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
                "F R U R' U' R U R' U' F'"
            ],
            // case 49
            [
                [0, 1, 0, 0, 1, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
                "r U' r2 U r2 U r2 U' r"
            ],
            // case 50
            [
                [0, 0, 0, 0, 1, 1, 0, 1, 0],
                [0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
                "r' U r2 U' r2 U' r2 U r'"
            ],
            // case 51
            [
                [0, 0, 0, 1, 1, 1, 0, 0, 0],
                [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0],
                "F U R U' R' U R U' R' F'"
            ],
            // case 52
            [
                [0, 1, 0, 0, 1, 0, 0, 1, 0],
                [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
                "R U R' U R U' B U' B' R'"
            ],
            // case 53
            [
                [0, 1, 0, 0, 1, 1, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
                "l' U2 L U L' U' L U L' U l"
            ],
            // case 54
            [
                [0, 1, 0, 1, 1, 0, 0, 0, 0],
                [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
                "r U2 R' U' R U R' U' R U' r'"
            ],
            // case 55
            [
                [0, 0, 0, 1, 1, 1, 0, 0, 0],
                [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                "R' F R U R U' R2 F' R2 U' R' U R U R'"
            ],
            // case 56
            [
                [0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
                "r' U' r U' R' U R U' R' U R r' U r"
            ],
            // case 57
            [
                [1, 0, 1, 1, 1, 1, 1, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                "R U R' U' M' U R U' r'"
            ],
        ]
        let rotations = "";
        let matchFound = false;
        let count = 0;
        let returnStatement = [];
        while( !matchFound && count < 4) {
            await OllCases.forEach( async (currCase, index) => {
                if( await this.findOll( sides, currCase ) ) {
                    matchFound = true;
                    rotations = currCase[2]
                    returnStatement[0] = index + rotations;
                    returnStatement[1] = sides;
                }
            });
            if( !matchFound ) {
                await cube.parseRotations("U", speed);
            } else {
                await cube.parseRotations(rotations, speed);
            }
            sides = await cube.getSides();
            count += 1;
        }
        return returnStatement;
    }

    async pll(cube, speed) {
        // 0 front, 1 right, 2 back, 3 left
        // 0 blue, 1 red, 2 green, 3 orange
        let sides = cube.getSides();
        let pllCases =
        [
            // 'case Aa'
            [
                [0, 0, 2, 3, 1, 0, 1, 2, 1, 2, 3, 3],
                "R' F R' B2 R F' R' B2 R2"
            ],
            // 'case Ab'
            [
                [0, 3, 0, 1, 0, 2, 3, 1, 1, 2, 2, 3],
                "R B' R F2 R' B R F2 R2"
            ],
            // 'case E'
            [
                [0, 3, 2, 3, 0, 1, 2, 1, 0, 1, 2, 3],
                "R2 U R' U' y R U R' U' R U R' U' R U R' y' R U' R2"
            ],
            // 'case F'
            [
                [0, 3, 2, 3, 2, 0, 1, 1, 2, 0, 1, 2],
                "R' U2 R' d' R' F' R2 U' R' U R' F R U' F"
            ],
            // 'case Ga'
            [
                [0, 3, 0, 1, 2, 2, 3, 0, 1, 2, 1, 0, 1, 3],
                "R L U2 R' L' y' R' U L' U2 R U' L"
            ],
            // 'case Gb'
            [
                [0, 2, 1, 2, 0, 0, 1, 3, 2, 3, 1, 3],
                "R' U' R U D' R2 U R' U R U' R U' R2 D"
            ],
            // 'case Gc'
            [
                [0, 1, 0, 1, 3, 2, 3, 0, 1, 2, 2, 3],
                "L' R' U2 L R y L U' R U2 L' U R'"
            ],
            // 'case Gd'
            [
                [0, 3, 1, 2, 2, 0, 1, 0, 2, 3, 1, 3],
                "R U R' F2 D' L U' L' U L' D F2"
            ],
            // 'case H'
            [
                [0, 2, 0, 1, 3, 1, 2, 0, 2, 3, 1, 3],
                'M2 U M2 U2 M2 U M2'
            ],
            // 'case Ja'
            [
                [0, 0, 1, 2, 2, 0, 1, 1, 2, 2, 3],
                "R' U2 R U R' U2' L U' R U L'"
            ],
            // 'case Jb'
            [
                [0, 1, 1, 2, 0, 0, 1, 2, 2, 3, 3],
                "R U2 R' U' R U2 L' U R' U' L"
            ],
            // 'case Na'
            [
                [0, 2, 2, 3, 1, 1, 2, 0, 0, 1, 1, 3],
                "R U' L U2 R' U L' R U' L U2 R' U L'"
            ],
            // 'case Nb'
            [
                [0, 0, 2, 3, 3, 3, 1, 2, 2, 0, 1, 3],
                "R' U L' U2 R U' L R' U L' U2 R U' L"
            ],
            // 'case Ra'
            [
                [0, 3, 2, 3, 1, 0, 1, 0, 2, 3, 3],
                "R U2 R' U2 R B' R' U' R U R B R2"
            ],
            // 'case Rb'
            [
                [0, 1, 0, 1, 0, 2, 3, 2, 3, 1, 2],
                "R' U2 R U2 R' F R U R' U' R' F' R2'"
            ],
            // 'case T'
            [
                [0, 0, 1, 2, 3, 0, 1, 2, 2, 3, 1, 3],
                "R U R' U' R' F R2 U' R' U' R U R' F'"
            ],
            // 'case Ua'
            [
                [0, 1, 0, 1, 3, 1, 2, 2, 2, 3, 0, 3],
                "R U' R U R U R U' R' U' R2"
            ],
            // 'case Ub'
            [
                [0, 3, 0, 1, 0, 1, 2, 2, 2, 3, 1, 3],
                "L' U L' U' L' U' L' U L U L2"
            ],
            // 'case V'
            [
                [0, 0, 2, 3, 2, 1, 0, 1, 1, 2, 3],
                "R' U R' d' R' F' R2 U' R' U R' F R F"
            ],
            // 'case Y'
            [
                [0, 0, 2, 3, 1, 1, 2, 3, 0, 1, 2, 3],
                "F R U' R' U' R U R' F' R U R' U' R' F R F'"
            ],
            // 'case Z'
            [
                [0, 1, 0, 1, 0, 1, 2, 3, 2, 3, 2, 3],
                "M2 U M2 U M U2 M2 U2 M"
            ],
        ];

        // 0 front, 1 right, 2 back, 3 left
        // 0 blue, 1 red, 2 green, 3 orange
        let rotations = "";
        let matchFound = false;
        let count = 0;
        let returnStatement = [];
        while( !matchFound && count < 4) {
            await pllCases.forEach( async (currCase, index) => {
                let solution = await this.findPll( sides, currCase);
                if( solution[0]) {
                    for( let i = 0; i < solution[1]; i++ ) {
                        await cube.parseRotations("U");
                    }
                    await cube.parseRotations(currCase[1]);
                    returnStatement[0] = index + rotations;
                    returnStatement[1] = sides;
                    matchFound = true;
                }
            });
            // if( !matchFound ) {
            //     await cube.parseRotations("U", speed);
            // } else {
            //     console.log(rotations);
            //     await cube.parseRotations(rotations, speed);
            // }
            sides = await cube.getSides();
            count += 1;
        }
        return returnStatement;
    }

    async findOll( cubeSides, searchSides) {
        let match = true;
        let currTop = cubeSides.get("up");
        let topColor = currTop[4];
        let searchTop = searchSides[0];
        let searchEdges = searchSides[1];
        let frontEdges = cubeSides.get("front").slice(0, 3);
        let rightEdges = cubeSides.get("right").slice(0, 3);
        let backEdges = cubeSides.get("back").slice(0, 3);
        let leftEdges = cubeSides.get("left").slice(0, 3);
        let currEdges = frontEdges.concat(rightEdges, backEdges, leftEdges);
        // for (let index = 0; index < currTop.length; index++) {
        //     const element1 = currTop[index];
        //     const element2 = searchTop[index];
        //     if( element1 === topColor && element2 === 0 ) {
        //         match = false;
        //     }
        //     if( element1 != topColor && element2 === 1 ) {
        //         match = false;
        //     }
        // }
        for ( let index = 0; index < searchEdges.length; index++ ) {
            const element1 = currEdges[index];
            const element2 = searchEdges[index];
            if( element1 === topColor && element2 === 0 ) {
                match = false;
            }
            if( element1 != topColor && element2 === 1 ) {
                match = false;
            }
        }
        return match;
    }

    async findPll( cubeSides, searchSides) {
        let match = false;
        let frontColor = cubeSides.get("front")[4];
        let rightColor = cubeSides.get("right")[4];
        let backColor = cubeSides.get("back")[4];
        let leftColor = cubeSides.get("left")[4];
        let searchEdges = searchSides[0];
        let frontEdges = cubeSides.get("front").slice(0, 3);
        let rightEdges = cubeSides.get("right").slice(0, 3);
        let backEdges = cubeSides.get("back").slice(0, 3);
        let leftEdges = cubeSides.get("left").slice(0, 3);
        let currEdges = frontEdges.concat(rightEdges, backEdges, leftEdges);
        const conversionMap = new Map();
        conversionMap.set(frontColor, 0);
        conversionMap.set(rightColor, 1);
        conversionMap.set(backColor, 2);
        conversionMap.set(leftColor, 3);
        let index = -1;
        for( let i = 0; i< 4 && !match; i++ ) {
            match = true;
            index = i;
            for ( let index = 0; index < searchEdges.length; index++ ) {
                const element1 = currEdges[index];
                const element2 = searchEdges[index];
                if( conversionMap.get(element1) != element2) {
                    match = false;
                }
            }
            currEdges = currEdges.slice(-3).concat( currEdges.slice(0, -3));
        }
        return [match, index];
    }
}
