import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("javascript");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // Second argument:
  // 1. [] -----> Run at initial render
  // 2. (Nothing) ------> Run at initial render; and after every rerender
  // 3. [term] -----> Run at initial render; run after every rerender if the term has changed
  // since the last render

  // this useEffect watches the changes of "term".
  // if the "term" hasn't changed for 1 second, debounced term gets updated
  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedTerm(term), 1000);
    return () => clearTimeout(timerId);
  }, [term]);

  // this useEffect watched the changes of "debouncedTerm".
  // Once debounced term changes (first useEffect function) and on initial renderof the component,
  // I call the API, and render the results
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
