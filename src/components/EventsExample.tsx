import React, { FC } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = React.useState<string>("");

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    
    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <button></button>
        </div>
    )
}

export default EventsExample;