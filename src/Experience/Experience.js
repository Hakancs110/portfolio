import * as THREE from 'three'
// import Debug from './Utils/Debug.js'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'
import sources from './sources.js'

let instance = null
export default class Experience
{
    constructor(canvas)
    {
        if(instance){
            return instance
        }
        instance = this
        window.experience = this
        // this.debug = new Debug()
        console.log('Here starts a great experience')
        this.canvas = canvas
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        this.sizes.on('resize', () =>
            {
                this.resize()
            })

        this.time.on('tick', () =>
            {
                this.update()
            })
    }
    resize()
    {   
        this.camera.resize()
        this.renderer.resize()

    }

    update(){
        this.camera.update()
        this.renderer.update()
    }
    
}