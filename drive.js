const fs = require("fs");
const { google } = require("googleapis");
const credentials = require("./key.json");

const scopes = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  scopes
);

async function uploadFile(name) {
  const driveService = google.drive({ version: "v3", auth });

  let fileMetadata = {
    name: name,
    parents: ["1Qf6O5b2D5izApcx0PPBtaSSCtKW4ioMR"],
  };

  let media = {
    mimetype: "image/jpeg",
    body: fs.createReadStream(name),
  };

  let response = await driveService.files.create({
    resource: fileMetadata,
    media: media,
    fields: "id",
  });

  console.log("Created File Id: ", response.data.id);
}

exports.uploadFile = uploadFile;
