module.exports = (sequelize, dataType) => {
    const alias = 'User';

    const cols = {
        id: {
            primaryKey: true,
            type: dataType.STRING,
        },
        name: {
            type: dataType.STRING,
            allowNull: false
        },
        lastName: {
            type: dataType.STRING,
            allowNull: false
        },
        email: {
            type: dataType.STRING,
            allowNull: false
        },
        password: {
            type: dataType.STRING,
            allowNull: false
        },
        dni: {
            type: dataType.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: dataType.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: dataType.DATE,
            allowNull: false,

        },
        profile_picture: {
            type: dataType.STRING
        }
    };

    const config = {
        tableName: 'users',
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}