// const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());

// const s3Client = new S3Client({
//   region: "ap-south-1",
//   credentials: {
//     accessKeyId: "accesskey",
//     secretAccessKey: "key",
//   },
// });

// async function getObjectUrl(key) {
//   const command = new GetObjectCommand({
//     Bucket: "sumit-upload",
//     Key: key,
//   });

//   const url = await getSignedUrl(s3Client, command, { expiresIn: 20 });
//   return url;
// }

// async function main() {
//   console.log(
//     "URL: ",
//     await getObjectUrl("3d-render-little-boy-with-laptop-tools_1057-44642.jpg")
//   );
// }

// main();

// app.post("/", (req, res) => {
//   console.log(req);
//   res.send(req.body);
// });

// app.get("/s", (req, res) => {
//   // main();
//   res.send("Image uploaded successfully!");
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
