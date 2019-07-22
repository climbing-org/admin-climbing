import { User } from './user';

class UserPoint {
    point: string[];
    user: User;
}


export class Rating {
    id: string[];
    users: UserPoint[];

    constructor() {}
}
