
const addDialog = document.querySelector(".add-studen-dialog");
const showAddButton = document.querySelector("#add-button");
const closeAddButton = document.querySelector("dialog .close-button");
const closeAddButtonButtom = document.querySelector(".add-studen-dialog .close-button-bottom")

// "Show the dialog" button opens the dialog modally
showAddButton.addEventListener("click", () => {
    addDialog.showModal();
});

// "Close" button closes the dialog
closeAddButton.addEventListener("click", () => {
    addDialog.close();
});

closeAddButtonButtom.addEventListener("click", () => {
    addDialog.close();
});

const createButton = document.querySelector("dialog .create-button");
const infoTable = document.getElementById('table-info');

// Get the last row of the table
const lastRow = infoTable.rows[infoTable.rows.length - 1];

// Get the text content of the first cell of the last row
const firstCellText = lastRow.cells[0].textContent;

// Extract the number from the text content
let number = parseInt(firstCellText);


createButton.addEventListener("click", () => {
    let tr = document.createElement('tr');
    let numberCell = document.createElement('td');
    let groupCell = document.createElement('td');
    let nameCell = document.createElement('td');
    let genderCell = document.createElement('td');
    let birthdayCell = document.createElement('td');
    let statusCell = document.createElement('td');
    let optionsCell = document.createElement('td');
    number += 1;
    numberCell.textContent = number;
    tr.appendChild(numberCell);

    let group = document.getElementById("group-select-input").value;
    groupCell.textContent = group;
    tr.appendChild(groupCell);

    let firstName = document.getElementById("firstname-input").value;
    let lastName = document.getElementById("lastname-input").value;

    let fullName = firstName + " " + lastName;
    nameCell.textContent = fullName;
    tr.appendChild(nameCell);
    
    let gender = document.getElementById("gender-input").value;
    genderCell.textContent = gender;
    tr.appendChild(genderCell);

    let birthday = document.getElementById("birthday-input").value;

    //let dateString = '2024-03-29'; // Your date string

// Split the date string into year, month, and day parts
    let [year, month, day] = birthday.split('-');

// Create a new Date object with the parsed year, month, and day
    let dateObject = new Date(year, month - 1, day); // Month is zero-based in Date objects

// Format the date to DD.MM.YYYY
    let formattedDate = `${day}.${month}.${year}`;
    birthdayCell.textContent = formattedDate;
    tr.appendChild(birthdayCell);

// Create a new <i> element
    let icon = document.createElement('i');

    // Set the class and style attributes for the <i> element
    icon.className = 'fa fa-circle';
    icon.style.color = 'red';

    // Append the <i> element to the <td> element
    statusCell.appendChild(icon);
    
    tr.appendChild(statusCell)

    let div = document.createElement('div');
    div.className = 'table-buttons';



// Create a new <button> element for the edit button
    let editButton = document.createElement('button');
    editButton.className = 'edit-button';

    // Create a new <i> element for the edit icon
    let editIcon = document.createElement('i');
    editIcon.className = 'fa fa-pencil';
    editIcon.setAttribute('aria-hidden', 'true');
    

    // Create a new <span> element for the visually hidden text
    let editSpan = document.createElement('span');
    editSpan.className = 'visually-hidden';
    editSpan.textContent = 'Edit';

    // Append the edit icon and span to the edit button
    editButton.appendChild(editIcon);
    editButton.appendChild(editSpan);

    // Create a new <button> element for the delete button
    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'X';

    // Append the edit button and delete button to the table buttons div
    div.appendChild(editButton);
    div.appendChild(deleteButton);

    // Append the table buttons div to the td
    optionsCell.appendChild(div);

    tr.appendChild(optionsCell);
    infoTable.appendChild(tr);
});



const removeDialog = document.querySelector(".remove-student-dialog");
const showRemoveButtons = document.querySelectorAll(".delete-button");
const closeButton = document.querySelector(".remove-student-dialog .close-button");
const closeBottomButton = document.querySelector(".remove-student-dialog .close-button-bottom");
const confirmButton = document.querySelector(".remove-student-dialog .confirm-button");
const dialogMessage = document.querySelector(".remove-student-dialog .middle .row span");

// Function to open the dialog
function openDialog() {
removeDialog.showModal();
}

// Function to close the dialog
function closeDialog() {
removeDialog.close();
}

// Function to handle deletion
function handleDeletion(row) {
// Remove the row from the DOM
row.remove();
closeDialog();
}

// Add event listener to each delete button
showRemoveButtons.forEach(button => {
button.addEventListener("click", () => {
const row = button.closest("tr");
dialogMessage.textContent = "Are you sure you want to delete this user?";
openDialog();
// Add event listener to OK button inside the dialog
confirmButton.addEventListener("click", () => {
    handleDeletion(row);
});
});
});

// Add event listener to close buttons
closeButton.addEventListener("click", () => {
closeDialog();
});

closeBottomButton.addEventListener("click", () => {
closeDialog();
});




