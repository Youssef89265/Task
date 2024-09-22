const createCell = (content) => {
    const cell = document.createElement('td');
    cell.textContent = content;
    return cell;
};

const createRow = (user) => {
    const row = document.createElement('tr');
    row.appendChild(createCell(user.id));
    row.appendChild(createCell(user.username));
    row.appendChild(createCell(user.company.name));
    row.appendChild(createCell(user.phone));
    row.appendChild(createCell(user.email));
    row.appendChild(createCell(user.address.street));

    const cellAction = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => row.remove();
    cellAction.appendChild(deleteButton);
    row.appendChild(cellAction);

    return row;
};

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
        data.forEach(user => tbody.appendChild(createRow(user)));
    })
    .catch(error => console.log(error));
