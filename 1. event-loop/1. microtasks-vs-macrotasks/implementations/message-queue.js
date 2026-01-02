const messageQueue = [];

function processMessages() {
    const json = JSON.stringify(messageQueue);
    messageQueue.length = 0;
    fetch("url-of-receiver", json);
}

function sendMessage(message) {
    messageQueue.push(message);

    if (messageQueue.length === 1) {
        queueMicrotask(processMessages);
    }
}

//Summary: This implementation batches messages into a single JSON payload
// and sends them using fetch in a microtask, optimizing network usage.