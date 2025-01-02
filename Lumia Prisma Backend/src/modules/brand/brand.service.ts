import { db } from "../../shared/db";


export async function addBrand(payload: any) {
    return await db.brand.create({
        data:{
            imagePath:payload.imagePath
        }
    });
}


export async function getAllBrand() {
    return await db.brand.findMany({});
}