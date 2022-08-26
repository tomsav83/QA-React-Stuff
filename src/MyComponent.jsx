import Villians from './Villians'

const MyComponent = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Props</h1>
        <br />
        <br />
        <>
          <Villians
            header='Idiot'
            content='Boris'
            number={60}
            nonexistent='Twit'
          />
          <br />
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
