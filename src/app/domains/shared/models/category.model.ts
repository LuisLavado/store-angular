/**
 * id	number	The unique identifier of the category
 * name	string	Name of the category
 * image	string	URL to the category’s image
 * slug	string	URL-friendly version of the name
 */

export interface Category {
    id: number,
    name: string,
    image: string,
    slug: string
}