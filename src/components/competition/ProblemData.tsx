import {Problem} from "../../types/schema";
import {ExamplesTable} from "./ExamplesTable";

interface ProblemDataInterface {
    problem: Problem
}

export function ProblemData({problem}: ProblemDataInterface) {
    return (
        <div className={""}>
            <h4 className={"fs-2 fw-bold mb-4"}>{problem.name}</h4>
            <div className={"mb-3"} dangerouslySetInnerHTML={{__html: problem.legend as string}}></div>
            <h5 className={"fw-bold mb-4"}>Входные данные</h5>
            <div className={"mb-3"} dangerouslySetInnerHTML={{__html: problem.input_format as string}}></div>
            <h5 className={"fw-bold mb-4"}>Выходные данные</h5>
            <div className={"mb-3"} dangerouslySetInnerHTML={{__html: problem.output_format as string}}></div>
            {problem.tests ? <ExamplesTable examples={problem.tests}/> : ""}
        </div>
    )
}