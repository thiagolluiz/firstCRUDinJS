var items = [];
    
function addItem() {
  var nameInput = document.getElementById("name");
  var ageInput = document.getElementById("age");

  var item = {
    name: nameInput.value,
    age: ageInput.value
  };

  items.push(item);

  nameInput.value = "";
  ageInput.value = "";

  renderTable();
}
function deleteItem(index) {
  items.splice(index, 1);
  renderTable();
}

function renderTable() {
  var tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  for (var i = 0; i < items.length; i++) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = items[i].name;
    row.appendChild(nameCell);

    var ageCell = document.createElement("td");
    ageCell.textContent = items[i].age;
    row.appendChild(ageCell);

    var actionsCell = document.createElement("td");
    actionsCell.className = "actions";

    var editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.setAttribute("onclick", "editItem(" + i + ")");
    actionsCell.appendChild(editBtn);

    var deleteBtn = document.createElement("button");
deleteBtn.textContent = "Excluir";
deleteBtn.setAttribute("onclick", "deleteItem(" + i + ")");
actionsCell.appendChild(deleteBtn);

row.appendChild(actionsCell);
tbody.appendChild(row);
}
}