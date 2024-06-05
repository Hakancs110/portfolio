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
        const testMesh2= new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )

        this.scene.add(testMesh)
        testMesh.translateX(1)
        this.resources = this.experience.resources
        // Wait for resources

        this.resources.on('ready', () =>
            {
                // Setup
                this.environment = new Environment()
            })
    }
}