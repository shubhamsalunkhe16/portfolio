import React, { useCallback, useEffect, useState } from "react";
import { throttle } from "lodash";
import { ArrowUpLeft } from "lucide-react";

const ScrollToTopButton = () => {
  const MIN_SCROLL_TOP_TO_SHOW_BTN = 100;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  const throttledScroll = useCallback(
    throttle(() => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > MIN_SCROLL_TOP_TO_SHOW_BTN) {
        setVisible(true);
      } else if (scrolled <= MIN_SCROLL_TOP_TO_SHOW_BTN) {
        setVisible(false);
      }
    }, 500),
    []
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ArrowUpLeft
      className={`${
        visible ? "opacity-100" : "opacity-0"
      } transition-opacity ease-in-out duration-500 fixed bottom-2 right-2 w-8 h-8 p-[6px] rotate-45 cursor-pointer rounded-full bg-primary stroke-black`}
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTopButton;
