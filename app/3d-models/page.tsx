import { getAllModels } from "../lib/models"
import type { Model } from "../types";
import Image from "next/image";
import modelImg from "../../public/printImage.png"
import Link from "next/link";

export default async function ModelsPage(){

    const models = await getAllModels();

    return(
        <div className="grid grid-cols-2 p-[1.25rem] gap-[1.25rem] lg:grid-cols-4">

            {models.map((model:Model) => (
                <Link href={`3d-models/${model.id}`} key={`${model.id}`}>
                    <div  className=" outline border-gray-100 rounded-lg overflow-hidden">
                        <Image
                            src={modelImg}
                            alt=""
                            className=""
                        />
                        <div className="p-[1rem] flex flex-col gap-[1.2rem] mt-auto">
                            <h2 className="font-bold">{model.name}</h2>
                            <p className="outline border-gray-100 rounded-2xl p-[0.6rem] font-normal">{model.category}</p>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 48 48"><path fill="none" stroke="#a8a8a8" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"/></svg>
                                <span>{model.likes}</span>
                            </div>
                        </div>
                        
                    </div>
                </Link>
            ))}
            
        </div>
    )
}