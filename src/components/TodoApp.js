import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import TodoCard from "./TodoCard";


import AddTodo from "./AddTodo";
import Filter from './Filter'
const TodoList = () => {

    const [taskList, setTaskList] = useState(
        JSON.parse(localStorage.getItem('tasks')) || []
    );
    const [filteredTask, setFilteredTaskList] = useState(taskList)
    const [filterType, setFilterType] = useState('')
    const taskLength = taskList.length;
      
    useEffect( ()=> {
        localStorage.setItem('tasks', JSON.stringify(taskList));
        setFilteredTaskList(taskList)
    },[taskList])

    useEffect( () => {
        if(filterType.toLowerCase() === 'pending'){
            const filter = taskList.filter(item => item.isCompleted === false)
            setFilteredTaskList(filter)
        }
        else if(filterType.toLowerCase() === 'completed'){
            const filter = taskList.filter(item => item.isCompleted === true)
            setFilteredTaskList(filter)
        }
        else{
            setTaskList(  (prev) => ([
                ...prev
            ]))
        }
    },[filterType])


    const onSubmit = (newTodo) => {
        setTaskList( (prev) => ([
          ...prev,
          newTodo
        ]));
    }

    const onDelete = (id) => {
        setTaskList((prev)=> ([
          ...prev.filter( ( item, idx ) => id !== item.id)
        ]))
      }
    
    const onUpdate = (id) => {
        setTaskList( (prev) => (
            prev.map( (task) => (
                task.id === id ? {...task, isCompleted: !task.isCompleted } : task
            ))

        ))
    }
    
    const onFilterChange = (filterVal) => {
        setFilterType(filterVal)

        // setTaskList(taskList)
    }


    return(
        <>
            <AddTodo onSubmit={onSubmit} tasks={taskList}/>

            <div 
                className=" Task-List-Heading
                            flex
                            bg-sky-100
                            p-2
                            drop-shadow-md
                            rounded-sm
                            justify-between
                            "
            >
                <div
                    className=" Task-List-Title
                                flex
                                items-center
                                px-1
                                space-x-2"
                >
                    {
                        taskLength ? 
                        
                        <>
                    
                                <FontAwesomeIcon 
                                    className="text-xs text-sky-900"
                                    icon="fa-solid fa-list" />
                                <span
                                    className="text-sm
                                            text-sky-900"
                                > 
                                    Task List 
                                </span>
                        </>
                        :
                        <div className="mx-auto justify-center flex items-center space-x-2">
                            <FontAwesomeIcon 
                                className="text-xs text-sky-900"
                                icon="fa-solid fa-triangle-exclamation" />
                            <span
                                className="text-sm
                                        text-sky-900"
                            > 
                                No task Added
                            </span>
                        </div>
                    }

                    
                    
                </div>
                    {
                        taskLength 
                        ?
                        <Filter onChange={onFilterChange} filterType={filterType}/>
                        : ""
                    }

            </div>

            <div 
                className="Todo-Card-Container
                            space-y-5
                            pb-4 pt-2 px-2"
            >
                {
                    
                    filteredTask.map( (item, i) => (                        
                            <TodoCard key={i} idx={item.id} todo={item} onDelete={onDelete} onUpdate={onUpdate}/>
                    ))
                }

            </div>


        </>
    )
}

export default TodoList;