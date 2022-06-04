
const multer = require('multer');


const myStorage = multer.diskStorage({
    
    destination : (req, file, cb) => {
       
        let path = process.cwd()+'/uploads/images' 
        cb(null, path);
    },
    filename : (req, file, cb) => {
        let fileName = Date.now() + '-' + file.originalname;
        cb(null, fileName)
    }

})



const imageFilter = (req, file, cb) => {
    console.log('from user register controller block', file.mimetype);
    let mime_type = file.mimetype.split('/')[0];
    if(mime_type === 'image'){
        cb(null, true)
    }else{
        req.typeError = true;//we have the request object here so we are putting typeError in req object if the else block run which means type is invalid and we will use this typeError property(we just insert into req obj) to alert users about invalid files.
        cb(null, false)
    }
}
const uploader = multer({
    storage : myStorage,
    fileFilter : imageFilter
})

module.exports = uploader;