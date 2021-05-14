const express = require('express');
const Announcement = require('../models/Announcement.model');
const router = express.Router();

//Find all the announcements
router.get("/", (req, res, next) => {
    console.log('Inside router.get(/)')
    console.log(req.user)
    Announcement.find()
    .then(announcement =>  res.status(200).json(announcement))
    .catch(err => res.status(500).json(err))
})

//Find announcement by announcement _id
router.get("/:announcementId", (req, res, next) => {
    console.log('Inside "router.get(/:announcementId)')
    const { announcementId } = req.params;
    Announcement.findOne({ _id: announcementId })
    .then(announcement => res.status(200).json(announcement))
    .catch(err => res.status(500).json(err))
})

//Find one or more announcements by user _id
router.get("/:userId", (req, res, next) => {
    console.log('Inside router.get(/:userId)')
    const { userId } = req.params;
    Announcement.findOne({ _id: userId })
    .then(announcement => res.status(200).json(announcement))
    .catch(err => res.status(500).json(err))
})

router.post("/", async (req, res, next) => {
    console.log('Inside router.post(/)')
    console.log(`${req.body}`)
    const { userId, skill, description } = req.body;
    if(!skill){
        return res.status(400).json({ message: "Skill is required"});
    }
    try {
        const announcement = await Announcement.create({ userId, skill, description, user: req.user.id  });
    return res.status(200).json(announcement);
    } catch(err){
    return res.status(500).json(err)
    }
})

router.put("/:id", (req, res, next) => {
    console.log('Inside router.put(/:id)')
    const { id } = req.params;
    Announcement.findOneAndUpdate({ _id: id, user: req.user.id  }, req.body, { new: true })
    .then(announcement => res.status(200).json(announcement))
    .catch(err => res.status(500).json(err))
})

router.delete("/:id", (req, res, next) => {
    console.log('Inside router.delete(/:id)')
    const { id } = req.params;
    Announcement.findOneAndRemove({ _id: id, user: req.user.id  })
    .then(() => res.status(200).json({ message: `Announcement ${id} deleted 🗑`}))
    .catch(err => res.status(500).json(err))
})

module.exports = router;