const express = require("express");

const contactModel = require("../models/contact.model");


async function submitContactForm(req, res) {
    try{
        const { name, email, message } = req.body;

        if(!name || !email || !message){
            return res.status(400).json({ message: "All fields are required" });
        }

        const contactEntry = new contactModel({
            name,
            email,
            message
        });

        await contactEntry.save();

        res.status(201).json({ message: "Contact form submitted successfully" });


    }catch(err){
        res.status(400).json({ message: "Error submitting contact form" });
    }
}

module.exports = {
    submitContactForm
}