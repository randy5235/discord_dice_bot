const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('./generator.js');


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content.match(/^\/r.*/)) {
    message.reply(generator.diceRoller(message.content));
  }
});

client.login('MjUzMDIxNjY1MTg3OTg3NDU3.Cx6dCQ.R1vG4XmJy3dAOuacR0NxS7EkQGs');
