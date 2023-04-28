import {Link} from "react-router-dom";

interface LinkInterface {
    path: string,
    user_name: string
}

export function SimpleCardLink({
                                 path,
                                 user_name
                             }: LinkInterface) {
    return (
        <div className="card">
            <div className="card-body text-center">
                <h5 className="card-title">{user_name}</h5>
                <Link to={path} className="btn btn-primary">Перейти</Link>
            </div>
        </div>
    )
}