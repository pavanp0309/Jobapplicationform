let positionCount = 1;

function validateMobileNumber(inputId, errorId) {
    const mobileNumberInput = document.getElementById(inputId);
    const mobileNumberError = document.getElementById(errorId);

    const isValidMobileNumber = /^[6-9]\d{9}$/.test(mobileNumberInput.value);

    if (!isValidMobileNumber) {
        mobileNumberError.textContent = "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.";
        mobileNumberInput.setAttribute("maxlength", "10");
    } else {
        mobileNumberError.textContent = "";
        mobileNumberInput.removeAttribute("maxlength");
    }
}
function validateIncharge1MobileNumber(inputId, errorId) {
    const mobileNumberInput = document.getElementById(inputId);
    const mobileNumberError = document.getElementById(errorId);

    const isValidMobileNumber = /^[6-9]\d{9}$/.test(mobileNumberInput.value);

    if (!isValidMobileNumber) {
        mobileNumberError.textContent = "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.";
        mobileNumberInput.setAttribute("maxlength", "10");
    } else {
        mobileNumberError.textContent = "";
        mobileNumberInput.removeAttribute("maxlength");
    }
}

function validateIncharge2MobileNumber(inputId, errorId) {
    const mobileNumberInput = document.getElementById(inputId);
    const mobileNumberError = document.getElementById(errorId);

    const isValidMobileNumber = /^[6-9]\d{9}$/.test(mobileNumberInput.value);

    if (!isValidMobileNumber) {
        mobileNumberError.textContent = "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.";
        mobileNumberInput.setAttribute("maxlength", "10");
    } else {
        mobileNumberError.textContent = "";
        mobileNumberInput.removeAttribute("maxlength");
    }
}



function updateState() {
    var cityDropdown = document.getElementById("city");
    var stateDropdown = document.getElementById("State");

    var selectedCity = cityDropdown.value;

    if (selectedCity === "Hyderabad") {
        stateDropdown.value = "Telangana";
    } else if (selectedCity === "Vizag") {
        stateDropdown.value = "Andhra Pradesh";
    } else if (selectedCity === "Bangalore") {
        stateDropdown.value = "Karnataka";
    } else if (selectedCity === "Chennai") {
        stateDropdown.value = "TamilNadu";
    } else if (selectedCity === "Gurgaon") {
        stateDropdown.value = "Haryana";
    } else if (selectedCity === "Noida") {
        stateDropdown.value = "Uttar Pradesh";
    } else if (selectedCity === "Kochi") {
        stateDropdown.value = "Kerala";
    } else if (selectedCity === "Mumbai") {
        stateDropdown.value = "Maharashtra";
    }

    // Disable the state dropdown when a city is selected
    stateDropdown.disabled = selectedCity !== "";

    // Add more conditions for other cities and states if needed
}



function addPosition() {
    const table = document.getElementById("vacancyTable");
    const newRow = table.insertRow(-1);
    const cells = [];

    // Add S.No
    const cellSNo = newRow.insertCell(0);
    cellSNo.textContent = positionCount++;

    // Add Category Dropdown
    cells.push(newRow.insertCell(1));
    const categoryDropdown = document.createElement("select");
    categoryDropdown.addEventListener("change", function () {
        updateSubcategory(categoryDropdown, subcategoryDropdown);
    });
    categoryDropdown.innerHTML = `
        <option value="" selected disabled>Select Category</option>
        <option value="Accounting and Finance">Accounting and Finance</option>
        <option value="Administration and Office Support">Administration and Office Support</option>
        <option value="Advertising, Arts, and Media">Advertising, Arts, and Media</option>
        <option value="Banking and Financial Services">Banking and Financial Services</option>
        <option value="Customer Service">Customer Service</option>
        <option value="Education and Training">Education and Training</option>
        <option value="Engineering">Engineering</option>
        <option value="Healthcare and Medical">Healthcare and Medical</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Information Technology">Information Technology</option>
        <option value="Legal">Legal</option>
        <option value="Marketing Manager">Marketing Manager</option>
        <option value="Sales">Sales</option>
        <option value="Transportation and Logistics">Transportation and Logistics</option>
        <option value="Retail">Retail</option>
        <option value="Manufacturing and Production">Manufacturing and Production</option>
        <option value="Creative and Design">Creative and Design</option>
        <!-- Add more category options as needed -->
    `;
    cells[0].appendChild(categoryDropdown);

    // Add Sub Category Dropdown
    cells.push(newRow.insertCell(2));
    const subcategoryDropdown = document.createElement("select");
    subcategoryDropdown.addEventListener("change", function () {
        // updateQualification(subcategoryDropdown);
    });
    subcategoryDropdown.innerHTML = `<option value="" selected disabled>Select Subcategory</option>`;
    cells[1].appendChild(subcategoryDropdown);

    // Add Qualification Dropdown
    cells.push(newRow.insertCell(3));
    cells[2].innerHTML = `<select>
    <option value="" selected disabled>Select Qualification</option>
    <option value="SSC">SSC</option>
    <option value="Inter">Inter</option>
    <option value="Undergraduate">Undergraduate</option><option value="Graduate">Graduate</option>
    <option value="Postgraduate">Postgraduate</option>
    <option value="Diploma">Diploma All Streams</option>
    <option value="Btech">Btech All Streams</option>
    </select>`;

    // Add Experience Dropdown
    cells.push(newRow.insertCell(4));
    cells[3].innerHTML = `<select>
    <option value="" selected disabled>Select Experience</option>
    <option value="Fresher">Fresher</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3+">3+</option>
    </select>`;

    // Add Certificates Input
    cells.push(newRow.insertCell(5));
    cells[4].innerHTML = `<input type="text" placeholder="Certificates" >`;

    // Add Number of Vacancy Input
    cells.push(newRow.insertCell(6));
    cells[5].innerHTML = `<input type="text" class='vacancy'  placeholder="No of Vacancy" pattern="[0-9]{1,3}" title="Please enter a valid vacancy count (1 to 3 digits)" oninput="validateVacancyDetails(this)" required>`;

    // Add File Input for Job Description
    cells.push(newRow.insertCell(7));
    cells[6].innerHTML = `<input type="file" accept=".pdf,.doc,.docx" />`;

    // Add Delete Button

    calculateTotalVacancy();
}

function populateSubcategory(subcategoryDropdown, subcategories) {
    subcategoryDropdown.innerHTML = ""; // Clear existing options
    subcategories.forEach(subcategory => {
        const option = document.createElement("option");
        option.value = subcategory;
        option.textContent = subcategory;
        subcategoryDropdown.appendChild(option);
    });
}

function updateSubcategory(categoryDropdown, subcategoryDropdown) {
    const selectedCategory = categoryDropdown.value;
    subcategoryDropdown.innerHTML = "<option value='' selected disabled>Select Subcategory</option>"; // Clear existing options
    if (selectedCategory === "Accounting and Finance") {
        populateSubcategory(subcategoryDropdown, ["Accountant", "Financial Analyst", "Auditor", "Treasurer"]);
    } else if (selectedCategory === "Administration and Office Support") {
        populateSubcategory(subcategoryDropdown, ["Administrative Assistant", "Office Manager", "Receptionist", "Secretary", "Data Entry Clerk"]);
    } else if (selectedCategory === "Advertising, Arts, and Media") {
        populateSubcategory(subcategoryDropdown, ["Graphic Designer", "Copywriter", "Journalist", "Photographer"]);
    } else if (selectedCategory === "Banking and Financial Services") {
        populateSubcategory(subcategoryDropdown, ["Bank Teller", "Financial Advisor", "Loan Officer", "Investment Analyst"]);
    } else if (selectedCategory === "Customer Service") {
        populateSubcategory(subcategoryDropdown, ["Customer Service Representative", "Call Center Operator", "Client Relations Manager", "Technical Support Specialist"]);
    } else if (selectedCategory === "Education and Training") {
        populateSubcategory(subcategoryDropdown, ["Teacher", "Professor", "Trainer", "Librarian"]);
    } else if (selectedCategory === "Engineering") {
        populateSubcategory(subcategoryDropdown, ["Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Software Engineer"]);
    } else if (selectedCategory === "Healthcare and Medical") {
        populateSubcategory(subcategoryDropdown, ["Doctor", "Nurse", "Pharmacist", "Medical Technician"]);
    } else if (selectedCategory === "Human Resources") {
        populateSubcategory(subcategoryDropdown, ["HR Specialist", "Recruiter", "Training and Development Manager", "Compensation Analyst"]);
    } else if (selectedCategory === "Information Technology") {
        populateSubcategory(subcategoryDropdown, ["Software Developer", "Network Administrator", "Data Scientist", "IT Support Specialist", "Cyber Security"]);
    } else if (selectedCategory === "Legal") {
        populateSubcategory(subcategoryDropdown, ["Lawyer", "Paralegal", "Legal Assistant", "Judge"]);
    } else if (selectedCategory === "Marketing Manager") { // Fix this line
        populateSubcategory(subcategoryDropdown, ["Marketing Manager", "Public Relations Specialist", "Social Media Coordinator"]);
    } else if (selectedCategory === "Sales") {
        populateSubcategory(subcategoryDropdown, ["Sales Representative", "Account Manager", "Sales Associate"]);
    } else if (selectedCategory === "Transportation and Logistics") {
        populateSubcategory(subcategoryDropdown, ["Logistics Coordinator", "Dispatcher", "Delivery Boys", "Collection Agent"]);
    } else if (selectedCategory === "Retail") {
        populateSubcategory(subcategoryDropdown, ["Store Manager", "Cashier", "Sales Clerk", "Team Leader"]);
    } else if (selectedCategory === "Manufacturing and Production") {
        populateSubcategory(subcategoryDropdown, ["Factory Worker", "Production Supervisor", "Quality Control Inspector"]);
    } else if (selectedCategory === "Creative and Design") {
        populateSubcategory(subcategoryDropdown, ["Graphic Designer", "UX/UI Designer", "Content Creator", "Digital Marketing"]);
    }
    // Add more conditions for other categories as needed
    
}


function deletePosition(rowIndex) {
    const table = document.getElementById("vacancyTable");
    table.deleteRow(rowIndex);

    // Recalculate the position count
    positionCount--;

    calculateTotalVacancy();
}

function deleteLastPosition() {
    const table = document.getElementById("vacancyTable");
    const lastRowIndex = table.rows.length - 1;

    if (lastRowIndex > 0) {
        deletePosition(lastRowIndex);
    }
}


function enablePositionDropdownOptions(selectElement) {
    const otherInput = document.createElement("input");
    otherInput.type = "text";
    otherInput.placeholder = "Enter Other Position";
    otherInput.style.marginTop = "5px";

    const parentCell = selectElement.parentElement;
    const tableRow = parentCell.parentElement;
    const siblingInputCell = tableRow.cells[1];

    if (siblingInputCell.childNodes.length > 0) {
        siblingInputCell.removeChild(siblingInputCell.firstChild);
    }

    const selectedValue = selectElement.value;
    const options = selectElement.options;

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        option.disabled = false;
        if (selectedValue === "Other" && option.value !== "Other") {
            option.disabled = true;
        }
    }

    if (selectedValue === "Other") {
        siblingInputCell.appendChild(otherInput);
    } else {
        const selectedOptionName = selectElement.options[selectElement.selectedIndex].text;
        siblingInputCell.textContent = selectedOptionName;
    }
}


function validateVacancyDetails(input) {
    const value = input.value.trim();

    if (!/^\d{1,3}$/.test(value)) {
        input.setCustomValidity("Please enter a valid vacancy count (1 to 3 digits).");
    } else {
        input.setCustomValidity("");
    }

    calculateTotalVacancy();  // Call this function to update the total count
}

// Call validateVacancyDetails on page load to initialize the total vacancy count
document.addEventListener("DOMContentLoaded", function () {
    validateVacancyDetails(document.getElementById("vacancyTable").querySelector("input"));
});

// Other functions...

function calculateTotalVacancy() {
    const vacancyInputs = document.querySelectorAll("#vacancyTable .vacancy");
    let totalVacancy = 0;

    vacancyInputs.forEach(input => {
        const value = parseInt(input.value) || 0;
        totalVacancy += value;
    });

    document.getElementById("totalVacancy").textContent = `Total Vacancy Count: ${totalVacancy}`;
}

function submitForm() {
    // Validate all fields before submitting

    if (!validateAllEmailDetails()) {
        alert("Please enter Valid email.");
        return;
    }

    if (!validateForm()) {
        alert("Please enter all details in the form.");
        return false; // Prevent form submission
    }

    console.log("Form submitted!");

    const uniqueNumber = generateUniqueNumber();

    alert(`Form submitted successfully! Your unique application number is: ${uniqueNumber}`);

    calculateTotalVacancy();

    document.getElementById("jobForm").style.display = "none";
    document.getElementById("entryDetails").style.display = "block";
    document.getElementById("printDetailsButton").style.display = "block";

    displayEntryDetails(uniqueNumber);

    // generatePDF();

    return true; // Allow form submission
}

function validateForm() {
    // Validate all mandatory fields in the form
    const mandatoryFields = [
        "companyName",
        "companyType",
        "companycontact",
        "companyemail",
        "doorNo",
        "locality",
        "city",
        "State",
        "pincode",
        "incharge1Position",
        "personName",
        "incharge1ContactNumber",
        "incharge1Email",
        "incharge2Position",
        "incharge2Name",
        "incharge2ContactNumber",
        "incharge2Email",
    ];

    for (const field of mandatoryFields) {
        const inputElement = document.getElementById(field);

        if (!inputElement || inputElement.value.trim() === "") {
            return false;
        }
    }

    // Validate at least one position in the vacancy table
    const vacancyTable = document.getElementById("vacancyTable");
    const vacancyRowCount = vacancyTable.rows.length - 1; // Exclude header row

    if (vacancyRowCount === 0) {
        return false;
    }

    return true;
}


function generateUniqueNumber() {
    return Date.now().toString();
}


function displayEntryDetails(uniqueNumber) {
    const entryDetailsSection = document.getElementById("entryDetails");
    entryDetailsSection.innerHTML = '';

    const uniqueNumberDisplay = document.createElement("p");
    uniqueNumberDisplay.textContent = `Application Number: ${uniqueNumber}`;
    entryDetailsSection.appendChild(uniqueNumberDisplay);

    // Company Details
    const companyName = document.getElementById("companyName").value;
    const companyType = document.getElementById("companyType").value;
    const companyContact = document.getElementById("companycontact").value;
    const companyEmail = document.getElementById("companyemail").value;

    const companyDetailsDisplay = document.createElement("p");
    companyDetailsDisplay.innerHTML = `
        Company Name: ${companyName} (${companyType})<br>
        Company Contact: ${companyContact}<br>
        Company Email: ${companyEmail}
    `;
    entryDetailsSection.appendChild(companyDetailsDisplay);

    // Address Details
    const doorNo = document.getElementById("doorNo").value;
    const locality = document.getElementById("locality").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("State").value;
    const pincode = document.getElementById("pincode").value;

    const addressDisplay = document.createElement("p");
    addressDisplay.innerHTML = `
        Address: ${doorNo}, ${locality}, ${city}, ${state} - ${pincode}
    `;
    entryDetailsSection.appendChild(addressDisplay);

    // Incharge Details
    const incharge1Position = document.getElementById("incharge1Position").value;
    const incharge1Name = document.getElementById("personName").value;
    const incharge1Contact = document.getElementById("incharge1ContactNumber").value;
    const incharge1Email = document.getElementById("incharge1Email").value;

    const inchargeDetailsDisplay = document.createElement("p");
    inchargeDetailsDisplay.innerHTML = `
        Incharge 1:<br>
        Name: ${incharge1Name}<br>
        Position: ${incharge1Position}<br>
        Contact: ${incharge1Contact}<br>
        Email: ${incharge1Email}
    `;
    entryDetailsSection.appendChild(inchargeDetailsDisplay);

    // Incharge 2 Details
    const incharge2Position = document.getElementById("incharge2Position").value;
    const incharge2Name = document.getElementById("incharge2Name").value;
    const incharge2Contact = document.getElementById("incharge2ContactNumber").value;
    const incharge2Email = document.getElementById("incharge2Email").value;

    const incharge2DetailsDisplay = document.createElement("p");
    incharge2DetailsDisplay.innerHTML = `
        Incharge 2:<br>
        Name: ${incharge2Name}<br>
        Position: ${incharge2Position}<br>
        Contact: ${incharge2Contact}<br>
        Email: ${incharge2Email}
    `;
    entryDetailsSection.appendChild(incharge2DetailsDisplay);

    // Table Data
    const entryDetailsTable = document.createElement("table");
    entryDetailsTable.id = "entryDetailsTable";
    entryDetailsTable.innerHTML = `
        <thead>
            <tr>
                <th>S.No</th>
                <th>Position</th>
                <th>Educational Qualification</th>
                <th>Experience</th>
                <th>Category</th>
                <th>Vacancy Details</th>
                <th>Job Description File</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const vacancyRows = document.querySelectorAll("#vacancyTable tr");

    vacancyRows.forEach((vacancyRow, index) => {
        if (index > 0) {
            const entryDetailsRow = entryDetailsTable.querySelector("tbody").insertRow(-1);
            const jobDescriptionFile = vacancyRow.cells[7].querySelector("input").files[0]; // Corrected index

            entryDetailsRow.innerHTML = `
                <td>${index}</td>
                <td>${vacancyRow.cells[1].querySelector("select").value}</td>
                <td>${vacancyRow.cells[2].querySelector("select").value}</td>
                <td>${vacancyRow.cells[3].querySelector("select").value}</td>
                <td>${vacancyRow.cells[4].querySelector("select").value}</td>
                <td>${vacancyRow.cells[5].querySelector("input").value}</td>
                <td>${jobDescriptionFile ? jobDescriptionFile.name : 'Not provided'}</td>
            `;
        }
    });

    entryDetailsSection.appendChild(entryDetailsTable);

    calculateTotalVacancy();

    const totalVacancyDisplay = document.createElement("p");
    totalVacancyDisplay.textContent = document.getElementById("totalVacancy").textContent;
    entryDetailsSection.appendChild(totalVacancyDisplay);
}


function printDetails() {

    const companyLogo = document.getElementById("companyLogo");
    const companyName = document.querySelector(".main-heading").innerText;
    const companyDescription = document.querySelector(".sub-heading").innerText;
    const companyAddress = document.querySelector(".address").innerText;
    const companyEmail = document.getElementById("companyemail").value;
    const companyContact = document.getElementById("companycontact").value;

    const entryDetails = document.getElementById('entryDetails');
    const printDetailsButton = document.getElementById('printDetailsButton');

    // Make sure entry details are visible before printing
    if (entryDetails.style.display !== 'none') {
        const options = {
            margin: 10,
            filename: 'job_vacancy_details.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf(entryDetails, options).from(entryDetails).save();
    } else {
        alert('Please display entry details before printing.');
    }
}

function generatePDF() {
    // Get the HTML content of the entire document
    const content = document.documentElement.outerHTML;

    // Use html2pdf.js to generate a PDF
    html2pdf(content, {
        margin: 10,
        filename: 'JobVacancyForm.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: 'avoid-all' },
        onBeforeSaveAs: function (pdf, fileName) {
            // Add your company details to the first page of the PDF
            const companyDetails = `
                <div style="text-align: center;">
                    <img src="path_to_your_logo_image.png" alt="Company Logo" style="width: 100px; height: 100px;">
                    <div class="main-heading">TalentoLink Consultancy </div>
                    <p class="sub-heading">A joint venture of Seqtto software solution Pvt Ltd</p>
                    <div class="address">H.No 2-86, BommalaRamaram (Vill & Mdl), Yadadri-Bhongiri (Dist), Telangana - 508126</div>
                    <label>Email: </label>
                    <a href="mailto:contcat@seqtto.com?cc=seqttosoftwaresolutions@gmail.com&subject=Regarding Job Vacancy" target="_blank">
                        contcat@seqtto.com
                    </a><br />
                    <label>Contact:</label>
                    <a href="tel:+91 7670998219">+91 7670998219</a>
                </div>
                <hr>
            `;

            // Add companyDetails to the first page
            pdf.addHTML(companyDetails, function () {
                pdf.save(fileName);
            });
        }
    });
}


// validate email 

// Function to validate email format
function validateEmail(inputFieldId) {
    const emailInput = document.getElementById(inputFieldId);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        // If the email format is invalid, show an error message
        alert("Please enter a valid email address");
        emailInput.focus();
        return false;
    }

    return true;
}

// Function to validate all email details in the form
function validateAllEmailDetails() {
    // Check each email field individually
    if (!validateEmail("companyemail") || 
        !validateEmail("incharge1Email") || 
        !validateEmail("incharge2Email")) {
        // If any email is invalid, return false
        return false;
    }

    // If all emails are valid, return true
    return true;
}


// validatepin code 
function validatePincode() {
    var pincodeInput = document.getElementById("pincode");
    var pincodeValue = pincodeInput.value;

    // Remove non-numeric characters
    pincodeValue = pincodeValue.replace(/\D/g, '');

    // Limit to 6 digits
    pincodeValue = pincodeValue.slice(0, 6);

    // Update the input value
    pincodeInput.value = pincodeValue;
}

