

let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB"
    window.speechSynthesis.speak(text_speak); 

}

function wishMe(){
    let day = new Date();
    hours = day.getHours();
    if(hours >= 0 && hours < 12){
        speak("heyyy Good Morning Kashi , Its time to study");
    }
    else if(hours >= 12 && hours <= 17){
        speak("heyyy Good Afternoon Kashi , focus on DSA Babe");
    }
    else{
        speak("heyyy Good evening Kashi , i hope  , You are not wasting your time right now  , please do study");
    }
}

// window.addEventListener('load' , ()=>{
//     wishMe();
// });

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

let recognition = new speechRecognition();

//........................

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

recognition.onstart = ()=>{
    console.log("Listening...");
}

recognition.onerror = (event)=>{
    console.log(event);
}

//........


recognition.onresult = (event) =>{

    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;

    takeCommand(transcript.toLowerCase());

}

btn.addEventListener("click" , ()=>{
    recognition.start();
    btn.style.display = "none";
    voice.style.display="block";

});

function takeCommand(message){
    btn.style.display = "flex";
    voice.style.display="none";
    if(message.includes("hello") || message.includes("hi") ){
        speak("hey hi kashi , How can I help You ");
    }
    else if(message.includes("who are You ")){
        speak("I am Shrii , a virtual Assistant , Created by Kashi")
    }
    else if(message.includes("open youtube")){
        speak("Opening Youtube ")
        window.open("https://www.youtube.com/");
    }
    else if(message.includes("open Hotstar")){
        speak("Opening Hotstar ")
        window.open("https://www.hotstar.com/");
    }
    else if(message.includes("open Instagram")){
        speak("Opening Instagram ")
        window.open("https://www.instagram.com/");
    }
    else if(message.includes("open google")){
        speak("Opening Google ")
        window.open("https://www.google.com/");
    }
    else if(message.includes("open calculator")){
        speak("Opening Calculator ")
        window.open("calculator://");
    }
    else if(message.includes("open files")){
        speak("Opening files ")
        window.open("file explorer://");
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined , {hour : "numeric" , minute : "numeric"});
        speak(time);
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined , {day : "numeric" , month : "short"});
        speak(date);
    }
    else{
        let FinalText = "this is what i found on internet regarding " + message.replace("shrii" , " ")|| message.replace("hey" , " ");

        speak(FinalText);
        window.open(`https://www.google.com/search?q=${message.replace("shrii" , " ")}` , "_blank");
    }
}







