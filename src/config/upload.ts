import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
            const filename = `${Date.now()}-${file.originalname}`;

            cb(null, filename);
        },
    }),
    limits: {
        fileSize: 2000000,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/png', 
            'image/jpg',
            'image/jpeg',
            'image/svg'
        ];

        if(allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    }
}