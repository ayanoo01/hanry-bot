استيراد fetch من 'node-fetch';
استيراد displayLoadingScreen من '../lib/loading.js';

دعوى handler = async (m, { conn, text }) => {
  إذا (!نص) {
    console.log('لم يتم توفير اسم الأغنية.');
    رمي `*يرجى إدخال اسم الأغنية*`;
  }
  m.react('🎶')
  انتظر displayLoadingScreen(conn, m.chat);
  سمح pp = 'https://wallpapercave.com/wp/wp7932387.jpg'
  ثابت الاستعلام = encodeURIComponent(نص);
  سمح res = `https://guruapi.tech/api/spotifydl?url=${query}`
  // سمح spotify = انتظر (استدعاء fetch(res)).buffer()
  سمح doc = {
    الصوت: {
      url: res
    },
    نوع الملف: 'audio/mpeg',
    ptt: صحيح,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: "Guru.mp3",

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: "↺ |◁ II ▷| ♡",
        body: `تشغيل الآن: ${text}`,
        thumbnailUrl: pp,
        sourceUrl: null,
        mediaType: 1,
        renderLargerThumbnail: خطأ
      }
    }
  };

  انتظر conn.sendMessage(m.chat, doc, { quoted: m });
}
handler.help = ['spotify'];
handler.tags = ['downloader'];
handler.command = /^(سبوتيفاي|سبوت)$/i;

export default handler
