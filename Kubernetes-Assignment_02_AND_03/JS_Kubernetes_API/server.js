const express = require('express');
const app = express();
const port = 8080;

// MySQL configuration
const mysqlConfig = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: 'mysql-headless', // Use the headless service name
};

// MySQL connection setup
const mysql = require('mysql');
const connection = mysql.createConnection(mysqlConfig);

// API endpoint to retrieve records from the database
app.get('/records', (req, res) => {
  connection.query('SELECT * FROM NAGP_table', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});

// Start the API server
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
