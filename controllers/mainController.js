const mainController = {
    getIndex(req, res){
        res.render('index', {title: '| Mercado liebre'});
    }
}

module.exports = mainController;