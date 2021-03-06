import User from './user';

class UserPoint {
    point: number;
    user: User;
}


export default class Rating {
    id: number;
    users: UserPoint[];
    age: string;
    gender: string;
    section: string;
}
