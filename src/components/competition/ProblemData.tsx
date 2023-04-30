import {Problem} from "../../types/schema";
import {ExamplesTable} from "./example/ExamplesTable";
import {SubmissionTable} from "./submisson/SubmissionTable";
import {EmptySubmission} from "./submisson/EmptySubmission";

interface ProblemDataInterface {
    problem: Problem
}

export function ProblemData({problem}: ProblemDataInterface) {
    return (
        <div className={"row"}>
            <div className="col-9">
                <h4 className={"fs-2 fw-bold mb-4"}>{problem.name}</h4>
                <div className={"mb-3"} dangerouslySetInnerHTML={{__html: problem.legend as string}}></div>
                <h5 className={"fw-bold mb-4"}>Входные данные</h5>
                <div className={"mb-3"} dangerouslySetInnerHTML={{__html: problem.input_format as string}}></div>
                <h5 className={"fw-bold mb-4"}>Выходные данные</h5>
                <div className={"mb-3"} dangerouslySetInnerHTML={{__html: problem.output_format as string}}></div>
                {problem.tests ? <ExamplesTable examples={problem.tests}/> : ""}
            </div>
            <div className="col-3">
                <div className={"fw-bold"}>Послылки:</div>
                {problem.submission ? <SubmissionTable submissions={problem.submission}/> :
                    <EmptySubmission/>}
                <div>Для того что бы обновить состояние тестов <button className={"btn btn-link p-0 border-0"} onClick={()=>{ document.location.reload()}}>перезагрузите</button> страницу </div>
            </div>

        </div>
    )
}