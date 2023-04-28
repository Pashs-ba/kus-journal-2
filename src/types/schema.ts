export interface User {
    role: string[],
    login: string,
    password: string,
    name: string,
    surname: string,
    school_id: number,
    id: number
}

export interface Competition {
    id: number,
    name: string,
    start_time: string,
    end_time?: string
}
export interface CompetitionUser{
    id: number,
    user_id: number,
    competition_id: number,
    competition: Competition
}
