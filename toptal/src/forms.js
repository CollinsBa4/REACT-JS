import React, { useState } from 'react'

export const Forms = () => {
    const [firstName,setFirstName] = useState('')
    const [email,setEmail] = useState('')
    const [people,setPeople] = useState([]) 

    const handleSubmit = (e) => {
        e.preventDefault();

         if(firstName && email) {
            const person = { id: new Date().getTime().toString(),firstName,email}
            setPeople((people) => {
                return [...people, person]
          })
          setFirstName('')
          setEmail('')

            }else{
                alert('Please enter first name or email')
                
            }
         
      
      
    }
    return (
        <article>
            <form className="div" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">
                        Name: 
                    </label>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName( e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">
                        Email: 
                    </label>
                    <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail( e.target.value)} />
                </div>
                <button className="btn"  type="submit" >Add Person</button>
            </form>
           
                {
                    people.map((p) => {
                        const {id,firstName,email} = p

                           return ( 
                                    <div key={id} className="div"> 
                                        <h4>{firstName}</h4>
                                        <p>{email}</p>
                                  </div>
                                  )
                   
                    })
                
                }
           
        </article>
    )
}
