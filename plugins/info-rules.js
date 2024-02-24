let handler = async (m, { conn }) => {

  if (m.sender.startsWith('62') || m.sender.startsWith('+62')) {
    var txt = `
Hallo Semua 👋🏻
╭─ *DAFTAR LIST BIKIN BOT* 🛒
├────── *PREMIUM*──────
├ _*Khusus Bot pake nomor sendiri*_
│• _1 Minggu / Rp 15.000_
│• _2 Minggu / Rp 30.000_
│• _1 Bulan / Rp 50.000_
│• _2 Bulan / Rp 95.000_
╰────────────────────

*• KEUNTUNGAN !!!*

- Bisa Request Owner
- Request Nama Bot Kalian
- Terima Jadi Tanpa Ribet
- Lengkap AI
- Push Kontak 
- Play Musik
- Bisa buat sticker
- Bisa Isi tugas sekolah semua pelajaran 
- Bisa Bikin Jaga Grub Antilink dll.
- Bisa Main Bot Chat Group/ Privat
- Bisa Download Vidio Sosmed
- Bisa Nemenin Ngobrol 
- Dll.

╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 〕 ❉──────
║│➸ *DANA* : 085794908894
║│➸ *PULSA*: 083164864536
║│➸ *GOPAY*: 085794908894
║╰─────────────────────
╰═══════════════════════
Jangan melakukan pembayaran sebelum chat saya!!!

• *Contact person Owner:*👇🏻
https://wa.me/6285794908894?text=Pesan+Bot+WhatsApp+Bang

_Klik link di atas buat pesan Bot_
`
  } else {

    txt = `
Hallo Semua 👋🏻
╭─ *DAFTAR LIST BIKIN BOT* 🛒
├────── *PREMIUM*──────
├ _*Khusus Bot pake nomor sendiri*_
│• _1 Minggu / Rp 15.000_
│• _2 Minggu / Rp 30.000_
│• _1 Bulan / Rp 50.000_
│• _2 Bulan / Rp 95.000_
╰────────────────────

*• KEUNTUNGAN !!!*

- Bisa Request Owner
- Request Nama Bot Kalian
- Terima Jadi Tanpa Ribet
- Lengkap AI
- Push Kontak 
- Play Musik
- Bisa buat sticker
- Bisa Isi tugas sekolah semua pelajaran 
- Bisa Bikin Jaga Grub Antilink dll.
- Bisa Main Bot Chat Group/ Privat
- Bisa Download Vidio Sosmed
- Bisa Nemenin Ngobrol 
- Dll.

╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 〕 ❉──────
║│➸ *DANA* : 085794908894
║│➸ *PULSA*: 083164864536
║│➸ *GOPAY*: 085794908894
║╰─────────────────────
╰═══════════════════════
Jangan melakukan pembayaran sebelum chat saya!!!

• *Contact person Owner:*👇🏻
https://wa.me/6285794908894?text=Pesan+Bot+WhatsApp+Bang

_Klik link di atas buat pesan Bot_
`
  }

  let name = global.author
  let fkon = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16500000000@s.whatsapp.net' } : {})
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        verified: true
      }
    }
  };

  conn.relayMessage(m.chat, {
    extendedTextMessage: {
      text: txt,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: wm,
          mediaType: 1,
          previewType: 0,
          renderLargerThumbnail: true,
          thumbnailUrl: 'https://telegra.ph/file/da3dd014f4481e4bbd089.jpg',
          sourceUrl: 'https://whatsapp.com/channel/0029VaACVbGDuMRk7zy6vI3a',
        }
      }, mentions: [m.sender]
    }
  }, { quoted: fkon });
}

handler.help = ['promosi']
handler.tags = ['info']
handler.command = /^(promosi)$/i

export default handler
