import './App.css';
import { WantedCardCollection, WantedBar, WantedFooter } from './ui-components'

function App() {
  return (
    <div className="App">
      <WantedBar width={"100vw"} minWidth="1360px"/>
      <WantedCardCollection isPaginated itemsPerPage={8}/>
      <WantedFooter width={"100vw"} minWidth="1360px"/>
    </div>
  );
}

export default App;
