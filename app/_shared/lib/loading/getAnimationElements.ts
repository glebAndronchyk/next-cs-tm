import { AnimationElementProps } from "@/app/_shared/lib/loading/AnimationElementProps.interface";

export const getAnimationElements = (): AnimationElementProps[] => {
  const isOnClient = typeof window !== "undefined";

  if (isOnClient) {
    const elements: AnimationElementProps[] = [];
    const avgItemWidth = (48 * 4 + 56 * 4 + 64 * 4) / 3;
    const amount = window.innerWidth / avgItemWidth + 2;
    const config = {
      delay: 0,
      orangeAnimation: {
        initial: {
          bottom: "-100%",
          right: "-15%",
        },
        animate: {
          bottom: 0,
          right: "-10%",
        },
      },
      blueAnimation: {
        initial: {
          top: "-100%",
          right: "-15%",
        },
        animate: {
          top: 0,
          right: "-10%",
        },
      },
    };

    for (let i = 0; i < amount; i++) {
      const isBlue = i % 2 !== 0;

      elements[i] = {
        id: i,
        background: isBlue ? "bg-blue-200" : "bg-primary-orange",
        animation: isBlue ? config.blueAnimation : config.orangeAnimation,
        delay: (config.delay += 0.1),
      };
    }
    return elements;
  }

  return [];
};
