import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import Draggable from "react-draggable";
import { useSave } from "../../hook/useSave";
import { createElement } from "react";

export default function DraggableComponent({ tagName, className, name }) {
    const draggableRef = useRef(null);
    const saveControl = useSave()
    const [position, setPosition] = useState({
        "translate-x": 0,
        "translate-y": 0,
    });

    const onDrag = () => {
        const node = draggableRef.current;
        setPosition(null);
        localStorage.setItem(
            name,
            JSON.stringify({
                "translate-x": node.state.x,
                "translate-y": node.state.y,
            })
        );
    };

    const setupPosition = useCallback(() => {
        if (localStorage.getItem(name)) {
            setPosition(JSON.parse(localStorage.getItem(name)));
        }
    }, [name])

    const getLastPosition = () => {
        if (position !== null) {
            return { x: position["translate-x"], y: position["translate-y"] };
        }
        return null;
    };

    useEffect(() => {
        setupPosition();
        saveControl()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setupPosition]);

    return (
        <Draggable
            // bounds="parent"
            onDrag={onDrag}
            ref={draggableRef}
            position={getLastPosition()}
        >
            {createElement(tagName, { className: className || '' }, name)}
        </Draggable>
    );
}
