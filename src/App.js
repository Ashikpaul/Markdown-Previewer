import { useState } from "react";
import "./styles.css";
import marked from "marked";

const initialText = `
  This is a paragraph

  **This is Bold Text**

  >Block Quotes!!!!

  # Heading 1
  ## Heading 2

  - list item 1
  - list item 2

  [A sample link](https://google.com)

  This is a inline \`<div></div>\`

  This is a block of code

  \`\`\`
    let x = 1;
    let y = 2;
    let z =  x + y;
  \`\`\`

  An image
  ![Coding Image](https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)
`;

export default function App() {
  const [text, setText] = useState(()=>initialText);

  const onHandleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="text-center m-4">Convert your Markdown</h1>
      <div className="row">
        <div className="col-6">
          <h4 className="text-center">Enter your markdown</h4>
          <textarea className="p-2 form-control" id="editor" value={text}
          onChange={onHandleChange}/>
        </div>
        <div className="col-6" id="preview">
          <h4 className="text-center">See the result</h4>
          <div className="p-2 previewSection rounded" 
            dangerouslySetInnerHTML={{__html : marked(text, { breaks: true })}}>
           
          </div>
        </div>
      </div>
    </div>
  );
}
