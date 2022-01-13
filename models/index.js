const User = require('./User.js')
const Post = require('./Post.js')
const myComments = require('./Comment.js')

User.hasMany(Post, { foreignKey: 'uid' })
Post.belongsTo(User, { foreignKey: 'uid' })
myComments.belongsTo(Post, { foreignKey: 'uid' })

module.exports = { User, Post }
