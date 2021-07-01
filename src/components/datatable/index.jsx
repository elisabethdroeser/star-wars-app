import React, {useState} from 'react'


const myStyle = {
  backgroundColor: "#f4f4f4",
  margin: "5px",
  padding: "10px 20px",
}

function Datatable({ data, loading }) {
  const [show, setShow] = useState(true)
  if(loading) {
    return <h2>Laddar...</h2>
  }
  return (
    <div>
      <h2>Starwars Personer</h2>
      <ul className="list-group mb-4">
        {data.map(row => {
          return (
          <>
            <div>
              <section className="accordion">
               <section key={row.id} style={myStyle} className="list-group-item">
                   {/*<button onClick={() =>setShow(true)}>Show</button>
                  <button onClick={() =>setShow(false)}>Hide</button>*/}
                <label for="cb-1">{row.name}</label>
                <br />
                <button style={{border: '0px'}}onClick={() =>setShow(!show)}>Toggle</button>
                <br />
                <div>
                  {
                    show?<p>{row.birth_year}<br />{row.gender}</p>:null
                  }
                </div>

                </section>
              </section>
            </div>
          </>
          )
          })}
        </ul>
    </div>
  )
}

export default Datatable