import { Team } from './team';


export class User {
    id: string[];
    instagram: string[];
    facebook: string[];
    vk: string[];
    date_of_birth: string[];
    first_name: string[];
    second_name: string[];
    last_name: string[];
    biography: string[];
    level: string[];
    avatar: string[];
    role: string[];
    email: string[];
    has_password: string[];
    images: string[];
    top_students: string[];
    top_results: string[];
    youtube_links: string[];
    clubs: Team[];
    trainers: User[];
    created_at: string[];

    constructor() {}
}
