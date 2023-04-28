import {baseStore} from "../../store";
import {TasksList} from "../../components/competition/TasksList";

export function CompetitionPage() {
    return (
        <div className={"full-height"}>
            <TasksList problems={baseStore.getState().problems}/>
        </div>)
}