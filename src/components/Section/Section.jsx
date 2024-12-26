import DraggableComponent from '../Draggable/DraggableComponent'

export default function Section() {
    return (
        <div className="relative border-2 bg-white border-black min-w-screen min-h-screen">
            <DraggableComponent name='test' tagName='button' className='bg-red-500 p-5' />
            <DraggableComponent name='test2' tagName='button' className='bg-purple-500 p-5' />
        </div>
    )
}
