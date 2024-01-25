import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import { Room } from "../models";
import { HomeInfo, Loader } from "../components";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  console.log("current Stage", currentStage);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        // camera={{ near: 0.1, far: 1000, position: [0, 0, 0] }}
        // camera={{ near: 0.1, far: 1000, position: [0, -1, 7] }}
        // camera={{ near: 0.1, far: 1000, position: [0, -1, 4] }}
        camera={{ near: 0.1, far: 1000, position: [0, 0.5, 5] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            intensity={0.5}
            color="#760585"
            position={[0, 3, -5]}
          />
          <directionalLight
            intensity={0.5}
            color="#760585"
            position={[0, 3, 5]}
          />         
          <Room
            position={[0, 0, 0]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <EffectComposer>
            <Bloom
              intensity={0.5}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.5}
              height={300}
              mipmapBlur={true}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>

      {/* <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div> */}
    </section>
  );
};

export default Home;

// const audioRef = useRef(new Audio(sakura));
//   audioRef.current.volume = 0.4;
//   audioRef.current.loop = true;
//   const [isPlayingMusic, setIsPlayingMusic] = useState(false);
//  useEffect(() => {
//     if (isPlayingMusic) {
//       audioRef.current.play();
//     }

//     return () => {
//       audioRef.current.pause();
//     };
//   }, [isPlayingMusic]);

//   const adjustIslandForScreenSize = () => {
//     let screenScale = null;
//     let screenPosition = [0, -1, -43];

//     if (window.innerWidth < 768) {
//       screenScale = [7, 7, 7];
//     } else {
//       screenScale = [7, 7, 7];
//     }

//     return [screenScale, screenPosition];
//   };

//   const adjustPlaneForScreenSize = () => {
//     let screenScale, screenPosition;

//     if (window.innerWidth < 768) {
//       screenScale = [1.5, 1.5, 1.5];
//       screenPosition = [0, -1.5, 0];
//     } else {
//       screenScale = [3, 3, 3];
//       screenPosition = [0, -4, -4];
//     }

//     return [screenScale, screenPosition];
//   };
// const [pubScale, pubPosition] = adjustIslandForScreenSize();
//   const [planeScale, planePosition] = adjustPlaneForScreenSize();
