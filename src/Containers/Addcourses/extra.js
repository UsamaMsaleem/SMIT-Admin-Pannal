import React, { Component } from 'react';
import './App.css';


class App extends Component{
  constructor(abc){
    super(abc);
    this.addTodo = this.addTodo.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);



    this.state = {
       todoItems: ["CHUNA","MUNA","TONA"],
     // todoItems: [],

      arr:[],    
      
    } 
  }
  
  addTodo(ev){
    ev.preventDefault();
    var item = this.refs.item.value.toUpperCase();
    this.state.todoItems.push(item);
    this.setState({
     todoItems: this.state.todoItems
    })
      this.refs.item.value = "";
      console.log(this.state.todoItems);
  }
  
  deleteAll(ev){
    ev.preventDefault();
    this.setState({
      todoItems: []
    })
  }

  delete(ev)
  {
     ev.preventDefault();
     //console.log(ev.target.id);
    this.state.todoItems.splice(ev.target.id,1)
     this.setState({todoItems:this.state.todoItems
     })
  }

  edit(ev)
  {
     ev.preventDefault();
    var newdata = prompt(ev.target.value).toUpperCase()
    var newid = ev.target.id;
   this.state.todoItems[newid] = newdata
     this.setState({
       todoItems:this.state.todoItems
      })
  }

  search(e){
    var newitems = this.state.todoItems;
    const text = e.target.value.toUpperCase();
     var arr = newitems.filter((elem)=>{
      return elem.indexOf(text) !== -1
    })
    this.setState({
     arr:arr
    })
    {
      //tarnatry operator ya if ki condition ha bht imp
    var a = text === "" ?  this.setState({
        arr:[] }) :
        ""
     //Uper wala kam is IF condition sa b hojaega
//        if(text == "")
//        {
// this.setState({ arr:[]})
//        }
    }
    console.log(arr)
  }

  render(){
 
    return (
      <div>
		  <h1>Todo List</h1>
			<form>
				<input type="text" ref="item" />
				<button onClick={this.addTodo}>Add</button>
				<input type="button" value="Delete All" onClick={this.deleteAll} />
			</form>
			{this.state.todoItems.map((a,i) => {
				return(	
					<ul key={i}>
						{
            <li>{a}  <button id={i} onClick={this.delete}>Delete</button>
            <button id={i} onClick={(ev)=>this.edit(ev)}>Edit</button></li>

          }
					</ul>

				)
      }
    
      )}
      <br/>


      <br/>

				{!! this.state.todoItems.length && <input placeholder="search here" type="text" onChange={(e) => this.search(e)}/>
        } 
        {this.state.arr.map((a,i) => {
				return(	
					<ul key={i}>
						{
            <li >{a}
            </li>
          }
					</ul>

				)
      }
    
      )}
  
      
      </div>
    )
  }
}

export default App;