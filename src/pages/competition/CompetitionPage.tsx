import {TasksList} from "../../components/competition/TasksList";
import {useEffect} from "react";
import axios from "axios";
import {URL} from "../../config"
import {Outlet, useParams} from "react-router";
import {Problem} from "../../types/schema";
import {useDispatch, useSelector} from "react-redux";
import {full_replace, selectProblems} from "../../store/slices/CompetitionSlice";
import "../../style/base.sass"

export function CompetitionPage() {
    const problems = useSelector(selectProblems)
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        if (problems.length === 0) {
            axios.get(URL + "/get/if/competition_problem/competition_id=" + params.competition_id).then((response) => {
                let els = [] as Problem[]
                for (let i of response.data.competition_problems) {
                    els.push({name: i.name, id: i.problem_id})
                }
                dispatch(full_replace(els))
            })
        }

    }, [dispatch, params, problems.length])

    return (
        <div className={"container-fluid full-height"}>
            <div className="row h-100 py-4">
                <div className="col-2 h-100" >
                    <TasksList problems={problems}/>
                </div>
                <div className="col-10 h-100 smart-overflow">
                    <Outlet/>
                </div>
            </div>
        </div>)
}