const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-main");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  if (nameTerm) {
    source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
  }

  const rows = source.reduce(
    (acc, { email, first_name, gender, id, ip_address, last_name }) =>
      acc +
      `<tr id="table-row-${email}"><td>${email}</td><td>${first_name}</td><td>${gender}</td><td>${id}</td><td>${ip_address}</td><td>${last_name}</td></tr>`,
    ``
  );


  tableBody.innerHTML = rows;
};

loadData(`./MOCK_DATA.json`).then((data) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value;

  loadData(`./MOCK_DATA.json`).then((data) => renderTable(data, term));
};

const onReset = () => {
  loadData(`./MOCK_DATA.json`).then((data) => renderTable(data));
};
