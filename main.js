import * as THREE from "three";
import './style.css';

//Create a Scene
const scene = new THREE.Scene();
//set perspective camera
const camera = new THREE.PerspectiveCamera(45, 
  window.innerWidth / window.innerHeight
);
camera.position.z = 20;

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize( window.innerWidth, window.innerHeight );
//document.body.appendChild( renderer.domElement );

//set light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);
//Create a sphere
const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: "#ffff83",
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);


function animate() {
	requestAnimationFrame( animate );
  //sphere.position.x += 0.5;
  /* sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01; */
	renderer.render( scene, camera );
}

animate();

//make scene and mesh fit when resizing window
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window. innerHeight; //update sizes
  camera.updateProjectionMatrix(); //update camera
  renderer.setSize(window.innerWidth, window.innerHeight);
})