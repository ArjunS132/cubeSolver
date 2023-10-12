
import * as THREE from 'three'
import Block from './block.js'
import TWEEN from '@tweenjs/tween.js'

export default class Cube {
    constructor(size) {
        this.xAxis = new THREE.Vector3( 1, 0, 0 );
        this.yAxis = new THREE.Vector3( 0, 1, 0 );
        this.zAxis = new THREE.Vector3( 0, 0, 1 );
        this.cubeGroup = new THREE.Group();
        this.blocks = [];
        let index = 0;
        for( let i = 0; i < size; i++ ) {
            for( let j = 0; j < size; j++ ) {
                for( let k = 0; k < size; k++ ) {
                    this.blocks[index] = new Block(i, j, k);
                    index += 1;
                }
            }
        }
        this.blocks.forEach( (block) => {
            this.cubeGroup.add(block.blockGroup);
        });
    }

    rotateLeft() {
        var initialPositions = [ this.blocks[0].blockGroup,
                                 this.blocks[1].blockGroup,
                                 this.blocks[2].blockGroup,
                                 this.blocks[5].blockGroup,
                                 this.blocks[8].blockGroup,
                                 this.blocks[7].blockGroup,
                                 this.blocks[6].blockGroup,
                                 this.blocks[3].blockGroup
                                ]
        var finalPositions = initialPositions.slice(-2).concat(initialPositions.slice(0, -2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                         initialPositions[0].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[1].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[2].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[3].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[4].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[5].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[6].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[7].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[0];
                                    this.blocks[0] = this.blocks[2];
                                    this.blocks[2] = this.blocks[8];
                                    this.blocks[8] = this.blocks[6];
                                    this.blocks[6] = temp;
                                    var temp = this.blocks[1];
                                    this.blocks[1] = this.blocks[5];
                                    this.blocks[5] = this.blocks[7];
                                    this.blocks[7] = this.blocks[3];
                                    this.blocks[3] = temp;
                                    tween.stop();
                                } );

        return tween
    }

    rotateLeftInverted() {
        var initialPositions = [ this.blocks[0].blockGroup,
                                 this.blocks[1].blockGroup,
                                 this.blocks[2].blockGroup,
                                 this.blocks[5].blockGroup,
                                 this.blocks[8].blockGroup,
                                 this.blocks[7].blockGroup,
                                 this.blocks[6].blockGroup,
                                 this.blocks[3].blockGroup
                                ]
        var finalPositions = initialPositions.slice(2).concat(initialPositions.slice(0, 2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: -Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                         initialPositions[0].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[1].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[2].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[3].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[4].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[5].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[6].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[7].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[0];
                                    this.blocks[0] = this.blocks[6];
                                    this.blocks[6] = this.blocks[8];
                                    this.blocks[8] = this.blocks[2];
                                    this.blocks[2] = temp;
                                    var temp = this.blocks[1];
                                    this.blocks[1] = this.blocks[3];
                                    this.blocks[3] = this.blocks[7];
                                    this.blocks[7] = this.blocks[5];
                                    this.blocks[5] = temp;
                                    tween.stop();
                                } );

        return tween
    }


    rotateDown() {
        console.log(" in rotated down " );
        console.log(this.blocks[0])
        var initialPositions = [ this.blocks[0].blockGroup,
                                 this.blocks[9].blockGroup,
                                 this.blocks[18].blockGroup,
                                 this.blocks[19].blockGroup,
                                 this.blocks[20].blockGroup,
                                 this.blocks[11].blockGroup,
                                 this.blocks[2].blockGroup,
                                 this.blocks[1].blockGroup
                                ]
        var finalPositions = initialPositions.slice(-2).concat(initialPositions.slice(0, -2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0,
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[0];
                                    this.blocks[0] = this.blocks[18];
                                    this.blocks[18] = this.blocks[20];
                                    this.blocks[20] = this.blocks[2];
                                    this.blocks[2] = temp;
                                    var temp = this.blocks[1];
                                    this.blocks[1] = this.blocks[9];
                                    this.blocks[9] = this.blocks[19];
                                    this.blocks[19] = this.blocks[11];
                                    this.blocks[11] = temp;
                                    tween.stop();
                                } )

        return tween
    }

    rotateDownInverted() {
        var initialPositions = [ this.blocks[0].blockGroup,
                                 this.blocks[9].blockGroup,
                                 this.blocks[18].blockGroup,
                                 this.blocks[19].blockGroup,
                                 this.blocks[20].blockGroup,
                                 this.blocks[11].blockGroup,
                                 this.blocks[2].blockGroup,
                                 this.blocks[1].blockGroup
                            ]

        var finalPositions = initialPositions.slice(2).concat(initialPositions.slice(0, 2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: -Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                         initialPositions[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                         initialPositions[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                         initialPositions[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                         initialPositions[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                         initialPositions[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                         initialPositions[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                         initialPositions[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                         initialPositions[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                         prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[0];
                                    this.blocks[0] = this.blocks[2];
                                    this.blocks[2] = this.blocks[20];
                                    this.blocks[20] = this.blocks[18];
                                    this.blocks[18] = temp;
                                    var temp = this.blocks[9];
                                    this.blocks[9] = this.blocks[1];
                                    this.blocks[1] = this.blocks[11];
                                    this.blocks[11] = this.blocks[19];
                                    this.blocks[19] = temp;
                                    tween.stop();
                                } );

        return tween
    }

    rotateUp() {
        console.log(" in rotated down " );
        console.log(this.blocks[0])
        var initialPositions = [ this.blocks[6].blockGroup,
                                 this.blocks[15].blockGroup,
                                 this.blocks[24].blockGroup,
                                 this.blocks[25].blockGroup,
                                 this.blocks[26].blockGroup,
                                 this.blocks[17].blockGroup,
                                 this.blocks[8].blockGroup,
                                 this.blocks[7].blockGroup
                                ]
        var finalPositions = initialPositions.slice(2).concat(initialPositions.slice(0, 2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0,
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: - Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[6];
                                    this.blocks[6] = this.blocks[8];
                                    this.blocks[8] = this.blocks[26];
                                    this.blocks[26] = this.blocks[24];
                                    this.blocks[24] = temp;
                                    var temp = this.blocks[7];
                                    this.blocks[7] = this.blocks[17];
                                    this.blocks[17] = this.blocks[25];
                                    this.blocks[25] = this.blocks[15];
                                    this.blocks[15] = temp;
                                    tween.stop();
                                } )

        return tween
    }

    rotateUpInverted() {
        console.log(" in rotated down " );
        console.log(this.blocks[0])
        var initialPositions = [ this.blocks[6].blockGroup,
                                 this.blocks[15].blockGroup,
                                 this.blocks[24].blockGroup,
                                 this.blocks[25].blockGroup,
                                 this.blocks[26].blockGroup,
                                 this.blocks[17].blockGroup,
                                 this.blocks[8].blockGroup,
                                 this.blocks[7].blockGroup
                                ]
        var finalPositions = initialPositions.slice(-2).concat(initialPositions.slice(0, -2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0,
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[6];
                                    this.blocks[6] = this.blocks[24];
                                    this.blocks[24] = this.blocks[26];
                                    this.blocks[26] = this.blocks[8];
                                    this.blocks[8] = temp;
                                    var temp = this.blocks[7];
                                    this.blocks[7] = this.blocks[15];
                                    this.blocks[15] = this.blocks[25];
                                    this.blocks[25] = this.blocks[17];
                                    this.blocks[17] = temp;
                                    tween.stop();
                                } )

        return tween
    }

    rotateRight() {
        var initialPositions = [ this.blocks[18].blockGroup,
                                 this.blocks[19].blockGroup,
                                 this.blocks[20].blockGroup,
                                 this.blocks[23].blockGroup,
                                 this.blocks[26].blockGroup,
                                 this.blocks[25].blockGroup,
                                 this.blocks[24].blockGroup,
                                 this.blocks[21].blockGroup
                                ]
        var finalPositions = initialPositions.slice(2).concat(initialPositions.slice(0, 2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0,
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: -Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[18];
                                    this.blocks[18] = this.blocks[24];
                                    this.blocks[24] = this.blocks[26];
                                    this.blocks[26] = this.blocks[20];
                                    this.blocks[20] = temp;
                                    var temp = this.blocks[19];
                                    this.blocks[19] = this.blocks[21];
                                    this.blocks[21] = this.blocks[25];
                                    this.blocks[25] = this.blocks[23];
                                    this.blocks[23] = temp;
                                    tween.stop();
                                } )

        return tween
    }

    rotateRightInverted() {
        var initialPositions = [ this.blocks[18].blockGroup,
                                 this.blocks[19].blockGroup,
                                 this.blocks[20].blockGroup,
                                 this.blocks[23].blockGroup,
                                 this.blocks[26].blockGroup,
                                 this.blocks[25].blockGroup,
                                 this.blocks[24].blockGroup,
                                 this.blocks[21].blockGroup
                                ]
        var finalPositions = initialPositions.slice(-2).concat(initialPositions.slice(0, -2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0,
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[18];
                                    this.blocks[18] = this.blocks[20];
                                    this.blocks[20] = this.blocks[26];
                                    this.blocks[26] = this.blocks[24];
                                    this.blocks[20] = temp;
                                    var temp = this.blocks[19];
                                    this.blocks[19] = this.blocks[23];
                                    this.blocks[23] = this.blocks[25];
                                    this.blocks[25] = this.blocks[21];
                                    this.blocks[21] = temp;
                                    tween.stop();
                                } )

        return tween
    }

    rotateBack() {
        var initialPositions = [ this.blocks[0].blockGroup,
                                 this.blocks[9].blockGroup,
                                 this.blocks[18].blockGroup,
                                 this.blocks[21].blockGroup,
                                 this.blocks[24].blockGroup,
                                 this.blocks[15].blockGroup,
                                 this.blocks[6].blockGroup,
                                 this.blocks[3].blockGroup
                                ]
        var finalPositions = initialPositions.slice(2).concat(initialPositions.slice(0, 2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[0];
                                    this.blocks[0] = this.blocks[6];
                                    this.blocks[6] = this.blocks[24];
                                    this.blocks[24] = this.blocks[18];
                                    this.blocks[18] = temp;
                                    var temp = this.blocks[3];
                                    this.blocks[3] = this.blocks[15];
                                    this.blocks[15] = this.blocks[21];
                                    this.blocks[21] = this.blocks[9];
                                    this.blocks[9] = temp;
                                    tween.stop();
                                } )

        return tween;
    }

    rotateBackInverted() {
        var initialPositions = [ this.blocks[0].blockGroup,
                                 this.blocks[9].blockGroup,
                                 this.blocks[18].blockGroup,
                                 this.blocks[21].blockGroup,
                                 this.blocks[24].blockGroup,
                                 this.blocks[15].blockGroup,
                                 this.blocks[6].blockGroup,
                                 this.blocks[3].blockGroup
                                ]
        var finalPositions = initialPositions.slice(-2).concat(initialPositions.slice(0, -2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: - Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[0];
                                    this.blocks[0] = this.blocks[18];
                                    this.blocks[18] = this.blocks[24];
                                    this.blocks[24] = this.blocks[6];
                                    this.blocks[6] = temp;
                                    var temp = this.blocks[3];
                                    this.blocks[3] = this.blocks[9];
                                    this.blocks[9] = this.blocks[21];
                                    this.blocks[21] = this.blocks[15];
                                    this.blocks[15] = temp;
                                    tween.stop();
                                    this.rotateRight().start();
                                } )

        return tween;
    }

    rotateFront() {
        var initialPositions = [ this.blocks[8].blockGroup,
                                 this.blocks[17].blockGroup,
                                 this.blocks[26].blockGroup,
                                 this.blocks[23].blockGroup,
                                 this.blocks[20].blockGroup,
                                 this.blocks[11].blockGroup,
                                 this.blocks[2].blockGroup,
                                 this.blocks[5].blockGroup
                                ]
        var finalPositions = initialPositions.slice(2).concat(initialPositions.slice(0, 2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0,
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: -Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[2];
                                    this.blocks[2] = this.blocks[20];
                                    this.blocks[20] = this.blocks[26];
                                    this.blocks[26] = this.blocks[8];
                                    this.blocks[8] = temp;
                                    var temp = this.blocks[5];
                                    this.blocks[5] = this.blocks[11];
                                    this.blocks[11] = this.blocks[23];
                                    this.blocks[23] = this.blocks[17];
                                    this.blocks[17] = temp;
                                    tween.stop();
                                    this.rotateRight().start();
                                } )

        return tween;
    }

    rotateFrontInverted() {
        var initialPositions = [ this.blocks[8].blockGroup,
                                 this.blocks[17].blockGroup,
                                 this.blocks[26].blockGroup,
                                 this.blocks[23].blockGroup,
                                 this.blocks[20].blockGroup,
                                 this.blocks[11].blockGroup,
                                 this.blocks[2].blockGroup,
                                 this.blocks[5].blockGroup
                                ]
        var finalPositions = initialPositions.slice(-2).concat(initialPositions.slice(0, -2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1position: initialPositions[0].position, ele2position: initialPositions[1].position,
                                         ele3position: initialPositions[2].position, ele4position: initialPositions[3].position,
                                         ele5position: initialPositions[4].position, ele6position: initialPositions[5].position,
                                         ele7position: initialPositions[6].position, ele8position: initialPositions[7].position,
                                         rotation: 0,
                                      })
                                .to( {   ele1position: finalPositions[0].position, ele2position: finalPositions[1].position,
                                         ele3position: finalPositions[2].position, ele4position: finalPositions[3].position,
                                         ele5position: finalPositions[4].position, ele6position: finalPositions[5].position,
                                         ele7position: finalPositions[6].position, ele8position: finalPositions[7].position,
                                         rotation: Math.PI / 2
                                    }, 2000 )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {

                                    var temp = this.blocks[2];
                                    this.blocks[2] = this.blocks[8];
                                    this.blocks[8] = this.blocks[26];
                                    this.blocks[26] = this.blocks[20];
                                    this.blocks[20] = temp;
                                    var temp = this.blocks[5];
                                    this.blocks[5] = this.blocks[17];
                                    this.blocks[17] = this.blocks[23];
                                    this.blocks[23] = this.blocks[11];
                                    this.blocks[11] = temp;
                                    tween.stop();
                                    this.rotateRight().start();
                                } )
        return tween
    }
}

