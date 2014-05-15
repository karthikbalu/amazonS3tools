amazonS3tools
=============

This repository contains useful scripts to work with amazon services
https://github.com/karthikbalu/amazonS3tools/wiki

Step 0:
Install "npm install aws-sdk"

Step 1:
Configure Amazon S3 access key and secret key using any of the methods mentioned below
http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html


Step 2:
update <BUCKET_NAME> with your corresponding bucket name


Step 3:
run node s3mimeUpdater.js


Now the sciript will automatically update the mime type of each and every object under the specified bucket based on the file extension

  html       : text/html
  css        : text/css
  javascript : application/javascript
  png        : image/png
  json       : application/json
  other      : text/plain



Caveats:
Amazon has a maximum limit of 1000 files to process using copy object


Please leave your comments and your contributions are really appreciated!!!

