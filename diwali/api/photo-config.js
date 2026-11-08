export default function handler(req, res) {
    res.status(200).json({
        photoFolder: process.env.PHOTO_FOLDER_URL
    });
}
