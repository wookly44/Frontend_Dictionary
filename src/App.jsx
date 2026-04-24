import { useState,useReducer,useRef,useMemo,useCallback,useEffect,createContext } from 'react'
import {initState, reducer} from './data';


import './App.css'
import Header from './pages/header';
import List from './pages/lists';
import Footer from './pages/footer';

export const dicContext = createContext();
export const editContext = createContext();


function App() {
  const [state, dispatch] = useReducer(reducer,initState);
  const {dics} = state;
  const {group, word, text} = state.inputs;
  const userId = useRef(57);
  const createWord = useCallback((word, text, group)=>{
    dispatch({
      type : 'create',
      dic : {
        word, text, group,
        id:userId.current
      }
    })
    userId.current += 1
  },[word, text, group])
  
  const editWord = (id, text)=>{
    dispatch({
      type: "edit",
      id, text
    })
  }

  const removeWord = (id)=>{
    dispatch({
      type: "remove",
      id
    })
  }

  const searchWord = (text)=>{
    dispatch({
      type : "search",
      text
    })
  }

  const memoWord = useMemo(()=>{
    return{createWord, editWord, removeWord, searchWord}
  },[])


  return (
    <div>
        <dicContext.Provider value={dics}>
          <editContext.Provider value={memoWord}>
            <Header/>
            <main>
              <List/>
              <Footer/>
            </main>
          </editContext.Provider>
        </dicContext.Provider>
    </div>
  )
}

export default App
