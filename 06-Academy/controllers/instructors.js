const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')
const Intl = require('intl')

exports.index = (req, res) => {
  return res.render('instructors/index', { instructors: data.instructors })
}

exports.create = (req, res) => {
  return res.render('instructors/create')
}

exports.post = (req, res) => {

  let { avatar_url, name, birthday, gender, modality } = req.body
  
  birthday = Date.parse(req.body.birthday)
  const id = Number(data.instructors.length + 1)
  const created_at = Date.now()

  data.instructors.push({
    id,
    avatar_url,
    name,
    birthday,
    gender,
    modality,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if(err) return res.send('Write file error')
    return res.redirect('/instructors')
  })

}

exports.show = (req, res) => {
  const { id } = req.params
  const foundInstructor = data.instructors.find(function(instructor) {
    return instructor.id == id
  })
  if(!foundInstructor) return res.send('Instructor not found!')

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birthday),
    modality: foundInstructor.modality.split(','),
    created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at),
  }

  return res.render('instructors/show', { instructor })
}

exports.edit = (req, res) => {
  const { id } = req.params
  const foundInstructor = data.instructors.find(function(instructor) {
    return instructor.id == id
  })
  if(!foundInstructor) return res.send('Instructor not found!')

  const instructor = {
    ...foundInstructor,
    birthday: date(foundInstructor.birthday).iso
  }

  date(foundInstructor.birthday)

  return res.render('instructors/edit', { instructor })
}

exports.put = (req, res) => {
  const { id } = req.body

  let index = 0
  const foundInstructor = data.instructors.find(function(instructor, foundIndex) {
    if (id == instructor.id) {
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

  data.instructors[index] = intructor

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send('Write error!')
    return res.redirect(`/instructors/${id}`)
  })
}

exports.delete = (req, res) => {
  const { id } = req.body

  const filteredInstructors = data.instructors.filter(function(instructor) {
    return instructor.id != id
  })

  data.instructors = filteredInstructors

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) return res.send('Write file error!')
    return res.redirect('/instructors')
  })
}