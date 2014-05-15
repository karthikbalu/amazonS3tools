var AWS = require('aws-sdk');

// Create an S3 client
var s3 = new AWS.S3();

var params = {
    Bucket: '<BUCKET_NAME>'
};

s3.listObjects(params, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else {

        for (var i = 0; i < data.Contents.length; i++) {
//       console.log(data.Contents[i].Key);           // successful response
            res = data.Contents[i].Key.split(".");
            ext = res[res.length - 1];

            if (ext == "html") {
                contenttype = "text/html"
            } else if (ext == "js") {
                contenttype = "application/javascript"
            } else if (ext = "css") {
                contenttype = "text/css"
            } else if (ext == "png") {
                contenttype = "image/png"
            } else if (ext == "json") {
                contenttype = "application/json"
            } else {
                contenttype = "text/plain"
            }


            var params = {
                Bucket: params.Bucket, // required
                CopySource: params.Bucket+'/' + data.Contents[i].Key, // required
                Key: data.Contents[i].Key, // required
                ACL: 'public-read',
                ContentType: contenttype,
                Metadata: {
                    'Content-Type': contenttype,
                },
                MetadataDirective: 'REPLACE',
                StorageClass: 'REDUCED_REDUNDANCY'
            };

            s3.copyObject(params, function (err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else     console.log(data);           // successful response
            });
        }
    }
});
-- 
