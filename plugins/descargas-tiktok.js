import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
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

if (!text) throw conn.reply(m.chat, `${mg}πΏππ½π πππππππΌπ ππ ππππΌπΎπ πΏπ ππππππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*\n\nπππ ππππ πππππ πΌ ππππππ ππππ ππ πΏππππππΌπΏ πππ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*`, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw conn.reply(m.chat, `${fg}ππ ππππΌπΎπ πΏπ ππππππ ππ πππΎπππππΎππ, ππππΎπππ πππ ππππ ππΌπππΏπ\n\nπππ ππππππ ππππ ππ πππΎπππππΎπ, ππΌππ ππππ ππ ππ ππΌπππΏ`, fkontak,  m)
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
if (!data.length) throw `${fg}πππππ πΌπ πππππππΌπ πΏπππΎπΌπππΌπ ππ πππ πππ, ππππππΌ πΌ πππππππΌπ πππ ππΌπππ\n\nπππππ ππππππ ππ πΏππππππΌπΏ ππππππ, πππ πΌππΌππ ππππΌππ`
let meta = await getInfo(url).catch(_ => {})

await conn.reply(m.chat, `${eg}ππππππ ππππΏππΌ ππ πππΏππ πΏπ ππππππ πΈ\nππππ ππππ ππΌππ πππ ππππππ πππΏππ π₯³`, fkontak,  m)
           
let buttons = [{ buttonText: { displayText: 'π€© πΌππΏππ πΏπ ππππππ' }, buttonId: `${usedPrefix}tomp3` }]
await conn.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: wm, footer: await shortUrl(data[data.length - 1]), buttons }, { quoted: fkontak, m })

let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)}

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.alias = ['tiktok', 'tikdl', 'tiktokdl', 'tiktoknowm']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i
handler.limit = 2
handler.exp = 60
export default handler

async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}
