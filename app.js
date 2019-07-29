const errorMessageDiv = document.getElementById('modal-container');
const showErrorDialog = new ShowErrorDialog(errorMessageDiv, 'Modal Header Cody', 'Please fix the following errors and try again.');
const errors = ['Validation Error #1.','Validation Error #2.'];
showErrorDialog.showErrors(errors);