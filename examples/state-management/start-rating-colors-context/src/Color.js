// 创建color组件
//
import NewStarRating from "./NewStarRating"
import { FaTrash } from "react-icons/fa"
import {useColors} from './color-hooks'

export default function Color({id, title, color, rating, onRemove=f=>f, onSelect=f=>f, newColor=f=>f}) {
    const {removeColor} = useColors()

    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => {
                removeColor(id)
            }}>
                <FaTrash/>
            </button>
            <div style={{backgroundColor:color}}>
                <NewStarRating id={id} selectedStars={rating} onSelect={onSelect}/>
            </div>
        </section>
    )
}