import {useParams} from "react-router";

export function CompetitionPage() {
    const params = useParams()
    return (<div className={"container"}>{params.id}</div>)
}