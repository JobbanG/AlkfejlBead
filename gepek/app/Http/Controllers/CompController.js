'use strict'

const Database = use('Database')
const User = use('App/Model/User')
const Computer = use('App/Model/Computer')
const Component = use('App/Model/Component')
//const Validator = use('Validator')

class CompController {
     * index(request, response) {
       yield response.sendView('main');
     }

    * create (request, response) {
      //Const categories = yield Category.all()
      yield response.sendView('compCreate'//, {
      //categories: categories.toJSON()
    //}
    );
    }

     * doCreate (request, response) {
    const computerData = request.except('_csrf');

    const rules = {
      name: 'required',
      description: 'required'
    };

    //const validation = yield Validator.validateAll(recipeData, rules)

    /*if (validation.fails()) {
      yield request
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      response.redirect('back')
      return
    }*/

    computerData.user_id = request.currentUser.id
    const computer = yield Computer.create(computerData)
    // response.send(recipe.toJSON())
    response.redirect('/')
  }

   * search (request, response) {
    const page = Math.max(1, request.input('p'))
    const filters = {
      compName: request.input('compName') || '',
      createdBy: request.input('createdBy') || 0
    }

    const computers = yield Computer.query()
      .where(function () {
        if (filters.createdBy > 0) this.where('user_id', filters.createdBy)
        if (filters.compName.length > 0) this.where('name', 'LIKE', `%${filters.compName}%`)
      })
      .with('user')
      .paginate(page, 9)

    const users = yield User.all()

    yield response.sendView('compSearch', {
      computers: computers.toJSON(),
      users: users.toJSON(),
      filters
    })
   }
}

module.exports = CompController
