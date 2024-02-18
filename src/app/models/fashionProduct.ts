export interface FashionProduct {
    id:  any;
    name: string;
    description: string;
    baseImageUrl: string;
    secondaryImageUrl?: string;
    availableColors?: {
        [color: string]: string; 
    };
    price: number;
    quantity: number;
    rating: string;
}