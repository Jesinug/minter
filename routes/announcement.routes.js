const express = require('express');
const Announcement = require('../models/Announcement.model');
const router = express.Router();

//Find all the announcements
router.get("/", (req, res, next) => {
    let promise 
    if ( req.user ) {
        promise = Announcement.where('userId').ne(req.user.id)
    } else {
        promise = Announcement.find()
    }
    promise
    .then(announcement =>  res.status(200).json(announcement))
    .catch(err => res.status(500).json(err))
})

//Find announcement by announcement _id
router.get("/:announcementId", (req, res, next) => {
    const { announcementId } = req.params;
    Announcement.findOne({ _id: announcementId })
    .then(announcement => res.status(200).json(announcement))
    .catch(err => res.status(500).json(err))
})

//Find one or more announcements by user _id
router.get("/:userId", (req, res, next) => {
    const { userId } = req.params;
    Announcement.findOne({ _id: userId })
    .then(announcement => res.status(200).json(announcement))
    .catch(err => res.status(500).json(err))
})

//Create an announcement
router.post("/", async (req, res, next) => {
    const { userId, skill, description } = req.body;
    if(!skill){
        return res.status(400).json({ message: "Skill is required"});
    }
    try {
        const announcement = await Announcement.create({ skill, description, userId: req.user.id });
    return res.status(200).json(announcement);
    } catch(err){
    return res.status(500).json(err)
    }
})

//Update an announcement
router.put("/:id", (req, res, next) => {
    const { id } = req.params;
    Announcement.findOneAndUpdate({ _id: id, userId: req.user.id }, req.body, {new: true})
    .then(announcement => res.status(200).json(announcement))
    .catch(err => res.status(500).json(err))
})

//Delete an announcement
router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    Announcement.findOneAndDelete({ _id: id, userId: req.user.id })
    .then(() => res.status(200).json({ message: `Announcement ${id} deleted 🗑`}))
    .catch(err => res.status(500).json(err))
})

module.exports = router;