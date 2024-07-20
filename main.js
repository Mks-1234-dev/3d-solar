import * as THREE from "three";

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const backgroundTexture = new THREE.TextureLoader().load("black.jpeg");
scene.background = backgroundTexture;

const sunGeometry = new THREE.SphereGeometry(10, 32, 32);
const sunTexture = new THREE.TextureLoader().load("sun.jpeg");
const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);
sun.name = "sun";

const earthDayTexture = new THREE.TextureLoader().load("earth.jpeg");
const earthDayMaterial = new THREE.MeshBasicMaterial({ map: earthDayTexture });

const earth = new THREE.Mesh(earthGeometry, earthDayMaterial);
scene.add(earth);
planets.push(earth);
earth.name = "earth";

const mercuryGeometry = new THREE.SphereGeometry(1, 32, 32);
const mercuryTexture = new THREE.TextureLoader().load("mercury.jpeg");
const mercuryMaterial = new THREE.MeshBasicMaterial({ map: mercuryTexture });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

scene.add(mercury);
planets.push(mercury);
mercury.name = "mercury";

const mercuryPathGeometry = new THREE.BufferGeometry().setFromPoints(
  mercuryPathPoints
);
const mercuryPathMaterial = new THREE.LineBasicMaterial({
  color: "rgb(255, 255, 255)",
});
const mercuryPath = new THREE.Line(mercuryPathGeometry, mercuryPathMaterial);
scene.add(mercuryPath);

const venusGeometry = new THREE.SphereGeometry(1.8, 32, 32);
const venusTexture = new THREE.TextureLoader().load("venus.jpeg");
const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);

scene.add(venus);
planets.push(venus);
venus.name = "venus";

const marsGeometry = new THREE.SphereGeometry(1.8, 32, 32);
const marsTexture = new THREE.TextureLoader().load("mars.jpeg");
const marsMaterial = new THREE.MeshBasicMaterial({ map: marsTexture });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);

scene.add(mars);
planets.push(mars);
mars.name = "mars";
