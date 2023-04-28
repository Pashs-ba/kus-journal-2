import {Problem} from "../../types/schema";

interface TasksListInterface {
    problems: Problem[]
}

export function TasksList({problems}: TasksListInterface) {
    const RenderProblems = (problems: Problem[])=>{
        let elements = []
        for(let i = 0; i<problems.length; i++){
            elements.push((<li className="list-group-item" key={i}>{problems[i].name}</li>))
        }
        return elements
    }
    return (
        <div className="py-4 h-100">
            <div className=" h-100 col-2 border-end border-2 px-4">
                <h5>Задачи:</h5>
                <ul className="list-group list-group-flush">
                    {RenderProblems(problems)}
                </ul>
            </div>
        </div>)
}