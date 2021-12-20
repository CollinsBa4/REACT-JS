import React ,{useState,useEffect}from 'react'

export const UseEffectBasics = () => {
    const [value,setValue] = useState(window.innerWidth)

    const moveUp =() => {
        setValue(window.innerWidth)
    }

    useEffect(() => {
        console.log("call UseEffect");
        window.addEventListener("resize",moveUp);
        return  () => {
            console.log('cleanup');
        window.removeEventListener("resize",moveUp)
         
    };
},[]);
console.log('render');
    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={() => setValue(value+1)}>UseEffect</button>
        </>
    )
}
const url = 'https://api.github.com/users/QuincyLarsons';

export const UseEffectFetch = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setIsError] = useState(false)
    const [users,setUsers] = useState("Github User")


    useEffect(() => {
        fetch(url)
            .then((resp) => {
               if(resp.status >= 200 && resp.status < 300) {
                    return resp.json()
               }else{
                   setIsLoading(false)
                   setIsError(true)
                   throw new Error(resp.statusText);
               }
            
            })
            .then((user) => {
                const {login} = user
                setUsers(login)
                setIsLoading(false)
            })
            .catch((error) => console.log(error))
       
    },[]);
 
    if(isLoading)   {
    return (
        <div>
            <h1>{users}</h1>
             
        </div> 
    )
}
if(isError) {
    return (
        <div>
            <h1>Error</h1>
             
        </div> 
    )
}
return (
    <div>
    <h1>{users}</h1>
     
</div> 
)

}