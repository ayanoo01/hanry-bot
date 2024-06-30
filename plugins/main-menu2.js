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
let videoUrl = 'https://telegra.ph/file/2642aa631b7f2f9207465.mp4';
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

*_<اوامر ترافلجار لاو/>_*   

*① ضع قبل كل أمر /*

*➁ يمنع استخدام البوت بشكل خاطئ*
          
┓──⏣──━━──⏣──┏
*_❐ اوامر المطور☠️_*
┛──⏣──━━──⏣──┗

*╮─═══─ • ❯ ✣ ❮ • ─═══─╭*
*_❍↚ انضم_*
*_❍↚ غادر_*
*_❍↚ اسم_*
*_❍↚ بان_*
*_❍↚ الغاء_بان_*
*_❍↚ عام_*
*_❍↚ خاص_*
*_❍↚ مميز_*
*_❍↚ حذف_مميز_*
*_❍↚ ضيف_بريميام_*
*_❍↚ حذف_بريميام_*
*_❍↚ ضيف_جواهر_*
*╮─═══─ • ❯ ✣ ❮ • ─═══─╭*

┓──⏣──━━──⏣──┏
*_❐ اوامر مشرفين الجروب🤖_*
┛──⏣──━━──⏣──┗

*╮─═══─ • ❯ ✣ ❮ • ─═══─╭*
*_❍↚ طرد_*
*_❍↚ اضافه_*
*_❍↚ ترقيه_*
*_❍↚اعفاء_*
*_❍↚ منشن_*
*_❍↚ مخفي_*
*_❍↚ الرابط_*
*_❍↚ حذف_*
*_❍↚ تحذير_*
*╮─═══─ • ❯ ✣ ❮ • ─═══─╭*

┓──⏣──━━──⏣──┏
*_❐ اوامر اعضاء الجروب👑_*
┛──⏣──━━──⏣──┗

*╮─═══─ • ❯ ✣ ❮ • ─═══─╭*
*_❍↚ ملصق_*
*_❍↚ فيديو_*
*_❍↚ تطقيم_*
*_❍↚ طقم_*
*_❍↚ طقمي_*
*_❍↚ لفيديو_*
*_❍↚ بلاك بينك_*
*_❍↚ ميسي_*
*_❍↚ رونالدو_*
*_❍↚ المطور_*
*_❍↚ المشرفين_*
*_❍↚ توب_*
*_❍↚ خط_*
*_❍↚ لينك_*
*_❍↚ يومي_*
*_❍↚ الترحيب_*
*_❍↚ المغادره_*
*_❍↚ الماس_*
*_❍↚ ترتيب_البنك_*
*_❍↚ شراء_*
*_❍↚ هجوم_*
*_❍↚ ايات_*
*_❍↚ دعوه_*
*_❍↚ لفل_*
*_❍↚ جروب_فتح_*
*_❍↚ جروب_قفل_*
*_❍↚ احزر_*
*_❍↚ كت_*
*_❍↚ بروفايلي_*
*_❍↚ عين_*
*_❍↚ علم_*
*_❍↚ بنت_*
*_❍↚ صوره_*
*_❍↚ اكس او_*
*_❍↚ لو_*
*_❍↚ هل_*
*_❍↚ ترجم_*
*_❍↚ صراحه_*
*_❍↚ زواج_*
*_❍↚ طلاق_*
*_❍↚ ذكاء_*
*_❍↚ غباء_*
*_❍↚ سؤال_*
*_❍↚ حكمه_*
*_❍↚ ميمز_*
*_❍↚ تاج_*
*_❍↚ الجروب_*
*_❍↚ ايديت_*
*╮─═══─ • ❯ ✣ ❮ • ─═══─╭*

┓──⏣──━━──⏣──┏
*_❐ اوامر التنزيلات_*👾
┛──⏣──━━──⏣──┗
*_❍↚ انستغرام_*
*_❍↚ سبوتيفاي_*
*_❍↚ تيك توك_*
*_❍↚ اغنيه_*
*_❍↚ يوتيوب_*
*_❍↚ تطبيق_*
*_❍↚ بحث_*
*_❍↚ شغل_*
*╮─═══─ • ❯ ✣ ❮ • ─═══─╭*

┓──⏣──━━──⏣──┏
*_❐ الاسلاميات_*  ┛──⏣──━━──⏣──┗
*_❍↚ اذكار الصباح_*
*_❍↚ اية الكرسي_*
*_❍↚ الله_*
*_❍↚ قران_*
*_❍↚ حديث_*
*╮─═══─ • ❯ ✣ ❮ • ─═══─╭*

┓──⏣──━━──⏣──┏
*_❐ اوامر التحميل_🎭*  ┛──⏣──━━──⏣──┗
*_❍↚ ملصق_*
*_❍↚ سرقه_*
*_❍↚ لفيديو_*
*_❍↚ لصوره_*
*_❍↚ لانمي_*
*_❍↚ تخيل_*
*_❍↚ مكس_*
*_❍↚ لجواهر_*
*_❍↚ ستك_*
*_❍↚ تليجراف_*
*_❍↚ لكرتون_*
*_❍↚ باركود_*
*╮─═══─ • ❯ ✣ ❮ • ─═══─╭*

┓──⏣──━━──⏣──┏
*_❐ اوامر الدعم_*🌐
┛──⏣──━━──⏣──┗
*_❍↚ المطور_*

𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘

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
