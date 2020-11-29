const categories = [{
  _id: '5fa98d8bffb9db0e1b903c38',
  name: 'tipo restaurante',
  state: 'active',
  company: '5a5e068d81ebf1002516af18',
  type: 'structure'
}]

const tagsData = [
  {
    _id: '5faac7dad69bc0da9a559aaa',
    name: 'A',
    categoryId: {
      _id: '5fa98d8bffb9db0e1b903c38',
      name: 'tipo restaurante',
      state: 'active',
      company: '5a5e068d81ebf1002516af18',
      type: 'structure',
      id: '5fa98d8bffb9db0e1b903c38'
    },
    state: 'active',
    company: '5a5e068d81ebf1002516af18',
    createdAt: '2020-11-10T17:03:22.145Z',
    updatedAt: '2020-11-10T17:03:22.145Z',
    __v: 0,
    id: '5faac7dad69bc0da9a559aaa'
  }
]
module.exports = { categories, tagsData }
