
import * as THREE from 'three'
export default class Block {
    constructor(x, y, z) {
        this.blockGroup = new THREE.Group();
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial( {
            vertexColors: true
        });
        const positionAttribute = geometry.getAttribute('position');
        const color = new THREE.Color();
        const colorHexs = [0x009b48, 0xffffff, 0xb71234, 0xffd500, 0x0046ad, 0xff5800];
        const colors = []
        for (let i = 0; i < 6; i += 1) {
            color.setHex(colorHexs[5-i]);
            colors.push(color.r, color.g, color.b);
            colors.push(color.r, color.g, color.b);
            colors.push(color.r, color.g, color.b);
            colors.push(color.r, color.g, color.b);
        }
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3) );
        this.blockMesh = new THREE.Mesh(geometry, material);
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
