import React from "react";
import * as THREE from "three";
import img from '../images/face1.jpg'


class Cube extends React.Component {
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
        renderer.setSize(window.innerWidth  , window.innerHeight );
        this.mount.appendChild( renderer.domElement );
      
        var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );


        const loadManager = new THREE.LoadingManager();
        
        
        const loader = new THREE.TextureLoader(loadManager);
    
         const materials = [
            new THREE.MeshBasicMaterial({map: loader.load(img)}),
            new THREE.MeshBasicMaterial({map: loader.load(img)}),
            new THREE.MeshBasicMaterial({map: loader.load(img)}),
            new THREE.MeshBasicMaterial({map: loader.load(img)}),
            new THREE.MeshBasicMaterial({map: loader.load(img)}),
            new THREE.MeshBasicMaterial({map: loader.load(img)}),
        ];
        loadManager.onLoad = () => {
            var cube = new THREE.Mesh( geometry, materials );
            var cube2 = new THREE.Mesh( geometry, materials );
            var cube3 = new THREE.Mesh( geometry, materials );
            var cube4 = new THREE.Mesh( geometry, materials );
            var cube5 = new THREE.Mesh( geometry, materials );
            scene.add( cube,cube2,cube3,cube4,cube5 );
        
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
        camera.position.z = 3;
        camera.position.x=2
        camera.position.y=-2
        
        cube2.position.x = 1
        cube3.position.x = 2
        cube4.position.x = 3
        cube5.position.x = 4
       
        var animate = ()=> {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            cube.rotation.z += 0.01;
           

            cube2.rotation.z += 0.01;
            cube2.rotation.x += 0.01;
            cube2.rotation.y += 0.00;

            cube3.rotation.z += 0.01;
            cube3.rotation.x += 0.01;
            cube3.rotation.y += 0.02;

            cube4.rotation.z += 0.00;
            cube4.rotation.x += 0.02;
            cube4.rotation.y += 0.01;

            cube5.rotation.z += 0.02;
            cube5.rotation.x += 0.01;
            cube5.rotation.y += 0.00;
            
            renderer.render( scene, camera );
        };
        animate();
   };
        
    }
    render() {
        return (
            <div className="canvas-container" ref={ref => (this.mount = ref)} />
        )
    }
}

export default Cube;