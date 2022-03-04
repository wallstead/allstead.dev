import { useRef, useEffect } from "react";
import { useSpring, Controller } from "@react-spring/web";

export default function useSimulatedScroll() {
  const ref = useRef(null);

  const [, api] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    if (ref.current) {


      let isHovered = false;
      
      const generateSwipePositions = (startY = 0) => {

        let targetY = ref.current.scrollHeight;
        const totalLength = targetY - startY;
        const swipeLength = 200; // how many pixels one "swipe" should be

        const numSwipes = Math.ceil(totalLength / swipeLength);

        // Create aray of size numSwipes with each y position
        return Array.from({length: numSwipes}, (_, i) => {
          return {y: startY + (i * swipeLength)};
        });
      }

      const startBaseAnimation = () => {
        api.start({
          from: { y: ref.current.scrollTop },
          to: [...generateSwipePositions(), {y: 0}], // array of items like {y: 20}
          config: { mass: 1, tension: 150, friction: 80 },
          loop: true,
          onChange: (_, ctrl) => {
            ref.current.scroll(0, ctrl.get().y);
          },
        });
      }


      // Trigger scrolling to all scroll positions in a chain
      startBaseAnimation();

      // Add hover listener to stop scroll on hover
      ref.current.addEventListener('mouseenter', () => {
        api.stop();
        isHovered = true;
      })

      ref.current.addEventListener('mouseleave', () => {
        api.start({
          from: { y: ref.current.scrollTop },
          to: [ ...generateSwipePositions(ref.current.scrollTop)], // array of items like {y: 20}
          config: { mass: 1, tension: 150, friction: 80 },
          delay: 1000,
          onChange: (_, ctrl) => {
            ref.current.scroll(0, ctrl.get().y);
          },
          onRest: () => {
            if (!isHovered) {
              api.stop();
              startBaseAnimation();
              console.log('resting')
            }
          }
        });
        isHovered = false;
      });
    }

  }, [api]);
  return ref;
}
