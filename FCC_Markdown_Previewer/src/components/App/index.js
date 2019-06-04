import React from "react";
import Editor from "../Editor";
import Preview from "../Preview";

let initialText = `
# Hi!

## Welcome to my React previewer
		
Heres some code, \`<div></div>\`, between 2 backticks.
		
\`\`\`
// this is multi-line code:
		
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
	return multiLineCode;
  }
}
\`\`\`
		
You can also make text **bold**
Or _italic_.
Or **_both!_**
And  ~~cross stuff out~~ if you want to.
		
There's also [links](https://codepen.io/bmansk14/), and
> Block Quotes
		
- And of course there are lists.
  - Some are bulleted.
	 - With different indentation levels.
		- That look like this.
		
		
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
		
![React Logo w/ Text](https://goo.gl/Umyytc)
		
`;

var md = require("markdown-it")({
	breaks: true
});
class App extends React.Component {
	state = {
		markdown: initialText,
		renderedHtml: md.render(initialText)
	};

	grabMarkdown = e => {
		this.setState(
			{ markdown: e.target.value },
			this.renderMarkdown(e.target.value)
		);
	};
	renderMarkdown = text => {
		let result = md.render(text);
		this.setState({ renderedHtml: result });
	};

	render() {
		return (
			<div className="App">
				<Editor
					markdown={this.state.markdown}
					captureMarkdown={this.grabMarkdown}
					clearText={this.clearText}
				/>
				<Preview renderedHtml={this.state.renderedHtml} />
			</div>
		);
	}
}
export default App;
