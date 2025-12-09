import { editContext } from '../App';
import search from '../assets/search.png';
import DicInput from '../hook/dicinput';
import { useContext } from 'react';

const Write = ({setPopup})=>{
    const [{word, text, group}, onchange, reset] = DicInput({
        word: '',
        text: '',
        group: ''
    });

    const {createWord} = useContext(editContext);
    const createBtn = ()=>{
            let cate
            if(group === undefined || group === ''){
                cate = 'html' 
            }else{
                cate = group
            }
        // console.log(cate)
        createWord(word, text, cate)
        reset()
        setPopup(true)
    }

    return(
        <section className="write">
            <div>
                <label>분류</label>
                <select name='group' value={group} onChange={onchange}>
                    <option value={'html'}>html</option>
                    <option value={'css'}>css</option>
                    <option value={'javaScript'}>javascript</option>
                    <option value={'node'}>node</option>
                    <option value={'react'}>react</option>
                </select>
            </div>
            <div>
                <label>단어</label>
                <input type='text' name='word' value={word} onChange={onchange}/>
            </div>
            <div>
                <label>설명</label>
                <textarea name='text' value={text} onChange={onchange}></textarea>
            </div>
            <button onClick={createBtn}>저장</button>
        </section>
    )
}
export default Write;