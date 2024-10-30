const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " ♡ Hᴜssᴀɪɴ ♡ ";
		const ownAge = "『 16+ 』";
		const messenger = "💀";
		const authorFB = "https://www.facebook.com/profile.php?id=100071009500533&mibextid=LQQJ4d";
		const authorNumber = "_𝟎𝟏𝟕********";
		const Status = "_𝘚𝘪𝘯𝘨𝘭𝘦 𝘗𝘳𝘰 𝘔𝘢𝘹 ⛱";
		const urls = [
"https://i.imgur.com/enALXUY.mp4",
"https://i.imgur.com/3K8HfKf.mp4",
"https://i.postimg.cc/L6RVy0QT/desktop-wallpaper-black-aesthetic-anime-ps4.jpg",
"https://i.imgur.com/RUS1yls.mp4"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `💫《  𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧  》💫
\🤖彡𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 : ${global.GoatBot.config.nickNameBot}\n
\👾彡𝐵𝑜𝑡 𝑆𝑦𝑠𝑡𝑒𝑚 𝑃𝑟𝑒𝑓𝑖𝑥 : ${global.GoatBot.config.prefix}\n
\💙彡𝑂𝑤𝑛𝑒𝑟 𝑁𝑎𝑚𝑒 : ${authorName}\n
\📝彡𝐴𝑔𝑒  : ${ownAge}\n
\💕彡𝑅𝑒𝑙𝑎𝑡𝑖𝑜𝑛𝑆ℎ𝑖𝑝: ${Status}\n
\🌐彡𝑊𝑝 : ${authorNumber}\n
\🌍彡𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝐿𝑖𝑛𝑘 : ${authorFB}\n
\🗓彡𝐷𝑎𝑡𝑒 : ${date}\n
\⏰彡𝑁𝑜𝑤 𝑇𝑖𝑚𝑒 : ${time}\n
\🔰彡𝐴𝑛𝑦 𝐻𝑒𝑙𝑝 𝐶𝑜𝑛𝑡𝑎𝑐𝑡 : ${messenger}\n\n
\📛彡𝐵𝑜𝑡 𝐼𝑠 𝑅𝑢𝑛𝑛𝑖𝑛𝑔 𝐹𝑜𝑟 : ${uptimeString}
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
