import { AnimationElementProps } from "@/app/(editorLayout)/_lib/loading/AnimationElementProps.interface";

export const getAnimationElements = (): AnimationElementProps[] => {
  const elements: AnimationElementProps[] = [];
  const amount = window.innerWidth / 224 + 2;
  const orangeAnimation = {
    initial: {
      bottom: "-100%",
      left: "-20%",
    },
    animate: {
      bottom: 0,
      left: "-10%",
    },
  };
  const blueAnimation = {
    initial: {
      top: "-100%",
      right: "-20%",
    },
    animate: {
      top: 0,
      right: "10%",
    },
  };
  let delay = 0;

  for (let i = 0; i < amount; i++) {
    const isOrange = i % 2 === 0;

    elements[i] = {
      id: i,
      background: isOrange
        ? "bg-primary-orange"
        : "bg-gradient-to-r from-gray-200 from-50% to-blue-200 to-50%",
      animation: isOrange ? orangeAnimation : blueAnimation,
      delay: (delay += 0.1),
    };
  }
  return elements;
};
