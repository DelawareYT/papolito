let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastclaim + 36000000//86400000 
if (new Date - global.db.data.users[m.sender].lastclaim < 36000000) throw `ππΌ πππΎππΌππΌπππ ππ ππππΌππ π\nππππππ ππ *${msToTime(time - new Date())}* ππΌππΌ ππππππ πΌ πππΎππΌππΌπ\n\nπππ πΌππππΌπΏπ πΎππΌππππΏ ππππ ππππ π\nπΎπππ π½πΌπΎπ ππ *${msToTime(time - new Date())}* ππ πΎππΌππ πΌππΌππ`

let img = 'https://img.freepik.com/vector-gratis/gente-diminuta-enormes-cajas-regalo-ilustracion-vectorial-plana-personas-que-celebran-cumpleanos-envian-o-reciben-regalos-lealtad-o-ideas-brillantes-recompensa-bonificacion-concepto-fiesta_74855-25016.jpg?w=2000'
let dia = Math.floor(Math.random() * 15)
let tok = Math.floor(Math.random() * 3)
let gata = Math.floor(Math.random() * 2000)
let expp = Math.floor(Math.random() * 2500)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += gata
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp
  
let texto = `
β­ββπβπβπβββ¬£
ββ¨ ππ½ππππππ ππ ππππΌππ!!
ββ¨ πππ πππ πΌ ππππ!!
β βββββββββββββ
βπ *${dia} Diamantes* π
βπ *${tok} Tokens* πͺ
βπ *${gata} GataCoins* π
βπ *${expp} Exp* β‘
β°ββγ π  *${vs}* γβββ¬£`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

await conn.sendButton(m.chat, texto, wm, img, [['β°οΈ πΌπ½πππ πΎππππ | πΎπππππ β°οΈ', '/cofre'], ['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu'] ], fkontak, m)  
global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['daily', 'reclamar', 'reclamo', 'regalo', 'claim'] 
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}

