export interface IProduct {
    id:string;
    imageUrl:string;
    price:number;
    title:string;
    category:string;
}


export class Product implements IProduct {
    id: string;
    imageUrl: string;
    price: number;
    title: string;
    category: string;
}