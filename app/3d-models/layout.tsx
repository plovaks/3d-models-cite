import { getAllCategories } from "../lib/categories"
import type { Category, CategoryLayoutProps } from "../types";
import Link from "next/link";

export default function ModelsLayout({children}: CategoryLayoutProps){
    const categories = getAllCategories();

    return (
        <div className="lg:flex lg:gap-[5rem] "> 
            <nav className="flex overflow-scroll no-scrollbar text-nowrap gap-[1.25rem] px-[1.25rem] lg:flex-col lg:overflow-visible lg:sticky lg:top-0 lg:h-screen lg:justify-center shrink-0">
                {categories.map((cat:Category) => (
                    <Link key={cat.displayName} href={`/3d-models/categories/${cat.slug}`}>
                        <p  className="text-sm text-[#606060] font-medium uppercase">{cat.displayName}</p>
                    </Link>
                ))}
            </nav>
                   
                    
            
            <main>
                {children}
            </main>
        </div>
    )
}