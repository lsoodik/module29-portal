import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const usePortal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const portal = useRef(null);
  const openPortal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closePortal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    if (!portal.current) {
      portal.current = document.createElement("div");
    }
  }, []);

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    return () => {
      if (portal.current && modalRoot) modalRoot.appendChild(portal.current);
    };
  }, []);

  const Portal = useCallback(
    ({ children }) => {
      if (portal.current) {
        return createPortal(children, portal.current);
      }
    },
    [portal]
  );

  return { openPortal, closePortal, isOpen, Portal };
};

export default usePortal;
