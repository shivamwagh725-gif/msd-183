
let events = [
    "Tech Workshop",
    "Web Development Bootcamp",
    "AI Seminar",
    "Coding Contest",
    "Startup Meetup",
    "Digital Marketing Event",
    "Cybersecurity Talk",
    "Robotics Expo"
];

function displayEvents(list) {
    let eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    list.forEach(function(eventName){
        let li = document.createElement("li");
        li.textContent = eventName;
        eventList.appendChild(li);
    });
}

function searchEvents() {
    let keyword = document.getElementById("searchBox").value.toLowerCase();

    let filteredEvents = events.filter(function(eventName){
        return eventName.toLowerCase().includes(keyword);
    });

    displayEvents(filteredEvents);
}

displayEvents(events);
