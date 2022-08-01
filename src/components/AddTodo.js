import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AddTodo = (props) => {

    const [input,setInput] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }
    const taskLength = props.tasks.length
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: taskLength,
            task: input,
            created: new Date(),
            isCompleted : false
        })
        setInput("")
    }

    return(
        <form onSubmit={handleSubmit}
              className="flex 
                        relative
                        p-2">
            <input className="add-todo
                              px-3 py-2.5
                              rounded-full
                              w-full
                              text-sm
                              text-gray-500
                              drop-shadow-md
                              border-gray-500
                              
                            " 
                    value={input} 
                    onChange={handleChange}
                    placeholder={"Add Task Here..."}
            />
            <button className="
                            absolute
                            flex
                            justify-center
                            items-center
                            top-1/2
                            right-3.5
                            -translate-y-1/2
                            bg-green-400
                            rounded-full
                            p-1
                            w-7
                            h-7
                            drop-shadow-md"> 
                <FontAwesomeIcon 
                    className="text-xs
                                text-white
                                font-bold" 
                    icon="fa-solid fa-plus" />
            </button>
        </form>
    )
}

export default AddTodo;