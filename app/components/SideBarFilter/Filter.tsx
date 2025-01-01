'use client'
import React, { useState } from "react";
import './Filter.css'
import useMediaQuery from "../MediaQueryCutomHook";

const Filter = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [filterVisibility, setFilterVisibility] = useState(true);

  return (
    <>
      <aside>
        <button onClick={() => setFilterVisibility(!filterVisibility)}>
          {filterVisibility ? "Hide Filter" : "Show Filter"}
        </button>
        
        {isSmallScreen ? (
          <details>
            <summary>Filter</summary>
            <div>
              <div className="filter-divison">
                <h2>Idea For</h2>
                <p>All</p>
                <button>unselect all</button>
                <div>
                  <input type="checkbox" /> <label htmlFor="">Men</label>
                </div>
                <div>
                  <input type="checkbox" /> <label htmlFor="">Women</label>
                </div>
              </div>

              <hr />
              <div className="filter-divison">
                <h2>Jewelery</h2>
                <p>All</p>
                <button>unselect all</button>
                <div>
                  <input type="checkbox" /> <label htmlFor="">Men</label>
                </div>
                <div>
                  <input type="checkbox" /> <label htmlFor="">Women</label>
                </div>
              </div>

              <hr />
              <div className="filter-divison">
                <h2>Electronics</h2>
                <p>All</p>
                <button>unselect all</button>
                <div>
                  <input type="checkbox" /> <label htmlFor="">TV</label>
                </div>
                <div>
                  <input type="checkbox" /> <label htmlFor="">Sandisk</label>
                </div>
              </div>
            </div>
          </details>
        ) : (
          filterVisibility && (
            <>
              <div className="filter-divison">
                <h2>Idea For</h2>
                <p>All</p>
                <button>unselect all</button>
                <div>
                  <input type="checkbox" /> <label htmlFor="">Men</label>
                </div>
                <div>
                  <input type="checkbox" /> <label htmlFor="">Women</label>
                </div>
              </div>

              <hr />
              <div className="filter-divison">
                <h2>Jewelery</h2>
                <p>All</p>
                <button>unselect all</button>
                <div>
                  <input type="checkbox" /> <label htmlFor="">Men</label>
                </div>
                <div>
                  <input type="checkbox" /> <label htmlFor="">Women</label>
                </div>
              </div>

              <hr />
              <div className="filter-divison">
                <h2>Electronics</h2>
                <p>All</p>
                <button>unselect all</button>
                <div>
                  <input type="checkbox" /> <label htmlFor="">TV</label>
                </div>
                <div>
                  <input type="checkbox" /> <label htmlFor="">Sandisk</label>
                </div>
              </div>
            </>
          )
        )}
      </aside>
    </>
  );
};

export default Filter;
