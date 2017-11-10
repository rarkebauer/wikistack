var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

// const Project = sequelize.define('project', {
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT
// })

// const Task = sequelize.define('task', {
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT,
//   deadline: Sequelize.DATE
// })


const Page = db.define('page', {
    title: Sequelize.STRING,
    urlTitle: {
        type: Sequelize.STRING, 
        validate: {
            isUrl: true
        }
    },
    content: Sequelize.TEXT,
    status: Sequelize.ENUM('open', 'closed')
})

const User = db.define('user', {
    name: Sequelize.STRING, 
    email: {
        type: Sequelize.STRING, 
        validate: {
            isEmail: true
        }
    }
})

module.exports = {
    Page: Page, 
    User: User

};