
import * as THREE from 'three'
export default class Block {
    constructor(x, y, z) {
        this.blockGroup = new THREE.Group();
        const geometry = new THREE.BoxGeometry(1, 1, 1);

        let materials = [
          new THREE.MeshBasicMaterial({ color: 0xb71234, side: THREE.DoubleSide }), // Right face (Red)
          new THREE.MeshBasicMaterial({ color: 0xff5800, side: THREE.DoubleSide }), // Left face (Orange)
          new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }), // Top face (White)
          new THREE.MeshBasicMaterial({ color: 0xffdf00, side: THREE.DoubleSide }), // Bottom face (Yellow)
          new THREE.MeshBasicMaterial({ color: 0x009b58, side: THREE.DoubleSide }), // Front face (Green)
          new THREE.MeshBasicMaterial({ color: 0x0046ad, side: THREE.DoubleSide })  // Back face (Blue)
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
