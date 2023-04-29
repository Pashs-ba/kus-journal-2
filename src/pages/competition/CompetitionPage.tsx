
import {TasksList} from "../../components/competition/TasksList";
import {useEffect} from "react";
import axios from "axios";
import {URL} from "../../config"
import {useParams} from "react-router";
import {Problem} from "../../types/schema";
import {useDispatch, useSelector} from "react-redux";
import {full_replace, selectProblems} from "../../store/problems/ProblemsSlice";

export function CompetitionPage() {
    const problems = useSelector(selectProblems)
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {

        axios.get(URL + "/get/if/competition_problem/competition_id=" + params.competition_id).then((response) => {
            let els = [] as Problem[]
            for (let i of response.data.competition_problems) {
                els.push({name: i.name, id: i.problem_id})
            }
            dispatch(full_replace(els))
        })
    }, [dispatch, params])
    return (
        <div className={"full-height"}>
            <TasksList problems={problems}/>
        </div>)
}