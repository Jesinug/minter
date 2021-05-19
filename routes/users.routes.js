const express = require('express');
const Announcement = require('../models/Announcement.model');
const User = require('../models/User.model');
const router = express.Router();



//READ: Find all users
router.get("/", (req, res, next) => {
    User.find()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

router.get("/announcements", (req, res, next) => {
    Announcement.find({ userId: req.user.id  })
    .then(announcements => res.status(200).json(announcements))
    .catch(err => res.status(500).json(err))
})

//READ: Find a single user
router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    User.findOne({ _id: id })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

//UPDATE: Update user
router.put("/:id", (req, res, next) => {
    const { id } = req.params;
    User.findOneAndUpdate({ _id: id, user: req.user.id }, req.body, { new: true })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
})

//DELETE
router.delete("/", (req, res, next) => {
    User.findOneAndDelete({ _id: req.user.id  })
    .then(() => res.status(200).json({ message: `User ${id} deleted 🗑`}))
    .catch(err => res.status(500).json(err))
})

// EXPORT //
module.exports = router;