import {Test} from "../../types/schema";
import {Example} from "./Example";
import "../../style/base.sass"

interface ExamplesTableInterface {
    examples: Test[]
}

export function ExamplesTable({examples}: ExamplesTableInterface) {
    let examples_rendered = []
    for (let i = 0; i < examples.length; i++) {
        examples_rendered.push((
            <tr key={i}>
                <td className={"bg-light-subtle"}>
                    <Example text={examples[i].input}/>
                </td>
                <td className={""}>
                </td>
                <td className={"bg-light-subtle"}>
                    <Example text={examples[i].output}/>
                </td>
            </tr>
        ))
    }
    return (
        <table className={"table table-borderless"}>
            <thead>
            <tr>
                <th className={"fw-light"} style={{width: "49.5%"}}>STDIN</th>
                <th className={"fw-light"} style={{width: "1%"}}></th>
                <th className={"fw-light"} style={{width: "49.5%"}}>STDOUT</th>
            </tr>
            </thead>
            <tbody>
            {examples_rendered}
            </tbody>
        </table>
    )
}