import {ReactNode} from "react";
import "../../style/base.sass"

interface ColBlockInterface {
    elements: ReactNode[],
    col_size?: number,
    gutter_size?: number
}

export function ColBlock({elements, col_size = 3, gutter_size = 5}: ColBlockInterface) {
    let rendered_components = []
    for (let i = 0; i < elements.length; i++) {
        rendered_components.push((<div className={"col-"+col_size} key={i}>
            {elements[i]}
        </div>))
    }
    return (
        <div className="container px-4 text-center">
            <div className={"row full-height justify-content-center align-items-center gx-"+gutter_size}>
                {rendered_components}
            </div>
        </div>
    )
}