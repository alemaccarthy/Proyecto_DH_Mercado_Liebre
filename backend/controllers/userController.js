const { User } = require('../database/models');
const { Op, Sequelize } = require('sequelize');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const userController = {

    getLogin: async (req, res) => {
        res.render('login', {title: '| Ingresa'});
    },

    getRegister: async (req, res) => {
        res.render('register', {title: '| Registrate'});
    },

    register: async (req, res) => {
        const user = {name, lastName, username, email, profile_picture, password} = req.body;
        const id = uuid.v4();
        user.password = await bcrypt.hash(user.password, 12);

        try{
            let profilePicture = '/imgs/profile-images/no-image-profile.jpg';

            if (req.file) { profilePicture = '/imgs/profile-images/' + req.file.filename; }

            const newUser = await User.create({
                id: uuid.v4(),
                ...user,
                password: user.password,
                profile_picture: profilePicture
            });
        }catch(error){
            console.log(error);
        }
    },

    login: async (req, res) => {
        
    }
};

module.exports = userController;
