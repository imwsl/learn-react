// 创建color组件
//
import NewStarRating from "./NewStarRating"
import { FaTrash } from "react-icons/fa"

export default function Color({id, title, color, rating}) {
    return (
        <section>
            <h1>{title}</h1>
            <button>
                <FaTrash/>
            </button>
            <div style={{backgroundColor:color}}>
                <NewStarRating selectedStars={rating}/>
            </div>
        </section>
    )
}