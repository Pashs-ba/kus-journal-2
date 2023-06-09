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

export interface Test{
    input: string,
    output: string,
}

export interface Submission{
    id: number
    verdict: string,
    test: number
    date_val: string
}

export interface Problem{
    id: number,
    name: string,
    legend?: string,
    input_format?: string,
    output_format?: string,
    time_limit?: number
    memory_limit?: number,
    tests?: Test[]
    submission?: Submission[]
}
