document.addEventListener('DOMContentLoaded', function () {
  const approveButtons = document.querySelectorAll('.btn-success');
  const rejectButtons = document.querySelectorAll('.btn-danger');

  approveButtons.forEach(button => {
      button.addEventListener('click', function () {
          if (confirm('Are you sure you want to approve this request?')) {
              // Logic to approve the request
              alert('Request approved!');
          }
      });
  });

  rejectButtons.forEach(button => {
      button.addEventListener('click', function () {
          if (confirm('Are you sure you want to reject this request?')) {
              // Logic to reject the request
              alert('Request rejected!');
          }
      });
  });
});