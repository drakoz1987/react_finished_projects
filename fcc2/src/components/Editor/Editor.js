import React, { Component } from "react";

//handle line breaks
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

class Editor extends Component {
	state = {
		grabbedText: "",
		convertedText: ""
	};

	initialParse(string) {
		const renderer = new marked.Renderer();
		renderer.link = (href, title, text) => {
			return `<a target="_blank" href="${href}">${text}` + "</a>";
		};
		return marked(string, { renderer: renderer });
	}
	componentDidMount() {
		this.setState({
			grabbedText: initialText,
			convertedText: this.initialParse(initialText)
		});
	}
	createMarkup = () => {
		return { __html: this.state.convertedText };
	};
	grabAndConvert = event => {
		this.setState({
			grabbedText: event.target.value,
			convertedText: marked(event.target.value)
		});
	};
	render(props) {
		return (
			<div>
				<div className="text-container">
					<textarea
						onChange={this.grabAndConvert}
						id="editor"
						placeholder="Type your markdown Here!"
						value={this.state.grabbedText}
						rows="10"
						cols="120"
						type="text"
					/>
				</div>
				<div className="preview-container">
					<div
						id="preview"
						title="preview"
						dangerouslySetInnerHTML={this.createMarkup()}
					/>
				</div>
			</div>
		);
	}
}

export default Editor;
