
import * as THREE from 'three'
export default class Block {
    constructor(x, y, z) {
        this.blockGroup = new THREE.Group();
        this.initialPosition = [x, y, z];
        this.initialVector = new THREE.Vector3(x, y, z);
        const geometry = new THREE.BoxGeometry(1, 1, 1);

        var materials = [
          new THREE.MeshBasicMaterial({ color: 0xb71234 }), // Right face (Red)
          new THREE.MeshBasicMaterial({ color: 0xff5800 }), // Left face (Orange)
          new THREE.MeshBasicMaterial({ color: 0xffffff }), // Top face (White)
          new THREE.MeshBasicMaterial({ color: 0xffdf00 }), // Bottom face (Yellow)
          new THREE.MeshBasicMaterial({ color: 0x009b58 }), // Front face (Green)
          new THREE.MeshBasicMaterial({ color: 0x0046ad })  // Back face (Blue)
        ];

        this.blockMesh = new THREE.Mesh(geometry, materials);
        const lineGeometry = new THREE.EdgesGeometry(this.blockMesh.geometry);
        const lineMaterial = new THREE.MeshBasicMaterial( {
            color: 0x000000
        });
        this.lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
        this.blockGroup.add(this.blockMesh);
        this.blockGroup.add(this.lineMesh);
        this.blockGroup.position.x = x;
        this.blockGroup.position.y = y;
        this.blockGroup.position.z = z;
    }
}
