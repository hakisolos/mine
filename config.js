//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdETlF4TFMyYnRlVFpkRVBSMmVSWWpWMENjTXpQSkowT09JYmpvaEdsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BVU254bnZUR2czZ0kwME44aE1VNk9QRCtIU3lnWmdpNU1NbGtldFZUcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRWczallGRFVqNUhqR2FKTnNRSWpua3IxN1RoSUdxNVhVcXJQREVWUUVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMWSt3Y1FTTms5UEpTNk90K3NsUWpRNE5uUlhjUDgycWNtTnJPUjhMRXlnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdLeVVhSmo2MXVMUWZweGFJUTBFcU5kelZ1d3Znc0F3dmh1d0RUWUNhMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1xc3VXVGEyTEFKV1kzWStmMFN4TVFpdFBZbFg2K2dGWW9CbCtQcUpCVms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0lUWE85dEZUK2pJTWJDY0N5OGNTZ0ozU0RPRElUMjVBbXkrZ0hLN3hsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxzdGdxYkFvckpMN0pJNHF6UnpMRTFUa0dWL3g3MGxEN2ExeElDcGtRcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRCSDZlZDBnKzZqWndEbytXZzlmS0ZWT20zWjNMRFJ6STFJdktSNnpYSk1PRU1wd3IyWm9xbmtZZSszNUs0clRFS1RiWElORzlXTDFHYTR3c1pVZkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiI4RCt0bkV0SVI2WXJHcWdkUUFQNEg3OEV2TlVEekpXZHg2djdRZ3I4OUljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3ODMzMjExMDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgyNjMzNTcxM0E5RTdFOUJBRjFCN0Q4NzNCNUZFQjNDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjczNTg5MTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkVRT2FiaUpmUUlDcmt0Z05URmpZaUEiLCJwaG9uZUlkIjoiOWU0MDg0ZjAtNzFhYy00ZWZhLWExYTYtYWQ5NmJkOTg2MGNkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJnSm9mYk40UCt1ZzV3M3lHamxhenJUNHdLbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIeHhNUWlnYU9zMmFaWGdiajM3dnRmTCtrU3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjJEMTQ3NzYiLCJtZSI6eyJpZCI6IjI3ODMzMjExMDcwOjE1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKVEN1cUVHRUt6UDFiY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMSDN3SWlSNDlWMTA1Y2J5cEZDZkZrNGQ4Y0RRUHpRT2JLY3JFZjVpSkhrPSIsImFjY291bnRTaWduYXR1cmUiOiJwbTVCV1VSNUZXelBCNkExMFJrOVMyc1kzWGFwcFkvMFV2YlFQRmlFeDFnRzJOZTNQQ2J0dHBuRWRPNW5QcGZVZmpYY2RiUkY1dGhqQk9xRXlINUZEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNGVka1pwSEVnWm9SOW9RUnlDOWdML1pPamttRHBvYXlkUnR5MW5TZGptekxiTC9GUkRzK1pPQzV6Q3N1L3V5N29ZWlBSN1QwUFZKQTVNaGNNRlFIQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzgzMzIxMTA3MDoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTeDk4Q0lrZVBWZGRPWEc4cVJRbnhaT0hmSEEwRDgwRG15bkt4SCtZaVI1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MzU4OTA2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFsNSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "KING",
  packname: process.env.PACK_NAME || "HAKI",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
