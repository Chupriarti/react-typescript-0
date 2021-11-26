import React, { FC } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = React.useState<string>("");

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("starting drag...")
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("dropping")
    }

    const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("leaving")
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log("dragging over")
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <button onClick={clickHandler}>Press Me!</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: "red"}}></div>
            <div 
                onDrop={dropHandler} 
                onDragLeave={dragLeave} 
                onDragOver={dragWithPreventHandler} 
                style={{width: 200, height: 200, background: "red", marginTop: 15}}></div>
        </div>
    )
}

export default EventsExample;