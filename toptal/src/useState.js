import React ,{useState}from 'react'
import  './index.css' 
import {data} from './data'

export const Testing = () => {
    const [state, setstate] = useState("Random Title")

    const handleClick =()=> {
       if(state === "Random Title"){
        setstate("The use state worked")
       }else{
           setstate("Random Title")
       }
    }
    return (
        
            <div className="div">
            <h2>{state}</h2>
            <button className="btn" type="button" onClick={handleClick}>Change State</button>
            </div>
      
    )
}
export const UseStateArray = () => {
    const [people, setPeople] = useState(data)
    const per= data
    const deleteItem = (id) => {
        let newPerson = people.filter(p => p.id !== id)
        setPeople(newPerson)
    }
    const restoreItem = () => {
        setPeople(per)
    }
    return (
        <>
        { people.map((person) =>{
            const {id,name} = person;
            return (
                <div className= "div" key={id} >
                <h2 className="head">{name}</h2>
                <button className="btn" onClick={() => deleteItem(id)}>Delete</button> 

                </div>
            )
        })
           
        }
        <button className="btn" onClick={() => restoreItem()}>Restore</button> 
      </>
    )
}

export const UseStateObject = () => {
    const [first,...last] = data
    const [person, setPerson] = useState( 
         first
     )
  
    const changeMessage = () => {
       
        if(person.profession === "Software Engineer") {
            setPerson({...person,profession : "Data Scientist"})
        }else{
        setPerson({...person,profession : "Software Engineer"})}
    }
    
    return (
        <div className="div">
        
           
                <h2 className="head">{person.name}</h2>
                <h2 className="head">{person.age}</h2>
                <h2 className="head">{person.profession}</h2>
                 
                <button className="btn" onClick={changeMessage}>Pivot</button> 
        
      </div>
    )
}


export const UseStateCounter = () => {
     let [value, setValue] = useState(0)
  
    const increaseValue = () => {
       setValue(value++)
         
    }
    const decreaseValue = () => {
        setValue(value--)
          
     }
     
    return (
        <div className="div">
                <h2 className="head">Counter {value}</h2>

                <button className="btn" onClick={increaseValue}>Increase</button>    
                <button className="btn" onClick={decreaseValue}>Decrease</button>    

      </div>
    )
}











































// class Stack {
//     constructor() {
//         this.items = []
//         this.count = 0
//     }

//     // Add element to top of stack
//     push(element) {
//         this.items[this.count] = element
//         console.log(`${element} added to ${this.count}`)
//         this.count += 1
//         return this.count - 1
//     }

//     // Return and remove top element in stack
//     // Return undefined if stack is empty
//     pop() {
//         if(this.count == 0) return undefined
//         let deleteItem = this.items[this.count - 1]
//         this.count -= 1
//         console.log(`${deleteItem} removed`)
//         return deleteItem
//     }

//     // Check top element in stack
//     peek() {
//         console.log(`Top element is ${this.items[this.count - 1]}`)
//         return this.items[this.count - 1]
//     }

//     // Check if stack is empty
//     isEmpty() {
//         console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
//         return this.count == 0
//     }

//     // Check size of stack
//     size() {
//         console.log(`${this.count} elements in stack`)
//         return this.count
//     }

//     // Print elements in stack
//     print() {
//         let str = ''
//         for(let i = 0; i < this.count; i++) {
//             str += this.items[i] + ' '
//         }
//         return str
//     }

//     // Clear stack
//     clear() {
//         this.items = []
//         this.count = 0
//         console.log('Stack cleared..')
//         return this.items
//     }
// }

