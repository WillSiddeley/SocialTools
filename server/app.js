// Imports
const cors = require('cors');
const multer = require('multer');
const express = require('express');

// Upload Parameters
const upload = multer({
    dest: 'uploads/',
    limits: {
        // TODO: Find out what happens when a file is uploaded that is larger than this limit
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        // Make sure that the file is a supported image file type
        if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|gif|webp)$/)) {
            return cb(new Error('Invalid file type. Please upload a PNG, JPEG, GIF or WEBP image and try again.'))
        }
        // Callback function
        cb(undefined, true)
    }
})

// Express Settings
const app = express();
const port = 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routers
const EditImage = require('./routers/EditImage');

// POST Methods
app.post('/upload', upload.single('image'), EditImage.createImagePreview);

// Open Port
app.listen(port, () => console.log(`App listening on port ${port}`));
