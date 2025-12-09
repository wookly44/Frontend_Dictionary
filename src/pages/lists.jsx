import { useContext, useState } from "react";
import {dicContext} from '../App'
import Dicitem from "./dicitem";
import SortList from "./sortlist";
import Write from './write'

const List = ()=>{
    const datas = useContext(dicContext);
    const [optList, setOptlist] = useState('ALL');
    const getSortList = ()=>{
        const sortItem = (item)=>{
            switch(optList){
                case 'ALL': return item.group
                case 'html': return item.group === 'html'
                case 'css': return item.group === 'css'
                case 'javascript': return item.group === 'javaScript'
                case 'node': return item.group === 'node'
                case 'react': return item.group === 'react'
                default:
                    return null
            }
        }
        const copyList = JSON.parse(JSON.stringify(datas))
        const sortingList = optList === 'All' ? copyList : copyList.filter((item)=>sortItem(item))
        return sortingList
    }
    
    const [popup, setPopup] = useState(true);

    return(
        <div className="page">
            {popup ? 
            <div className="list">
                <div className="sort">
                    <SortList id={optList} onclick={setOptlist}/>
                </div>
                <div className="word">
                    <div className="word_tit add">
                        <h2>Word List</h2>
                        <p onClick={()=>setPopup(false)}>Add List<span></span></p>
                    </div>
                    <div className="item">
                        {getSortList().map((data)=><Dicitem key={data.id} {...data}></Dicitem>)}
                    </div>
                </div>
            </div>
            :
            <div className="popup">
                <div className="sort">
                    <p>Enter the desired word and register it in the dictionary</p>
                </div>
                <div className="word">
                    <div className="word_tit home">
                        <h2>Add words</h2>
                        <p onClick={()=>setPopup(true)}>Home<span></span></p>
                    </div>
                </div>
                <Write setPopup={setPopup}/>
            </div>
            }
        </div>
    )
}
export default List;