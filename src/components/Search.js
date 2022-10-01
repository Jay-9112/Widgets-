import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [input, setInput] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function search() {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: input,
        },
      });
      setResults(data.query.search);
    }

    if (input && !results) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (input) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [input]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={"https://en.wikipedia.org?curid=" + result.pageid}
          >
            GO
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
          <label>Enter Search Term </label>
          <input
            className="input"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
      </div>

      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
 
