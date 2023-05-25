const express = require('express');
const router = express.Router();

let users = [
    { name: 'Aen', age: '18' },
    { name: 'Ben', age: '19' },
    { name: 'Cen', age: '20' },
    { name: 'Den', age: '21' },
    { name: 'Een', age: '22' },

];

//get user list /api/users
router.get('/api/users', (req, res) => {
    res.send({
        msg: "get user successfully",
        userList: users,

    });
});

//post user /api/user
router.post('/api/user', (req, res) => {
    const newUser = req.body;
    console.log("new User", newUser);
    if (newUser) {
        users.push(newUser);
          res.send({
        msg: "get user successfully",
        data: users,
    });
    } else {
        res.status(400).send('user info is required.');
    }
});


//delete users /api/delete
router.delete('/api/delete', (req, res)=>{
    users = [];
    res.send({
        msg: "users deleted",
    })
});

//export router
module.exports = router;