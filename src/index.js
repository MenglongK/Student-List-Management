const staticArray = [
  {
    name: "Keo Menglong",
    grade: "A",
  },
  {
    name: "Mao Piseth",
    grade: "A",
  },
];

let dynamicArray = JSON.parse(sessionStorage.getItem("dynamicUsers")) || [];
const combineArray = [...staticArray, ...dynamicArray];
const allStudent = document.getElementById("totalStudent");
allStudent.innerHTML = `<h3>Total Student: <span class="text-purple-700">${combineArray.length}</span></h3>`;
function displayCards() {
  const cards = combineArray.map((user, index, totalStudent) => {
    return `<div
    class="p-4 md:p-5 border-l-4 border-blue-500 rounded-lg shadow-xl hover:scale-102 duration-500 bg-[#EEF7FF]"
    >
    <div class="flex justify-between items-center gap-x-3">
    <div class="grow">
    <h3
    class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 hover:text-blue-500"
    >
    ${index + 1}. ${user.name} 
    </h3>
    <p class="text-sm text-gray-500 dark:text-neutral-500">
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
  const grade = document.getElementById("gradeInput").value;
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
