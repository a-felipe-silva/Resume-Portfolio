import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId = null;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        const { clientX, clientY } = e;

        if (animationFrameId)
          cancelAnimationFrame(animationFrameId);

        animationFrameId = requestAnimationFrame(() => {
          cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
        })
      }
    };

    const addHoverListeners = () => {
      const links = document.querySelectorAll('a, button, [data-hover-cursor]');
      links.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed left-0 top-0 pointer-events-none z-[9999] rounded-full bg-black opacity-50 transition-[width,height,transform] will-change-[width,height,transform]`}
      style={{
        width: isHovered ? '64px' : '34px',
        height: isHovered ? '64px' : '34px',
        transitionDuration: '100ms, 100ms, 40ms' // You can fine-tune these
      }}
    />
  );
}