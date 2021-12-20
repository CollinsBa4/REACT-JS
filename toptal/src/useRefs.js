import React,{useEffect,useRef } from 'react'

export const UseRefBasics = () => {
    const refContainer = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    };

    useEffect(() => {
       refContainer.current.focus();
    })

    return (
        <>
        <form className="div" onSubmit={handleSubmit}>
            <div >
                <input className="input" type="text" name="" ref={refContainer}/>
                <button className="btn" type="submit"  >Submit</button>
            </div>
        </form>
        </>
    )
}
