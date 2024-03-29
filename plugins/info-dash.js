let handler = async (m, {
    conn
}) => {
    let stats = Object.entries(db.data.stats).map(([key, val]) => {
        let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join(' , ') : plugins[key]?.help || key
        if (/exec/.test(name)) return
        return { name, ...val }
    })
    stats = stats.sort((a, b) => b.total - a.total)
    let handlers = stats.slice(0, 100).map(({
        name,
        total,
        last
    }) => {
        return `乂 *Command* : *${name}*\n• *Global HIT* : ${total}`
    }).join`\n\n`
    conn.relayMessage(m.chat, {
        extendedTextMessage: {
            text: handlers,
            contextInfo: {
                externalAdReply: {
                    title: "",
                    mediaType: 1,
                    previewType: 0,
                    renderLargerThumbnail: true,
                    thumbnailUrl: 'https://telegra.ph/file/da3dd014f4481e4bbd089.jpg',
                    sourceUrl: 'https://whatsapp.com/channel/0029VaACVbGDuMRk7zy6vI3a'
                }
            }, mentions: [m.sender]
        }
    }, {})

}

handler.help = ['dashboard']
handler.tags = ['main']
handler.command = /^(dashboard)$/i

export default handler