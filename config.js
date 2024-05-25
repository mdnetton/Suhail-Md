const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254741435726";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_44_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMixcbiAgICAgICAgMTg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDcxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgMTI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInQwUGRoN3ByOWd3WXpwUkFiYWxzUnI5MUR6cGJPc3VvY1VrdXNnRkw1NVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxNzk1NzQyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0ZENzgzMThCRUVCRjJGM0M4NzAzMjE3NUU0MDMxNTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NDUzODY2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkc5Mm1oZXA4VEw2YkRYUWZ3RnJHOWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjA1NTAzNmItYmY3MC00OWFhLWExZTYtYjY2MTY3YWVjNGY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE4MyxcbiAgICAgIDEzNixcbiAgICAgIDE1MixcbiAgICAgIDE4OCxcbiAgICAgIDEwNyxcbiAgICAgIDEzMixcbiAgICAgIDE5NSxcbiAgICAgIDE0MixcbiAgICAgIDkxLFxuICAgICAgNTgsXG4gICAgICA5NCxcbiAgICAgIDI0NyxcbiAgICAgIDIwNSxcbiAgICAgIDE1MSxcbiAgICAgIDMxLFxuICAgICAgMjYsXG4gICAgICAyMDksXG4gICAgICAxOTEsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAxNjcsXG4gICAgICAxNTgsXG4gICAgICA5MyxcbiAgICAgIDEwMixcbiAgICAgIDY0LFxuICAgICAgMTU0LFxuICAgICAgMjQ4LFxuICAgICAgMjEsXG4gICAgICAxNjQsXG4gICAgICAyNTMsXG4gICAgICA5NixcbiAgICAgIDE0LFxuICAgICAgMjE4LFxuICAgICAgMTUwLFxuICAgICAgNzYsXG4gICAgICAyMixcbiAgICAgIDE4MixcbiAgICAgIDY1LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5SFZTN1NXOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNzk1NzQyNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzcyODM3Njc3MzQyODE6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLVDA3cjhGRU9HRHZMSUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpzNWlRdFc2T0ZacFVkc1FFWEhGOFBJaHgzZ3VNSGxIMDlTMmcvblRKa0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTzVUWmpVVlF1WkdkQ0VsZ1B4OEVUWWFVL0pMVmdpZUJQMmx0SllmSGY4VTlqTUxNY2h1ZTBzTVluV1doWlNxVTJHeksySzY0azJEU3ZoSVVnVXRIQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNVhyM0U4REdiSktaSjRqbTZ2TFVFQVJidG15MGFsTUZvUEhhcTA4YnJGUnJJb0p3TVU5c0FBOGZueFlNZlVyeVFkS08wSHlwZUh2aUJnYUtjL1hkQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxNzk1NzQyNDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjQ1Mzg2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxQYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFBiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT1M5TUFzSVhSTUJxd2JRZnBLSzFsTlNNdDVXODI1bE5pdFJJTmhlZjF0UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDc2MTE0OTgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY0MjQ5NTM1ODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",











