// 创建color组件
//
import NewStarRating from "./NewStarRating"
import { FaTrash } from "react-icons/fa"
import AddForm from "./AddForm"

export default function Color({id, title, color, rating, onRemove=f=>f, onSelect=f=>f, newColor=f=>f}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash/>
            </button>
            <div style={{backgroundColor:color}}>
                <NewStarRating id={id} selectedStars={rating} onSelect={onSelect}/>
            </div>
            <AddForm newColor={(title, hex) => {
                console.log(`title ${title} hex ${hex}`)
                newColor(id, title, hex)
            }}/>
        </section>
    )
}