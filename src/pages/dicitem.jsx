// import DicInput from '../hook/dicinput';
import { useContext, useState } from "react";
import { editContext } from "../App";
import { getLogo } from '../util'

const Dicitem = ({id, word, text, group})=>{

    const {removeWord, editWord} = useContext(editContext);
    const [update, setUpdate] = useState(true);
    const [editCont, setEditCont] = useState(text);

   // 삭제 
    function removeBtn(){
        if(window.confirm(`${word}을/를 삭제하시겠습니까?`)){
            removeWord(id)
        }
    }

// 수정    
    function editBtn(){       
        setUpdate(!update)
        // !updatd : 업데이트값의 반대로 바꾸는게 느낌표
        // 수정 취소 버튼과 수정이 들어가는 값이 같기 때문에 굳이 두개로 만들 필요 없음. 재사용하자
    }
    // 수정 value값 바뀌는거
    function editChange(e){
        setEditCont(e.target.value)
    }
    function saveBtn(){
        if(window.confirm(`${word}을/를 수정하시겠습니까?`)){
        editWord(id, editCont)
        editBtn()
        }
    }

    
    return(
        <>        
            <dl key={id}>
                <dt>
                    <img src={getLogo(group)} alt={`${group} 아이콘`}/>
                    <h4>{word}</h4>
                </dt>
                <dd>
                    {update ? 
                       <span>{text}</span> 
                    :
                        <div className="editChange">
                            <textarea name="text" value={editCont} onChange={editChange}></textarea>
                        </div>
                    }
                    {update ?
                        <div className="update">
                            <button onClick={editBtn} className="editBtn"></button>
                            <button onClick={removeBtn} className="removeBtn"></button>
                        </div>
                    :
                        <div className="update">
                            <button onClick={saveBtn} className="saveBtn"></button>
                            <button onClick={editBtn} className="cancleBtn"></button>
                        </div>
                    }
                    
                </dd>
            </dl>
        </>
    )
}
export default Dicitem;