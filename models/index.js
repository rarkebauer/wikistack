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
    },
    // date: {
    //     type: Sequelize.DATE,
    //     defaultValue: Sequelize.NOW
    // }
    // hooks: {
    //     // beforeCreate: () => {
    //     //     // Do other stuff
    //     }
});

Page.hook('beforeValidate', function(page, options){
    page.urlTitle = urlTitleConverter(page.title)
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


function urlTitleConverter(title){
    if (title) {
        // Removes all non-alphanumeric characters from title
        // And make whitespace underscore
        return title.replace(/\s+/g, '_').replace(/\W/g, '');
      } else {
        // Generates random 5 letter string
        return Math.random().toString(36).substring(2, 7);
 }
}
