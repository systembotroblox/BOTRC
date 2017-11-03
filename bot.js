const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame('ROBLOX', 'https://www.twitch.tv/roblox');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('guildMemberAdd', member => {
       member.user.send(`Welcome to the server, ${member}!`);
       member.guild.defaultChannel.send(`Welcome to the server, ${member}!`);
       console.log(`${member.user.username} has joined`);
});

client.login(process.env.BOT_TOKEN);
