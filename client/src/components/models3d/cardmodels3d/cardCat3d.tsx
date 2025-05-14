import {useFrame} from '@react-three/fiber';
import {AnimationMixer, AnimationClip, Group, LoopRepeat} from 'three';
import {useEffect, useRef} from 'react';

type CardCat3dProps = {
    scene: Group;
    animations: AnimationClip[];
};


export const CardCat3d = ({scene, animations}: CardCat3dProps) => {
    const mixerRef = useRef<AnimationMixer | null>(null);

    useEffect(() => {
    if (scene && animations.length > 0) {
      const mixer = new AnimationMixer(scene);
      mixerRef.current = mixer;
      const action = mixer.clipAction(animations[0]);
      action.setLoop(LoopRepeat, Infinity);
      action.play();

      return () => {
        mixer.stopAllAction();
      };
    }
  }, [scene, animations]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  return (
    <group position={[0, -5, 0]} rotation={[0, Math.PI/1, 0]}>
      <primitive object={scene} />
    </group>
  );
};