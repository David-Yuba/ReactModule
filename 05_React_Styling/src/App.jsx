import Card from "./components/Card"
import CardModule from "./components/CardModule"
import CardStyledComponents from "./components/CardStyledComponents"

function App() {

  return (
    <> 
      <h2>Obični CSS</h2>
      <Card/>
      <div className="card">
        <h2>Neki naslov</h2>
      </div>
      <hr/>
      <h2>CSS module</h2>
      <CardModule/>
      <hr/>
      <h2>Styled Components</h2>
      <CardStyledComponents/>
    </>
  )
}

export default App
