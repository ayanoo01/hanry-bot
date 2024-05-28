let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "🏮",
 key: m.key,
   }
  })

  await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m })
}

handler.help = ['ايديت_ايا-نو']
handler.tags = ['anime']
handler.command = /^(قران)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/d749b4db3512d6bc39760.mp4',
'https://telegra.ph/file/529cb71c8cb50540cb340.mp4',
'https://telegra.ph/file/13d2993a9781a8d160b1a.mp4',
'https://telegra.ph/file/01f97fd4ae84b0fa1750f.mp4',
'https://chat.whatsapp.com/Is6tHLbjYJe1yzexSH01ku',
'https://telegra.ph/file/2f045b982936767ce6a88.mp4',
'https://telegra.ph/file/dc45a53e0eda878a61f35.mp4',
'https://telegra.ph/file/a454a4a21807c6facef5d.mp4',
'https://telegra.ph/file/c0eb73f27c91659d76b4c.mp4',
'https://telegra.ph/file/52bee0cebd90352dd6eec.mp4',
'https://telegra.ph/file/ce862fc357bbf09b7d9b6.mp4',
'https://telegra.ph/file/ecbc4d7c7c13ac02c6418.mp4', 
'https://telegra.ph/file/cbeb58773455bf8a127b3.mp4', 
'https://telegra.ph/file/f7de6f2212781d6b4905b.mp4', 
'https://telegra.ph/file/22d3417d0e1ae4953faf9.mp4', 
'https://telegra.ph/file/3a31d7da12175541d38e4.mp4', 
'https://telegra.ph/file/3f8f8404625744cc3bf33.mp4', 
'https://telegra.ph/file/867220285cad3c039b70f.mp4', 
'https://telegra.ph/file/5bc2c4636a7b25147d64c.mp4', 
'https://telegra.ph/file/a4647461465c6612f39dc.mp4', 
'https://telegra.ph/file/a454a4a21807c6facef5d.mp4', 
'https://telegra.ph/file/c0eb73f27c91659d76b4c.mp4', 
'https://telegra.ph/file/08142bb7ad50ce75ceb00.mp4', 

  

'https://telegra.ph/file/be7999bd99f0c429eba33.mp4',
]
