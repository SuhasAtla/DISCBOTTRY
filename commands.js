const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: [
		new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'), 
		new SlashCommandBuilder().setName('re').setDescription('Rerolls a Giveaway')
	],
};