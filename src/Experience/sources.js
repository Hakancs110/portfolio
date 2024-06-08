export default[
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path:
        [
            '/textures/environmentMap/px.jpg',
            '/textures/environmentMap/nx.jpg',
            '/textures/environmentMap/py.jpg',
            '/textures/environmentMap/ny.jpg',
            '/textures/environmentMap/pz.jpg',
            '/textures/environmentMap/nz.jpg'
        ]
    },
    {
        name: 'room', // Modelin adı
        type: 'gltfModel',    // Modelin türü
        path: '/models/main_deletingvisibleFaces.glb' // Modelin dosya yolu
    }
]