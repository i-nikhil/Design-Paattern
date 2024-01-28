class ChatRoom
{
    sendMessage(fromUser, message)
    {
        console.log(`${fromUser.toUpperCase()}: ${message}`)
    }
}

class User
{
    #name
    #chatRoom
    constructor(name, chatRoom)
    {
        this.#name = name
        this.#chatRoom = chatRoom
    }
    send(message)
    {
        this.#chatRoom.sendMessage(this.#name, message)
    }
}

let room1 = new ChatRoom();

let ron = new User('Ron', room1)
let harry = new User('Harry', room1)
let hermione = new User('Hermione', room1)

ron.send('Hi folks! coming for quiditch?')
hermione.send('Good luck boys, but I have to attend the potions classes..')
harry.send('Ron if you remember, I am representing Griffindor in the match.')