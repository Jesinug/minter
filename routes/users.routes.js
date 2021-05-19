const express = require('express');
const Announcement = require('../models/Announcement.model');
const User = require('../models/User.model');
const router = express.Router();



//READ: Find all users
//Postman OK
router.get("/", (req, res, next) => {
    console.log('Inside "user/router.get(/)')
    User.find()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

router.get("/announcements", (req, res, next) => {
    console.log('_id: req.user.id ', {_id: req.user.id} )
    Announcement.find({ userId: req.user.id  })
    .then(announcements => res.status(200).json(announcements))
    .catch(err => res.status(500).json(err))
})

//READ: Find a single user
//Postman FAILED
//TODO: Same problem about user validation an isLoggedIn
router.get("/:id", (req, res, next) => {
    console.log('Inside user/router.get(/:id)')
    const { id } = req.params;
    User.findOne({ _id: id })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

//UPDATE: Update user
//TODO: Same problem about user validation an isLoggedIn
router.put("/:id", (req, res, next) => {
    console.log('Inside "router.put(/:id)')
    const { id } = req.params;
    User.findOneAndUpdate({ _id: id, user: req.user.id }, req.body, { new: true })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

//DELETE
//TODO: Same problem about user validation an isLoggedIn
router.delete("/", (req, res, next) => {
    console.log('Inside "router.delete(/:id)')
    User.findOneAndDelete({ _id: req.user.id  })
    .then(() => res.status(200).json({ message: `User ${id} deleted 🗑`}))
    .catch(err => res.status(500).json(err))
})

// EXPORT //
module.exports = router;