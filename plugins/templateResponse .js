// @type {import('@whiskeysockets/baileys')}

const { proto, generatorWAMessage, areJidsSameUser, decryptPollVote, } = (await import('@whiskeysockets/baileys')).default;
تصدير دالة غير متزامنة all(m, chatUpdate) {
إذا (م.isBaileys) {
يعود
}
إذا لم تكن (m.message) {
يعود
}
إذا (!(m.message.buttonsResponseMessage || m.message.templateButtonReplyMessage || m.message.listResponseMessage || m.message.interactiveResponseMessage)) {
يعود
}
اسمحوا معرف
إذا (m.message.buttonsResponseMessage) {
المعرف = m.message.buttonsResponseMessage.selectedButtonId
} وإلا إذا (m.message.templateButtonReplyMessage) {
المعرف = m.message.templateButtonReplyMessage.selectedId
} وإلا إذا كانت (m.message.listResponseMessage) {
المعرف = m.message.listResponseMessage.singleSelectReply?.selectedRowId؛
} وإلا إذا (m.message.interactiveResponseMessage) {
المعرف = JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id
}
ثابت النص = m.message.buttonsResponseMessage?.selectedDisplayText || m.message.templateButtonReplyMessage?.selectedDisplayText || m.message.listResponseMessage?.title
دع isIdMessage = false
دع usePrefix
بالنسبة إلى (الاسم الثابت في global.plugins) {
البرنامج المساعد const = global.plugins[name]
إذا لم يكن هناك ملحق
يكمل
}
إذا (البرنامج المساعد. معطل) {
يكمل
}
إذا لم يتم اختيار ['تقييد']) {
إذا (plugin.tags && plugin.tags.includes('admin')) {
يكمل
}}
إذا (نوع المكون الإضافي !== 'وظيفة') {
يكمل
}
إذا (! البرنامج المساعد.command) {
يكمل
}
ثابت str2Regex = (str) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
const _prefix = plugin.customPrefix؟ plugin.customPrefix : هذه البادئة؟ this.prefix : global.prefix
const match = (_prefix مثيل RegExp ? [[_prefix.exec(id), _prefix]] : Array.isArray(_prefix) ? _prefix.map((p) => {
const re = p مثيل RegExp؟ ع : جديد RegExp(str2Regex(p));
العودة [re.exec(id)، re]
}) :
typeof _prefix === 'string' ؟
[[new RegExp(str2Regex(_prefix)).exec(id)، جديد RegExp(str2Regex(_prefix))]] :
[[[], تعبير عادي جديد]]
).العثور على((ع) => ص[1])
إذا ((usedPrefix = (match[0] || '')[0])) {
ثابت noPrefix = id.replace(usedPrefix، '')
دع [الأمر] = noPrefix.trim().split` `.filter((v) => v)
الأمر = (الأمر || '').toLowerCase()
const isId = plugin.command مثيل RegExp؟
plugin.command.test(الأمر) :
Array.isArray(plugin.command) ؟
plugin.command.some((cmd) => cmd instanceof RegExp؟
cmd.test(الأمر) :
cmd === الأمر،
) :
نوع plugin.command === 'string' ؟
plugin.command === الأمر:
خطأ شنيع
إذا (! هو معرف) {
يكمل
}
isIdMessage = صحيح
}}
const messages = await generateWAMessage(m.chat, {text: isIdMessage ? id: text, mentions: m.mentionedJid}, {
userJid: هذا.user.id،
مقتبس: m.quoted && m.quoted.fakeObj،
})
messages.key.fromMe = areJidsSameUser(m.sender, this.user.id)
الرسائل.المفتاح.id = m.key.id
الرسائل.pushName = m.name
إذا (م.isGroup) {
messages.key.participant = messages.participant = m.sender
}
رسالة ثابتة = {
...تحديث الدردشة،
الرسائل: [proto.WebMessageInfo.fromObject(messages)].map((v) => (v.conn = this, v)),
النوع: "إلحاق"،
}
this.ev.emit('messages.upsert', msg)
}
