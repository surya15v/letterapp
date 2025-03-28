const { google } = require('googleapis');

async function saveToDrive(req, res) {
  const { token, content } = req.body;
  if (!token) return res.status(401).json({ error: 'No access token provided' });

  try {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: token });
    const drive = google.drive({ version: 'v3', auth: oauth2Client });

    const fileMetadata = { name: 'letter.docx', mimeType: 'application/vnd.google-apps.document' };
    const media = { mimeType: 'text/plain', body: content };

    const file = await drive.files.create({ resource: fileMetadata, media, fields: 'id' });
    res.json({ fileId: file.data.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { saveToDrive }; // Ensure this function is exported
