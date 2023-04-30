
interface ExampleInterface{
    text: string
}
export function ExampleElement({text}: ExampleInterface){
    return (
        <pre dangerouslySetInnerHTML={{__html: text}}></pre>
    )
}