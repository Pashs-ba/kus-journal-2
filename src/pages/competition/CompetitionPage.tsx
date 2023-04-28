import {Problem} from "../../types/schema";
import {baseStore} from "../../store";

export function CompetitionPage() {
    const store = baseStore

    const RenderProblems = (problems: Problem[])=>{
        let elements = []
        for(let i = 0; i<problems.length; i++){
            elements.push((<p key={i}>{problems[i].name}</p>))
        }
        return elements
    }
    return (
        <div className={"full-height"}>
            <div className="py-4 h-100">
                <div className=" h-100 col-2 border-end border-2 px-4">{RenderProblems(store.getState().problems)}</div>
            </div>

        </div>)
}