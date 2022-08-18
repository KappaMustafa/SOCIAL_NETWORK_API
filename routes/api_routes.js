const api_router = require('express').Router();
const Users = require('../models/Users');
const Thoughts = require('../models/Thoughts')



api_router.get('/groups', async (req, res) => {
    const groups = await Group.find().populate('students');
  
    res.send(groups);
  });



  module.exports = api_router;