'use strict'

const Database = use('Database')
const User = use('App/Model/User')
const Computer = use('App/Model/Computer')
const Component = use('App/Model/Component')
const Validator = use('Validator')

class CompController {
     * index(req, res) {
       yield res.sendView('main');
     }

    * create (req, res) {
      yield res.sendView('compCreate');
    }

     * doCreate (req, res) {
        var post = req.post();
        var computerData = {
            name:post.name,
            description:post.description,
            motherboard:post.motherboard,
            processor:post.processor,
            video:post.video,
            memory:post.memory,
            user_id:req.currentUser.id
        };

    const rules = {
      name: 'required',
      motherboard: 'required',
      processor: 'required',
      video: 'required',
      memory: 'required'
    };
    const validation = yield Validator.validateAll(computerData, rules)

    if (validation.fails()) {
      yield req
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      res.redirect('back')
      return
    }

    const computer = yield Computer.create(computerData)
    res.redirect('/')
  }

   * edit (req, res) {
    const id = req.param('id');
    const comp = yield Computer.find(id);

    if (req.currentUser.id !== comp.user_id) {
      res.unauthorized('Access denied.')
      return
    }

    yield res.sendView('compEdit', {
      comp: comp.toJSON()
    });
  }

  * doEdit (req, res) {
    const post = req.post();
    const computerData = {
        name:post.name,
        description:post.description,
        motherboard:post.motherboard,
        processor:post.processor,
        video:post.video,
        memory:post.memory,
        user_id:req.currentUser.id
    };

    const rules = {
      name: 'required',
      motherboard: 'required',
      processor: 'required',
      video: 'required',
      memory: 'required'
    };

    const validation = yield Validator.validateAll(computerData, rules)

    if (validation.fails()) {
      yield req
        .withAll()
        .andWith({errors: validation.messages()})
        .flash()
      res.redirect('back')
      return
    }

    const id = req.param('id');
    const comp = yield Computer.find(id);
    
    comp.name = computerData.name;
    comp.description = computerData.description;
    comp.motherboard = computerData.motherboard;
    comp.processor = computerData.processor;
    comp.video = computerData.video;
    comp.memory = computerData.memory;
    comp.user_id = computerData.user_id;

    yield comp.save()
    
    res.redirect('/')
  }

  * show (req, res) {
    const id = req.param('id');
    const comp = yield Computer.find(id);

    yield res.sendView('compShow', {
      comp: comp.toJSON()
    })
  }

  * doDelete (req, res) {
    const id = req.param('id');
    const comp = yield Computer.find(id);

    if (req.currentUser.id !== comp.user_id) {
      res.unauthorized('Access denied.')
      return
    }

    yield comp.delete()
    res.redirect('/')
  }

  * search (req, res) {
    const page = Math.max(1, req.input('p'))
    const filters = {
      compName: req.input('compName') || '',
      createdBy: req.input('createdBy') || 0
    }

    const computers = yield Computer.query()
      .where(function () {
        if (filters.createdBy > 0) this.where('user_id', filters.createdBy)
        if (filters.compName.length > 0) this.where('name', 'LIKE', `%${filters.compName}%`)
      })
      .with('user')
      .paginate(page, 9)

    const users = yield User.all()

    yield res.sendView('compSearch', {
      computers: computers.toJSON(),
      users: users.toJSON(),
      filters
    })
  }
  
}

module.exports = CompController
