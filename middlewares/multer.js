const multer = require("multer");

// definisco il file im arrivo dal frontend
const storage = multer.diskStorage({

    destination: "./public/imgs/movies/",
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });
module.exports = upload;