let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2But(m.chat, `
╭─────[ *RULES* ]─────✧
┴
│¹ Dilarang Hina Bot / Owner
│² Dilarang Spam Command
│³ Dilarang Kirim Virtex
│⁴ Dilarang Spam Menu Ga Jelas
│⁵ Dilarang Telp / Vc
│⁶ Dilarang Culik Bot
│⁷ Dilarang Promosi
│⁸ Dilarang Meniru pesan Bot
│⁹ Bot Tidak Menerima Save Kontak (cwe langsung cht owner🐦)
│¹⁰ Dilarang Chat Owner Ga Jelas (klo cwe gpp🐦)
│¹¹ No plagiat
┬
╰──────────···

╭─────[ *HUKUM* ]─────✧
┴
│ 1 & 11 = Block + banned permanent
│ 2,4,6 & 8 = Banned sementara
│ 3 = War
│ 5 = Block sementara
│ 9 & 10 = Block permanent
┬
╰──────────···
${wm}
`.trim(), 'Harap patuhin peraturan tersebut', '⋮☰ Menu', '.menu', 'Owner', '.owner', m)

handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(rules|peraturan)$/i

module.exports = handler

let wm = global.wm
