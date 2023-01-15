import {EventProvider} from "./context/Event";
import {Box} from '@mui/material'
import Componets from "./organisms/Componets";

function App() {
  return (
    <EventProvider>
      <Componets/>
    </EventProvider>
      
   
    
  );
}

export default App;
