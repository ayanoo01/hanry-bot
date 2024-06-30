استيراد pkg من '@whiskeysockets/baileys'؛
const { generatorWAMessageFromContent, proto } = pkg

var handler = async (m، { conn، usedPrefix }) => {

دع الرسالة = generateWAMessageFromContent(m.chat، {
  عرض الرسالة مرة واحدة: {
    رسالة: {
        "معلومات سياق الرسالة": {
          "deviceListMetadata": {}،
          "deviceListMetadataVersion": 2
        },
        InteractiveMessage: proto.Message.InteractiveMessage.create({
          الجسم: proto.Message.InteractiveMessage.Body.create({
            النص: "اختبار"
          }),
          تذييل الصفحة: proto.Message.InteractiveMessage.Footer.create({
            النص: "اختبار"
          }),
          الرأس: proto.Message.InteractiveMessage.Header.create({
            العنوان: "اختبار"،
            العنوان الفرعي: "اختبار"،
            hasMediaAttachment: كاذب
          }),
          originalFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            أزرار: [
              {
                "الاسم": "اختيار واحد"،
                "buttonParamsJson": "{\"title\":\"title\"،\"sections\":[{\"title\":\"title\"،\"highlight_label\":\"label\"، \"rows\":[{\"header\":\"header\"،\"title\":\"title\"،\"description\":\"description\"،\"id\": \"id\"},{\"header\":\"header\"،\"title\":\"title\"،\"description\":\"description\"،\"id\": \"بطاقة تعريف\"}]}]}"
              },
              {
                "الاسم": "الرد السريع"،
                "buttonParamsJson": "{\"display_text\":\"quick_reply\",\"id\":\"message\"}"
              },
              {
                 "الاسم": "cta_url"،
                 "buttonParamsJson": "{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https:// www.google.com\"}"
              },
              {
                 "الاسم": "cta_call"،
                 "buttonParamsJson": "{\"display_text\":\"اتصال\",\"id\":\"message\"}"
              },
              {
                 "الاسم": "cta_copy"،
                 "buttonParamsJson": "{\"display_text\":\"copy\",\"id\":\"123456789\",\"copy_code\":\"message\"}"
              },
              {
                 "الاسم": "cta_reminder"،
                 "buttonParamsJson": "{\"display_text\":\"cta_reminder\",\"id\":\"message\"}"
              },
              {
                 "الاسم": "cta_cancel_reminder"،
                 "buttonParamsJson": "{\"display_text\":\"cta_cancel_reminder\",\"id\":\"message\"}"
              },
              {
                 "الاسم": "عنوان_الرسالة"،
                 "buttonParamsJson": "{\"display_text\":\"address_message\",\"id\":\"message\"}"
              },
              {
                 "الاسم": "send_location"،
                 "buttonParamsJson": ""
              }
           ]،
          })
        })
    }
  }
}, {})

انتظر conn.relayMessage(msg.key.remoteJid، msg.message، { معرف الرسالة: msg.key.id })

}
Handler.command = /^(mboton)$/i

معالج التصدير الافتراضي
