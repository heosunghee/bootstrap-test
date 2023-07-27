// modal
const emailInputEl = document.querySelector('#exampleInputEmail1');
const modalEl = document.querySelector('#exampleModal');

modalEl.addEventListener('shown.bs.modal', function () {
  emailInputEl.focus();
});

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

import Dropdown from 'bootstrap/js/dist/dropdown';
import Modal from 'bootstrap/js/dist/modal';

// Dropdown
const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
//const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));
[...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl));


// modal
//const myModalAlternative = new Modal('#myModal', options);
// or
new Modal(document.getElementById('exampleModal'), options);



