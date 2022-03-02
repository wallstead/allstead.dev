import { useRef, useEffect } from "react";
import { useSpring, Controller } from "@react-spring/web";

export default function useSimulatedScroll() {
  const ref = useRef(null);

  const [, api] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    if (ref.current) {
      
      let targetY = ref.current.scrollHeight;
      const swipeLength = 200; // how many pixels one "swipe" should be

      const numSwipes = Math.ceil(targetY / swipeLength);

      // Create aray of size numSwipes with each y position
      const swipePositions = Array.from({length: numSwipes}, (_, i) => {
        return {y: i * swipeLength}
      });

      // Trigger scrolling to all scroll positions in a chain
      api.start({
        from: { y: ref.current.scrollTop },
        to: [...swipePositions, {y: 0}], // array of items like {y: 20}
        config: { mass: 1, tension: 150, friction: 80 },
        loop: true,
        onChange: (_, ctrl) => {
          ref.current.scroll(0, ctrl.get().y);
        },
      });

      // Add hover listener to stop scroll on hover
      ref.current.addEventListener('mouseenter', () => {
        api.pause();
      })

      ref.current.addEventListener('mouseleave', () => {
        api.resume();
        api.set({y: ref.current.scrollTop}); // add new position of current scrollTop to the chain
      });
    }

  }, [api]);
  return ref;
}
