import React from "react";
import * as CANNON from 'cannon'
import * as THREE from "three";
import img from '../images/face1.png'
import dice2 from '../images/face2.jpg'
import dice3 from '../images/face3.jpg'
import dice4 from '../images/face4.jpg'
import dice5 from '../images/face5.jpg'
import dice6 from '../images/face6.jpg'


class Cube extends React.Component {
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
        renderer.setSize(window.innerWidth , window.innerHeight);
        this.mount.appendChild( renderer.domElement );
       var world = new CANNON.World();
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );


       const loadManager = new THREE.LoadingManager();
        
        
        const loader = new THREE.TextureLoader(loadManager);
    
         const materials = [
            new THREE.MeshBasicMaterial({map: loader.load(img)}),
            new THREE.MeshBasicMaterial({map: loader.load(dice2)}),
            new THREE.MeshBasicMaterial({map: loader.load(dice3)}),
            new THREE.MeshBasicMaterial({map: loader.load(dice4)}),
            new THREE.MeshBasicMaterial({map: loader.load(dice5)}),
            new THREE.MeshBasicMaterial({map: loader.load(dice6)}),
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
        camera.position.z = 15;
        camera.position.x=4
        camera.position.y=-2
        
        cube.position.x= 0

        cube2.position.x = 3
        cube2.position.y = 0
        cube2.rotation.y=0
        cube2.rotation.x=0
      
        cube3.position.x = 4
        cube3.position.z=0


        cube4.position.x = 6

        cube5.position.x = 8     

        cube.rotation.y=6.5



        // let geometry2 = new THREE.BoxGeometry(50, 1, 50);
        // let material = new THREE.MeshStandardMaterial({color: 0xDDDDDD, roughness: 0});
        // const floor = new THREE.Mesh( geometry2, material );
        // floor.position.set(0, -10, 0);
        // floor.name = 'my-floor';
        // scene.add(floor);




        var animate = ()=> {
            requestAnimationFrame( animate );
            //cube.rotation.x += 0.01;
            //cube.rotation.y += 0.01;
            //cube.rotation.z += 0.01;
           

            //cube2.rotation.z += 0.01;
            //cube2.rotation.x += 0.01;
            //cube2.rotation.y += 0.00;

            // cube3.rotation.z += 0.01;
            // cube3.rotation.x += 0.01;
            // cube3.rotation.y += 0.02;

            // cube4.rotation.z += 0.00;
            // cube4.rotation.x += 0.02;
            // cube4.rotation.y += 0.01;

            // cube5.rotation.z += 0.02;
            // cube5.rotation.x += 0.01;
            // cube5.rotation.y += 0.00;
            
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