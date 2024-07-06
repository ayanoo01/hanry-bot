import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/97f2f1eff957a6eef3631.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `~*⊹‏⊱≼━━━⌬〔📜〕⌬━━━≽⊰⊹*~`.trim() },
            footer: { text: `©By Azax`.trim() },  
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
  						  		    		header: 'By Azax',
  										      title: 'استدعاء قائمة المجموعات',
  									    	  description: '#قائمة اوامر المجموعات',
  								    		  id: '.الجروبات2'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By Azax',
  										      title: 'استدعاء قائمة الترفيه',
  									    	  description: 'deadpool',
  								    		  id: '.الترفيه'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By Azax',
  										      title: 'استدعاء قائمة الادوات',
  									    	  description: 'deadpool',
  								    		  id: '.الادوات'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By Azax',
  										      title: 'استدعاء قائمة التحميلات',
  									    	  description: 'deadpool',
  								    		  id: '.التحميلات'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By Azax',
  										      title: 'استدعاء قائمة التحويلات',
  									    	  description: 'deadpool',
  								    		  id: '.التحويلات'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By Azax',
  										      title: 'استدعاء قائمة الصور',
  									    	  description: 'deadpool',
  								    		  id: '.صور'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By Azax',
  										      title: 'استدعاء قائمة الملصقات',
  									    	  description: 'deadpool',
  								    		  id: '.الملصقات'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By Azax',
  										      title: 'استدعاء قائمة الالعاب',
  									    	  description: 'deadpool',
  								    		  id: '.الالعاب'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By Azax',
  										      title: 'استدعاء قائمة الاوامر الدينية',
  									    	  description: 'deadpool',
  								    		  id: '.الاسلام'
  						  		    	}
  						  				]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'By Azax',
  										      title: 'استدعاء قائمة التصاميم',
  									    	  description: 'deadpool',
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
