import React from "react";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoCard = (props) => {
    const {idx, onDelete, todo, onUpdate} = props
    return(
        <>
            <div 
                className={`todo-card
                            space-x-2
                           shadow-md
                           rounded-full
                           bg-white
                           py-2 px-3
                           text-left
                           text-xs
                           flex
                           items-center
                           flex-auto
                           text-gray-700
                           
                           
                           `}>
                <div className={ "w-4/5"}>
                {/* <span className={ `${todo.isCompleted ? 'text-gray-300 before:content[""] before:absolute before:h-px before:w-full before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-gray-300' : "text-gray-500"}` }> */}
                <span className={ `${todo.isCompleted ? 'text-gray-300' : "text-gray-500"}` }>
                    {todo.task}
                </span>
                </div>
                {/* <span> {todo.status}</span> */}
                <div className="flex space-x-2 justify-end items-center w-1/5 text-center"> 
                    

                    <button 
                        onClick={ () => { onUpdate(idx)} } 
                        className={`${todo.isCompleted ? 'bg-green-300' :'bg-gray-100' }
                                    w-6 h-6
                                    flex
                                    justify-center
                                    items-center
                                    rounded-full
                                    text-md`
                                    }    
                    > 
                        {/* {todo.status === 0 ? "Complete" : "Pending"} */}
                        <FontAwesomeIcon 
                            className={ ` ${todo.isCompleted ? ' text-green-800' : 'text-green-800'  } `} 
                            icon={`${ 'fa-solid fa-check' }`}
                        /> 
                    </button>

                    <button 
                        onClick={ () => { onDelete(idx)} } 
                        className="bg-red-100
                                    text-red-700
                                    w-6 h-6
                                    flex
                                    justify-center
                                    items-center
                                    rounded-full
                                    hover:bg-red-500 
                                    hover:text-white
                                    duration-500
                                    "    
                    >
                        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TodoCard;