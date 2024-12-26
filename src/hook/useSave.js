export const useSave = () => {
    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === "s") {
            event.preventDefault();
            console.log("Ctrl + S was pressed!");
            window.location.reload()
        }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
}