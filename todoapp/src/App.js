 import { Component } from 'react';

export default class LikeButton extends Component {
    constructor(props){
        super(props)
         this.state = {
            
            text: '',
            updated:false,
            todos: [],
            count:0
  
        }
        this.updateLikes = this.updateLikes.bind(this)
         this.done = this.done.bind(this)
    }
    getTime = () =>  {
      let time = new Date().getTime().toString()
      return time
    }
    updateLikes = (e) => {
      e.preventDefault()
    if(this.state.text) {
      this.setState({
        
          todos:[
            ...this.state.todos,
            {
               
              id: this.getTime(),
              todo:this.state.text
            }
          ] ,
        text:''  
      });
      
    } else {
        this.setState({
          todos:[...this.state.todos]
        })
       alert("Please enter text")
    }
  }
  done = (e) => {
    // let el =  e.target
    // let newItems = this.state.todos.filter((e) => this.state.todos[el] !== e.id)
    if(e.target.classList.contains('liked')){
      e.target.classList.remove('liked')
      this.setState({
        count:this.state.count-1
      })
      
    }else{
      e.target.classList.add('liked')
      this.setState({
        count:this.state.count+1
      })
    }
  }
    
    render() {
        return (
            <>
                <div className="div">
                   <input type="text" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}/>
                    <button onClick={this.updateLikes} > Add todo</button>
                    <p>{this.state.count}</p>
                    {
                      this.state.todos.map((todo) =>{
                        return <ul>
                          
                            <li key={todo.id} onClick={this.done}>{todo.todo}</li>
                           
                        </ul>
                      })
                    }
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                    .div{
                      margin: 0 auto;
                    }
                   .liked {
                    text-decoration: line-through;
                   }
                `}</style>
            </>
        );
    }
}
