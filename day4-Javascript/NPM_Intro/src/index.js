function changeGreeting() {
    let greeting = "Goodbye"
    
    let elementsByTagName = 
    document.getElementsByTagName("H1");

    elementsByTagName[0].textContent = geeting;
}

setTimeout(changeGreeting, 5000)