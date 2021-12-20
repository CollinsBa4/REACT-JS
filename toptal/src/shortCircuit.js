import React,{useState} from 'react'

export const ShortCircuit = () => {
    const [text,setText] = useState('')
    const firtValue = text || 'Hello World'
    const secondValue = text && 'Hello World'

    return (
        <div>
            <h1>{firtValue}</h1>
            <h1>Value: {secondValue}</h1>
            {text && <h1> Collins</h1>}
        </div>
    )
}
