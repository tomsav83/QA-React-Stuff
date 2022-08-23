import Villians from './Villians'

const MyComponent = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Hello World</h2>
        <h2>This is a React App</h2>
        <br />
        <br />
        <>
          <Villians
            header='Idiot'
            content='Boris'
            number={60}
            nonexistent='Twit'
          />
          <Villians
            header='Sir'
            content='Buster'
            number={5}
            nonexistent='Cat'
          />
        </>
      </header>
    </div>
  )
}

export default MyComponent
