import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("javascript");
  const [results, setResults] = useState([]);

  // Second argument:
  // 1. [] -----> Run at initial render
  // 2. (Nothing) ------> Run at initial render; and after every rerender
  // 3. [term] -----> Run at initial render; run after every rerender if the term has changed
  // since the last render
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    })();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
