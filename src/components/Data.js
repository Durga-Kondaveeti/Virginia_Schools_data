import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../style/data.css';
import excel from '../data.csv';
import searchIcon from '../images/search_icon.svg';
function Data() {
  const [data, setData] = useState([]);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(excel);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const results = Papa.parse(csv, { header: true, skipEmptyLines: true });
      setData(results.data);
    }
    fetchData();
  }, []);

  const rows = [];
  for (let i = 0; i < data.length; i += 3) {
    rows.push(data.slice(i, i + 3));
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="search-container">
  <input
    type="text"
    placeholder="Search for a school..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <img src={searchIcon} alt="Search Icon" className="search-icon"  />
</div>

        <div className='flex_center'>
          <h1>Virginia Beach Schools</h1>
        </div>
        <div className='text-header'>
          <p>Welcome to the Virginia Beach Schools data portal. Here you can find the basic details about each school, and more information by hovering over the names.</p>
        </div>
      </header>

      <div className="data-container">
        {rows
          .filter((rowGroup) =>
            rowGroup.some((row) =>
              row.SCHOOL.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
          .map((rowGroup, rowIndex) => (
            <div key={rowIndex} className="row">
              {rowGroup.map((row, index) => (
                <div
                  key={index}
                  className="data-box"
                  onMouseEnter={() => setHoveredRow(row)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  {hoveredRow !== row ? (
                    <div className='box-details'>
                      <strong> {row.L_CRNT_OWN}</strong> <br /><br />
                      <strong>Address:</strong> {row.ADDRESS},{row.PLN_AREA},{row.L_MAIL_CIT}<br /><br />
                      <strong>ZIP code:</strong>{row.L_MAIL_ZIP}
                    </div>
                  ) : (
                    <div className="hovered-details">
                      <strong>{row.L_CRNT_OWN}</strong><br />
                      Open Date: {row.OpenDate}<br />
                      LEED: {row.LEED}<br />
                      Shelter: {row.SHELTER}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Data;
