youconst fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("255782108715")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'jimymwangomi@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'tanzania/mbeya'
global.gurl = '' // add your username
global.sudo = process.env.SUDO || '255782108715'
global.devs = '255782108715';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'JEMO-MD' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'James' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split("KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ExOHNOY204aGhmRXZBdkRWWHFhVVh4VWVYMDBON1IwWFhsaUgwdXhHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHZLVTY3YVpzL3UwUndMM253VUJXMGdRNnFaMG82VHUwQmZIL1lpNEV6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TTc0aWJMUEdJQ1A5WWJuek9EWEV5QWJELzhQTG5PMjRDOVNxVXdpTmtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0dW10OUl1bFBoMTZTN1NydDJJang4dGtnKzRXOEs5WUIzM2h0KzRxTmtRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9HNGw1Q1NzM0l3aHJ1Q2ZkWmljUDl4V0ZBb1ZRajd0MkQ1alVZWnp2R3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlYR3RjUGtqRldTM2hERXVneUlNK3JtWDc2Y3ovTm5NazJlSk5PTjZpQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU1YcGkxZDRETEQ2NUtyMWZQMXRBWUtSeUNKSzlXbFEyVE5ReFBwVnVtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXpCb1BuNUVTTnprZU5WSUR4RkowOUc0Tkl4NjIyUXQvcEpJTHk2WUh5dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhCL0tLYWppK2NYaUMrSyt5TGZ6b2tySmI4b0lwcDgwNG1IK3dsSzlUeUUzQ1I3STZ6bDBhTTYrYnpSeUkyZmpabG5NMDl6TXRoaWZYc0J2Q2hxeWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoieVlKMVFPQm41aldEK0hOUVJlZzVVWHR2aldzYjJkVDhsYlBTZGtEbkhrVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYTVSN1VuWHJSVWlzUUlBVk16dW1BQSIsInBob25lSWQiOiIyMjJlMjQ2Ni1hYjIyLTQwMWMtOWYyYS00YmZjZTFkOWI1MjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW5CSmRuUjZJdXhNMS9iMVBMdkFhbHlLd0NrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhtMndWYmVJTGY5Zks5Qk9LbEZlOW1xOTREcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5VzRSTU02WiIsIm1lIjp7ImlkIjoiMjU1NzgyMTA4NzE1OjExQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQcm8wcXNIRU16bTdMTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3cU9OWVhPczZHMXIvRkhtd3h3ZnhaaFZIVURqSmpMZDRybkhwbm9pN1NjPSIsImFjY291bnRTaWduYXR1cmUiOiJRMjJRdTRzbllpUmdKWGxMTFlqdklsLzJLZE5LdFZWUjlNdk1zYjE3NkJzWkw3a3RGazFqQUk3T0NTZ1ZabnZDWUIzdERXRjVTSzZwR1lic1FRSWpEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaUZNQ012ZEVhUzFFQmdrbjlsT0ZvUGM1WXdHRHQvTDNnL01tODN5SFZsS3lFZUs0UmVVM3RUMnZvV1I3TTRxQmIvaUowTnBOK0ZmSmFmZWdoSU9zakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3ODIxMDg3MTU6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTZqaldGenJPaHRhL3hSNXNNY0g4V1lWUjFBNHlZeTNlSzV4Nlo2SXUwbiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTM1MDEwNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIQm0ifQ==")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
