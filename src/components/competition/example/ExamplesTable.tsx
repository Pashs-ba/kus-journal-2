import {Test} from "../../../types/schema";
import {ExampleElement} from "./ExampleElement";
import "../../../style/base.sass"

interface ExamplesTableInterface {
    examples: Test[]
}

export function ExamplesTable({examples}: ExamplesTableInterface) {
    let examples_rendered = []
    for (let i = 0; i < examples.length; i++) {
        examples_rendered.push((
            <tr key={i}>
                <td className={"bg-body-secondary"}>
                    <ExampleElement text={examples[i].input}/>
                </td>
                <td className={""}>
                </td>
                <td className={"bg-body-secondary"}>
                    <ExampleElement text={examples[i].output}/>
                </td>
            </tr>
        ))
    }
    return (
        <table className={"table table-borderless"}>
            <thead>
            <tr>
                <th className={"fw-light"} style={{width: "49.5%"}}>Входные данные</th>
                <th className={"fw-light"} style={{width: "1%"}}></th>
                <th className={"fw-light"} style={{width: "49.5%"}}>Выходные данные</th>
            </tr>
            </thead>
            <tbody>
            {examples_rendered}
            </tbody>
        </table>
    )
}