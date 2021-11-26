import React, { FC } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = React.useState<string>("");
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
            <button></button>
        </div>
    )
}