"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function RealEarth() {
  const mountRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 2.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Earth Geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    
    // Using a very realistic earth texture and night lights
    const earthTexture = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
    const nightTexture = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-night.jpg');
    
    const material = new THREE.MeshStandardMaterial({
        map: earthTexture,
        emissiveMap: nightTexture,
        emissive: new THREE.Color(0x88ccff),
        emissiveIntensity: 0.2,
        roughness: 0.6,
        metalness: 0.1
    });
    
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Realistic Blue Atmosphere Glow
    const atmosGeometry = new THREE.SphereGeometry(1.02, 64, 64);
    const atmosMaterial = new THREE.MeshBasicMaterial({
        color: 0x3399ff,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending
    });
    const atmosphere = new THREE.Mesh(atmosGeometry, atmosMaterial);
    scene.add(atmosphere);

    // Lights (Sun effect from Top Right like screenshot)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2);
    sunLight.position.set(5, 3, 2); // Top right
    scene.add(sunLight);
    
    // Subtle blue backlight for space vibe
    const blueLight = new THREE.PointLight(0x3399ff, 1.5);
    blueLight.position.set(-5, -3, -5);
    scene.add(blueLight);

    // Handle Window Resize
    const handleResize = () => {
        if (!currentMount) return;
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let rotationSpeed = 0.0015;
    let targetRotationSpeed = 0.0015;

    const animate = () => {
        // Smoothly interpolate rotation speed
        rotationSpeed += (targetRotationSpeed - rotationSpeed) * 0.05;
        
        earth.rotation.y += rotationSpeed;
        atmosphere.rotation.y += rotationSpeed * 1.2;

        if (isHovered.current) {
           earth.rotation.x += 0.0005;
        } else {
           if (earth.rotation.x > 0) earth.rotation.x -= 0.0005;
           if (earth.rotation.x < 0) earth.rotation.x = 0;
        }

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Mouse & Touch Drag Interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerDown = (e: PointerEvent) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
        isDragging = false;
    };

    const handlePointerMove = (e: PointerEvent) => {
        if (isDragging) {
            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };
            
            // Allow manual rotation
            earth.rotation.y += deltaMove.x * 0.01;
            earth.rotation.x += deltaMove.y * 0.01;
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    };

    const handleMouseEnter = () => {
        isHovered.current = true;
        targetRotationSpeed = 0.006; // spins faster on hover
    };

    const handleMouseLeave = () => {
        isHovered.current = false;
        isDragging = false;
        targetRotationSpeed = 0.0015;
    };

    currentMount.addEventListener('pointerdown', handlePointerDown as any);
    window.addEventListener('pointerup', handlePointerUp as any);
    window.addEventListener('pointermove', handlePointerMove as any);
    currentMount.addEventListener('mouseenter', handleMouseEnter);
    currentMount.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        window.removeEventListener('resize', handleResize);
        currentMount.removeEventListener('pointerdown', handlePointerDown as any);
        window.removeEventListener('pointerup', handlePointerUp as any);
        window.removeEventListener('pointermove', handlePointerMove as any);
        currentMount.removeEventListener('mouseenter', handleMouseEnter);
        currentMount.removeEventListener('mouseleave', handleMouseLeave);
        
        cancelAnimationFrame(animationFrameId);
        if (currentMount.contains(renderer.domElement)) {
            currentMount.removeChild(renderer.domElement);
        }
        renderer.dispose();
    };
  }, []);

  return (
    <div 
        ref={mountRef} 
        style={{ width: '100%', height: '100%', cursor: 'grab', display: 'flex', justifyContent: 'center' }} 
        onMouseDown={(e) => (e.currentTarget.style.cursor = 'grabbing')}
        onMouseUp={(e) => (e.currentTarget.style.cursor = 'grab')}
        onMouseLeave={(e) => (e.currentTarget.style.cursor = 'grab')}
    />
  );
}
