import { useEffect, useRef } from "react";

export function useOutSideClick(handler, listenCapturin = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, listenCapturin);
      () => document.removeEventListener("click", handleClick, listenCapturin);
    },
    [handler, listenCapturin]
  );
  return ref;
}
