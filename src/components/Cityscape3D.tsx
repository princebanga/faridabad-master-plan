import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Sun, Moon, Maximize2, RotateCcw, Building2, MapPin, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface Cityscape3DProps {
  onSelectProjectName?: (projectName: string) => void;
}

export const Cityscape3D: React.FC<Cityscape3DProps> = ({ onSelectProjectName }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState<'panoramic' | 'skynest' | 'emerald' | 'expressway'>('panoramic');
  const [isNightMode, setIsNightMode] = useState(true);
  const [isDockCollapsed, setIsDockCollapsed] = useState(false);
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<{ title: string; desc: string; category: string } | null>(null);

  // References to communicate with Three loop
  const sceneStateRef = useRef({
    targetCamPos: new THREE.Vector3(38, 28, 48),
    targetLookAt: new THREE.Vector3(0, 4, 0),
    isNight: true,
    activePreset: 'panoramic',
    pointer: new THREE.Vector2(),
  });

  useEffect(() => {
    sceneStateRef.current.isNight = isNightMode;
  }, [isNightMode]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL
    let isSoftwareGl = false;
    try {
      const probeCanvas = document.createElement('canvas');
      const gl = probeCanvas.getContext('webgl2');
      if (gl) {
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      }
    } catch {
      isSoftwareGl = false;
    }

    // SCENE & CAMERA
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isNightMode ? 0x070b14 : 0xe2e8f0);
    scene.fog = new THREE.FogExp2(isNightMode ? 0x070b14 : 0xe2e8f0, 0.012);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      250
    );
    camera.position.set(38, 28, 48);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // LIGHTING RIG
    const hemiLight = new THREE.HemisphereLight(
      isNightMode ? 0x38bdf8 : 0xffffff,
      isNightMode ? 0x091220 : 0x94a3b8,
      isNightMode ? 0.6 : 0.9
    );
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(isNightMode ? 0x7dd3fc : 0xfffbeb, isNightMode ? 1.4 : 2.0);
    dirLight.position.set(35, 45, 25);
    dirLight.castShadow = !isSoftwareGl;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 120;
    dirLight.shadow.camera.left = -35;
    dirLight.shadow.camera.right = 35;
    dirLight.shadow.camera.top = 35;
    dirLight.shadow.camera.bottom = -35;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    // GROUND BASE PLANE (Urban Terrain Grid)
    const groundGeo = new THREE.PlaneGeometry(160, 160, 64, 64);
    const groundMat = new THREE.MeshStandardMaterial({
      color: isNightMode ? 0x0a101d : 0xf1f5f9,
      roughness: 0.85,
      metalness: 0.15,
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.receiveShadow = !isSoftwareGl;
    scene.add(groundMesh);

    // URBAN GRID LINES
    const gridHelper = new THREE.GridHelper(140, 70, isNightMode ? 0x0284c7 : 0x94a3b8, isNightMode ? 0x1e293b : 0xcbd5e1);
    gridHelper.position.y = 0.02;
    scene.add(gridHelper);

    // CLICKABLE / INTERACTIVE OBJECTS LIST
    const interactiveMeshes: THREE.Object3D[] = [];

    // 1. PROCEDURAL MODEL: BPTP SKYNEST TWIN TOWERS (~150m) in Sector 80
    const skynestGroup = new THREE.Group();
    skynestGroup.name = "BPTP Skynest Twin Towers (Sector 80)";
    skynestGroup.userData = {
      title: "BPTP Skynest Towers · Sector 80",
      desc: "Twin ~150-metre luxury residential skyscrapers with 20 elevated sky-nests and IGBC Platinum architecture.",
      category: "Ultra-Luxury High-Rise"
    };

    const towerMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      metalness: 0.85,
      roughness: 0.2,
      clearcoat: 0.8,
      reflectivity: 0.9,
    });

    const glassBandsMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: isNightMode ? 0x0284c7 : 0x000000,
      emissiveIntensity: 0.6,
      roughness: 0.3,
    });

    // Tower A
    const towerAGeo = new THREE.BoxGeometry(4, 28, 4);
    const towerA = new THREE.Mesh(towerAGeo, towerMat);
    towerA.position.set(-8, 14, -6);
    towerA.castShadow = !isSoftwareGl;
    towerA.receiveShadow = !isSoftwareGl;
    skynestGroup.add(towerA);

    // Tower B
    const towerB = new THREE.Mesh(towerAGeo, towerMat);
    towerB.position.set(-2, 14, -6);
    towerB.castShadow = !isSoftwareGl;
    towerB.receiveShadow = !isSoftwareGl;
    skynestGroup.add(towerB);

    // Sky Bridge / Sky Nest Connectors
    for (let h = 8; h <= 24; h += 7) {
      const bridgeGeo = new THREE.BoxGeometry(4.5, 1.2, 3.2);
      const bridge = new THREE.Mesh(bridgeGeo, glassBandsMat);
      bridge.position.set(-5, h, -6);
      skynestGroup.add(bridge);
    }

    // Spire Antennas
    const spireGeo = new THREE.CylinderGeometry(0.08, 0.3, 5, 8);
    const spireMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x38bdf8, emissiveIntensity: 0.8 });
    const spireA = new THREE.Mesh(spireGeo, spireMat);
    spireA.position.set(-8, 30.5, -6);
    skynestGroup.add(spireA);
    const spireB = new THREE.Mesh(spireGeo, spireMat);
    spireB.position.set(-2, 30.5, -6);
    skynestGroup.add(spireB);

    scene.add(skynestGroup);
    interactiveMeshes.push(towerA, towerB);

    // 2. PROCEDURAL MODEL: EMERALD HIGHRISE & GULMOHAR (Sector 97)
    const emeraldGroup = new THREE.Group();
    emeraldGroup.name = "Emerald Highrise & Gulmohar (Sector 97)";
    emeraldGroup.userData = {
      title: "Emerald Highrise & Gulmohar Plots · Sector 97",
      desc: "Upcoming 22-storey towers with LOI received, 6-ft balconies, and gated DDJAY residential plots on 60m road.",
      category: "High-Rise & Plotted DDJAY"
    };

    const emeraldMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      metalness: 0.6,
      roughness: 0.35,
    });

    // 3 Stepped Towers for Emerald
    [-14, -8, -2].forEach((offsetZ, i) => {
      const height = 18 + i * 2;
      const bGeo = new THREE.BoxGeometry(4.5, height, 4.5);
      const bMesh = new THREE.Mesh(bGeo, emeraldMat);
      bMesh.position.set(16, height / 2, offsetZ);
      bMesh.castShadow = !isSoftwareGl;
      bMesh.receiveShadow = !isSoftwareGl;
      emeraldGroup.add(bMesh);
      interactiveMeshes.push(bMesh);
    });

    scene.add(emeraldGroup);

    // 3. PROCEDURAL MODEL: ANANTYA BY TRUE HABITAT (Sector 110A)
    const anantyaGroup = new THREE.Group();
    anantyaGroup.name = "Anantya by True Habitat (Sector 110A)";
    anantyaGroup.userData = {
      title: "Anantya by True Habitat · Sector 110A",
      desc: "Affordable housing benchmark with 6 Stilt+14 towers, dedicated parking, commercial shops, adjacent to IMT.",
      category: "Affordable Group Housing"
    };

    const anantyaMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.3,
      roughness: 0.5,
    });

    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 3; c++) {
        const tGeo = new THREE.BoxGeometry(3.5, 12, 3.5);
        const tMesh = new THREE.Mesh(tGeo, anantyaMat);
        tMesh.position.set(-18 + c * 5.5, 6, 14 + r * 5.5);
        tMesh.castShadow = !isSoftwareGl;
        tMesh.receiveShadow = !isSoftwareGl;
        anantyaGroup.add(tMesh);
        interactiveMeshes.push(tMesh);
      }
    }
    scene.add(anantyaGroup);

    // 4. PROCEDURAL MODEL: DAMEERA CITY & PLOTTED TOWNSHIPS (Sector 121 / 70)
    const plottedGroup = new THREE.Group();
    plottedGroup.name = "DaMeera City & Townfit 70 Plotted Townships";
    plottedGroup.userData = {
      title: "DaMeera City (Sec 121) & Townfit 70 (Sec 70)",
      desc: "Ready-for-possession freehold DDJAY plots with OC & CC received, stilt+4 permissions, and 8-acre central park.",
      category: "Freehold DDJAY Plots"
    };

    // Plot Grid with miniature villas/low-rises
    const villaMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.6 });
    for (let px = -10; px <= 10; px += 4) {
      for (let pz = 24; pz <= 36; pz += 4) {
        const vGeo = new THREE.BoxGeometry(2.4, 2.8 + Math.sin(px + pz) * 0.8, 2.4);
        const vMesh = new THREE.Mesh(vGeo, villaMat);
        vMesh.position.set(px, (2.8 + Math.sin(px + pz) * 0.8) / 2, pz);
        vMesh.castShadow = !isSoftwareGl;
        plottedGroup.add(vMesh);
        interactiveMeshes.push(vMesh);
      }
    }
    scene.add(plottedGroup);

    // 5. DELHI-MUMBAI EXPRESSWAY & GREENFIELD CORRIDOR ARTERY
    const roadGroup = new THREE.Group();
    const roadGeo = new THREE.BoxGeometry(130, 0.3, 6);
    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.9,
    });
    const mainExpressway = new THREE.Mesh(roadGeo, roadMat);
    mainExpressway.position.set(0, 0.15, 4);
    roadGroup.add(mainExpressway);

    // Animated Traffic Laser Pulses along expressway
    const laserCount = 20;
    const laserGeo = new THREE.BoxGeometry(2.5, 0.15, 0.4);
    const laserMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const laserMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < laserCount; i++) {
      const l = new THREE.Mesh(laserGeo, laserMat);
      l.position.set(-60 + (i * 6), 0.35, i % 2 === 0 ? 2.5 : 5.5);
      roadGroup.add(l);
      laserMeshes.push(l);
    }
    scene.add(roadGroup);

    // MANJHAWALI BRIDGE SPUR
    const bridgeCurve = new THREE.CylinderGeometry(0.8, 0.8, 38, 16);
    const bridgeMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.5 });
    const manjhawaliBridge = new THREE.Mesh(bridgeCurve, bridgeMat);
    manjhawaliBridge.rotation.z = Math.PI / 2;
    manjhawaliBridge.position.set(38, 2.5, 4);
    scene.add(manjhawaliBridge);

    // CENTRAL GREEN BELT (Parklands & Buffer)
    const parkGeo = new THREE.BoxGeometry(22, 0.1, 22);
    const parkMat = new THREE.MeshStandardMaterial({ color: 0x065f46, roughness: 0.9 });
    const park = new THREE.Mesh(parkGeo, parkMat);
    park.position.set(-6, 0.05, -22);
    scene.add(park);

    // ORBIT / MOUSE INTERACTION STATE
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let spherical = new THREE.Spherical(70, Math.PI / 3, Math.PI / 4);

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      sceneStateRef.current.pointer.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      sceneStateRef.current.pointer.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        spherical.theta -= deltaX * 0.006;
        spherical.phi = Math.max(0.2, Math.min(Math.PI / 2.1, spherical.phi - deltaY * 0.006));
        
        sceneStateRef.current.targetCamPos.setFromSpherical(spherical);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      spherical.radius = Math.max(25, Math.min(110, spherical.radius + e.deltaY * 0.05));
      sceneStateRef.current.targetCamPos.setFromSpherical(spherical);
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('wheel', onWheel, { passive: false });

    // Touch support for mobile
    let touchStartDist = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && isDragging) {
        const deltaX = e.touches[0].clientX - prevMouseX;
        const deltaY = e.touches[0].clientY - prevMouseY;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;

        spherical.theta -= deltaX * 0.007;
        spherical.phi = Math.max(0.2, Math.min(Math.PI / 2.1, spherical.phi - deltaY * 0.007));
        sceneStateRef.current.targetCamPos.setFromSpherical(spherical);
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const delta = touchStartDist - dist;
        touchStartDist = dist;
        spherical.radius = Math.max(25, Math.min(110, spherical.radius + delta * 0.1));
        sceneStateRef.current.targetCamPos.setFromSpherical(spherical);
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchmove', onTouchMove);
    container.addEventListener('touchend', onTouchEnd);

    // RAYCASTER FOR HOTSPOTS
    const raycaster = new THREE.Raycaster();

    const onClick = () => {
      raycaster.setFromCamera(sceneStateRef.current.pointer, camera);
      const intersects = raycaster.intersectObjects(interactiveMeshes, true);
      if (intersects.length > 0) {
        let rootObj: THREE.Object3D | null = intersects[0].object;
        while (rootObj && !rootObj.userData?.title && rootObj.parent) {
          rootObj = rootObj.parent;
        }
        if (rootObj && rootObj.userData?.title) {
          setSelectedHotspot({
            title: rootObj.userData.title,
            desc: rootObj.userData.desc,
            category: rootObj.userData.category,
          });
        }
      }
    };
    container.addEventListener('click', onClick);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // ANIMATION TICK LOOP
    let animId = 0;
    const clock = new THREE.Clock();

    const tick = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth camera interpolation
      camera.position.lerp(sceneStateRef.current.targetCamPos, 0.06);
      camera.lookAt(sceneStateRef.current.targetLookAt);

      // Animate traffic laser pulses
      laserMeshes.forEach((mesh, idx) => {
        mesh.position.x += 18 * delta;
        if (mesh.position.x > 65) mesh.position.x = -65;
      });

      // Subtle slow hover oscillation
      spireA.rotation.y += 0.02;
      spireB.rotation.y += 0.02;

      // Update background and fog color on Day/Night toggle
      const targetBgColor = new THREE.Color(sceneStateRef.current.isNight ? 0x070b14 : 0xe2e8f0);
      scene.background = targetBgColor;
      if (scene.fog) {
        scene.fog.color = targetBgColor;
      }
      hemiLight.color.setHex(sceneStateRef.current.isNight ? 0x38bdf8 : 0xffffff);
      hemiLight.groundColor.setHex(sceneStateRef.current.isNight ? 0x091220 : 0x94a3b8);
      dirLight.color.setHex(sceneStateRef.current.isNight ? 0x7dd3fc : 0xfffbeb);

      // Raycast hover check
      raycaster.setFromCamera(sceneStateRef.current.pointer, camera);
      const hits = raycaster.intersectObjects(interactiveMeshes, true);
      if (hits.length > 0) {
        let hoverParent: THREE.Object3D | null = hits[0].object;
        while (hoverParent && !hoverParent.userData?.title && hoverParent.parent) {
          hoverParent = hoverParent.parent;
        }
        if (hoverParent && hoverParent.userData?.title) {
          setHoveredObject(hoverParent.userData.title);
        }
      } else {
        setHoveredObject(null);
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    // CLEANUP
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      container.removeEventListener('click', onClick);

      scene.clear();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Handle Preset Views
  const handleSetPreset = (preset: 'panoramic' | 'skynest' | 'emerald' | 'expressway') => {
    setActivePreset(preset);
    if (preset === 'panoramic') {
      sceneStateRef.current.targetCamPos.set(38, 28, 48);
      sceneStateRef.current.targetLookAt.set(0, 4, 0);
    } else if (preset === 'skynest') {
      sceneStateRef.current.targetCamPos.set(-5, 22, 14);
      sceneStateRef.current.targetLookAt.set(-5, 14, -6);
    } else if (preset === 'emerald') {
      sceneStateRef.current.targetCamPos.set(28, 18, 12);
      sceneStateRef.current.targetLookAt.set(16, 10, -8);
    } else if (preset === 'expressway') {
      sceneStateRef.current.targetCamPos.set(0, 10, 24);
      sceneStateRef.current.targetLookAt.set(0, 1, 4);
    }
  };

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl select-none">
      
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Left Title Badge */}
      <div className="absolute top-5 left-5 pointer-events-none flex flex-col gap-1 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-700 text-teal-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive 3D Spatial Master Plan Model</span>
        </div>
        <div className="text-[11px] text-neutral-400 font-medium pl-1">
          Drag to orbit 360° · Scroll/Pinch to zoom · Click towers to inspect
        </div>
      </div>

      {/* Hover Tooltip Overlay */}
      {hoveredObject && (
        <div className="absolute top-5 right-5 z-10 bg-neutral-900/90 backdrop-blur-md border border-teal-500/50 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-lg pointer-events-none animate-in fade-in duration-200">
          📍 {hoveredObject}
        </div>
      )}

      {/* Selected Hotspot Detail Card */}
      {selectedHotspot && (
        <div className="absolute top-16 right-5 z-20 bg-neutral-900/95 backdrop-blur-xl border border-teal-500 text-white p-5 rounded-2xl max-w-sm shadow-2xl space-y-3 animate-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950 px-2 py-0.5 rounded border border-teal-800">
              {selectedHotspot.category}
            </span>
            <button
              onClick={() => setSelectedHotspot(null)}
              className="text-neutral-400 hover:text-white text-xs p-1"
            >
              ✕
            </button>
          </div>
          <h4 className="text-base font-bold text-white">{selectedHotspot.title}</h4>
          <p className="text-xs text-neutral-300 leading-relaxed">{selectedHotspot.desc}</p>
          {onSelectProjectName && (
            <button
              onClick={() => {
                onSelectProjectName(selectedHotspot.title);
                setSelectedHotspot(null);
              }}
              className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-neutral-950 rounded-xl text-xs font-bold transition-colors"
            >
              View Full Project Specifications
            </button>
          )}
        </div>
      )}

      {/* Bottom Collapsible Control Dock (Per Three.js Universal UI Directive) */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-2xl transition-all duration-300 ${
        isDockCollapsed ? 'translate-y-[82%]' : 'translate-y-0'
      }`}>
        
        {/* Toggle Collapse Pill */}
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="px-3 py-1 bg-neutral-900/90 border border-neutral-700/80 rounded-full text-[11px] font-semibold text-neutral-300 hover:text-white flex items-center gap-1 shadow-md"
          >
            {isDockCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-teal-400" />
                <span>Show 3D Dock Controls</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-teal-400" />
                <span>Collapse Dock (Zen View)</span>
              </>
            )}
          </button>
        </div>

        {/* Dock Bar */}
        <div className="bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/80 rounded-2xl p-3 shadow-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Camera View Presets */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mr-1">Views:</span>
            <button
              onClick={() => handleSetPreset('panoramic')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activePreset === 'panoramic' ? 'bg-teal-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              Panoramic
            </button>
            <button
              onClick={() => handleSetPreset('skynest')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activePreset === 'skynest' ? 'bg-teal-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              Skynest (Sec 80)
            </button>
            <button
              onClick={() => handleSetPreset('emerald')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activePreset === 'emerald' ? 'bg-teal-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              Emerald (Sec 97)
            </button>
            <button
              onClick={() => handleSetPreset('expressway')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                activePreset === 'expressway' ? 'bg-teal-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              Expressway
            </button>
          </div>

          {/* Lighting & Reset Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsNightMode(!isNightMode)}
              className="p-2 rounded-lg bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors"
              title="Toggle Day / Night Lighting"
            >
              {isNightMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={() => handleSetPreset('panoramic')}
              className="p-2 rounded-lg bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
