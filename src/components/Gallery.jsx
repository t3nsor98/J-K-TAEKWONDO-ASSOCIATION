import { useEffect, useRef } from "react";
import * as THREE from "three";

const Gallery = () => {
  const carouselRef = useRef();

  useEffect(() => {
    // Set up the Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    carouselRef.current.appendChild(renderer.domElement);

    // Add lights to the scene
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Image textures for the carousel (your image URLs)
    const textureLoader = new THREE.TextureLoader();
    const images = [
      textureLoader.load(
        "https://images.pexels.com/photos/27174818/pexels-photo-27174818/free-photo-of-a-tree-with-red-flowers-against-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ),
      textureLoader.load(
        "https://images.pexels.com/photos/27359231/pexels-photo-27359231/free-photo-of-lemon-slices-on-a-white-table-with-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ),
      textureLoader.load(
        "https://images.pexels.com/photos/10724274/pexels-photo-10724274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ),
      textureLoader.load(
        "https://images.pexels.com/photos/22602397/pexels-photo-22602397/free-photo-of-cascades-on-stream-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ),
      textureLoader.load(
        "https://images.pexels.com/photos/20507497/pexels-photo-20507497/free-photo-of-model-posing-in-boots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ),
      textureLoader.load(
        "https://images.pexels.com/photos/15308688/pexels-photo-15308688/free-photo-of-trees-and-a-field-covered-in-fog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ),
    ];

    // Add rotating geometry for each image
    const group = new THREE.Group();
    images.forEach((texture, index) => {
      const geometry = new THREE.PlaneGeometry(6, 4); // Increased geometry size
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const plane = new THREE.Mesh(geometry, material);

      // Position images in a circular layout
      const angle = (index / images.length) * Math.PI * 2;
      plane.position.x = Math.sin(angle) * 12; // Adjusted distance to space them better
      plane.position.z = Math.cos(angle) * 12;
      plane.position.y = 0;
      group.add(plane);
    });
    scene.add(group);

    camera.position.z = 18; // Camera is moved closer for larger images

    // Animation for the carousel rotation
    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup Three.js scene when the component unmounts
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-gray-900 text-white">
      <h2 className="text-center text-4xl font-bold py-8">Image Gallery</h2>
      <div ref={carouselRef} className="carousel-container w-full h-full"></div>
    </div>
  );
};

export default Gallery;
