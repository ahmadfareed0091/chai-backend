import multer from 'multer';
import fs from 'fs';

// Ensure the folder exists
const dir = './public/temp';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // optionally use unique names
  }
});

export const upload = multer({ storage });

// import multer from 'multer';

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/temp')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname) // Use the original file name
//   }
// })

// export const upload = multer(
//     { storage,

//     })