const EventEmitter = require("events");
EventEmitter.setMaxListeners(50);

module.exports = (client, fs) => {
    require('./handler/command')(client, fs);
    require('./handler/event')(client, fs);
    require('./handler/player')(client, fs);
};