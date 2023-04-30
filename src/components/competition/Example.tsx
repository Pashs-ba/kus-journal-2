
interface ExampleInterface{
    text: string
}
export function Example({text}: ExampleInterface){
    return (
        <pre dangerouslySetInnerHTML={{__html: text}}></pre>
    )
}