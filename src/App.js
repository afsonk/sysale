import 'normalize.css'
import './style.scss'
import {Container} from "./components/shared"
import {Item} from "./components/Item/Item"
import {ItemsList} from "./components/shared/ItemsList"

function App() {
  return (
    <div className="App">
        <Container>
            <ItemsList>
                <Item/>
                <Item/>
                <Item/>
            </ItemsList>
        </Container>
    </div>
  )
}

export default App
