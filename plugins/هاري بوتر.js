let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://gist.githubusercontent.com/ayanoo01/b5a1c282f9898daf58f0732dbd2336a6/raw/e1231d244b590ef5616a8268f53f2b5d91b11604/gistfile1.txt')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*
  *❐↞┇الـوقـت⏳↞ *${(timeout / 1000).toFixed(2)} ┇
  *استخدم .انسحب للأنسحاب*
  *❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇*
*『𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘-𝚋𝚘𝚝』*
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.name}*┇`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['guessflag']
handler.tags = ['game']
handler.command = /^هاري/i

export default handler
