const usersConnection = require("../connections/usersConnection");
const usersController = () => {
  const usersList = (req, res) => {
    usersConnection
      .findUser()
      .then(users => {
        res.status(200).send({
          status: 200,
          message: "User list: ",
          data: users
        });
      })
      .catch(error => {
        res.status(400).send({
          status: 400,
          message: "Error",
          error
        });
      });
  };
  const saveUser = (req, res) => {
    console.log("User data", req.body.userData);
    usersConnection
      .saveUser(req.body.userData)
      .then(saved => {
        if (saved === 200) {
          res.status(200).send({
            status: 200,
            message: "Saved correctly"
          });
        } else {
          res.status(500).send({
            status: 500,
            message: "Bad request"
          });
        }
      })
      .catch(error => {
        res.status(400).send({
          status: 400,
          message: "Error",
          error
        });
      });
  };
  const deleteUser = (req, res) => {
    console.log("BODY", req.body);
    usersConnection
      .deleteUser(req.body.dataToDelete)
      .then(deleted => {
        if (deleted === 200) {
          res.status(200).send({
            status: 200,
            message: "Deleted successfuly"
          });
        } else {
          res.status(500).send({
            status: 500,
            message: "Bad request"
          });
        }
      })
      .catch(error => {
        res.status(400).send({
          status: 400,
          message: "Error",
          error
        });
      });
  };
  return {
    usersList,
    saveUser,
    deleteUser
  };
};

module.exports = usersController();
