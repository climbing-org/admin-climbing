

export default class Menu {
    id: number;
    name: string;
    header: boolean;
    footer: boolean;
    parent: number;
    static_page: string;
    created_at: Date;
    childs: Menu[];
}
