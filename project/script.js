const selectInput = document.querySelector("input");
const selectPeople = document.querySelector(".people");

const personData = [
  {
    name: "ravi",
    src: "https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "sona",
    src: "https://images.pexels.com/photos/573302/pexels-photo-573302.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "suman",
    src: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "rahul",
    src: "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "sumandra",
    src: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "sana",
    src: "https://images.pexels.com/photos/1187822/pexels-photo-1187822.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function renderPeople(people) {
  selectPeople.innerHTML = people
    .map(
      (person) => `
    <div class="person">
      <div class="img">
        <img src="${person.src}">
      </div>
      <h3>${person.name}</h3>
    </div>
  `
    )
    .join("");
}

function filterPeople() {
  const searchValue = selectInput.value.toLowerCase();
  const filteredPeople = personData.filter((person) =>
    person.name.toLowerCase().startsWith(searchValue)
  );
  renderPeople(filteredPeople);
}

renderPeople(personData);
selectInput.addEventListener("input", filterPeople);
