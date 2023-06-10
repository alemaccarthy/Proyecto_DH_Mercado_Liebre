const path = require('path');
const userRouter = express.Router()
const userController = require('../controllers/userController')

userRouter.get('/register', userController.getRegister);

userRouter.get('/login', userController.getLogin)

module.exports = userRouter;