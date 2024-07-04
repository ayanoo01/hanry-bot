import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
> *_الــــــلــــفــــل_*
*╮──────────────────⟢ـ*
*❍ ↚الـآســــم*
*❍ ↚〖{name}$ 〗*
*❍ ↚الــمـــســـتـوي : 〖 {user.lvel}$ 〗*
*❍ ↚الــدور 〖 {user.role}$ 〗*

*╯─────────────────⟢ـ*
> *تـــحـــتـاج الــي ┇{max - user.exp} $┇مـن نـــقـاط الـخــبـــرة*

انت تحتاج الي *${max - user.exp}* *XP* لرفع مستواك
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🎊 عاش يحب ${conn.getName(m.sender)}    المستوي:`
        let str = `
*╮──────────────────⟢ـ*
*❍ ↚الــمــســـتــوي الـــســـابـــق : 〖}before}$ 〗*
*❍ ↚الـــمــســتـــوي الــحـالــي : 〖 {user.lvel}$ 〗*
*╯─────────────────⟢ـ*
> *_تــــفــاعــل مـــع الـــبوت أكــثـــر لــ يــرتــــفع مـــســتــواك_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['لفل', 'lvl', 'levelup', 'مستواي', 'مستوا'] 

export default handler
