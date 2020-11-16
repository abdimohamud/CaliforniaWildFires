import React, {useState} from 'react'
import data from './caliFiresIncident'


import Dashboard from './components/Dashboard'
import Fire from './components/Fire'

import './sass/App.scss';




function App() {
  const [filter, setFilter] =useState(2013)
  const[dataset, setDataset] = useState(data)
  console.log(dataset)
  

  return (
    <div className="App">
      <Dashboard setFilter={setFilter}/>
      {dataset.filter((fire) => fire.ArchiveYear == filter).map(fire => (
				<Fire
					key={fire.UniqueId}
					fire={fire}
					
        />
      ))}
    </div>
  );
}

export default App;
