import {Link} from "react-router-dom";

export function EmptyPage(){
    return (
        <div>
            <h1>Тут ничего нет...</h1>
            <Link to={`/login`}>some</Link>
        </div>
    )
}