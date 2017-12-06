const messages = [];
let id = 0;

const create = (req, res, next) => {
    const createID = req.params.id;
    const { text, time } = req.body;

    messages.push({ id, text, time });
    id++;

    return res.status(200).json(messages);
};
const read = (req, res, next) => {
    return res.status(200).json(messages);
};
const update = (req, res, next) => {
    const updateID = req.params.id;
    const { text } = req.body;
    let messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    };

    return res.status(200).json(messages);
};
const destroy = (req, res, next) => {
    const deleteID = req.params.id;
    const { text, time } = req.body;
    let messageIndex = messages.findIndex(message => message.id == deleteID);

    messages.splice(messageIndex, 1);

    return res.status(200).json(messages);
};

module.exports = {
    create,
    read,
    update,
    destroy
};
