import TeleBot from "telebot";
const bot = new TeleBot("6834289066:AAE7ZeN2eoe9dDqIsTCsjo7Kaq788U5zUVc");
// const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN);

// bot.on("text", msg => msg.reply.text(msg.text))

bot.on("text", (msg) => {
  let id = msg.from.id;
  
  bot.sendMessage(id,"asslamu aleykum");
});

export default bot;
