const card = [
    {
        title:'Френки Де Йонг',
        subtitle:'Нидерланский футболист ФК "Барселоны" и сборной Голландии',
    },
    {
        title:'Серхио Бускетс',
        subtitle:'Испанский футболист ФК "Барселоны" и сборной Испании'
    }
]
function Card(props){
    return card.map(item => {
        return(
        <div className="card">
            <div className="title">{item.title}</div>
            <div className="subtitle">{item.subtitle}</div>
            <h2>This is my props {props.mid}</h2>
        </div>
        )
    }) 
}
export default Card