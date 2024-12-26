import { useState } from "react";
import { useSelector } from "react-redux";
import { useSideBar } from "./hook/useSidebar";
import Wrapper from "./components/Sidebar/Wrapper";
import List from "./components/Sidebar/List";
import { useEffect } from "react";
import { useCallback } from "react";
import Section from "./components/Section/Section";
import { useRef } from "react";
import { useSave } from "./hook/useSave";
import DraggableComponent from "./components/Draggable/DraggableComponent";

function App() {
  const saveControl = useSave(); // Referensi ke elemen container
  const containerRef = useRef(null); // Referensi ke elemen container
  const [zoom, setZoom] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const { handleSidebarComponent, handleSidebarStyle } = useSideBar();
  const { onSidebarStyle, onSidebarComponents } = useSelector(
    (state) => state.sidebar
  );

  const handleContextMenu = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const setupZoomPosition = useCallback(() => {
    if (localStorage.getItem("zoom")) {
      setZoom(JSON.parse(localStorage.getItem("zoom")));
    }
  }, []);

  const handleWheel = (e) => {
    if (e.shiftKey) {
      e.preventDefault();
      if (e.deltaY < 0) {
        // Zoom In
        setZoom((prevZoom) => Math.min(prevZoom + 0.1, 1)); // Max zoom = 3
        localStorage.setItem("zoom", zoom);
      } else {
        // Zoom Out
        setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Min zoom = 0.5
        localStorage.setItem("zoom", zoom);
      }
    }
  };

  useEffect(() => {
    saveControl();
    setupZoomPosition();
    const container = containerRef.current;

    // Menambahkan event listener
    container.addEventListener("wheel", handleWheel);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setupZoomPosition]);

  return (
    <div onClick={handleCloseMenu}>
      {onSidebarStyle && (
        <Wrapper side="right">
          <List />
        </Wrapper>
      )}
      {onSidebarComponents && (
        <Wrapper side="left">
          <List />
        </Wrapper>
      )}
      <div
        onContextMenu={handleContextMenu}
        className="bg-gray-400 min-w-screen min-h-screen"
      >
        <div
          ref={containerRef}
          style={{
            transform: `scale(${zoom})`, // Mengubah skala elemen
            transition: "transform 0.3s ease", // Transisi halus
          }}
        >
          <Section>
            <DraggableComponent
              name="test"
              tagName="button"
              props={{
                className: "bg-red-500 p-5 w-full",
              }}
            />
            <DraggableComponent
              name="test10"
              tagName="a"
              props={{
                href: "/",
              }}
            />
            <DraggableComponent
              name="test2"
              tagName="button"
              props={{
                className: "bg-red-500 p-5 w-full",
              }}
            />
          </Section>
          <Section>
            <DraggableComponent
              name="test3"
              tagName="button"
              props="bg-red-500 p-5"
            />
            <DraggableComponent
              name="test4"
              tagName="button"
              props={{
                className: "bg-red-500 p-5 w-full",
              }}
            />
          </Section>
          <Section>
            <DraggableComponent
              name="test5"
              tagName="button"
              props="bg-red-500 p-5"
            />
            <DraggableComponent
              name="test6"
              tagName="button"
              props={{
                className: "bg-red-500 p-5 w-full",
              }}
            />
          </Section>
        </div>
      </div>
      {showMenu && (
        <ul
          style={{
            position: "absolute",
            top: menuPosition.y,
            left: menuPosition.x,
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            listStyle: "none",
            padding: "10px",
            zIndex: 1000,
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          <li
            onClick={handleSidebarStyle}
            style={{ padding: "5px 10px", cursor: "pointer" }}
          >
            {!onSidebarStyle ? "Open" : "Close"} Edit Style Menu
          </li>
          <li
            onClick={handleSidebarComponent}
            style={{ padding: "5px 10px", cursor: "pointer" }}
          >
            {!onSidebarComponents ? "Open" : "Close"} Components Menu
          </li>
        </ul>
      )}
    </div>
  );
}

export default App;
