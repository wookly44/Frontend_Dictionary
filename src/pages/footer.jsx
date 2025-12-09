import notion from '../assets/notion.png'

const footer = ()=>{
    return(
        <footer>
            <div>
                <p>© 2024.05.08 | Frontend Developer Word Dictionary | Keumju</p>
                <div className='sns'>
                    <p>Link to Notion page</p>
                    <span> → </span>
                    <a href='https://www.notion.so/e406c0ca86c14023a6df436f1a3cabf7?pvs=4'><img src={notion}/></a>
                </div>
            </div>
        </footer>
    )
}
export default footer;