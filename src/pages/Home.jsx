import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";

import { Bird, Pub, Plane, Sky, EarthHologram, EarthRoom } from "../models";
import { HomeInfo, Loader } from "../components";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  console.log("current Stage", currentStage);

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1, -43];

    if (window.innerWidth < 768) {
      screenScale = [7, 7, 7];
    } else {
      screenScale = [7, 7, 7];
    }

    return [screenScale, screenPosition];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [pubScale, pubPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* <directionalLight position={[1, 1, 1]} intensity={2} /> */}
          {/* <ambientLight intensity={0.5} /> */}
          {/* <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          /> */}
          {/* <Bird /> */}
          {/* <Sky isRotating={isRotating} /> */}
          {/* <Pub
            scale={pubScale}
            rotation={[-Math.PI / 2, 0, 4]}
            position={pubPosition}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> */}

          {/* <EarthHologram
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> */}
          <directionalLight intensity={5} color="#19418c" position={[0, -1, 5]} />
          <directionalLight intensity={5} color="#19418c" position={[0, 1, 5]} />
          {/* <OrbitControls /> */}
          <EarthHologram position={[0, 1.3, 0]}/>
          <EarthRoom
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
          {/* <Plane
            scale={planeScale}
            position={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          /> */}
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
