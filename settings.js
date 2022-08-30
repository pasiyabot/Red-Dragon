//════════════(00)═══════════════════════════════════════//
//
//                              K.PRABHASHA
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════(00)════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = '┌──🪔

│  ╭───────────╮

│    🧜𝚂𝙻𝚃 𝙿𝙰𝚂𝙸𝙳𝚄🧜

│  ╰───────────╯

└──🪔

      ┌ *⌚සුබ උදෑසනක්🌞* ┐

👋 ```𝗶 𝗮𝗺 𝗮𝗹𝗶𝘃𝗲 𝗻𝗼𝘄```

🪴 𝗢𝘄𝗻𝗲𝗿🎓 : 🔥៚ʏ͡ᴛ ᴘᴀꜱɪ͢ᴅᴜ༆🔥

🪴 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 🧙 : *12.0.1*

🪴 𝗚𝗿𝗼𝘂𝗽 🧜 : https://chat.whatsapp.com/EpqPcoZESOZFlrhcBg26FT

┗━━━━━━━━━━━━━━━┛'




❶ 🧚‍♀️𝚃𝙴𝙲𝙷 𝙿𝙰𝚂𝙸𝙳𝚄 𝚆.𝙰 𝙱𝙾𝚃🧚‍♀️` //Costomize Alive Message (type your message in `` )

global.owner = ['94721568805'] //Owner number in aive msg
global.premium = ['+94721568805'] //Owner Number info
global.ownernomer = '+94721568805' //Owner Number <<<

global.ownername = '[🦄 © 𝙎𝙇𝙏 𝙋𝘼𝙎𝙄𝘿𝙐 🦄]' //Owner Name
global.botname = ' [🦄 *© PASIDU -MD 2022* 🦄]' //Bot Name

global.button = '🥰MY WHATSAPP GROUP📍' //Costomize A Button Name In Alive Message
global.btnurl = '😃 https://chat.whatsapp.com/KkUJmbixrmpCymTXaLOul8 😃' //Change Your Button's URL

global.region = 'India, South India, Kerala, Sri Lanka' //Country Region

global.packname = '🦄 © 𝙎𝙇𝙏 𝙋𝘼𝙎𝙄𝘿𝙐 🦄' //Bot Pacage Name
global.author = '🦄 © 𝙎𝙇𝙏 𝙋𝘼𝙎𝙄𝘿𝙐 🦄❯❯' //Author Name
global.prefa = ['*','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '❤️' //A Charactor In Menu!


global.ig = 'https://github.com/prabhasha2006' //Github Account!
global.footer = '©_Kumuthu.' // DO NOT CHANGE!

global.mess = { // Error Mesages
    success: 'Done ..✅',
    admin: '😜Only Admins can use it!😉',
    botAdmin: '😥Bot wants to be an Admin😥',
    owner: '😜Only Owner can use this!😉',
    group: '🐣Feature Used Only For Groups🐣!',
    private: '🕊️This Features Only For Private Chat🕊️!',
    bot: '😉This Feature Is Only For Bot😝',
    wait: '☞Pleas Wait...🪄',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
