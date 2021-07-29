import { render } from 'react-dom';
import { Root } from './Root';


const renderApp = () => {
  render(<Root />,
    document.getElementById('root'),
  );
};

renderApp();