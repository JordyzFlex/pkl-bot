module.exports = {

    name: "pscode",
    description: "passwordcode",
    execute(message, args) {
		message.channel.send(Math.floor((Math.random() * 100) + 0));
	},
    
};