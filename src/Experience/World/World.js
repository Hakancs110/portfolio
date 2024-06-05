import * as THREE from 'three'


import Experience from '../Experience.js'
import Environment from './Environment.js'
import Resources from '../Utils/Resources.js'
export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.environment = new Environment()

        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )
        this.testMesh2= new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )

        this.resources = this.experience.resources
        // Wait for resources

        this.resources.on('ready', () =>
            {
                // Setup
                this.environment = new Environment()
            })
            this.setCube();

    }
    setCube() {
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
    }

    update()
    {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
            
    }
}