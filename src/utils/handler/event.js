module.exports = (client, fs) => {

    const eventFiles = fs.readdirSync("src/events").filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const event = require(`../../events/${file}`);
        client.on(event.name, (...args) => event.run(client, ...args));
        console.log(`👌 Event loaded successfully: ${event.name}`);
    }

}