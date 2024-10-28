document.addEventListener('DOMContentLoaded', () => {
  const requestList = document.getElementById('request-list');
  const membersList = document.getElementById('members-list');
  const paywallInfo = document.getElementById('paywall-info');

  // Mock JSON data
  const data = {
    "requests": [
      {
        "member": "John Doe",
        "content": "Requesting $500 for a youth camp.",
        "status": "Pending",
        "approvedAmount": "500"
      },
      {
        "member": "Jane Smith",
        "content": "Asking for help with $200 for new books.",
        "status": "Approved",
        "approvedAmount": "200"
      }
    ],
    "members": [
      {
        "name": "John Doe",
        "role": "Member"
      },
      {
        "name": "Jane Smith",
        "role": "Member"
      },
      {
        "name": "Pastor Greg",
        "role": "Leader"
      }
    ],
    "paywall": {
      "totalAmountRequested": "700",
      "totalAmountApproved": "500"
    }
  };

  // Display Requests
  if (requestList) {
    data.requests.forEach(request => {
      const div = document.createElement('div');
      div.className = 'col-md-6 mb-3';
      div.innerHTML = `
        <div class="card p-3">
          <h5 class="card-title">${request.member}</h5>
          <p class="card-text">${request.content}</p>
          <p>Status: ${request.status} | Approved Amount: $${request.approvedAmount}</p>
          <button class="btn btn-primary btn-sm">Approve</button>
        </div>
      `;
      requestList.appendChild(div);
    });
  }

  // Display Members
  if (membersList) {
    data.members.forEach(member => {
      const div = document.createElement('div');
      div.className = 'col-md-4 mb-3';
      div.innerHTML = `
        <div class="card p-3">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text">Role: ${member.role}</p>
        </div>
      `;
      membersList.appendChild(div);
    });
  }

  // Display Paywall Info
  if (paywallInfo) {
    paywallInfo.innerHTML = `
      <p>Total Amount Requested: $${data.paywall.totalAmountRequested}</p>
      <p>Total Amount Approved: $${data.paywall.totalAmountApproved}</p>
    `;
  }
});
