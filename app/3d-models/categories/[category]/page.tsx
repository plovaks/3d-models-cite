import { getCategoryBySlug } from "@/app/lib/categories"
import { getAllCategories } from "@/app/lib/categories"
import { Category } from "@/app/types";
import { CategoryProps } from '../../../types/index';

export default async function CategoryPage({params} : CategoryProps){

    const id = await params;
    const category = getCategoryBySlug(`${id}`);

    return (
        <div>
            {category.displayName}
        </div>
    )
}
