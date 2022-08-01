
import { useEffect, useState } from 'react';
import './App.css';


import TodoApp from './components/TodoApp'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faList, faTrashCan, faCheck, faTriangleExclamation, faInfo } from "@fortawesome/free-solid-svg-icons";
// import { faPlus } from "@fortawesome/free-regular-svg-icons";

function App() {

  library.add(faPlus,faList, faTrashCan, faCheck, faTriangleExclamation, faInfo)


  return (
    <div className="App 
                    flex 
                    justify-center 
                    items-center 
                    bg-gradient-to-r from-sky-300 to-sky-100
                    min-h-screen
                    ">
      <div className='todo-app-container
                      space-y-3 
                      w-full
                      mx-auto
                    bg-white 
                      shadow-lg 
                      px-4 py-4 
                      rounded-md
                      sm:w-3/5
                      md:w-1/2
                      lg:w-2/5
                      2xl:w-1/3'>
        <h3 className='
                      font-semibold 
                      text-xl
                      text-white
                      bg-gradient-to-r from-sky-800 to-green-600
                      p-3
                      rounded-md       
                      -mx-1
                      -my-1
                      drop-shadow-lg
                      capitalize
                      '
        > 
          Set Your Plan Today
          </h3>
          
          {/* Main to do app........ */}
          <TodoApp />
      </div>

    </div>
  );
}

export default App;
