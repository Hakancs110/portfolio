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
        this.scene.background = new THREE.Color(0x000000)
        this.resources = this.experience.resources

        this.resource = this.resources.items
        // Wait for resources
        this.resources.on('ready', () =>
            {
                // Setup
                this.environment = new Environment()
                this.resource2 = this.resources.items['room']
                console.log(this.resource2)
                console.log("after undefined")
                this.setCube();


            })



    }
    setCube() {

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

        this.cube = new THREE.Mesh(geometry, material);
        this.model = this.resource2.scene
        this.model.scale.set(1, 1, 1)
        console.log(this.resource2)
        console.log("in on ready")
        this.scene.add(this.model)


        if (this.model && this.model.scene && this.model.scene instanceof THREE.Object3D) {
            this.model.scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    console.log("lka")
                    this.scene.add(child); // Sadece Mesh türündeki alt öğeleri ekleyin
                }
            });
        }
    }

    update()
    {

            
    }
}