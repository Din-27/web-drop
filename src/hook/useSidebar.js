import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { closeSidebarComponents, closeSidebarStyle, openSidebarComponents, openSidebarStyle } from "../redux/sidebarSlice"

export const useSideBar = () => {
    const dispatch = useDispatch()
    const { onSidebarStyle, onSidebarComponents } = useSelector((state) => state.sidebar)

    return {
        handleSidebarStyle: () => dispatch(
            onSidebarStyle
                ? closeSidebarStyle()
                : openSidebarStyle()
        ),
        handleSidebarComponent: () => dispatch(
            onSidebarComponents
                ? closeSidebarComponents()
                : openSidebarComponents()
        )
    }
}
