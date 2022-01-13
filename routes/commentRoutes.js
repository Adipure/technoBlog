const router = require('express').Router()
const { myComments, Post } = require('../models')
const passport = require('passport')


router.post('/myComments', passport.authenticate('jwt'), async function ({ body, user }, res) {
 const post = await myComments.create({
  ...body,
  uid: user.id
 })
 res.json(post)
})