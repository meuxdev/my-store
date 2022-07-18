export interface IProduct {
    id: number;
    title: string;
    images: string [];
    price: number;
    description: string;
    category: ICategory;
}

export interface ICategory {
    id: string;
    name: string;
}