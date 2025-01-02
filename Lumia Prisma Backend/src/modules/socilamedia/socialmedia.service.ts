import { db } from "../../shared/db";


export async function addSocialMedia(payload: any) {
    return await db.socilMedia.create({
        data:{
            imagePath:payload.imagePath
        }
    });
}


export async function getAllSocialMedia() {
    return await db.socilMedia.findMany({});
}