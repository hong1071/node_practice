const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {        //DB 정보를 넣는다
    
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
});

// Import Mapping Object
const User = require('./User')(sequelize);
const Guestbook = require('./Guestbook')(sequelize);
const Gallery = require('./Gallery')(sequelize);
const Board = require('./Board')(sequelize);

User.hasMany(Board, {
    foreignKey: {
        name: 'userNo',
        allowNull: false,
        constraints: true,
        onDelete:'CASCADE'
    }
})

// DB에 반영(DDL)
User.sync({                             // 동기화
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_ALWAYS === 'true'
});


Guestbook.sync({                             // 동기화
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_ALWAYS === 'true'
});

Gallery.sync({                             // 동기화
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_ALWAYS === 'true'
});

Board.sync({                             // 동기화
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_ALWAYS === 'true'
});

// Export Mapping Object
module.exports = {User, Guestbook, Gallery, Board };