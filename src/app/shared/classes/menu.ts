

export default class Menu {
    id: number;
    name: string;
    header: boolean;
    footer: boolean;
    parent: number;
    static_page: string;
    rubric: string;
    link: string;
    new_page: boolean;
    created_at: Date;
    childs: Menu[];
}
