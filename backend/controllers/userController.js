const userController = {

    getLogin: async (req, res) => {
        res.render('login', {title: '| Ingresa'});
    },

    getRegister: async (req, res) => {
        res.render('register', {title: '| Registrate'});
    },

    register: async (req, res) => {
        const user = {name, last_name, username, email};
    },
};

module.exports = userController;
