
export default function Wrapper({ children, side }) {
    return (
        <aside id="logo-sidebar" className={`shadow fixed top-0 ${side === 'right' ? 'right-0' : 'left-0'} z-20 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`} aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <ul className="space-y-2 font-medium">
                    {children}
                </ul>
            </div>
        </aside>
    )
}
