import { useEffect, useRef, useState } from "react";

export default function ProfilePicture() {
  const imageRef = useRef();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 0.85); // visível 85% ou mais
      },
      { threshold: [0, 0.5, 0.85, 1] }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => imageRef.current && observer.unobserve(imageRef.current);
  }, []);

  return (
    <img
        ref={imageRef}
        src="/images/profile.jpg"
        alt="Agostinho Felipe"
        className={`flex-none w-38 h-38 hover:w-62 hover:h-62 md:w-48 md:h-48 md:hover:w-84 md:hover:h-84 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 shadow-md filter contrast-90 ${isVisible ? "brightness-100  grayscale-10" : "brightness-80 grayscale-0"} transition-all duration-300 ease-in-out`}
        onClick={() => window.open("https://www.linkedin.com/in/agostinhofelipe/", "_blank")}
    />
  );
}