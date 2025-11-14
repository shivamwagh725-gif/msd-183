function login(){
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if(u === "admin" && p === "admin123"){
        window.location.href = "dashboard.html";
    }
    else{
        document.getElementById("msg").innerText = "Invalid login!";
    }
}

function logout(){
    window.location.href = "login.html";
}

let events = [
    {id: 1, name: "Tech Fest", date: "2025-02-10"},
    {id: 2, name: "Sports Day", date: "2025-03-15"}
];

function loadEvents(){
    let table = document.getElementById("eventTable");

    table.innerHTML = `
        <tr>
            <th>ID</th><th>Event Name</th><th>Date</th><th>Actions</th>
        </tr>
    `;

    events.forEach(e => {
        table.innerHTML += `
            <tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.date}</td>
                <td>
                    <button class="edit" onclick="editEvent(${e.id})">Edit</button>
                    <button class="del" onclick="deleteEvent(${e.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function editEvent(id){
    let name = prompt("Enter new event name:");
    let date = prompt("Enter new date (YYYY-MM-DD):");

    let e = events.find(x => x.id === id);
    if(name) e.name = name;
    if(date) e.date = date;

    loadEvents();
}

function deleteEvent(id){
    if(confirm("Delete this event?")){
        events = events.filter(e => e.id !== id);
        loadEvents();
    }
}

function addEvent(){
    let name = prompt("Event Name:");
    let date = prompt("Date (YYYY-MM-DD):");

    if(name && date){
        let id = events.length + 1;
        events.push({id, name, date});
        loadEvents();
    }
}

if(window.location.href.includes("dashboard.html")){
    loadEvents();
}
