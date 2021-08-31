export interface Article {
    id: string;
    slug: string;
    title: string;
    price_before: number;
    price_now: number;
    description: string;
    imgs : Array<any>;
    labels : Array<any>;
}