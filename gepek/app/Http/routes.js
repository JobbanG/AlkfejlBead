'use strict'

const Route = use('Route')

Route.get('/', 'CompController.index')
Route.get('/computers/create', 'CompController.create').middleware('auth')
Route.post('/computers/create', 'CompController.doCreate').middleware('auth')
Route.get('/computers', 'CompController.search')
Route.get('/computers/:id', 'CompController.show')
Route.get('/computers/:id/edit', 'CompController.edit').middleware('auth')
Route.post('/computers/:id/edit', 'CompController.doEdit').middleware('auth')
Route.get('/computers/:id/delete', 'CompController.doDelete').middleware('auth')

Route.get('/register', 'UserController.register')
Route.get('/login', 'UserController.login')
Route.post('/register', 'UserController.doRegister')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')