const noteModel = require("../models/note");

const createNote = async (req, res) => {

    const { title, discription } = req.body;

    const newNote = new noteModel({
        title: title,
        discription: discription,
        userId: req.userId
    })

    try {

        await newNote.save();
        res.status(201).json(newNote);

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Something went Wrong" });

    }
}

const updateNote = async (req, res) => {

    const id = req.params.id;
    const { title, discription } = req.body;

    const newNote = {
        title: title,
        discription: discription,
        userId: req.userId
    }

    try {

        await noteModel.findByIdAndUpdate(id, newNote, { new: true });
        res.status(200).json(newNote);

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Something went Wrong" });

    }

}

const deleteNote = async (req, res) => {

    const id = req.params.id;
    try {

        const note = await noteModel.findByIdAndRemove(id);
        res.status(202).json(note);
        
    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Something went Wrong" });

    }

}

const getNote = async (req, res) => {

    try {

        const notes = await noteModel.find({ userId: req.userId });
        res.status(200).json(notes);

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Something went Wrong" });

    }

}

module.exports = {
    getNote, updateNote, createNote, deleteNote
}