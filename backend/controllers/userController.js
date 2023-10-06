const userController = {

    getLogin (req, res) {
        res.render('login', {title: '| Ingresa'});
    },

    getRegister (req, res) {
        res.render('register', {title: '| Registrate'});
    }
};

module.exports = userController;
