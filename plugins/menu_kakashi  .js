import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/97f2f1eff957a6eef3631.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*~`.trim() },
            footer: { text: `©By kakashi`.trim() },  
            header: {
                title: `مرحبا يا: @${mentionId.split('@')[0]}`,
                subtitle: `*اختر احد الاوامر من القائمة*`,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '🐾➜⃞「الاوامر」',
  						  		sections: [
  						  			{
  						  				title: 'قوائم الأوامر',
  						  		    rows: [
  						  		    	{
  						  		    		header: 'By kakashi',
  										      title: 'استدعاء قائمة المجموعات',
  									    	  description: '#قائمة اوامر المجموعات',
  								    		  id:'.المشرفين '
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By kakashi',
  										      title: '  .الاعضاء ',
  									    	  description: '𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘',
  								    		  id: '.المطور '
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By kakashi',
  										      title: '.التنزيلات ',
  									    	  description: '𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘',
  								    		  id: '.الادوات. '
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By kakashi',
  										      title: '.الاسلاميات ',
  									    	  description: '𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘',
  								    		  id: '.التحميل. '
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By kakashi',
  										      title: '.التحويل',
  									    	  description: '𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘',
  								    		  id: '.الوهمي'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By kakashi',
  										      title: '.المطورين ',
  									    	  description: '𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘',
  								    		  id: '.صور'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By kakashi',
  										      title: 'استدعاء قائمة الملصقات',
  									    	  description: '𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘',
  								    		  id: '.الملصقات'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By kakashi',
  										      title: 'استدعاء قائمة الالعاب',
  									    	  description: '𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘',
  								    		  id: '.الالعاب'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By kakashi',
  										      title: 'استدعاء قائمة الاوامر الدينية',
  									    	  description: '𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘',
  								    		  id: '.الاسلام'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By kakashi',
  										      title: 'استدعاء قائمة التصاميم',
  									    	  description: '𝚃𝚛𝚊𝚏𝚊𝚕𝚐𝚊𝚛 𝙻𝚊𝚘',
  								    		  id: '.التصاميم'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '⚠️مجموعة البوت⚠️',
                                      url: 'https://chat.whatsapp.com/G7br7xY2Uk11v9i792NkuJ',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '👨🏻‍💻قناه البوت👨🏻‍💻',
                                      url: 'https://whatsapp.com/channel/0029VaZThPH2UPBBFmyXPf1o',
                                      merchant_url: 'https://whatsapp.com/channel/0029VaZThPH2UPBBFmyXPf1o'
                                  })
                              }
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = ['الاوامر','اوامر'];
export default handler;
