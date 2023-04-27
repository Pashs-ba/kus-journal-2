import {ReactNode} from "react";
import "../../style/base.sass"

interface ColBlockInterface {
    elements: ReactNode[]
}

export function ColBlock({elements}: ColBlockInterface) {
    let rendered_components = []
    for (let i = 0; i < elements.length; i++) {
        rendered_components.push((<div className="col-2" key={i}>
            {elements[i]}
        </div>))
    }
    return (
        <div className={"d-flex justify-content-center align-items-center full-height"}>
            {rendered_components}
        </div>)
}