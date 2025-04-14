const express = require('express');
const mysql = require('mysql2');
const dbconfig = require('./dbconfig.js');

const app = express();

app.get('/', (req, res) => {
  const env = process.env.NODE_ENV || "development";
  const con = mysql.createConnection(dbconfig[env]);
  res.send(`env: ${env}, host: ${dbconfig[env].host}`);
  return;

  con.connect(function(err) {
    if (err) {
      console.error(err);
      res.send('Failed to connect to DB');
      return;
    };
    console.log('Connected');
    con.query("SELECT * FROM INFORMATION_SCHEMA.CHARACTER_SETS LIMIT 1", (err, result, fields) => {
      if (err) {
        console.error(err);
        res.send('Failed to select');
        return;
      }
      res.send(JSON.stringify(result));
    });
  });
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
