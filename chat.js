// Chat Service
$(function() {

    class ChatMessage {
        constructor(userName, message){
            this.userName = userName;
            this.message = message;
        }
    }
 
    const chatWindow = $("#chat > ul")
    const chatInput = $("#chatInput");

    const testChats = [
        new ChatMessage("GeekoidPalumbo", "Hey whats up in this chat?"),
        new ChatMessage("mizter_finn1999", "This is a test chat, dingus"),
        new ChatMessage("GeekoidPalumbo", "What that means?"),
        new ChatMessage("hella_rad_90210", "dude, it's means it's a test. chill."),
        new ChatMessage("hella_rad_90210", "also nice grammar lol"),
        new ChatMessage("GeekoidPalumbo", "There's no need to be rude"),
        new ChatMessage("JamMasterJohnson", "lmao he could have been a lot worse"),
        new ChatMessage("mastah_cheef", "how long have you guys been playing this"),
        new ChatMessage("11_jimbles_11", "longer than u"),
        new ChatMessage("mastah_cheef", "well duh i just got here haha"),
        new ChatMessage("mizter_finn1999", "Okay, again, this is a test chat."),
        new ChatMessage("mizter_finn1999", "That means none of this is real"),
        new ChatMessage("hella_rad_90210", "ur not real man"),
        new ChatMessage("mizter_finn1999", "...That's what I'm trying to tell you"),
        new ChatMessage("GeekoidPalumbo", "If we're not real, that means... what?"),
        new ChatMessage("GeekoidPalumbo", "That we're just imaginary?"),
        new ChatMessage("GeekoidPalumbo", "That our dreams are also fictional?"),
        new ChatMessage("Nocturnal_Permission", "It means that none of us were ever born, and we will never truly die"),
        new ChatMessage("11_jimbles_11", "chat got DARK lmao"),
        new ChatMessage("JamMasterJohnson", "would someone please just spam taco emojis until they shut up")
    ];

    $.each(testChats, function(i, chatMsg){
        console.log(i);
        addChatMessage(chatMsg);


    });

    let i = 0;                      //  set your counter to 1

    function myLoop() {             //  create a loop function
        setTimeout(function() {     //  call a 3s setTimeout when the loop is called
            addChatMessage(testChats[i]);   //  your code here
            i++;                    //  increment the counter
            if (i < 20) {           //  if the counter < 10, call the loop function
              myLoop();             //  ..  again which will trigger another 
            }                       //  ..  setTimeout()
        }, Math.floor(Math.random() * (2000 - 500 + 1)) + 500)
        }
        
        myLoop();                   //  start the loop
    
    chatInput.on("keypress", function(e) {
        if (e.which === 13 && chatInput.val() != "") {
            addChatMessage(new ChatMessage("Me", chatInput.val()));
        }
    });

    function addChatMessage(chatMessage){
        let newChatMsg = document.createElement("li");
        newChatMsg.innerText = chatMessage.message;

        let userName = document.createElement("b");
        userName.innerText = chatMessage.userName + ": ";

        newChatMsg.prepend(userName);

        if (chatWindow.children().length % 2 == 0) {
            newChatMsg.classList.add("chat-even");
        } else {
            newChatMsg.classList.add("chat-odd");
        }

        chatWindow.append(newChatMsg);
        chatInput.val("");
    }
});



