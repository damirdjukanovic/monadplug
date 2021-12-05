import { useEffect } from "react";

export function useOutsideClick(ref, functionToFire, args = []) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        functionToFire.apply(this, [...args]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, functionToFire]);
}
