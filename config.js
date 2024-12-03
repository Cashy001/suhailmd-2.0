const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349164598552";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_32_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNixcbiAgICAgICAgMTM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICAzLFxuICAgICAgICA3MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE5LFxuICAgICAgICA3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWnRsRm42aGc3OCsvVzB6QlJUNk1pdXpnRlROMUVRK0V0dzN2dGNUbVZ5dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic3k4M2I2WFFTTi1KRHF1YjNhU1Exd1wiLFxuICBcInBob25lSWRcIjogXCI4OTM2ZWQwOS1mMWEzLTQ0OWEtODJlZi03YTk2ZmIyY2RiYzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgODUsXG4gICAgICA5LFxuICAgICAgNDIsXG4gICAgICAyLFxuICAgICAgMTk5LFxuICAgICAgNTEsXG4gICAgICAyMTgsXG4gICAgICAyMDcsXG4gICAgICA3OSxcbiAgICAgIDUsXG4gICAgICA5NixcbiAgICAgIDE3OSxcbiAgICAgIDIzNyxcbiAgICAgIDEwOSxcbiAgICAgIDE4OCxcbiAgICAgIDYxLFxuICAgICAgMjQxLFxuICAgICAgMTM2LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgODUsXG4gICAgICA1OCxcbiAgICAgIDczLFxuICAgICAgMzEsXG4gICAgICAxNTIsXG4gICAgICA1MixcbiAgICAgIDcsXG4gICAgICAxOTYsXG4gICAgICAyNyxcbiAgICAgIDYzLFxuICAgICAgNjgsXG4gICAgICAyMzcsXG4gICAgICA2NyxcbiAgICAgIDE4OSxcbiAgICAgIDEwMixcbiAgICAgIDExNCxcbiAgICAgIDI0NyxcbiAgICAgIDE3NSxcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkI3WUVTVktDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY0NTk4NTUyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYyNzIzOTU0MDY1NDM3OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW1ZZ0pFREVQZXN2TG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmNzZ5RUl4MXpMZjhjOTFPVXpNMUhSbEsyNnhkNlVOVXB0VWxmeXBIVlhnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInQ2KzdTaTlRYmNLMDg1b0drRVpPMVE2LzNXNSt6UFhnby9zUnBXSDdVb1JrOFVud0FtRlFuSGFKYm5kL3l2QlA1eTRVTnBmTkx0R3UxSlBlcnc4ckJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkg0UXlIaEk5UDJQV2tRclZJWUw4MDd0SEN2SnFSVys1azBzZHhTWUhEUERYL1VkenJBQ0drdEo5aGJmWUZRVmxtUWVNSTFLcFQ3Q0pGNTNNSnFKVWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjQ1OTg1NTI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzIzNjM0N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
