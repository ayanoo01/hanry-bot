/*

- ترقية إلى مجتمع "WSApp • Developers"
 * https://chat.whatsapp.com/FaQunmlp9BmDRk6lEEc9FJ
- ترقية خاصة لكارلوس (PT) من خلال رموز الرسائل التفاعلية (الأزرار)
- Agradecimiento a Darlyn1234 por la بنية الاستخدام في هذا الكود المقتبس
 * https://github.com/darlyn1234
- تكييف الصورة في نوع القائمة، والتشفير والوظيفة بواسطة برونو سوبرينو
 * https://github.com/برونوسوبرينو

*/
جلب الاستيراد من "node-fetch"؛
استيراد { تحضيرWAMessageMedia، إنشاءWAMessageFromContent، getDevice } من '@whiskeysockets/baileys'؛

دع البيانات؛
دع برتقالي.
دع mimeType؛
دعونا اسم الملف؛
دع apiUrl؛
دع apiUrl2؛
دع apiUrlsz؛
دع الجهاز؛
دع dataMessage؛
دع Envando = خطأ؛
معالج const = غير متزامن (m, { Command,usedPrefix, conn, text }) => {
  البيانات الثابتة = عالمية؛
  ثابت اللغة = datas.db.data.users[m.sender].language؛
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`));
  const tradutor = _translate.plugins.descargas_play_v2;
  الجهاز = انتظار getDevice(m.key.id);

  إذا (!text) رمي `${tradutor.texto1[0]} _${usedPrefix + Command} ${tradutor.texto1[1]} _${usedPrefix + Command} https://youtu.be/JLWRZ8eWyZo?si =EmeS9fJvS_OkDk7p_`;
  إذا (command === 'playyt' && (device == 'desktop' || الجهاز == 'web')) throw `*[❗] لا تتوفر رسائل الزر على WhatsApp web، قم بالدخول إلى هاتفك المحمول يمكنك الاطلاع على الرسائل المزودة بالأزرار.*`;
  إذا (أرسل) العودة؛
  إنفياندو = صحيح؛

  يحاول {
    أبي أورلسز = [
      `https://api.cafirexos.com/api/ytplay?text=${text}`,
      `https://api-brunosobrino.onrender.com/api/ytplay?text=${text}&apikey=BrunoSobrino`,
      `https://api-brunosobrino-dcaf9040.koyeb.app/api/ytplay?text=${text}`
    ];
    const linkyt = انتظار isValidYouTubeLink(text);
    إذا (linkyt) apiUrlsz = [
        `https://api.cafirexos.com/api/ytinfo?url=${text}`،
        `https://api-brunosobrino-koiy.onrender.com/api/ytinfo?url=${text}&apikey=BrunoSobrino`,
        `https://api-brunosobrino-dcaf9040.koyeb.app/api/ytinfo?url=${text}`
    ];
    دع النجاح = خطأ؛
    لـ (عنوان url الثابت لـ apiUrlsz) {
      يحاول {
        const res = انتظار الجلب(url);
        البيانات = انتظار res.json();
        إذا (data.resultado && data.resultado.url) {
          النجاح = صحيح؛
          استراحة؛
        }
      } يمسك {}
    }

    إذا لم ينجح
      إنفياندو = خطأ؛
      رمي `_*< التنزيلات - تشغيل الإصدار 2 />*_

*[ ℹ️ ] ينقص عنوان الفيديو يوتيوب.*

*[ 💡 ] مثال:* _.playyt شعور جيد - فلو رضا_

*[ 💡 ] المثال 2:* _.playyt https://youtu.be/JLWRZ8eWyZo?si=EmeS9fJvS_OkDk7p_`;
    }

    const dataMessage = `العنوان : ${data.resultado.title}\nتم النشر : ${data.resultado.publicDate}\nالقناه : ${data.resultado.channel}\nرابط القناه : ${data.resultado.url}`.trim();  
    إذا (!text.includes('SN@') && أمر !== 'playyt') في انتظار conn.sendMessage(m.chat, { text: dataMessage }, { quote: m });      
      
    إذا (الأمر === 'playyt') {
      var messa = await prepareWAMessageMedia({ image: {url: data.resultado.image}}, { upload: conn.waUploadToServer });
      دع الرسالة = generateWAMessageFromContent(m.chat، {
          عرض مرة واحدة: {
              رسالة: {
                  رسالة تفاعلية: {
                      الجسم: { النص: رسالة البيانات }،
                      التذييل: { النص: `©${global.wm}`.trim() },
                      رأس: {
                          hasMediaAttachment: صحيح،
                          رسالة الصورة:messa.imageMessage،
                      },
                      رسالة التدفق الأصلية: {
                          أزرار: [
                              {
                                  الاسم: 'الرد السريع'،
                                  ButtonParamsJson: JSON.stringify({
                                      Display_text: 'الصوت🎧',
                                      المعرف: `${usedPrefix}play.1 ${data.resultado.url} SN@`
                                  })
                              },
                              {
                                  الاسم: 'الرد السريع'،
                                  ButtonParamsJson: JSON.stringify({
                                      display_text: 'الفيديو📽️',
                                      المعرف: `${usedPrefix}play.2 ${data.resultado.url} SN@`
                                  })
                              },   
                          ]،
                          messageParamsJson: ""،
                      },
                  },
              },
          }
      }, { userJid: conn.user.jid, مقتبس: m});
      انتظار conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});
      إرسال = خطأ؛    
      يعود؛
    }    

    يحاول {
      إذا (الأمر === 'play.1') {
        دع apiUrls2 = [
          `https://api.cafirexos.com/api/v1/ytmp3?url=${data.resultado.url}`,
          `https://api.cafirexos.com/api/v2/ytmp3?url=${data.resultado.url}`,
          `https://api-brunosobrino.onrender.com/api/v1/ytmp3?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino.onrender.com/api/v2/ytmp3?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v1/ytmp3?url=${data.resultado.url}`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v2/ytmp3?url=${data.resultado.url}`,
        ];

        دع النجاح 2 = خطأ؛
        لـ (const url لـ apiUrls2) {
          يحاول {
            apiUrl2 = urll;
            mimeType = 'audio/mpeg';
            اسم الملف = 'error.mp3';
            برتقالي = انتظر conn.getFile(apiUrl2);
            النجاح2 = صحيح؛
            استراحة؛
          } يمسك {}
        }

        إذا (! النجاح 2) {
          إرسال = خطأ؛
          رمي `تم نجاحه٣`;
        }
      } وإلا إذا (الأمر === 'play.2') {
        دع apiUrls22 = [
          `https://api.cafirexos.com/api/v1/ytmp4?url=${data.resultado.url}`,
          `https://api.cafirexos.com/api/v2/ytmp4?url=${data.resultado.url}`,            
          `https://api-brunosobrino.onrender.com/api/v1/ytmp4?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino.onrender.com/api/v2/ytmp4?url=${data.resultado.url}&apikey=BrunoSobrino`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v1/ytmp4?url=${data.resultado.url}`,
          `https://api-brunosobrino-dcaf9040.koyeb.app/api/v2/ytmp4?url=${data.resultado.url}`,
        ];

        دع النجاح 2 = خطأ؛
        لـ (const urlll لـ apiUrls22) {
          يحاول {
            apiUrl2 = urlll;
            mimeType = 'فيديو/mp4';
            اسم الملف = 'error.mp4';
            برتقالي = انتظر conn.getFile(apiUrl2);
            النجاح2 = صحيح؛
            استراحة؛
          } امسك (هـ) {
             console.log(e.message)
          }
        }

        إذا (! النجاح 2) {
          إرسال = خطأ؛
          ارمي `تم بنجاح ٢`؛
        }
      }
    } امسك (اي اي) {
      console.log(ee.message)  
      إنفياندو = خطأ؛
      رمي `سجل`؛
    }

    إذا (برتقالي) {
      انتظر conn.sendMessage(m.chat, {[mimeType.startsWith('audio') ? 'audio' : 'video']: buff.data, mimetype: mimeType, fileName: fileName}, {مقتبس: m});
      إنفياندو = خطأ؛
    } آخر {
      إنفياندو = خطأ؛
      رمي `ت٥`;
    }
  } catch (خطأ) {
    console.log(خطأ)؛  
    إرسال = خطأ؛
    رمي الاريرور
  }
};

الأمر handler = /^(play.1|play.2|playyt)$/i؛
معالج التصدير الافتراضي؛

دالة غير متزامنة isValidYouTubeLink(link) {
    أنماط صالحة ثابتة = [/youtube\.com\/watch\?v=/i, /youtube\.com\/shorts\//i, /youtu\.be\//i, /youtube\.com\/embed\//i, /youtube\.com\/v\//i, /youtube\.com\/attribution_link\?a=/i, /yt\.be\//i, /googlevideo\.com\//i, /youtube\.com\.br\//i, /youtube-nocookie\.com\//i, /youtubeeducation\.com\//i, /m\.youtube\.com\//i, /youtubei\.googleapis\.com\//i];
    إرجاع validPatterns.some(pattern => Pattern.test(link));
                  }
