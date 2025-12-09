const sortList = [
    {id: 'ALL', name: '전체'},
    {id: 'html', name: 'html'},
    {id: 'css', name: 'css'},
    {id: 'javascript', name: 'javascript'},
    {id: 'node', name: 'node'},
    {id: 'react', name: 'react'},
]

const SortSelect = ({id, onclick})=>{
    function optChange(e){
        onclick(e.target.id)
    }

    return(
        <ul id={id} onClick={optChange}>
            {sortList.map((sort)=><li key={sort.id} id={sort.id}>{sort.name}</li>)}
        </ul>
    )
}

export default SortSelect;