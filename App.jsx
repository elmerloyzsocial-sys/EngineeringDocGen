import React, { useState, useEffect } from "react";

const API = "http://localhost:4000";

function App() {
  const [docTypes, setDocTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [template, setTemplate] = useState([]);
  const [sectionIdx, setSectionIdx] = useState(0);
  const [sections, setSections] = useState([]);
  const [input, setInput] = useState("");
  const [compiledDoc, setCompiledDoc] = useState("");

  useEffect(() => {
    fetch(`${API}/templates`).then(res => res.json()).then(setDocTypes);
  }, []);

  useEffect(() => {
    if (selectedType) {
      fetch(`${API}/template/${encodeURIComponent(selectedType)}`)
        .then(res => res.json())
        .then(setTemplate);
      setSectionIdx(0);
      setSections([]);
      setInput("");
      setCompiledDoc("");
    }
  }, [selectedType]);

  const handleNext = () => {
    setSections([...sections, { section: template[sectionIdx].section, content: input }]);
    setInput("");
    if (sectionIdx + 1 < template.length) {
      setSectionIdx(sectionIdx + 1);
    } else {
      // Compile
      fetch(`${API}/compile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: selectedType, sections: [...sections, { section: template[sectionIdx].section, content: input }] })
      })
        .then(res => res.json())
        .then(data => setCompiledDoc(data.document));
    }
  };

  if (compiledDoc) {
    return (
      <div>
        <h2>Compiled Document</h2>
        <pre>{compiledDoc}</pre>
        <button onClick={() => setSelectedType("")}>Start Again</button>
      </div>
    );
  }

  if (!selectedType) {
    return (
      <div>
        <h1>Create Engineering Document</h1>
        <label>Choose document type:</label>
        <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
          <option value="">Select</option>
          {docTypes.map(type => <option key={type} value={type}>{type}</option>)}
        </select>
      </div>
    );
  }

  if (template.length && sectionIdx < template.length) {
    return (
      <div>
        <h2>{selectedType}</h2>
        <label>{template[sectionIdx].prompt}</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={4}
          cols={60}
        />
        <br />
        <button onClick={handleNext}>Next</button>
      </div>
    );
  }

  return <div>Loading...</div>;
}

export default App;
