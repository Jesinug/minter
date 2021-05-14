const express = require('express');
const User = require('../models/User.model');
const router = express.Router();



//READ: Find all users
router.get("/", (req, res, next) => {
    User.find()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})


//READ: Find a single user
router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    User.findOne({ _id: id, user: req.user.id  })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

//UPDATE: Update user
router.put("/:id", (req, res, next) => {
    console.log('Inside "router.put(/:id)')
    const { id } = req.params;
    User.findOneAndUpdate({ _id: id, user: req.user.id  }, req.body, { new: true })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

//DELETE
router.delete("/:id", (req, res, next) => {
    console.log('Inside "router.delete(/:id)')
    const { id } = req.params;
    User.findOneAndRemove({ _id: id, user: req.user.id  })
    .then(() => res.status(200).json({ message: `User ${id} deleted 🗑`}))
    .catch(err => res.status(500).json(err))
})

// EXPORT //
module.exports = router;