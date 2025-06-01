import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import { DarkModeProvider } from './lib/providers/DarkMode.provider';

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;
