import TeleBot from "telebot";
const bot = new TeleBot("6867518017:AAEGbXXHUplboKrVxgmVjzbhjmDx0T9ACCU");
// const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

// bot.on("text", msg => msg.reply.text(msg.text))

bot.on("text", (msg) => {
  let id = msg.from.id;
  let username = msg.from.username;
  let first_name = msg.from.first_name;
  let text = msg.text;
  bot.sendMessage(
    id,
    `👤Name: ${first_name}
  🆔ID: ${id}
  ❗️User name: @${username}
  💬Message: ${text}`
  );
});

export default bot;
