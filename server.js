const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Example templates
const templates = {
  "Technical Report": [
    { section: "Title", prompt: "Enter the title of the report:" },
    { section: "Abstract", prompt: "Write a brief summary (abstract):" },
    { section: "Introduction", prompt: "Describe the background and objectives:" },
    { section: "Methodology", prompt: "Explain the methods used:" },
    { section: "Results", prompt: "Summarize the results found:" },
    { section: "Discussion", prompt: "Discuss the implications:" },
    { section: "Conclusion", prompt: "Provide the conclusion:" },
    { section: "References", prompt: "List references:" }
  ],
  "Specification": [
    { section: "Title", prompt: "Enter the specification title:" },
    { section: "Scope", prompt: "Define the scope:" },
    { section: "Requirements", prompt: "List requirements:" },
    { section: "Design", prompt: "Describe the design:" },
    { section: "Testing", prompt: "Describe testing procedures:" }
  ]
};

app.get('/templates', (req, res) => {
  res.json(Object.keys(templates));
});

app.get('/template/:type', (req, res) => {
  const type = req.params.type;
  res.json(templates[type] || []);
});

app.post('/compile', (req, res) => {
  const { type, sections } = req.body;
  let output = `# ${type}\n\n`;
  sections.forEach(({ section, content }) => {
    output += `## ${section}\n${content}\n\n`;
  });
  res.json({ document: output });
});

app.listen(4000, () => console.log('Server running on port 4000'));
