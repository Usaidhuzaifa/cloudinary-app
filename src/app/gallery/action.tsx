"use server"

import cloudinary from "cloudinary"



export async function AddTags(publicId:string) {
    await cloudinary.v2.uploader.add_tag("favourite",[publicId])
}