import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/41f45b011b2c34057b64d.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = ` 𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘

 *مرحبا,* ${taguser}

*_<اوامر ترافلجار لاو بوت/>_*   

*① ضع قبل كل أمر /*

*➁ يمنع استخدام البوت بشكل خاطئ*
          
~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*~
*ほالـمــــجــــمــــوعـــــــات⤣👥⤤〆*
> ~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*
            *🧑‍🧑‍🧒‍🧒➜⃞「منشن」*
*🧑‍🧑‍🧒‍🧒➜⃞「مخفي」*
*🧑‍🧑‍🧒‍🧒➜⃞「الادمن」*
*🧑‍🧑‍🧒‍🧒➜⃞「الاشباح」*
*🧑‍🧑‍🧒‍🧒➜⃞「الجروب」*
*🧑‍🧑‍🧒‍🧒➜⃞「جروب غلق」*
*🧑‍🧑‍🧒‍🧒➜⃞「جروب فتح」*
*🧑‍🧑‍🧒‍🧒➜⃞「جروب قفل」*
*🧑‍🧑‍🧒‍🧒➜⃞「جروب الغاء-القفل」*
*🧑‍🧑‍🧒‍🧒➜⃞「ترقيه」*
*🧑‍🧑‍🧒‍🧒➜⃞「اعفاء」*
*🧑‍🧑‍🧒‍🧒➜⃞「طرد」*
*🧑‍🧑‍🧒‍🧒➜⃞「اضف」*
*🧑‍🧑‍🧒‍🧒➜⃞「رستر」*
*🧑‍🧑‍🧒‍🧒➜⃞「لينك」*
*🧑‍🧑‍🧒‍🧒➜⃞「انذار」*
*🧑‍🧑‍🧒‍🧒➜⃞「رفع-الانذار」*
*🧑‍🧑‍🧒‍🧒➜⃞「الانذارات」*
*🧑‍🧑‍🧒‍🧒➜⃞「تغيير-الصوره」*
*🧑‍🧑‍🧒‍🧒➜⃞「تغيير-الاسم」*
*🧑‍🧑‍🧒‍🧒➜⃞「تغيير-الوصف」*
*🧑‍🧑‍🧒‍🧒➜⃞「تغيير-الوداع」*
*🧑‍🧑‍🧒‍🧒➜⃞「تغيير-الترحيب」*
~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*~
> *© 𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘...*

        ~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*~
*ほالـألـــــــعــــــــــــاب⤣🎳⤤〆*
> ~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*~
            *☀️✭⃝↫ 「العاب لمعرفة المطلوب من الصور」↶*
*☀️➜⃞「احزر」*
*☀️➜⃞「عين」*
*☀️➜⃞「علم」*
*☀️➜⃞「هاري بوتر」*
*☀️➜⃞「نادي」*
*☀️➜⃞「سيارات」*
*☀️➜⃞「كوره」*
*☀️➜⃞「ناروتو」*

*☀️✭⃝↫ 「العاب أسئلة متنوعة」↶*
*☀️➜⃞「دين」*
*☀️➜⃞「ثقافة」*
*☀️➜⃞「قولة」*
*☀️➜⃞「سؤال」*
*☀️➜⃞「تخمين」*
*☀️➜⃞「خمن」*
*☀️➜⃞「ايمو」*
*☀️➜⃞「رياضه」*

*☀️✭⃝↫ 「العاب متطورة」↶*
*☀️➜⃞「اكس او」*
*☀️➜⃞「حساب」*
*☀️➜⃞「تحدي」*
*☀️➜⃞「رهان」*
*☀️➜⃞「جنيه」*
*☀️➜⃞「المتفجرات」*
*☀️➜⃞「بلاك-جاك」*

*☀️✭⃝↫ 「العاب النقابات」↶*
*☀️➜⃞「القلوب」*
*☀️➜⃞「الأشباح」*
*☀️➜⃞「قريبا」*
*☀️➜⃞「قريبا」*

*☀️✭⃝↫ 「العاب كتابة تفكيك الخ...」↶*
*☀️➜⃞「كت」*
*☀️➜⃞「رتب」*
*☀️➜⃞「فكك」*
*☀️➜⃞「عكس」*
*☀️➜⃞「قريبا...」*
*☀️➜⃞「قريبا...」*

~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*~
> *© 𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘...*

          ~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*~
*ほالــــتـــــــرفــــيـــــه⤣⛄⤤〆*
> ~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*~`,
            *`💭➜⃞「اتحداك」*
*💭➜⃞「الحروف」*
*💭➜⃞「المارد」*
*💭➜⃞「اختراق」*
*💭➜⃞「فعاليه」*
*💭➜⃞「عمل」*
*💭➜⃞「مغامرة」*
*💭➜⃞「ذكاء 」*
*💭➜⃞「ايدت」*
*💭➜⃞「ميمز」*
*💭➜⃞「تاج」*
*💭➜⃞「سؤال」*
*💭➜⃞「صراحه」*
*💭➜⃞「هل」*
*💭➜⃞「لو」*
*💭➜⃞「بروفايلي」*
*💭➜⃞「رونالدو」*
*💭➜⃞「ميسي」*
*💭➜⃞「طقم2」*
*💭➜⃞「الكره 」*
*💭➜⃞「طقمي」*
*💭➜⃞「تطقيم」*
*💭➜⃞「خط」*
*💭➜⃞「الماس」*
*💭➜⃞「 زواج  」*
*💭➜⃞「 طلاق 」*
*💭➜⃞「 ايموجي 」*
*💭➜⃞「 يومي」*
*💭➜⃞「 هجوم 」*
*💭➜⃞「 كراشي」*
~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*~
> *© 𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘...*
            

*────────────────⟢* ほ𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘⤣⤤〆©ほ𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘⤣🐉⤤𝐌𝐄𝐍𝐔〆

`.trim();
    
await conn.sendMessage(m.chat, { react: { text: '☘️', key: m.key } })

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['menue']
handler.tags = ['group']
handler.command = ['اوامر'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
