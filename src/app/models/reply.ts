import { User } from "./user";
import { Vote } from "./vote";

export interface Reply{
    comment_id:  number,
    id: number,
    content: string,
    createdAt: string,
    vote: Vote,
    replyingTo: string,
    user: User,
}