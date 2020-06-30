const fs = require('fs')
const data = require('../data.json')
const Intl = require('intl')

exports.index = (req, res) => {
  return res.render('students/index', { students: data.students })
}

exports.create = (req, res) => {
  return res.render('students/create')
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

  const id = Number(data.students.length + 1)
  const created_at = Date.now()

  data.students.push({
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
    return res.redirect('/students')
  })
  
}

exports.show = (req, res) => {
  const { id } = req.params
  const foundStudent = data.students.find(function(student) {
    return student.id == id
  })
  if(!foundStudent) return res.send('Student not found!')
  const student = {
    ...foundStudent,
    ocupations: foundStudent.ocupations.split(','),
    created_at: new Intl.DateTimeFormat('pt-BR').format(foundStudent.created_at)
  }
  return res.render('students/show', { student })
}

exports.edit = (req, res) => {
  const { id } = req.params
  const foundStudent = data.students.find(function(student) {
    return student.id == id
  })
  if(!foundStudent) return res.send('Student not found!')
  return res.render('students/edit', { student: foundStudent})
}

exports.put = (req, res) => {
  const { id } = req.body
  let index = 0
  const foudStudent = data.students.find(function(student, foundIndex) {
    if (id == student.id) {
      index = foundIndex
      return true
    }
  })

  if (!foudStudent) return res.send('Student not found!')

  const student = {
    ...foudStudent,
    ...req.body,
    id: Number(req.body.id)
  }

  data.students[index] = student

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Write error file!')
    return res.redirect(`/students`)
  })
}

exports.delete = (req, res) => {
  const { id } = req.body

  const studentFiltered = data.students.filter(function(student){
    return student.id != id
  })

  data.students = studentFiltered

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
    if(err) return res.send('Erro on write file!')
    return res.redirect('/students')
  })
}