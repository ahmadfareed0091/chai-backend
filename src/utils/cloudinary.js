import {v2 as cloudinary} from 'cloudinary';

import fs from 'fs';

import { v2 as cloudinary } from 'cloudinary';

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME , // Click 'View API Keys' above to copy your     cloud name
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET, 
    });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, 
            { resource_type: 'auto' }) 
            //file has been uploaded successfully
            console.log('File uploaded successfully:', response.url);
            return response;
            fs.unlinkSync(localFilePath);  // Delete the local file after upload
            return null;                   

    } catch (error) {
        
    }
}


    cloudinary. v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae0lympic_flagjpg",
{ public_id: "olympic_flag" },
function(error, result) {console. log(result); }) ;