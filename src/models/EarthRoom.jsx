/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: MOJackal (https://sketchfab.com/MOJackal)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-hologram-7ddc0901ec514465b85379f0483da820
Title: Earth Hologram
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { a } from "@react-spring/three";
import scene from "../assets/3d/earthRoom.glb";
import { useFrame, useThree } from "@react-three/fiber";

export function EarthRoom({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) {
  const { nodes, materials, animations } = useGLTF(scene);
  const group = useRef();
  const { actions } = useAnimations(animations, group);
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  useEffect(() => {
    actions.Scene.play();
  }, [actions]);

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the island's rotation based on the mouse/touch movement
      group.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      group.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      group.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") setIsRotating(true);
  };

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      group.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = group.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydow", handleKeyDown);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <a.group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.007}
        >
          <group
            name="b10b0b2d3f0741fa8ef24abb7586b618fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                {/* <group
                  name="earth"
                  position={[0, 88.768, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="earth_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.earth_Material001_0.geometry}
                    material={materials["Material.001"]}
                  />
                </group> */}
                <group
                  name="Camera"
                  position={[866.735, 607.999, -990.066]}
                  rotation={[-Math.PI, -0.852, 2.709]}
                  scale={100}
                >
                  <group name="Object_7" />
                </group>
                <group
                  name="holo_room"
                  position={[0, -66.659, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[100, 100, 40]}
                >
                  <mesh
                    name="holo_room_metal4_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.holo_room_metal4_0.geometry}
                    material={materials.metal4}
                  />
                  <mesh
                    name="holo_room_Purple_Emission_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.holo_room_Purple_Emission_0.geometry}
                    material={materials.Purple_Emission}
                  />
                  <mesh
                    name="holo_room_Blue_Emission_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.holo_room_Blue_Emission_0.geometry}
                    material={materials.Blue_Emission}
                  />
                  <mesh
                    name="holo_room_Orange_Emission_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.holo_room_Orange_Emission_0.geometry}
                    material={materials.Orange_Emission}
                  />
                  <mesh
                    name="holo_room_Yellow_Emission_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.holo_room_Yellow_Emission_0.geometry}
                    material={materials.Yellow_Emission}
                  />
                  <mesh
                    name="holo_room_metal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.holo_room_metal_0.geometry}
                    material={materials.metal}
                  />
                  <mesh
                    name="holo_room_metal2_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.holo_room_metal2_0.geometry}
                    material={materials.metal2}
                  />
                  <mesh
                    name="holo_room_metal3_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.holo_room_metal3_0.geometry}
                    material={materials.metal3}
                  />
                </group>
                <group
                  name="boards"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="boards_metal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.boards_metal_0.geometry}
                    material={materials.metal}
                  />
                  <mesh
                    name="boards_Blue_Emission_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.boards_Blue_Emission_0.geometry}
                    material={materials.Blue_Emission}
                  />
                </group>
                {/* <group
                  name="rings"
                  position={[0, 88.768, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={172.427}
                >
                  <mesh
                    name="rings_Material006_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.rings_Material006_0.geometry}
                    material={materials["Material.006"]}
                  />
                </group> */}
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
}
