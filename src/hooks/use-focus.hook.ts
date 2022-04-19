import { useRef } from "react";

const useFocus = () => {
  const htmlElRef = useRef<HTMLAnchorElement>(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return { htmlElRef, setFocus };
};

export default useFocus;
