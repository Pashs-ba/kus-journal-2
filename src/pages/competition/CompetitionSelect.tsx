import {GetUser} from "../../utils";
import axios from "axios";
import {URL} from "../../config";
import {CompetitionUser} from "../../types/schema";
import {SimpleCardLink} from "../../components/UI/SimpleCardLink";
import {ColBlock} from "../../components/UI/ColBlock";
import {useEffect, useRef, useState} from "react";

export function CompetitionSelect() {
    const user = useRef(GetUser());
    const [competitions, competitionChange] = useState([] as CompetitionUser[])
    useEffect(() => {
        axios.get(URL + "/get/if/user_competition[competition_id[id;name;start_time]]/user_id=" + user.current.id).then((response) => {
            const data = response.data as { user_competitions: CompetitionUser[] }
            competitionChange(data.user_competitions)
        })
    }, [user])
    const CompetitionRender = (competitions: CompetitionUser[]) => {
        let elements = []
        for (let i = 0; i < competitions.length; i++) {
            elements.push((<SimpleCardLink path={"/"} user_name={competitions[i].competition.name} key={i}/>))
        }
        return elements
    }


    return (
        <div>
            <ColBlock elements={CompetitionRender(competitions)}/>
        </div>)
}