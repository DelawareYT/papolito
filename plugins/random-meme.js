import axios from "axios"
let handler = async (m, {command, conn}) => {
let res = await axios(pickRandom(meme))
let json = res.data
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), wm, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

const meme = [
"https://meme-api.herokuapp.com/gimme/shitpostesp",
"https://meme-api.herokuapp.com/gimme/shitpostinglatam",
"https://meme-api.herokuapp.com/gimme/shitposting_esp",
"https://meme-api.herokuapp.com/gimme/dankminican",
"https://meme-api.herokuapp.com/gimme/kkposting"
]
