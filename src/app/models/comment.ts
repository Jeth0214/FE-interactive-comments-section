import { User } from "./user";

export interface Comment {
    id: number,
    content: string,
    createdAt: string,
    vote: {
        score : number,
        voters?: [
            {
                id?: string,
                up?: boolean,
                down?: boolean
            }
        ]
    },
    user: User,
    replies: Comment[]

}
