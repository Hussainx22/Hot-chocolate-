const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
  );
  return base.data.api;
};

const languagesMap = {
  ar: "arabic",
  bn: "bangla",
  en: "english",
  hi: "hindi",
  id: "indonesian",
  ne: "nepali",
  tl: "tagalog",
  te: "telugu",
  ur: "urdu",
  vi: "vietnamese"
};

// Default language set Bangla
const shortLang = "bn"; 

// You can change this language to your preferred language code
// Example:
// const shortLang = "hi"; // For Hindi
// const shortLang = "en"; // For English

const lang = languagesMap[shortLang] || "bangla";

module.exports.config = {
  name: "bby",
  version: "1.0.0",
  role: 0,
  author: "dipto",
  description: "better than all Sim Simi with multiple conversation",
  guide: { en: "[message]" },
  category: "ChatBots",
  coolDowns: 5,
};

module.exports.onStart = ({}) => {};

module.exports.onReply = async function ({ api, event }) {
  if (event.type === "message_reply") {
    const reply = event.body.toLowerCase();
    if (isNaN(reply)) {
      try {
        const response = await axios.get(
          `${await baseApiUrl()}/baby?text=${encodeURIComponent(reply)}`
        );
        const ok = response.data.reply;
        await api.sendMessage(
          ok,
          event.threadID,
          (error, info) => {
            global.GoatBot.onReply.set(info.messageID, {
              commandName: this.config.name,
              type: "reply",
              messageID: info.messageID,
              author: event.senderID,
              link: ok,
            });
          },
          event.messageID
        );
      } catch (error) {
        console.error(`Failed to get a reply: ${error.message}`);
      }
    }
  }
};

module.exports.onChat = async function ({ api, args, event }) {
  const body = event.body.toLowerCase();
  if (
    body.startsWith("bby") ||
    body === "baby" ||
    body === "hi"
  ) {
    try {
      const dipto = args.join(" ").toLowerCase();
      if (!dipto) {
        api.sendMessage(
          "Please provide a question to answer\n\nExample:\nbaby ki koro",
          event.threadID,
          event.messageID
        );
        return;
      }

      const response = await axios.get(
        `${await baseApiUrl()}/baby?text=${encodeURIComponent(dipto)}`
      );
      const mg = response.data.reply;
      await api.sendMessage(
        { body: mg },
        event.threadID,
        (error, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            link: mg,
          });
        },
        event.messageID
      );
    } catch (error) {
      console.error(`Failed to get an answer: ${error.message}`);
      api.sendMessage(
        `An error occurred: ${error.message}`,
        event.threadID,
        event.messageID
      );
    }
  }
};
