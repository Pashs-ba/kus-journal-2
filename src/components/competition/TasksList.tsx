import {Problem} from "../../types/schema";
import {NavLink} from "react-router-dom";
import {RouterName} from "../../router";
import "../../style/base.sass"

interface TasksListInterface {
    problems: Problem[]
}

export function TasksList({problems}: TasksListInterface) {
    const RenderProblems = (problems: Problem[]) => {
        let elements = []
        for (let i = 0; i < problems.length; i++) {
            elements.push((
                <li className="list-group-item" key={i}>
                    <NavLink
                        className={({isActive}) =>
                            isActive ? "normal_link" : "text-secondary normal_link"
                        }
                        to={RouterName.ProblemPage(problems[i].id)}>
                        {problems[i].name}
                    </NavLink>
                </li>
            ))
        }
        return elements
    }
    return (
            <div className=" h-100 border-end border-2 px-4">
                <h5>Задачи:</h5>
                <ul className="list-group list-group-flush">
                    {RenderProblems(problems)}
                </ul>
            </div>
        )
}