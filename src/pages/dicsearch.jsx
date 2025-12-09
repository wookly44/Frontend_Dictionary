import { useState, useContext } from "react";
import { editContext } from "../App";
import search from '../assets/search.png';


const DicSearch = ()=>{
    const {searchWord} = useContext(editContext);
    const [searchDic, setSearchDic] = useState('');

    function searchChange(e){
        setSearchDic(e.target.value)
    }

    function searchBtn(){
        searchWord(searchDic)
    }

    return(
        <div className="search">
            <input type="text" placeholder="Search" value={searchDic} onChange={searchChange}/>
            <button onClick={searchBtn}><img src={search}/></button>
        </div>
    )
}
export default DicSearch;