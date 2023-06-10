const path = require('path'); 
const mainRouter = express.Router();
const mainController = require('../controllers/mainController');

mainRouter.get('/', mainController.getIndex);

module.exports = mainRouter;