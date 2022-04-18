function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;DimZex;;;FN:DimZex\nORG:DimZex;\nTEL;type=CELL;type=VOICE;waid=6289696764138:+62 896-9676-4138\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6289696764138', 'DimZex', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
