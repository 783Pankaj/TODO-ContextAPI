import React, { createContext, useState } from 'react'
import DisplayTodo from '../DisplayTodo';

const todoData = createContext();

const Todo = () => {
    const [text, setText] = useState('');
    const [store, setStore] = useState([]);
   
    const subFun = () => {
        setStore([...store, text]);
        setText('');
    }
    console.log("text", text)
    console.log("store", store)
    return (
        <div>
            <input type='text'
            className='input'
                placeholder='enter here your todo'
                value={text}
                onChange={(e) => { setText(e.target.value) }}
            />
            <button type='submit'
                className='sub-btn'
                onClick={subFun}
            >Submit</button>
              <hr className='hrline'/>
            <div>
                {store.map((todoitem, i) => {
                    return (
                //  <DisplayTodo 
                //  key={i}
                //  index={i}
                //  todo={todoitem}
                //  />
                <todoData.Provider value={todoitem} key={i}>
                    <DisplayTodo />
                </todoData.Provider>
             )
                })}
            </div>

            {/* <div>
                <todoData.Provider value={store} key={"i"}>
                    <DisplayTodo />
                </todoData.Provider>
            </div> */}
        </div>
    )
}

export default Todo;

export{todoData};
