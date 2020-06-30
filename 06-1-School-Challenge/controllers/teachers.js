const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')

exports.index = (req, res) => {
  return res.render('teachers/index', { teachers: data.teachers })
}

exports.create = (req, res) => {
  return res.render('teachers/create')
}

exports.post = (req, res) => {
  let {
    avatar_url,
    name,
    age,
    scholarity,
    typeclass,
    ocupations
  } = req.body

  const id = Number(data.teachers.length + 1)
  const created_at = Date.now()

  data.teachers.push({
    id,
    avatar_url,
    name,
    age,
    scholarity,
    typeclass,
    ocupations,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
    if(err) return res.send('Write file error!')
    return res.redirect('/teachers')
  })
  
}

exports.show = (req, res) => {
  const { id } = req.params
  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id
  })
  if(!foundTeacher) return res.send('Teacher not found!')
  const teacher = {
    ...foundTeacher,
    ocupations: foundTeacher.ocupations.split(','),
    created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
  }
  return res.render('teachers/show', { teacher })
}

exports.edit = (req, res) => {
  const { id } = req.params
  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id
  })
  if(!foundTeacher) return res.send('Teacher not found!')
  return res.render('teachers/edit', { teacher: foundTeacher})
}

exports.put = (req, res) => {
  const { id } = req.body
  let index = 0
  const foudTeacher = data.teachers.find(function(teacher, foundIndex) {
    if (id == teacher.id) {
      index = foundIndex
      return true
    }
  })

  if (!foudTeacher) return res.send('Teacher not found!')

  const teacher = {
    ...foudTeacher,
    ...req.body,
    id: Number(req.body.id)
  }

  data.teachers[index] = teacher

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Write error file!')
    return res.redirect(`/teachers`)
  })
}

exports.delete = (req, res) => {
  const { id } = req.body

  const teacherFiltered = data.teachers.filter(function(teacher){
    return teacher.id != id
  })

  data.teachers = teacherFiltered

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
    if(err) return res.send('Erro on write file!')
    return res.redirect('/teachers')
  })
}