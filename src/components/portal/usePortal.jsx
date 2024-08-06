import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const usePortal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useRef(isOpen);
  const portal = useRef(null);

  const openPortal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closePortal = useCallback(() => {
  if(open.current){
    setIsOpen(false);
  }}, [setIsOpen]);

  useEffect(() => {
    if (!portal.current) {
      portal.current = document.createElement("div");
    }
  }, [portal]);

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(portal.current);
  }, []);

  const Portal = useCallback(({ children }) => {
    if (portal.current) {
      return createPortal(children, portal.current);
    }
  },[portal]);


  return openPortal, closePortal, isOpen, Portal;
};

export default usePortal;
