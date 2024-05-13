import { useEffect, useRef, useState } from "react";
// .
import Dynamic from "./Dynamic";
import Static from "./Static";

const Navbar = () => {
  const dynamicRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [showStatic, setShowStatic] = useState(false);

  useEffect(() => {
    const dynamicRefHeight = dynamicRef.current.clientHeight;
    window.addEventListener("scroll", (e: Event) => {
      if (window.scrollY >= dynamicRefHeight) {
        setShowStatic(true);
      } else if (window.scrollY < dynamicRefHeight) {
        setShowStatic(false);
      }
    });
  }, [showStatic]);

  return (
    <>
      {showStatic ? <Static /> : <></>}
      <Dynamic ref={dynamicRef} />
    </>
  );
};

export default Navbar;
