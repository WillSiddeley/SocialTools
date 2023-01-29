
const sharp = require('sharp');

exports.createImagePreview = function(req, res) {
    // Create a new image preview
    let image = sharp(req.file.path);
    // Apply modifications to the image
    image
        .resize(500, 500)
        .png()
        .toBuffer()
        .then(data => {
            const base64Data = data.toString('base64');
            res.status(202).json({ b64Data: base64Data, contentType: 'image/png', extension:'png'});
            //res.contentType('image/png');
            //console.log(data)
            //res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send();
        });
}