import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [addValue, setaddValue] = useState([]);
  const [inpText, setinpText] = useState("");
  const [editMode, seteditMode] = useState(false); // 1
  const [currentIndex, setcurrentIndex] = useState();


  function addItem() {
    if (inpText === '') {
      alert('please enter value')
    return
    } 
      const copylist = [...addValue]
      copylist.push(inpText)
      setaddValue(copylist)

      setinpText("")
    


  }
  function changeValue(e) {

    const value = e.target.value
    setinpText(value)
  }

  function deleteItem(index) {
    const copylist = [...addValue]
    copylist.splice(index, 1)
    setaddValue(copylist)

  }
  function editItem(index) {
    const editBtn = addValue[index];
    setinpText(editBtn)
    seteditMode(true) //  1 edit pr click hoga tu add wala btn update me change hoga

    setcurrentIndex(index)
  }
  function updatebtn() {
    if (inpText === '') {
      alert('please enter value')
    return
    } 

    const updatebtn = [...addValue]
    updatebtn[currentIndex] = inpText
    setaddValue(updatebtn)
    seteditMode(false)
    setinpText("")

  }
  function dltallItem() {
    setaddValue([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <div className='bgChange' >

            <h1>Todo-App</h1>

            <input className='place' onChange={changeValue} placeholder='Enter Any Value' value={inpText} />

            {editMode ? <button className='placeUpdate' onClick={updatebtn} >update</button>
              :                                  // 1
              <button className='placeAdd' onClick={addItem} >Add</button>}


            <button className='placeDlt ' onClick={dltallItem} >delete all</button>






            <ul >
              {addValue.map(function (item, index) {
                return <li className={editMode && currentIndex === index ? 'li' : ''}>{item}
                  <button className='dleteBtn' onClick={() => deleteItem(index)} > Delete</button>
                  <button className='editBtn' onClick={() => editItem(index)} > Edit</button>

                </li>
              })}
            </ul>
          </div>
        </p>

      </header>
    </div>
  );
}

export default App;
