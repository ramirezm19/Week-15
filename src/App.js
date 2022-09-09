import React, { Component} from 'react';
import { HousesList } from './components/HousesList';

class App extends Component {
  render () {
    return(
      <div className='App'>
        {/* will have a HousesList with the props data */}
        <header>
          <h1>Design Your Own CRUD Neighborhood</h1>
        </header>
        <main>
          <HousesList />
        </main>
      </div>
    )
  }
}

export default App;