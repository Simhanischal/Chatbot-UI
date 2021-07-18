import './App.css';
import { StylesProvider } from '@material-ui/core/styles';
import ChatBot from './Components/ChatBot';

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <ChatBot />
      </StylesProvider>
    </div>
  );
}

export default App;
