const {DataTypes} = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('User', {
        no: {                               //column을 객체 형식으로 나타낸다. 아래는 객체의 property
            field:'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(45),
            allowNull:  false
        }, 
        email: {
            field: 'email',
            type: DataTypes.STRING(200),
            allowNull:  false
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(45),
            allowNull:  false
        },
        gender: {
            field: 'gender',
            type: DataTypes.ENUM('mail', 'female'),
            allowNull:  false
        },
        roll: {
            field: 'roll',
            type: DataTypes.ENUM('USER', 'admin'),
            allowNull:  false,
            defaultValue: 'USER'
        }
    }, {
        underscored: true,                   // table에 대한 설정
        freezeTableName:true,
        timestamps: false,
        createdAt: false,
        updateAt: false,
        tableName: 'user'
    })
}

/*
User.create({});
User.findOne({                          // where 조건 설정
    where
})
*/