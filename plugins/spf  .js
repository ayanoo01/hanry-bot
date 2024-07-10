import fs from 'fs'; // استيراد وحدة fs لعمليات نظام الملفات

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `أين النص؟\n\nالاستخدام:\n${usedPrefix + command} <النص>\n\nمثال:\n${usedPrefix + command} القائمة`;
    if (!m.quoted.text) throw `رد على الرسالة!`;
    let path = `plugins/${text}.js`; // تعريف مسار الملف بناءً على النص المعطى
    await fs.writeFileSync(path, m.quoted.text); // كتابة النص المقتبس إلى المسار المحدد
    m.reply(`تم الحفظ في ${path}`); // الرد برسالة تأكيد
};

handler.help = ['sfp'].map(v => v + ' <النص>'); // رسالة المساعدة للأمر
handler.tags = ['owner']; // العلامات المرتبطة بالأمر
handler.command = /^sfp$/i; // التعبير العادي لتشغيل الأمر

handler.rowner = true; // إشارة إلى أن هذا الأمر مخصص للمالك

export default handler; // تصدير وظيفة معالج الأمر
