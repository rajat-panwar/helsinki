const Header = ({ course }) => {
  return <h1>{course}</h1>;
}

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
} 

const Content = ({ exercises }) =>{
  return (
    <div>
      {exercises.map((item) => (
        <Part key={item.id} part={item.part} exercise={item.exercise} />
      ))}
    </div>
  )
}

const Total = ({ total }) => {
  return (
    <p>Number of exercises -  {total} </p>
  ) 
}

function App() {
  const course = 'Half Stack application development.'
  const exercises = [
    {part: 'Fundamentals of React', exercise: 10, id: 1 },
    {part: 'Using props to pass data', exercise: 7, id: 2 },
    {part: 'State of a component', exercise: 14, id: 3 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises}  />
      <Total total={exercises.reduce((sum, item) => sum + item.exercise, 0)} />
    </div>)
}

export default App
