export interface IProduct {
    id: number;
    title: string;
    images: string [];
    price: number;
    description: string;
    category: ICategory;
}

export interface ICreateProductDto extends Omit<IProduct, 'id' | 'category'> {
    categoryId: string;
}

export interface ICategory {
    id: string;
    name: string;
}