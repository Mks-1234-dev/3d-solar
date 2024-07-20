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

earth.position.x = 40;

const pathPoints = [];
const radius = 40;
const segments = 100;
for (let i = 0; i <= segments; i++) {
  const theta = (i / segments) * Math.PI * 2;
  const x = radius * Math.cos(theta);
  const z = radius * Math.sin(theta);
  pathPoints.push(new THREE.Vector3(x, 0, z));
}

const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
const pathMaterial = new THREE.LineBasicMaterial({
  color: "rgb(255, 255, 255)",
});
const path = new THREE.Line(pathGeometry, pathMaterial);
scene.add(path);

const mercuryGeometry = new THREE.SphereGeometry(1, 32, 32);
const mercuryTexture = new THREE.TextureLoader().load("mercury.jpeg");
const mercuryMaterial = new THREE.MeshBasicMaterial({ map: mercuryTexture });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);

scene.add(mercury);
planets.push(mercury);
mercury.name = "mercury";

mercury.position.x = 18;

const mercuryPathPoints = [];
const mercuryRadius = 18;
const mercurySegments = 100;
for (let i = 0; i <= mercurySegments; i++) {
  const theta = (i / mercurySegments) * Math.PI * 2;
  const x = mercuryRadius * Math.cos(theta);
  const z = mercuryRadius * Math.sin(theta);
  mercuryPathPoints.push(new THREE.Vector3(x, 0, z));
}

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

const jupiterGeometry = new THREE.SphereGeometry(5, 32, 32);
const jupiterTexture = new THREE.TextureLoader().load("jupiter.jpeg");
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: jupiterTexture });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);

scene.add(jupiter);

planets.push(jupiter);
jupiter.name = "jupiter";

const saturnGeometry = new THREE.SphereGeometry(5, 32, 32);
const saturnTexture = new THREE.TextureLoader().load("saturn.jpeg");
const saturnMaterial = new THREE.MeshBasicMaterial({ map: saturnTexture });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);

scene.add(saturn);
planets.push(saturn);
saturn.name = "saturn";

const uranusGeometry = new THREE.SphereGeometry(3.5, 32, 32);
const uranusTexture = new THREE.TextureLoader().load("uranus.jpeg");
const uranusMaterial = new THREE.MeshBasicMaterial({ map: uranusTexture });

const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranus);

planets.push(uranus);
uranus.name = "uranus";

const neptuneGeometry = new THREE.SphereGeometry(3.5, 32, 32);
const neptuneTexture = new THREE.TextureLoader().load("neptune.jpeg");
const neptuneMaterial = new THREE.MeshBasicMaterial({ map: neptuneTexture });

const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);

planets.push(neptune);
neptune.name = "neptune";

const asteroidGeometry = new THREE.SphereGeometry(0.2, 10, 10);
const asteroidMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });

const numAsteroids = 1000;
const asteroidBeltRadius = 70;
const asteroids = [];

const minRadius = 70;
const maxRadius = 80;
const beltRadius = [];

for (let i = 0; i < numAsteroids; i++) {
  const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
  asteroids.push(asteroid);

  const angle = Math.random() * Math.PI * 5;
  const radius = Math.random() * (maxRadius - minRadius) + minRadius; // Random radius between minRadius and maxRadius
  beltRadius.push(radius);

  scene.add(asteroid);
}

let focused_object = null;
