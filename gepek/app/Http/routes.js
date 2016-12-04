'use strict'

const Route = use('Route')

Route.get('/', 'CompController.index')
Route.get('/comp/create', 'CompController.create')//.middleware('auth')
Route.post('/comp/create', 'CompController.doCreate')//.middleware('auth')
Route.get('/comp', 'CompController.search')

Route.get('/register', 'UserController.register')
Route.get('/login', 'UserController.login')
