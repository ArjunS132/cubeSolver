
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
        // this.xAxis = this.blocks[13].blockGroup.position;
        // this.xAxis.normalize();
    }

    rotateLeft(speed) {
        this.blocks[9].blockGroup.children[0].materials;
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                         initialPositions[0].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[1].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[2].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[3].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[4].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[5].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[6].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[7].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         this.blocks[4].blockGroup.rotateOnWorldAxis( this.xAxis, angle.rotation - prev);
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

    rotateLeftInverted(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                         initialPositions[0].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[1].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[2].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[3].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[4].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[5].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[6].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         initialPositions[7].rotateOnWorldAxis(this.xAxis, angle.rotation - prev );
                                         this.blocks[4].blockGroup.rotateOnWorldAxis( this.xAxis, angle.rotation - prev);
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

    rotateDown(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    this.blocks[10].blockGroup.rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
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

    rotateDownInverted(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                    initialPositions[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                    initialPositions[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                    initialPositions[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                    initialPositions[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                    initialPositions[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                    initialPositions[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                    initialPositions[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev );
                                    this.blocks[10].blockGroup.rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
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

    rotateUp(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    this.blocks[16].blockGroup.rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
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

    rotateUpInverted(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    this.blocks[16].blockGroup.rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
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

    rotateRight(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    this.blocks[22].blockGroup.rotateOnWorldAxis( this.xAxis, angle.rotation - prev);
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

    rotateRightInverted(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.xAxis, angle.rotation - prev);
                                    this.blocks[22].blockGroup.rotateOnWorldAxis( this.xAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    var temp = this.blocks[18];
                                    this.blocks[18] = this.blocks[20];
                                    this.blocks[20] = this.blocks[26];
                                    this.blocks[26] = this.blocks[24];
                                    this.blocks[24] = temp;
                                    var temp = this.blocks[19];
                                    this.blocks[19] = this.blocks[23];
                                    this.blocks[23] = this.blocks[25];
                                    this.blocks[25] = this.blocks[21];
                                    this.blocks[21] = temp;
                                    tween.stop();
                                } )

        return tween
    }

    rotateBack(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    this.blocks[12].blockGroup.rotateOnWorldAxis( this.zAxis, angle.rotation - prev);
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

    rotateBackInverted(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    this.blocks[12].blockGroup.rotateOnWorldAxis( this.zAxis, angle.rotation - prev);
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
                                } )

        return tween;
    }

    rotateFront(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    this.blocks[14].blockGroup.rotateOnWorldAxis( this.zAxis, angle.rotation - prev);
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
                                } )

        return tween;
    }

    rotateFrontInverted(speed) {
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
                                    }, speed )
                                .onUpdate( (angle) => {
                                    initialPositions[0].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[1].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[2].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[3].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[4].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[5].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[6].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    initialPositions[7].rotateOnWorldAxis(this.zAxis, angle.rotation - prev);
                                    this.blocks[14].blockGroup.rotateOnWorldAxis( this.zAxis, angle.rotation - prev);
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
                                } )
        return tween
    }

    /*
     * TODO implement x, y, z rotations ( might just use the cubeGroup)
     */
    rotateYInvert(speed) {
        var initialPositionsTop = [ this.blocks[6].blockGroup,
                                 this.blocks[15].blockGroup,
                                 this.blocks[24].blockGroup,
                                 this.blocks[25].blockGroup,
                                 this.blocks[26].blockGroup,
                                 this.blocks[17].blockGroup,
                                 this.blocks[8].blockGroup,
                                 this.blocks[7].blockGroup
                                ]
        var finalPositionsTop = initialPositionsTop.slice(-2).concat(initialPositionsTop.slice(0, -2));
        var initialPositionsDown = [ this.blocks[0].blockGroup,
                                 this.blocks[9].blockGroup,
                                 this.blocks[18].blockGroup,
                                 this.blocks[19].blockGroup,
                                 this.blocks[20].blockGroup,
                                 this.blocks[11].blockGroup,
                                 this.blocks[2].blockGroup,
                                 this.blocks[1].blockGroup
                            ]

        var finalPositionsDown = initialPositionsDown.slice(-2).concat(initialPositionsDown.slice(0, -2));
        var initialPositionsMid = [ this.blocks[3].blockGroup,
                                 this.blocks[12].blockGroup,
                                 this.blocks[21].blockGroup,
                                 this.blocks[22].blockGroup,
                                 this.blocks[23].blockGroup,
                                 this.blocks[14].blockGroup,
                                 this.blocks[5].blockGroup,
                                 this.blocks[4].blockGroup
                            ]

        var finalPositionsMid = initialPositionsMid.slice(-2).concat(initialPositionsMid.slice(0, -2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1: initialPositionsTop[0].position, ele2: initialPositionsTop[1].position,
                                         ele3: initialPositionsTop[2].position, ele4: initialPositionsTop[3].position,
                                         ele5: initialPositionsTop[4].position, ele6: initialPositionsTop[5].position,
                                         ele7: initialPositionsTop[6].position, ele8: initialPositionsTop[7].position,
                                         ele9: initialPositionsDown[0].position, ele10: initialPositionsDown[1].position,
                                         ele11: initialPositionsDown[2].position, ele12: initialPositionsDown[3].position,
                                         ele13: initialPositionsDown[4].position, ele14: initialPositionsDown[5].position,
                                         ele15: initialPositionsDown[6].position, ele16: initialPositionsDown[7].position,
                                         ele17: initialPositionsMid[0].position, ele18: initialPositionsMid[1].position,
                                         ele19: initialPositionsMid[2].position, ele20: initialPositionsMid[3].position,
                                         ele21: initialPositionsMid[4].position, ele22: initialPositionsMid[5].position,
                                         ele23: initialPositionsMid[6].position, ele24: initialPositionsMid[7].position,
                                         rotation: 0,
                                      })
                                .to( {   ele1: finalPositionsTop[0].position, ele2: finalPositionsTop[1].position,
                                         ele3: finalPositionsTop[2].position, ele4: finalPositionsTop[3].position,
                                         ele5: finalPositionsTop[4].position, ele6: finalPositionsTop[5].position,
                                         ele7: finalPositionsTop[6].position, ele8: finalPositionsTop[7].position,
                                         ele9: finalPositionsDown[0].position, ele10: finalPositionsDown[1].position,
                                         ele11: finalPositionsDown[2].position, ele12: finalPositionsDown[3].position,
                                         ele13: finalPositionsDown[4].position, ele14: finalPositionsDown[5].position,
                                         ele15: finalPositionsDown[6].position, ele16: finalPositionsDown[7].position,
                                         ele17: finalPositionsMid[0].position, ele18: finalPositionsMid[1].position,
                                         ele19: finalPositionsMid[2].position, ele20: finalPositionsMid[3].position,
                                         ele21: finalPositionsMid[4].position, ele22: finalPositionsMid[5].position,
                                         ele23: finalPositionsMid[6].position, ele24: finalPositionsMid[7].position,
                                         rotation: Math.PI / 2
                                    }, speed )
                                .onUpdate( (angle) => {
                                    // top side
                                    initialPositionsTop[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    // middle side
                                    initialPositionsMid[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    // bottom side
                                    initialPositionsDown[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    // top center
                                    this.blocks[16].blockGroup.rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    // bottom center
                                    this.blocks[10].blockGroup.rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    // TODO FIX THE ARRAYS
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
                                    var temp = this.blocks[3];
                                    this.blocks[3] = this.blocks[21];
                                    this.blocks[21] = this.blocks[23];
                                    this.blocks[23] = this.blocks[5];
                                    this.blocks[5] = temp;
                                    var temp = this.blocks[4];
                                    this.blocks[4] = this.blocks[12];
                                    this.blocks[12] = this.blocks[22];
                                    this.blocks[22] = this.blocks[14];
                                    this.blocks[14] = temp;
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

    rotateY(speed) {
        var initialPositionsTop = [ this.blocks[6].blockGroup,
                                 this.blocks[15].blockGroup,
                                 this.blocks[24].blockGroup,
                                 this.blocks[25].blockGroup,
                                 this.blocks[26].blockGroup,
                                 this.blocks[17].blockGroup,
                                 this.blocks[8].blockGroup,
                                 this.blocks[7].blockGroup
                                ]
        var finalPositionsTop = initialPositionsTop.slice(2).concat(initialPositionsTop.slice(0, 2));
        var initialPositionsDown = [ this.blocks[0].blockGroup,
                                 this.blocks[9].blockGroup,
                                 this.blocks[18].blockGroup,
                                 this.blocks[19].blockGroup,
                                 this.blocks[20].blockGroup,
                                 this.blocks[11].blockGroup,
                                 this.blocks[2].blockGroup,
                                 this.blocks[1].blockGroup
                            ]

        var finalPositionsDown = initialPositionsDown.slice(2).concat(initialPositionsDown.slice(0, 2));
        var initialPositionsMid = [ this.blocks[3].blockGroup,
                                 this.blocks[12].blockGroup,
                                 this.blocks[21].blockGroup,
                                 this.blocks[22].blockGroup,
                                 this.blocks[23].blockGroup,
                                 this.blocks[14].blockGroup,
                                 this.blocks[5].blockGroup,
                                 this.blocks[4].blockGroup
                            ]

        var finalPositionsMid = initialPositionsMid.slice(2).concat(initialPositionsMid.slice(0, 2));
        var prev = 0;
        const tween = new TWEEN.Tween( { ele1: initialPositionsTop[0].position, ele2: initialPositionsTop[1].position,
                                         ele3: initialPositionsTop[2].position, ele4: initialPositionsTop[3].position,
                                         ele5: initialPositionsTop[4].position, ele6: initialPositionsTop[5].position,
                                         ele7: initialPositionsTop[6].position, ele8: initialPositionsTop[7].position,
                                         ele9: initialPositionsDown[0].position, ele10: initialPositionsDown[1].position,
                                         ele11: initialPositionsDown[2].position, ele12: initialPositionsDown[3].position,
                                         ele13: initialPositionsDown[4].position, ele14: initialPositionsDown[5].position,
                                         ele15: initialPositionsDown[6].position, ele16: initialPositionsDown[7].position,
                                         ele17: initialPositionsMid[0].position, ele18: initialPositionsMid[1].position,
                                         ele19: initialPositionsMid[2].position, ele20: initialPositionsMid[3].position,
                                         ele21: initialPositionsMid[4].position, ele22: initialPositionsMid[5].position,
                                         ele23: initialPositionsMid[6].position, ele24: initialPositionsMid[7].position,
                                         rotation: 0,
                                      })
                                .to( {   ele1: finalPositionsTop[0].position, ele2: finalPositionsTop[1].position,
                                         ele3: finalPositionsTop[2].position, ele4: finalPositionsTop[3].position,
                                         ele5: finalPositionsTop[4].position, ele6: finalPositionsTop[5].position,
                                         ele7: finalPositionsTop[6].position, ele8: finalPositionsTop[7].position,
                                         ele9: finalPositionsDown[0].position, ele10: finalPositionsDown[1].position,
                                         ele11: finalPositionsDown[2].position, ele12: finalPositionsDown[3].position,
                                         ele13: finalPositionsDown[4].position, ele14: finalPositionsDown[5].position,
                                         ele15: finalPositionsDown[6].position, ele16: finalPositionsDown[7].position,
                                         ele17: finalPositionsMid[0].position, ele18: finalPositionsMid[1].position,
                                         ele19: finalPositionsMid[2].position, ele20: finalPositionsMid[3].position,
                                         ele21: finalPositionsMid[4].position, ele22: finalPositionsMid[5].position,
                                         ele23: finalPositionsMid[6].position, ele24: finalPositionsMid[7].position,
                                         rotation: - Math.PI / 2
                                    }, speed )
                                .onUpdate( (angle) => {
                                    // top side
                                    initialPositionsTop[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsTop[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    // middle side
                                    initialPositionsMid[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsMid[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    // bottom side
                                    initialPositionsDown[0].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[1].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[2].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[3].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[4].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[5].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[6].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    initialPositionsDown[7].rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    // top center
                                    this.blocks[16].blockGroup.rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    // bottom center
                                    this.blocks[10].blockGroup.rotateOnWorldAxis(this.yAxis, angle.rotation - prev);
                                    prev = angle.rotation;
                                })
                                .onComplete( () => {
                                    // TODO FIX THE ARRAYS
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
                                    var temp = this.blocks[3];
                                    this.blocks[3] = this.blocks[5];
                                    this.blocks[5] = this.blocks[23];
                                    this.blocks[23] = this.blocks[21];
                                    this.blocks[21] = temp;
                                    var temp = this.blocks[4];
                                    this.blocks[4] = this.blocks[14];
                                    this.blocks[14] = this.blocks[22];
                                    this.blocks[22] = this.blocks[12];
                                    this.blocks[12] = temp;
                                    var temp = this.blocks[0];
                                    this.blocks[0] = this.blocks[2];
                                    this.blocks[2] = this.blocks[20];
                                    this.blocks[20] = this.blocks[18];
                                    this.blocks[18] = temp;
                                    var temp = this.blocks[1];
                                    this.blocks[1] = this.blocks[11];
                                    this.blocks[11] = this.blocks[19];
                                    this.blocks[19] = this.blocks[9];
                                    this.blocks[9] = temp;
                                    tween.stop();
                                } )

        return tween

    }


    /*
     * @param {String} str
     */
    async parseRotations(str, speed) {

        function until(conditionFunction) {

          const poll = resolve => {
            if(conditionFunction()) resolve();
            else setTimeout(_ => poll(resolve), 10);
          }

          return new Promise(poll);
        }
        function replaceAndSplit(input) {
            // Use regular expression to replace letter2 with letter space letter
            input = input.replace(/([A-Za-z])2/g, '$1 $1');
            // Split the modified string on spaces
            const splitArray = input.trim().split(' ');
            return splitArray;
        }
        let rotations = replaceAndSplit(str);
        console.log(rotations);
        for( let i = 0; i < rotations.length; i++) {
            var rotation = rotations[i];
            var tween;
            var playRotation = true;
            switch (rotation) {
                case "F":
                    tween = this.rotateFront(speed);
                    break;
                case "F'":
                    tween = this.rotateFrontInverted(speed);
                    break;
                case "R":
                    tween = this.rotateRight(speed);
                    break;
                case "R'":
                    tween = this.rotateRightInverted(speed);
                    break;
                case "L":
                    tween = this.rotateLeft(speed);
                    break;
                case "L'":
                    tween = this.rotateLeftInverted(speed);
                    break;
                case "D":
                    tween = this.rotateDown(speed);
                    break;
                case "D'":
                    tween = this.rotateDownInverted(speed);
                    break;
                case "U":
                    tween = this.rotateUp(speed);
                    break;
                case "U'":
                    tween = this.rotateUpInverted(speed);
                    break;
                case "B":
                    tween = this.rotateBack(speed);
                    break;
                case "B'":
                    tween = this.rotateBackInverted(speed);
                    break;
                case "y":
                    tween = this.rotateY(speed);
                    break;
                case "y'":
                    tween = this.rotateYInvert(speed);
                    break;
                default:
                    playRotation = false;
            }
            if( playRotation ) {
                tween.start();
                await until(_ => tween.isPlaying() === false );
            }
        }
    }

    /*
     * returns 6 arrays which are the surfaces of the cube
     */
    getSides() {
        const raycaster = new THREE.Raycaster();
        const rightVector = new THREE.Vector3(1, 0, 0);
        const leftVector = new THREE.Vector3(-1, 0, 0);
        const upVector = new THREE.Vector3(0, 1, 0);
        const downVector = new THREE.Vector3(0, -1, 0);
        const frontVector = new THREE.Vector3(0, 0, 1);
        const backVector = new THREE.Vector3(0, 0, -1);
        const colors = [ "red", "orange", "white", "yellow", "green", "blue" ];
        const sides = new Map();
        var currBlocks = []
        var intersects, faceIndex, faceColor;
        // the blocks that are on up
        currBlocks.push( this.blocks[6] );
        currBlocks.push( this.blocks[15] );
        currBlocks.push( this.blocks[24] );
        currBlocks.push( this.blocks[7] );
        currBlocks.push( this.blocks[16] );
        currBlocks.push( this.blocks[25] );
        currBlocks.push( this.blocks[8] );
        currBlocks.push( this.blocks[17] );
        currBlocks.push( this.blocks[26] );
        const up = [];

        currBlocks.forEach(block => {
            let currBlock = block.blockGroup.children[0]
            raycaster.ray.origin.copy(currBlock.parent.position);
            raycaster.ray.direction.copy(upVector);
            intersects = raycaster.intersectObject(currBlock);
            faceIndex = intersects[0].face.materialIndex;
            faceColor = colors[faceIndex];
            up.push(faceColor);
        });
        sides.set("up", up);

        // empty out the array
        currBlocks.length = 0;
        // left side blocks
        currBlocks.push( this.blocks[6] );
        currBlocks.push( this.blocks[7] );
        currBlocks.push( this.blocks[8] );
        currBlocks.push( this.blocks[3] );
        currBlocks.push( this.blocks[4] );
        currBlocks.push( this.blocks[5] );
        currBlocks.push( this.blocks[0] );
        currBlocks.push( this.blocks[1] );
        currBlocks.push( this.blocks[2] );
        const left = []

        currBlocks.forEach(block => {
            let currBlock = block.blockGroup.children[0]
            raycaster.ray.origin.copy(currBlock.parent.position);
            raycaster.ray.direction.copy(leftVector);
            intersects = raycaster.intersectObject(currBlock);
            faceIndex = intersects[0].face.materialIndex;
            faceColor = colors[faceIndex];
            left.push(faceColor);
        });
        sides.set("left", left);

        // empty out the array
        currBlocks.length = 0;
        // front side blocks
        currBlocks.push( this.blocks[8] );
        currBlocks.push( this.blocks[17] );
        currBlocks.push( this.blocks[26] );
        currBlocks.push( this.blocks[5] );
        currBlocks.push( this.blocks[14] );
        currBlocks.push( this.blocks[23] );
        currBlocks.push( this.blocks[2] );
        currBlocks.push( this.blocks[11] );
        currBlocks.push( this.blocks[20] );
        const front = []

        currBlocks.forEach(block => {
            let currBlock = block.blockGroup.children[0]
            raycaster.ray.origin.copy(currBlock.parent.position);
            raycaster.ray.direction.copy(frontVector);
            intersects = raycaster.intersectObject(currBlock);
            faceIndex = intersects[0].face.materialIndex;
            faceColor = colors[faceIndex];
            front.push(faceColor);
        });
        sides.set("front", front);

        // empty out the array
        currBlocks.length = 0;
        // right side blocks
        currBlocks.push( this.blocks[26] );
        currBlocks.push( this.blocks[25] );
        currBlocks.push( this.blocks[24] );
        currBlocks.push( this.blocks[23] );
        currBlocks.push( this.blocks[22] );
        currBlocks.push( this.blocks[21] );
        currBlocks.push( this.blocks[20] );
        currBlocks.push( this.blocks[19] );
        currBlocks.push( this.blocks[18] );
        const right = []

        currBlocks.forEach(block => {
            let currBlock = block.blockGroup.children[0]
            raycaster.ray.origin.copy(currBlock.parent.position);
            raycaster.ray.direction.copy(rightVector);
            intersects = raycaster.intersectObject(currBlock);
            faceIndex = intersects[0].face.materialIndex;
            faceColor = colors[faceIndex];
            right.push(faceColor);
        });
        sides.set("right", right);

        // empty out the array
        currBlocks.length = 0;
        // back side blocks
        currBlocks.push( this.blocks[24] );
        currBlocks.push( this.blocks[15] );
        currBlocks.push( this.blocks[6] );
        currBlocks.push( this.blocks[21] );
        currBlocks.push( this.blocks[12] );
        currBlocks.push( this.blocks[3] );
        currBlocks.push( this.blocks[18] );
        currBlocks.push( this.blocks[9] );
        currBlocks.push( this.blocks[0] );
        const back = []

        currBlocks.forEach(block => {
            let currBlock = block.blockGroup.children[0]
            raycaster.ray.origin.copy(currBlock.parent.position);
            raycaster.ray.direction.copy(backVector);
            intersects = raycaster.intersectObject(currBlock);
            faceIndex = intersects[0].face.materialIndex;
            faceColor = colors[faceIndex];
            back.push(faceColor);
        });
        sides.set("back", back);

        // empty out the array
        currBlocks.length = 0;
        // down side blocks
        currBlocks.push( this.blocks[2] );
        currBlocks.push( this.blocks[11] );
        currBlocks.push( this.blocks[20] );
        currBlocks.push( this.blocks[1] );
        currBlocks.push( this.blocks[10] );
        currBlocks.push( this.blocks[19] );
        currBlocks.push( this.blocks[0] );
        currBlocks.push( this.blocks[9] );
        currBlocks.push( this.blocks[18] );
        const down = []

        currBlocks.forEach(block => {
            let currBlock = block.blockGroup.children[0]
            raycaster.ray.origin.copy(currBlock.parent.position);
            raycaster.ray.direction.copy(downVector);
            intersects = raycaster.intersectObject(currBlock);
            faceIndex = intersects[0].face.materialIndex;
            faceColor = colors[faceIndex];
            down.push(faceColor);
        });
        sides.set("down", down);
        return sides;
    }

    findPiece(searchColors) {
        const raycaster = new THREE.Raycaster();
        const rightVector = new THREE.Vector3(1, 0, 0);
        const leftVector = new THREE.Vector3(-1, 0, 0);
        const upVector = new THREE.Vector3(0, 1, 0);
        const downVector = new THREE.Vector3(0, -1, 0);
        const frontVector = new THREE.Vector3(0, 0, 1);
        const backVector = new THREE.Vector3(0, 0, -1);
        const colors = [ "red", "orange", "white", "yellow", "green", "blue" ];
        // the vectors for outward facing faces for each block
        let blockColors = [];
        const vectors = [ [leftVector, backVector, downVector],
                            [leftVector, downVector],
                            [leftVector, downVector, frontVector],
                            [leftVector, backVector],
                            [leftVector],
                            [leftVector, frontVector],
                            [leftVector, backVector, upVector],
                            [leftVector, upVector],
                            [leftVector, upVector, frontVector],
                            [downVector, backVector],
                            [downVector],
                            [downVector, frontVector],
                            [backVector],
                            [],
                            [frontVector],
                            [backVector, upVector],
                            [upVector],
                            [upVector, frontVector],
                            [downVector, rightVector, backVector],
                            [downVector, rightVector],
                            [downVector, rightVector, frontVector],
                            [rightVector, backVector],
                            [rightVector],
                            [rightVector, frontVector],
                            [rightVector, backVector, upVector],
                            [rightVector, upVector],
                            [rightVector, upVector, frontVector] ];
        this.blocks.forEach( (block, index) => {
            let currBlock = block.blockGroup.children[0]
            raycaster.ray.origin.copy(currBlock.parent.position);
            let faceColors = []
            vectors.at(index).forEach( vector => {
                raycaster.ray.direction.copy(vector);
                let intersects = raycaster.intersectObject(currBlock);
                let faceIndex = intersects[0].face.materialIndex;
                let faceColor = colors[faceIndex];
                faceColors.push(faceColor);
            });
            blockColors.push(faceColors);
        });

        // search through all the colors to find the index of the block that's being serached
        let returnIndex = -1;
        blockColors.forEach( (block, index) => {
            if( searchColors.every( currColor => block.includes(currColor) ) && block.length === searchColors.length) {
                returnIndex = index;
            }
        });
        return returnIndex;
    }
}

