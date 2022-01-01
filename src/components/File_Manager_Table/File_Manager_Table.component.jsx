import React, { useState, useEffect } from "react";

// Styles Import
import "./File_Manager_Table.styles.css";

function Table() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);

  const serverUrl = "http://localhost:3000/";

  useEffect(() => {
      setTimeout(()=> {
        fetch(serverUrl)
        .then((res) => res.json())
        .then((data) => setData(data,setLoading(false)));
      }, 1500)
      
  }, []);

  return (
      <>
    {loading ? 
    <section className="Main-Loading-Section">
    <h3 className="Loading">Loading...</h3>
    </section>
      : 
    <section >
     <table className="Main-Table-Section">
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Client since</th>
            </tr>
     
        <>
            {data.map((user) => (
              <>
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.clientSince}</td>
                </tr>
              </>
            ))}
         
          </>
    
      </table>
    </section>
      }
      </>
  );
}

export default Table;
