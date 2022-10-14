'use strict';

const form = document.querySelector('.form');
const dataContainer = document.querySelector('.data-container');
const resetBtn = document.querySelector('.reset');
let dataArr;
dataContainer.innerHTML = '';

const capitalize = (str) => {
  const newStr = str.toLowerCase();
  return newStr.charAt(0).toUpperCase() + newStr.slice(1);
};

const generateMarkup = (data) => {
  return `<table border="1">
  <th class="header" colspan="2">Your Info</th>
  <tr>
    <th>Email Address</th>
    <td>${data.email}</td>
  </tr>
  <tr>
    <th>Password</th>
    <td>${data.password}</td>
  </tr>
  <tr>
    <th>Name</th>
    <td>${data.name}</td>
  </tr>
  <tr>
    <th>CNIC/B-Form No.</th>
    <td>${data.cnic}</td>
  </tr>
  <tr>
    <th>Registration No.</th>
    <td>${data.registrationNo}</td>
  </tr>
  <tr>
    <th>Date Of Birth</th>
    <td>${data.birthDate}</td>
  </tr>
  <tr>
    <th>Religion</th>
    <td>${capitalize(data.religion)}</td>
  </tr>
  <tr>
    <th>Hafiz-e-Quran</th>
    <td>${capitalize(data.hafizEQuran)}</td>
  </tr>
  <tr>
    <th>Postal Address</th>
    <td>${data.address}</td>
  </tr>
  <tr>
    <th>Gender</th>
    <td>${capitalize(data.gender)}</td>
  </tr>
  <tr>
    <th>Picture</th>
    <td>${data.picture.name}</td>
  </tr>
  <tr>
    <th>Landline No.</th>
    <td>${data.landline}</td>
  </tr>
  <tr>
    <th>Mobile No.</th>
    <td>${data.mobile}</td>
  </tr>
  <tr>
    <th>Nationality</th>
    <td>${capitalize(data.nationality)}</td>
  </tr>
  <tr>
    <th>Domicile</th>
    <td>${capitalize(data.domicile)}</td>
  </tr>
  <th class="header" colspan="2">Your Father Info</th>
  <tr>
    <th>Name</th>
    <td>${data.fatherName}</td>
  </tr>
  <tr>
    <th>Profession</th>
    <td>${capitalize(data.profession)}</td>
  </tr>
  <tr>
    <th>Mobile No.</th>
    <td>${data.fatherMobile}</td>
  </tr>
  <tr>
    <th>CNIC No.</th>
    <td>${data.fatherCnic}</td>
  </tr>
  <tr>
    <th>Income</th>
    <td>${data.income}</td>
  </tr>
</table>`;
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  dataArr = [...new FormData(form)];
  const data = Object.fromEntries(dataArr);

  let html = generateMarkup(data);

  dataContainer.innerHTML = html;
  form.reset();
});

resetBtn.addEventListener('click', function () {
  dataContainer.innerHTML = '';
  form.reset();
});
