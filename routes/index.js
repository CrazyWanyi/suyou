const home = require('./home')
const logo = require('./logo')
const login = require('./login')
const logout = require('./logout')
const register = require('./register')
const me = require('./me')
const user = require('./user')
const community = require('./community')
const find = require('./find')
const post = require('./post')
const map = require('./map')
const recommend = require('./recommend')
const shopping = require('./shopping')
const ai = require('./ai')
const suyor = require('./suyor')
const cms_login = require('./cms/login')
const cms_home = require('./cms/home')
const cms_m_r = require('./cms/manage_restaurant')

module.exports = (app) => {
    app.use(home)
    app.use(login)
    app.use(logout)
    app.use(register)
    app.use(me)
    app.use(user)
    app.use(community)
    app.use(find)
    app.use(logo)
    app.use(post)
    app.use(map)
    app.use(recommend)
    app.use(shopping)
    app.use(ai)
    app.use(suyor)
    app.use(cms_login)
    app.use(cms_home)
    app.use(cms_m_r)
}