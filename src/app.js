const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

const filePath = path.join(__dirname, "../", "hires.jpg");

async function uploadFile() {
  try {
    const res = await drive.files.create({
      requestBody: {
        name: "potta.jpg",
        mimeType: "image/jpg",
      },
      media: {
        body: fs.createReadStream(filePath),
        mimeType: "image/jpg",
      },
    });

    console.log("logging response data \n\n");
    console.log(res.data);
  } catch (error) {
    console.log(error);
    console.error(error.message);
  }
}

uploadFile()

async function deleteFile() {
  try {
    const response = await drive.files.delete({
      fileId: "1la5uY0_X_7zJELq7CFIdV0XKlbd2PyFr",
    });
    console.log(response);
    console.log(response.data, response.status);
  } catch (err) {
    console.log(err);
    console.error("Error in Deleting File: ", err);
  }
}

// deleteFile();
