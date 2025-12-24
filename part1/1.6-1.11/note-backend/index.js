const express = require('express')
const app = express()
const cors = require('cors')

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(express.static('dist'))
app.use(express.json())
app.use(requestLogger)
app.use(cors())


let notes = [
    {
      "id": "1",
      "content": "HTML is easy",
      "important": false
    },
    {
      "id": "2",
      "content": "Browser can execute only JavaScript",
      "important": false
    },
    {
      "id": "3",
      "content": "GET and POST are the most important methods of HTTP protocol",
      "important": false
    },
    {
      "id": "4",
      "content": "Rajat",
      "important": false
    },
    {
      "id": "7a47",
      "content": "Panwar",
      "important": false
    },
    {
      "id": "60ca",
      "content": "jn",
      "important": false
    }
  ]


app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  const note = notes.find(note => note.id === id)
  
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

app.post('/api/notes', (request, response) => {
  const note = request.body

  if (!note || !note.content) {
    return response.status(400).json({
      error: 'note content is missing'
    })
  }

  const ids = notes.map(note => parseInt(note.id)).filter(id => !isNaN(id))
  const maxId = ids.length > 0 ? Math.max(...ids) : 0

  const newNote = {
    id: (maxId + 1).toString(),
    content: note.content,
    important: note.important || false
  }

  notes = notes.concat(newNote)
  response.status(201).json(newNote)
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})