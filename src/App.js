import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import axios from 'axios'
import Datatable from './components/datatable'
import Pagination from './components/Pagination'

require("es6-promise").polyfill()
require("isomorphic-fetch")

function App() {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ dataPerPage ] = useState(5);

  const [ query, setQuery   ] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await
      //axios.get('https://swapi.dev/api/people/?page${pagenumber})');
      axios.get('https://swapi.dev/api/people/');

        setData(response.data.results);
        setLoading(false);
    }
    fetchData();
  }, []);
    //console.log(data)
   //"next": "https://swapi.dev/api/people/?page=2",
    //previous: null

 //get current pagedata
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData)
  //Change page data
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

function search(rows) {
  return rows.filter(row => row.name.toLowerCase().indexOf(query) > -1);
  }

  return (
    <div className="container">
      <Header />
      <br></br>
      <div className="ui icon input">
        <input
          type="text"
          value={query}
          style={{padding: '5px', margin: '5px'}}
          placeholder="Sök..."
          className="prompt"
          onChange={(e) => setQuery(e.target.value)}>
        </input>
        <i className="search icon"></i>
      </div>
      <div>
        <Datatable
          data={search(currentData)} 
          loading={loading}
        />
        <Pagination
          dataPerPage={dataPerPage}
          totalData={data.length}
          paginate={paginate}
        />
      </div>

    </div>
  );
}

export default App