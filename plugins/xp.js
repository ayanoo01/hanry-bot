
import { xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, args }) => {
    let recipientNumber;
    let xpToTransfer;

    if (m.quoted && args.length === 1) {
        // تم الانشاء بواسطه ميليودس 

        recipientNumber = m.quoted.sender;
        xpToTransfer = parseInt(args[0]);
    } else if (args.length === 2) {
        // تم الانشاء بواسطه ميليودس 

        recipientNumber = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        xpToTransfer = parseInt(args[1]);
    } else {
        throw 'استخدم الأمر بالشكل الصحيح: .تحويل <رقم المستخدم المراد التحويل له> <عدد الـXP المراد تحويله>\nأو قم بالرد على رسالة المستخدم مع كتابة عدد الـXP فقط';
    }

    if (isNaN(xpToTransfer) || xpToTransfer <= 0) {
        throw 'الرجاء إدخال عدد صحيح من نقاط XP المراد تحويلها';
    }

    let sender = global.db.data.users[m.sender];
    let recipient = global.db.data.users[recipientNumber];

    if (!recipient) {
        throw 'المستخدم الذي تحاول تحويل النقاط له غير موجود في قاعدة البيانات';
    }

    if (sender.exp < xpToTransfer) {
        throw 'ليس لديك نقاط XP كافية للتحويل';
    }

    sender.exp -= xpToTransfer;
    recipient.exp += xpToTransfer;

    let transferForm = 
*تم تحويل نقاط XP بنجاح!*
🔄 *المحول:* ${m.sender.split('@')[0]}
🎁 *المستلم:* ${recipientNumber.split('@')[0]}
⭐ *عدد نقاط XP المحولة:* ${xpToTransfer}
    .trim();

    await conn.sendMessage(m.chat, { text: transferForm }, { quoted: m });
}

handler.help = ['تحويل']
handler.tags = ['xp']
handler.command = ['تحويل']

export default handler;
