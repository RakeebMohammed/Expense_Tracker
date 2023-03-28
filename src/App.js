import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header'
import History from './Components/History';
import Income from './Components/Income';


import './Components/style.css'
import { GlobalProvider } from './GlobalStates/GlobalState';

function App() {
  return (<div>
 <GlobalProvider>
   <Header/>
   <div className="container">
    <Balance/>
    <Income/>
    <History/>
    <AddTransaction/>
   </div>
   
   </GlobalProvider>
   </div>
  );
}

export default App;
