var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: true //might want to change to true to see what's happening
});

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
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            return this.getDataValue('urlTitle');
        }
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }// ,
    // date: {
    //     type: Sequelize.DATE,
    //     defaultValue: Sequelize.NOW
    // }
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
})

module.exports = {
    Page: Page,
    User: User

};
