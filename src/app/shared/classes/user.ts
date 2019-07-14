import Team from './team';


export default class User {
    id: number;
    instagram: string;
    facebook: string;
    vk: string;
    date_of_birth: string;
    first_name: string;
    second_name: string;
    last_name: string;
    biography: string;
    level: string;
    avatar: string;
    role: string;
    email: string;
    has_password: boolean;
    images: string[];
    top_students: any[];
    top_results: any[];
    youtube_links: string[];
    clubs: Team[];
    trainers: User[];
    created_at: Date;
}
