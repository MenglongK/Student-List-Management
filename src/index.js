const staticArray = [
  {
    name: "Keo Menglong",
    grade: "B",
  },
  {
    name: "Mao Piseth",
    grade: "A",
  },
];

let dynamicArray = JSON.parse(sessionStorage.getItem("dynamicUsers")) || [];
let combineUser = JSON.parse(sessionStorage.getItem("combineUsers")) || [];
const combineArray = [...staticArray, ...dynamicArray];
const allStudent = document.getElementById("totalStudent");
allStudent.innerHTML = `<h3 class="font-semibold">Total Student: <span class="text-purple-700">${combineArray.length}</span></h3>`;
function displayCards() {
  const cards = combineArray.map((user, index) => {
    return `<div
    class="p-4 md:p-5 border-l-4 border-blue-500 rounded-lg shadow-xl md:hover:scale-102 duration-500 bg-[#EEF7FF]"
    >
    <div class="flex justify-between items-center gap-x-3">
    <div class="grow">
    <h3
    class="group-hover:text-blue-600 font-semibold text-gray-800 hover:text-blue-500"
    >
    ${index + 1}. ${user.name} 
    </h3>
    <p class="text-sm text-gray-500">
    Grade: <span class="text-blue-500 font-bold uppercase">${user.grade}</span>
    </p>
    </div>
    </div>
    </div>`;
  });
  document.getElementById("combineData").innerHTML = cards.join("");
}

displayCards();
function addUser() {
  const name = document.getElementById("nameInput").value;
  const grade = document.getElementById("gradeInput").value.toUpperCase();
  if (name && grade) {
    dynamicArray.push({ name, grade });
    sessionStorage.setItem("dynamicUsers", JSON.stringify(dynamicArray));
    document.getElementById("nameInput").value = "";
    document.getElementById("gradeInput").value = "";
    displayCards();
  } else {
    alert("Please complete all field!!!");
  }
}
function resetData() {
  dynamicArray = [];
  sessionStorage.removeItem("dynamicUsers");
  displayCards();
}
function filter(event) {
  event.preventDefault();
  const inputFilter = document.getElementById("filterInput").value.toUpperCase();
  const filterResult = combineArray.filter((obj) => obj.grade == inputFilter);
  const allStudent = document.getElementById("totalStudent");
  allStudent.innerHTML = `<h3 class="font-semibold">Total Student: <span class="text-purple-700">${filterResult.length}</span></h3>`;
  const cards = filterResult.map((user, index) => {
    return `<div
    class="p-4 md:p-5 border-l-4 border-blue-500 rounded-lg shadow-xl md:hover:scale-102 duration-500 bg-[#EEF7FF]"
    >
    <div class="flex justify-between items-center gap-x-3">
    <div class="grow">
    <h3
    class="group-hover:text-blue-600 font-semibold text-gray-800 hover:text-blue-500"
    >
    ${index + 1}. ${user.name} 
    </h3>
    <p class="text-sm text-gray-500">
    Grade: <span class="text-blue-500 font-bold uppercase">${user.grade}</span>
    </p>
    </div>
    </div>
    </div>`;
  });
  document.getElementById("combineData").innerHTML = cards.join("");
}
console.log("Result", combineArray)
