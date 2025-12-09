import img from '../assets/logo.png';
import Dicsearch from './dicsearch';

const header = ()=>{
    return(
        <div className='header'>
            <a href='#'><img src={img}/></a>
            <div>
                <h1>Frontend Developer Word Dictionary</h1>
                <Dicsearch/>
            </div>
        </div>
    )
}
export default header;