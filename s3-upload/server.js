const express = require("express");
const app = express();
const cors = require("cors");
const { promisify } = require("util");
const aws = require("aws-sdk");
const crypto = require("crypto");

const randomBytes = promisify(crypto.randomBytes);

const region = "ap-south-1";
const bucketName = "sumit-upload";
const accessKeyId = "acces key";
const secretAccessKey = "secrete key";

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

async function generateUploadURL() {
  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString("hex");

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
}

async function getSignedUrlFroms3(key) {
  const params = {
    Bucket: bucketName,
    Key: key,
    Expires: 60,
  };

  const url = await s3.getSignedUrlPromise("getObject", params);
  return url;
}

app.use(cors());

app.get("/getS3Url", async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
});

app.get("/getS3Url/:key", async (req, res) => {
  const key = req.params.key;
  const url = await getSignedUrlFroms3(key);
  res.send({ url });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
