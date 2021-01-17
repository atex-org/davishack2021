const express = require('express'); 
const mongoose = require('mongoose'); 
const Event = require('../models/event');
const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 

exports.loadEventController = async (req, res)=> {

    console.log("getting Events"); 
    try {
        console.log("verifying"); 
        // const secret = require('crypto').randomBytes(64).toString('hex')

        // find the user
        const event = await Event.find({});

        

        // generate auth token
       // const eventJson = jwt.sign(JSON.stringify(event), process.env.KEY)
        
       // console.log("Event return ", eventJson)
        return res.send(event)

    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}

exports.loadEventControllerById = async (req, res)=> {
    const { id } = req.params.id
    try {
        console.log("Loading"); 
        const event = await Event.findById(req.params.id).exec();

        

        // generate auth token
       // const eventJson = jwt.sign(JSON.stringify(event), process.env.KEY)
        
       // console.log("Event return ", eventJson)
        return res.send(event)

    } catch (e) {
        console.log("err", e)
        return res.status(500).json({ message: e })
    }
}




