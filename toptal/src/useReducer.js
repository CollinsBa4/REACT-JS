import React,{useState,useReducer} from 'react'
import {data} from './data'
import Modal from './Modal'

const reducer = (state,action) =>{
    const newItems = [...state.people,action.payload]
    if(action.type === 'ADD_ITEM'){
        return {
            ...state,
            people:newItems,
            isModalOpen:true,
            modalContent:'item added'
        }
    }
    if(action.type === 'NO_VALUE'){
        return {...state,isModalOpen:true,modalContent:'Please Enter Value'}
    }

    throw new Error('no action "' + action.type )
}

const defaultState = {
    people:[],
    isModalOpen:false,
    modalContent: ''
}

 const UseReducerBasics = () => {
    const [name,setName] = useState('')
    const [state,dispatch] = useReducer(reducer,defaultState)

const handleSubmit = (e) => {
    e.preventDefault()
    if(name){
        const newItem = {id: new Date().getTime().toString(),name}
        dispatch({type:'ADD_ITEM',payload:newItem })
        setName('')


    }else{
        dispatch({type:'NO_VALUE'})
    }
}

    return (
         <>
             {state.isModalOpen && <Modal modalContent = {state.modalContent} />}
            <form className="div" onSubmit={handleSubmit}>
                <div>
                    <input className="input" type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <button className="btn"type="submit" >Add</button>
            </form>
             {
                 state.people.map((p) => {
                    const {id,name} = p

                       return ( 
                                <div key={id} className="div"> 
                                    <h4>{name}</h4>
                                     
                              </div>
                              )
               
                })
             }
         </>
    )
}

export default UseReducerBasics