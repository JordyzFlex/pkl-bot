module.exports = {
    name: "hey",
    description: "Hey!",
    execute(message, args) {
		message.channel.send('Hey! :)');
	},
}