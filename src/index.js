import React from 'react';
import ReactDOM from 'react-dom';
import App from '/containers/App';
import GlobalStyles from 'styles/globals';
import registerServiceWorker from 'utils/registerServiceWorker';

const renderApp = () => {
    ReactDOM.render(
        <div>
            <GlobalStyles/>
            <App/>
        </div>,
        document.getElementById('root'),
    );
};

renderApp();
registerServiceWorker();