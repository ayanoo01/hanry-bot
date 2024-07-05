import 'node-fetch';
const {
  proto,
  generateWAMessageFromContent,
  prepareWAMessageMedia
} = (await import("@adiwajshing/baileys"))["default"];
import '@bochilteam/scraper';
var handler = async (_0x154cf9, {
  conn: _0x3aa0f1,
  usedPrefix: _0x9f47d1,
  command: _0x28115d
}) => {
  if (!_0x28115d) {
    throw "Use example " + _0x28115d + " anu";
  }
  _0x154cf9.reply(wait);
  try {
    let _0x38baab = generateWAMessageFromContent(_0x154cf9.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *ᴇʟᴀɪɴᴀ-ᴀɪ*\n\nʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ sᴇʙᴀɢᴀɪ *ᴇᴅᴜᴋᴀsɪ ᴘᴇʟᴀᴊᴀʀᴀɴ*, *ᴜɴᴅᴜʜᴀɴ ᴍᴇᴅɪᴀ*, *ɢᴀᴍᴇ*, *ᴘᴇɴᴊᴀɢᴀ ɢʀᴜᴘ*, *ᴅᴀɴ ʟᴀɪɴɴʏᴀ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ᴋᴀᴍᴜ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴɪ ʜᴀʀɪ-ʜᴀʀɪ"
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': wm
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false,
              ...(await prepareWAMessageMedia({
                'image': {
                  'url': "https://telegra.ph/file/d3d0250cbc889308c9841.jpg"
                }
              }, {
                'upload': _0x3aa0f1.waUploadToServer
              }))
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"Tampilkan Semua Menu\",\"id\":\".allmenu\"}"
              }, {
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"Script Nya\",\"id\":\".sc\"}"
              }, {
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"Pemilik Bot Ini\",\"id\":\".owner\"}"
              }, {
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"Credit\",\"id\":\".tqto\"}"
              }]
            })
          })
        }
      }
    }, {
      'quoted': _0x154cf9
    });
    return await _0x3aa0f1.relayMessage(_0x154cf9.chat, _0x38baab.message, {});
  } catch (_0x37e2ab) {
    _0x3aa0f1.sendFile(_0x154cf9.chat, eror, "anu.mp3", null, _0x154cf9, true, {
      'type': "audioMessage",
      'ptt': true
    });
  }
};
handler.help = ["menu"];
handler.tags = ["menu"];
handler.command = /^(menu|help)$/i;
handler.limit = false;
handler.register = true;
export default handler;
