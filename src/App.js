import React, { useState } from 'react';
import reactDom from 'react-dom';
import './App.css';
import Person from './components/Person';
function App() {
  const [showPerson, setShowPerson] = useState(true);
  const [names, setName] = useState([
    { name: 'quanle', age: '21' },
    { name: 'huyen', age: '23' },
  ]);
  const changeNameHandler = (e) => {
    setName([
      { name: 'quanle', age: '21' },
      { name: 'motnguoikhac', age: '?' },
    ]);
  };
  const switchNameHandeler = (event) => {
    console.log(event);
    setName([
      { name: event.target.value, age: '21' },
      { name: event.target.value, age: '23' }, 
    ]);
  };
  const togglePerson = () =>{
      setShowPerson(!showPerson);
    
  }
  const styles = {
    backgroundColor: 'red',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    curson: 'pointer', 
  }
  const deletePerson =(namesIndex) =>{
    console.log(namesIndex);
    let newPerson = [...names];
    newPerson.splice(namesIndex,1);
    setName(newPerson);
  }

  let classes = [];
  if(names.length <= 2)
    classes.push('red');
  if(names.length <=1)
  classes.push('pink');

  let personList = null;
  if (showPerson === true){
    personList = (
      <div>
        {names.map((item,index) => {
          return (
            <Person key ={index}
            click = {() => deletePerson(index)}
             changed ={switchNameHandeler}
            name={item.name}
            age={item.age}
            />
          );
        })}
      </div>
    );
   styles.backgroundColor = 'green'; 
  }
  return (
    <div className="App">
      <h1>this is first reactjs app </h1>
      <h3 className =  {classes.join(' ')} >anh van con yeu em huyen a</h3>
      <button style = {styles} onClick={() =>togglePerson() }> Toggle Person</button>
      {
        showPerson === true?
      <div>
        {personList}
      {/* <Person changed ={switchNameHandeler} name={names[0].name} age={names[0].age}></Person>
      <Person name={names[1].name} age={names[1].age}></Person> */}

</div>
:null
      }
    </div>
  );
}

export default App;
