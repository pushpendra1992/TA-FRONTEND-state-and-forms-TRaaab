import React from 'react';
import ReactDOM from 'react-dom';
import App, {NewApp} from './components/App';
import './stylesheets/style.css';

function CreatedUi() {
  return <>
    <App/>
    <NewApp/>
  </>
}

ReactDOM.render(<CreatedUi/>,document.getElementById('root'));

