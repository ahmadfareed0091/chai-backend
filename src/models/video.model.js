import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const userSchema = new Schema(
    {
        videoFile: {
            type: String, // cloudinary URL for the video file
            required: true
        },
        thumbnail: {
            type: String, // cloudinary URL for the video file
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
        },
        duration: {
            type: Number, // cloudinary URL for the video file
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User", // Reference to the User model
            required: true
        },
    },
    {
        timestamps: true,
    }
)

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", userSchema);