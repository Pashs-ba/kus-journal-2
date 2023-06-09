import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {replace_one, selectProblems} from "../../store/slices/CompetitionSlice";
import {useCallback, useEffect} from "react";
import {Problem} from "../../types/schema";
import axios from "axios";
import {URL} from "../../config";
import {GetUser} from "../../utils";
import {ProblemData} from "../../components/competition/ProblemData";

export function ProblemPage() {
    const params = useParams()
    const problems = useSelector(selectProblems)
    const dispatch = useDispatch()
    const user = GetUser()

    const getCurrentProblem = useCallback(() => {
        return problems.filter((el: Problem) => {
            return el.id === Number(params.problem_id)
        })[0] as Problem
    }, [params.problem_id, problems])

    useEffect(() => {
        if (getCurrentProblem() && !getCurrentProblem().legend) {
            axios.get(URL + "/get_problem/" + params.problem_id + "/" + user.id).then((response) => {
                dispatch(replace_one(response.data.problem[0]))
            })
        }
    }, [dispatch, getCurrentProblem, params.problem_id, user.id])

    const problem = getCurrentProblem()
    if (getCurrentProblem()) {
        return (
            <ProblemData problem={problem}/>
        )
    } else {
        return (
            <div className={""}>
                <p>Загрузка....</p>
            </div>
        )
    }

}