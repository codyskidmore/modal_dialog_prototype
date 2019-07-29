const errorMessageDiv = document.getElementById('modal-container');
const showErrorDialog = new ShowErrorDialog(errorMessageDiv, 'My Error Dialog', 'Please fix the following errors and try again.');
const errors = ['Validation Error #1.','Validation Error #2.'];
showErrorDialog.showErrors(errors);