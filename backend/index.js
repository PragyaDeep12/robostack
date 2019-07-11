const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const connection = mysql.createConnection({
  user: "pragya12",
  port: "3306",
  host: "db4free.net",
  password: "pragya12",
  database: "pragya12"
});
connection.connect(err => {
  if (err) throw err;
  console.log("Connected!");
});
app.get("/allEmployees", async (req, res) => {
  try {
    var sql = "select * from employee";
    await connection.query(sql, (err, res1) => {
      if (err) {
        console.log(err);
      }
      //   console.log(res1);
      res.send(res1);
    });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});
app.post("/updateEmployee", async (req, res) => {
  try {
    var data = req.body;
    var sql = "update employee set name=? ,department= ? where id= ?";
    await connection.query(
      sql,
      [data.name, data.department, data.id],
      (err, res1) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send(res1);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});
app.post("/deleteEmployee", async (req, res) => {
  try {
    let data = req.body;
    var sql = "delete from employee where id=?";
    await connection.query(sql, data.id, (err, res1) => {
      if (err) {
        console.log(err);
      }
      res.send(res1);
    });
  } catch (err) {
    res.send("Unexpected Error occured");
  }
});
app.post("/addEmployee", async (req, res) => {
  console.log("here");
  try {
    let data = req.body;
    console.log(data.email);
    var sql = "insert into employee (name, department, email) values (?,?,?);";
    await connection.query(
      sql,
      [data.name, data.department, data.email],
      function(err, res2) {
        if (err) {
          console.log(err);
          res.send({ status: 500, message: "Unexpected error occured" });
        }
        console.log(res2);
        res.send(res2);
      }
    );
  } catch (err) {
    console.log(err);
  }
});
app.post("/addPermission", async (req, res) => {
  try {
    var sql = "insert into permission (permission) values (?);";
    var data = req.body;
    await connection.query(sql, [data.permission], (err, res1) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(res1);
    });
  } catch (err) {
    console.log(err);
  }
});
app.get("/allPermssion", async (req, res) => {
  try {
    var sql = "select * from permission;";
    await connection.query(sql, (err, res1) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(res1);
    });
  } catch (err) {
    console.log(err);
  }
});
app.post("/getPermissionById", async (req, res) => {
  try {
    var data = req.body;
    var sql = "select * from employeepermssion where employeeId=?";
    await connection.query(sql, [data.id], (err, res1) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(res1);
    });
  } catch (err) {
    console.log(err);
  }
});
app.post("/addPermissionById", async (req, res) => {
  try {
    var data = req.body;
    var sql =
      "insert into employeepermssion (employeeId, permissionId) values (?,?)";
    await connection.query(
      sql,
      [data.employeeId, data.permissionId],
      (err, res1) => {
        if (err) {
          console.log(err);
          res.send(err);
        }
        res.send(res1);
      }
    );
  } catch (err) {
    console.log(err);
  }
});
app.post("/deletePermissionById", async (req, res) => {
  try {
    var data = req.body;
    var sql =
      "delete from employeepermssion where employeeId=? and permissionId=?";
    await connection.query(
      sql,
      [data.employeeId, data.permissionId],
      (err, res1) => {
        if (err) {
          console.log(err);
          res.send(err);
        }
        res.send(res1);
      }
    );
  } catch (err) {
    console.log(err);
  }
});
app.post("/loginEmployee", async (req, res) => {
  try {
    var data = req.body;
    sql = "select * from employee where email= ?";
    await connection.query(sql, data.email, (err, res1) => {
      console.log(res1);
      // res.send({})
      res.send(res1);
    });
  } catch (err) {
    console.log(err);
  }
});
app.post("/getResponsibilityByEmpId", async (req, res) => {
  try {
    var sql =
      " select * from permission where id in (select permissionId from employeepermssion where employeeId=?)";
    var data = req.body;
    await connection.query(sql, [data.id], (err, res1) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(res1);
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.post("/getResponsibilityById", async (req, res) => {
  try {
    var sql = "select * from roles where employeeId=?";
    var data = req.body;
    await connection.query(sql, [data.id], (err, res1) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(res1);
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.post("/deleteResponsibilityById", async (req, res) => {
  try {
    var sql = "delete from roles where id=?";
    var data = req.body;
    await connection.query(sql, [data.id], (err, res1) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(res1);
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
app.post("/addResponsibilityById", async (req, res) => {
  var sql = "insert into roles (employeeId,responsibility) values (?,?);";
  var data = req.body;

  console.log(data);
  await connection.query(
    sql,
    [data.employeeId, data.responsibility],
    (err, res1) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(res1);
    }
  );
});
app.get("/employeeCount", async (req, res) => {
  try {
    var sql =
      "select department, count(*)as count from employee group by department";
    await connection.query(sql, (err, res1) => {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(res1);
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
