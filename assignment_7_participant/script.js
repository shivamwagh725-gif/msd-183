const data = {
  events: [
    {
      id: 1,
      name: "Orientation Day",
      participants: [
        { regNo: "OD001", name: "Aarav Patel", email: "aarav@example.com", mobile: "9876543210" },
        { regNo: "OD002", name: "Sara Khan", email: "sara@example.com", mobile: "9123456780" }
      ]
    },
    {
      id: 2,
      name: "Tech Talk",
      participants: [
        { regNo: "TT101", name: "Meera Joshi", email: "meera@example.com", mobile: "9812345678" },
        { regNo: "TT102", name: "Karan Singh", email: "karan@example.com", mobile: "9871203456" }
      ]
    },
    {
      id: 3,
      name: "Sports Meet",
      participants: [
        { regNo: "SM201", name: "Priya Nair", email: "priya@example.com", mobile: "9876501234" }
      ]
    }
  ]
};

const eventSelect = document.getElementById("eventSelect");
const tbody = document.getElementById("tbody");
const search = document.getElementById("search");
const emptyMsg = document.getElementById("emptyMsg");

let currentList = [];

function loadEvents() {
  eventSelect.innerHTML = data.events
    .map(e => `<option value="${e.id}">${e.name}</option>`)
    .join("");
}

function render(list) {
  tbody.innerHTML = "";
  emptyMsg.style.display = list.length === 0 ? "block" : "none";

  list.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.regNo}</td>
      <td>${p.name}</td>
      <td>${p.email}</td>
      <td>${p.mobile}</td>
    `;
    tbody.appendChild(tr);
  });
}

function updateParticipants() {
  const selectedId = Number(eventSelect.value);
  const event = data.events.find(e => e.id === selectedId);

  currentList = event ? event.participants.slice() : [];
  search.value = "";
  render(currentList);
}

function applySearch() {
  const q = search.value.toLowerCase();
  const filtered = currentList.filter(p =>
    `${p.regNo} ${p.name} ${p.email} ${p.mobile}`.toLowerCase().includes(q)
  );
  render(filtered);
}

loadEvents();
updateParticipants();

eventSelect.addEventListener("change", updateParticipants);
search.addEventListener("input", applySearch);
