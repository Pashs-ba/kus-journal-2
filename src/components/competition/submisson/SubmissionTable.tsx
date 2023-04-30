import {Submission} from "../../../types/schema";
import {EmptySubmission} from "./EmptySubmission";

interface SubmissionTableInterface {
    submissions: Submission[]
}

export function SubmissionTable({submissions}: SubmissionTableInterface) {
    let tests = []
    let good: Submission[] = []
    for (let i = 0; i < submissions.length; i++){
        good.push(submissions[i])
    }
    good.sort((a, b) => {
        let date_one = new Date(a.date_val)
        let date_two = new Date(b.date_val)
        return date_one < date_two ? 1 : -1
    })
    for (let i = 0; i < good.length; i++) {
        tests.push((
            <tr key={i}>
                <td className={"bg-body-secondary"}>{good[i].test === -1 ? "" : good[i].test}</td>
                <td className={"bg-body-secondary"}>{good[i].verdict}</td>
            </tr>
        ))
    }
    if (submissions.length) {
        return (
            <table className={"table table-borderless"}>
                <thead>
                <tr>
                    <th className={"fw-normal"} style={{"width": "10%"}}>Тест</th>
                    <th className={"fw-normal"}>Вердикт</th>
                </tr>
                </thead>
                <tbody>
                {tests}
                </tbody>
            </table>
        )
    } else {
        return (<EmptySubmission/>)
    }
}