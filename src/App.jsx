import { useState,useReducer,useRef,useMemo,useCallback,useEffect,createContext } from 'react'
import {initState, reducer} from './data';


import './App.css'
import './pages/style.css'
import Main from './pages/main'
import Write from './pages/write'
// import List from './pages/lists'

export const dicContext = createContext();
export const editContext = createContext();


function App() {
  const [state, dispatch] = useReducer(reducer,initState);
  const {dics} = state;
  const {group, word, text} = state.inputs;
  const userId = useRef(57);  //id는 겹치면 안되기 때문에 작성한 데이터 다음번호 작성
// console.log(dics[0])
  const createWord = useCallback((word, text, group)=>{
    // const date = new Date().toLocaleDateString;
    dispatch({
      type : 'create',
      dic : {
        word, text, group,
        id:userId.current,
        // createDate: date
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

  const removeWord = (id)=>{   // 필요한 데이터명 넣어서 가지고 오고
    dispatch({
      type: "remove",
      id   //id값을 넣어준다.
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
  },[])  //필요할 때만 저장하라고 useMemo 사용


  return (
    <div>
        <dicContext.Provider value={dics}>
          <editContext.Provider value={memoWord}>
            <Main />
            {/* <Write /> */}
          </editContext.Provider>
        </dicContext.Provider>
    </div>
  )
}

export default App
