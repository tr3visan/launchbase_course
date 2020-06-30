const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')
const Intl = require('intl')


exports.index = (req, res) => {
  return res.render('members/index', { members: data.members })
}

exports.create = (req, res) => {
  return res.render('members/create')
}

exports.post = (req, res) => {
  
  birthday = Date.parse(req.body.birthday)

  const lastMember = data.members[data.members.length -1]
  let id = 1
  if(lastMember) {
    id = lastMember.id + 1
  }

  const created_at = Date.now()

  data.members.push({
    id,
    ...req.body,
    birthday,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if(err) return res.send('Write file error')
    return res.redirect('/members')
  })

}

exports.show = (req, res) => {
  const { id } = req.params
  const foundInstructor = data.members.find(function(member) {
    return member.id == id
  })
  if(!foundInstructor) return res.send('Instructor not found!')

  let bloodFormated = null
  if(foundInstructor.blood.includes('0'))
    bloodFormated = foundInstructor.blood.replace('0', ' -')
  if(foundInstructor.blood.includes('1'))
    bloodFormated = foundInstructor.blood.replace('1', ' +')

  const member = {
    ...foundInstructor,
    age: age(foundInstructor.birthday),
    birthday: date(foundInstructor.birthday).birthDay,
    blood: bloodFormated,
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at),
  }

  return res.render('members/show', { member })
}

exports.edit = (req, res) => {
  const { id } = req.params
  const foundInstructor = data.members.find(function(member) {
    return member.id == id
  })
  if(!foundInstructor) return res.send('Instructor not found!')

  const member = {
    ...foundInstructor,
    birthday: date(foundInstructor.birthday).iso
  }

  date(foundInstructor.birthday)

  return res.render('members/edit', { member })
}

exports.put = (req, res) => {
  const { id } = req.body

  let index = 0
  const foundInstructor = data.members.find(function(member, foundIndex) {
    if (id == member.id) {
      index = foundIndex
      return true
    }
  })

  if(!foundInstructor) return res.send('Instructor not found!')

  const intructor = {
    ...foundInstructor,
    ...req.body,
    birthday: Date.parse(req.body.birthday),
    id: Number(req.body.id)
  }

  data.members[index] = intructor

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send('Write error!')
    return res.redirect(`/members/${id}`)
  })
}

exports.delete = (req, res) => {
  const { id } = req.body

  const filteredInstructors = data.members.filter(function(member) {
    return member.id != id
  })

  data.members = filteredInstructors

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send('Write file error!')
    return res.redirect('/members')
  })
}