const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'test') {
    	message.reply('✓');
  	}
});

client.on('guildMemberAdd', member => {
       member.addRole('340748473421004801').catch(console.error);
});

client.login(process.env.BOT_TOKEN);
