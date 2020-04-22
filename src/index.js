import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import ApiService from './services/api-service';
import { ApiServiceProvider } from './components/api-service-context';
import store from './store';

const apiService = new ApiService();

ReactDOM.render(
    <Provider store={store}>
      <ApiServiceProvider value={apiService}>
        <App/>
      </ApiServiceProvider>
    </Provider>,
  document.getElementById('root')
);
