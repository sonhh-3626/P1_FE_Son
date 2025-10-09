import { useState, useEffect, useRef } from "react";
import TopBar from "./TopBar/TopBar";
import PrimaryHeader from "./PrimaryHeader/PrimaryHeader";
import MenuBar from "./MenuBar/MenuBar";
import "./Header.css";

export default function Header() {
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (headerRef.current) {
        setSticky(window.pageYOffset > headerRef.current.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-wrapper">
      <TopBar />
      <div className={`sticky-container ${isSticky ? "is-sticky" : ""}`} ref={headerRef}>
        <PrimaryHeader />
        <MenuBar />
      </div>
      {isSticky && <div style={{ height: headerHeight }}></div>}
    </div>
  );
}
