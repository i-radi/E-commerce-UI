import { Category } from "./Category";

export interface Product {
    _id:string,
    title: string,
    description: string,
    price: number,
    ratingsAverage: number,
    quantity: number,
    ratingsQuantity: number,
    slug: string,
    imageCover: string,
    createdAt: string,
    updatedAt: string,
    category: Category,
    images:string[]
}

