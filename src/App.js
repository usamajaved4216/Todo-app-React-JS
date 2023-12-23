import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [addValue, setaddValue] = useState ([]);
  const [inpText, setinpText] = useState ();
  const [editMode, seteditMode] = useState (false); // 1
  const [ currentIndex, setcurrentIndex] =  useState();


  function addItem(){
    const copylist = [...addValue]
    copylist.push(inpText)
    setaddValue(copylist)
    
    setinpText("")
   }
function changeValue(e){

  const value = e.target.value
  setinpText(value)
}

function deleteItem(index){
  const copylist = [...addValue]
  copylist.splice(index, 1)
  setaddValue(copylist)

}
function editItem(index){
  const editBtn = addValue[index];
  setinpText(editBtn)
  seteditMode(true) //  1 edit pr click hoga tu add wala btn update me change hoga
  
setcurrentIndex(index)
}
function updatebtn (){
  const updatebtn =[...addValue]
  updatebtn[currentIndex] = inpText
  setaddValue(updatebtn)
seteditMode(false)
setinpText("")

}
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          <h1>Todo-App</h1>

         <input onChange={changeValue} placeholder='Enter Any Value' value={inpText}  />
         
         {editMode ? <button onClick={updatebtn} >update</button>
         :                                  // 1
         <button onClick={addItem} >Add</button>}

         <ul>
          {addValue.map(function(item, index){
            return <li>{item}
            <button onClick={ () => deleteItem (index)} > Delete</button>
            <button  onClick={ () => editItem (index)} > edit</button>

            </li>
          })}
         </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
