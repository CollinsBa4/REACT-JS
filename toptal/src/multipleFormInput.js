import React,{useState} from 'react'

export const MultipleFormInput = () => {
 
    const [person,setPerson] = useState({firstName:'', email:'', age:''})
    const [people,setPeople] = useState([]) 

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        
        setPerson({...person, [name]: value})

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(person.firstName && person.email && person.age){
            const newPerson = {...person, id: new Date().getTime().toString()}
            setPeople([...people,newPerson])
            setPerson({firstName:'', email:'', age:''})
        }else{
            alert('Please enter valid details')
        }

    }
     
    return (
        <article>
            <form className="div"  >
                <div className="form-control">
                    <label htmlFor="firstName">
                        Name: 
                    </label>
                    <input type="text" name="firstName" id="firstName" value={person.firstName} onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">
                        Email: 
                    </label>
                    <input type="text" name="email" id="email" value={person.email} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="age">
                        Age: 
                    </label>
                    <input type="text" name="age" id="age" value={person.age} onChange={handleChange} />
                </div>
                
                <button type="submit" onClick = {handleSubmit} className="btn"   >Add Person</button>
            </form>
           
                {
                    people.map((p) => {
                        const {id,firstName,email,age} = p

                           return ( 
                                    <div key={id} className="div"> 
                                        <h4>{firstName}</h4>
                                        <p>{email}</p>
                                        <p>{age}</p>

                                  </div>
                                  )
                   
                    })
                
                }
           
        </article>
    )
}

