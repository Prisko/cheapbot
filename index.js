const botconfig = require("./botconfig.json");
const discord = require("discord.js");


const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("CheapMC")
});
 bot.on("message", async message => {
   if(message.autor.bot) return;
   if(message.channel.type === "dm") return;

   let prefix = botconfig.prefix;
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let args = messageArray.slice(1);

   if(cmd === `${prefix}test`){
     return message.channel.send("testje doen");

   }
 });
 args = args.splice(1);
     switch(cmd) {
         // !ping
         case 'ping':
             bot.sendMessage({
                 to: channelID,
                 message: 'Pong!'
             });

bot.login(botconfig.token);
