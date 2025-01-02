import { db } from "../../shared/db";

export async function addProduct(payload: any) {
    return await db.product.create({
        data: {
            name: payload.name,
            description: payload.description,
            price:payload.price,
            stock:payload.stock,
            imageUrl:payload.imageUrl ,
            categoryId: payload.categoryId, 

        },
    });
}

export async function getAllProduct() {
    return await db.product.findMany({
        include:{
            category:true
        }
    });
}