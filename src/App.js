import { Component } from 'react';
import { fetchData } from './api';
import './App.css';
import { AbvFilter, Chart, DatePicker } from './components';

class App extends Component {

  // async componentDidMount() {
  //   const data = await fetchData();
  //   console.log(data)
  // }

  render() {
    return (
      <div>
        <DatePicker />
        <AbvFilter />
        <Chart />
      </div>
    )
  }
}

export default App;
