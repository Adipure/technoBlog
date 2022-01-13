const User = require('./User.js')
const Post = require('./Post.js')
const myComments = require('./Note.js')

User.hasMany(Post, { foreignKey: 'uid' })
Post.belongsTo(User, { foreignKey: 'uid' })
myComments.belongsTo(Post, { foreignKey: 'uid' })

module.exports = { User, Post }
