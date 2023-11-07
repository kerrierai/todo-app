import React, { useState , useEffect } from 'react';
import './Todo.css'
import {BsCheckLg, BsPlusLg} from 'react-icons/bs';
import {BiPlus} from 'react-icons/bi';
import {AiOutlineDelete, AiFillEdit} from 'react-icons/ai';      


const Todo = () => {

    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [allTodos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([])
    const [editTaskId, setEditTaskId] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [indexValue, setIndexValue] = useState(null);


    const handleAddTodo = () => {
        let newTodoItem = {
          title:newTitle,
          description:newDescription
        }
    
        if (newTitle!==''){
            let updatedTodoArr = [...allTodos];
            updatedTodoArr.push(newTodoItem);
            setTodos(updatedTodoArr);
            setNewTitle('');
            setNewDescription('');
            localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
        }
    }

    

    const handleDeleteTodo = (index) => {
        let removeTodoArr = [...allTodos];
        removeTodoArr.splice(index,1);
        setTodos(removeTodoArr);
        localStorage.setItem('todolist', JSON.stringify(removeTodoArr));
        
    }

    const handleEditTodo = () => {
        const updatedTasks = [...allTodos];
        updatedTasks[indexValue].title = newTitle;
        updatedTasks[indexValue].description = newDescription;
        setTodos(updatedTasks);
        setEditMode(false);
    };

    const handleSelectValue = (index) => {
        const updatedTasks = [...allTodos];
        setIndexValue(index);
        setNewTitle(updatedTasks[index].title);
        setNewDescription(updatedTasks[index].description);
    };


    const handleCompleteTodo = (index) => {
        let now = new Date();
        let dd = now.getDate();
        let mm = now.getMonth() + 1;
        let yy = now.getFullYear();
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();

        let completedOn = dd + '-' + mm + '-' + yy + ' at ' + h + ':' + m + ':' + s; 

        let filteredItem = {
            ...allTodos[index],
            completedOn: completedOn,
        }

        let updatedCompleteArr = [...completedTodos];
        updatedCompleteArr.push(filteredItem);
        setCompletedTodos(updatedCompleteArr);
        handleDeleteTodo(index);
    }

    const handleButtonClick = () => {
        const addNewElement = document.getElementById('add-new');

        if (addNewElement) {
            addNewElement.classList.toggle('active');
            setNewTitle('');
            setNewDescription('');
            setEditTaskId(null);
        }
    };

    useEffect(()=>{
        let savedTodo = JSON.parse(localStorage.getItem('todolist'));
        if(savedTodo){
        setTodos(savedTodo);
        }
    }, [])




    return (
        <div className=''>
          <div className="todo-display">
            <div className="listed-item">
              {allTodos.map((item, index) => {
                return (
                  <div className='todo-list' key={item.id}>
                    <button type='button' className='d-checkbox' onClick={() => handleCompleteTodo(index)}>
                      <BsCheckLg className='icon' />
                    </button>
                    <div className='display-content'>
                      <div className="d-title">{item.title}</div>
                      <div className="d-description">{item.description}</div>
                    </div>
                    <div className='edit' 
                    onClick={() => {
                        setEditMode(true);
                        handleSelectValue(index);
                    }}>
                      <AiFillEdit className="icon" />
                    </div>
                    <div className='delete' onClick={() => handleDeleteTodo(index)}>
                      <AiOutlineDelete className="icon" />
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className='add-box'>
                <button className='add-click' onClick={handleButtonClick}>
                  <div className="icon-wrap"><BiPlus className="icon" /></div>
                  <span>Add Task</span>
                </button>
                <div className={editMode ? "todo-add active" :"todo-add"} id="add-new">
                    <div className="add-body">
                    <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Task Title' className='add-title' />
                    <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder='Description' className='add-description' />
                    </div>
                    <div className='add-tail'>
                    <button type="button" className='secondaryBtn' onClick={() => {
                    setEditMode(false);
                    }}>Cancel</button>
                    {editMode ? (
                    <button
                    type="button"
                    className="primaryBtn add-btn"
                    onClick={handleEditTodo}
                    >
                    Update Task
                    </button>
                    ) : (
                    <button
                    type="button"
                    className="primaryBtn add-btn"
                    onClick={handleAddTodo}
                    >
                    Add Task
                    </button>
                )}
                    </div>
                </div>
            </div>
    
            <div className="complete-div">
              <div className="listed-item">
                {completedTodos.map((item, index) => {
                  return (
                    <div className='todo-list' key={index}>
                      <div className='display-content'>
                        <div className="d-title">{item.title}</div>
                        <div className="d-description">{item.description}</div>
                        <p className='grey-complete'><i>Completed on: {item.completedOn} </i></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default Todo;