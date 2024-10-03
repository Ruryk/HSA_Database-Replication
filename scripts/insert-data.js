const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root_password',
    database: 'test_db'
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS test_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

connection.query(createTableQuery, (err) => {
    if (err) throw err;
    console.log('Table is ready');
});

function insertData() {
    const query = `INSERT INTO test_table (name) VALUES ('Test data')`;
    connection.query(query, (err) => {
        if (err) throw err;
        console.log('Data inserted');
    });
}

setInterval(insertData, 5000);
