import {Link} from "react-router-dom";

interface LinkInterface {
    path: string,
    user_name: string
}

export function MainPageLink({
                                 path,
                                 user_name
                             }: LinkInterface) {
    return (
        <div className="card h-100">
            <div className="card-body text-center">
                <h5 className="card-title">{user_name}</h5>
                <Link to={path} className="btn btn-primary">Перейти</Link>
            </div>
        </div>
    )
}