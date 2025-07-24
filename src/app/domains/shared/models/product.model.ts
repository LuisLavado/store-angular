import { Category } from "./category.model";

/**
 * id	number	The unique identifier of the product	No (auto-generated)
 * title	string	The name of the product	Yes
 * price	number	Price of the product	Yes
 * description	string	Description of the product	Yes
 * categoryId	number	ID of the category (for create/update)	Yes
 * category	object	Object containing category information	No (auto-populated)
 * images	string[]	List of image URLs	Yes
 * slug	string	URL-friendly version of the title	No (auto-generated)
 * creationAt	string	Creation timestamp	No (auto-generated)
 * updatedAt	string	Last update timestamp	No (auto-generated)
     */
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    categoryId: number;
    category: Category,
    images: string[];
    slug: string;
    creationAt: string;
    updatedAt: string;
}