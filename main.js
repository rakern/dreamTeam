const csvFilePath = 'orgchart_faux.csv';
const csvTable = document.getElementById('csvTable');
const tbody = csvTable.querySelector('tbody');

const xhr = new XMLHttpRequest();
xhr.open('GET', csvFilePath, true);
xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    const csvData = this.responseText;
    const rows = csvData.split('\n');
    const headers = rows[0].split(',');
    const data = rows.slice(1);

    data.forEach(row => {
      const cells = row.split(',');

      const tr = document.createElement('tr');
      headers.forEach((header, index) => {
        const td = document.createElement('td');
        td.textContent = cells[index];
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  }
};
xhr.send();
