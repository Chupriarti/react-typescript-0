import React, { FC } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = React.useState<string>("");

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <button onClick={clickHandler}>Press Me!</button>
            <div draggable style={{width: 200, height: 200, background: "red"}}></div>
            <div style={{width: 200, height: 200, background: "red", marginTop: 15}}></div>
        </div>
    )
}

export default EventsExample;