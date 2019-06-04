import React, {Component} from 'react';
import './ImageCard.css';

class ImageCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            spans:0
        };
        //Ref allows the dev to access the elements in the DOM ReactJS Style!!!
        this.imageRef = React.createRef();
    }
    //Because the unsplash API provides me with the height and the width of the image as a parameter, i can solve the situation with a conditional in the render method, but if the situation were different then i would have to use the ref system as follows

    componentDidMount(){
        //An event listener is created to wait until the image is loaded ang get the data from it after, to avoid issues when doing it in a different way.
        this.imageRef.current.addEventListener('load',this.setSpans);
    }
    setSpans = () => {
        //this formula allows the creation of the number of spans needed to make the grid
        const spans = Math.ceil(this.imageRef.current.clientHeight / 10 + 1);
        //we change the size of the row in the css to make the grid a little more compact
        this.setState({spans:spans});
    };

    render() {
        const {description, urls,id,height,width} = this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}} >
                <img ref={this.imageRef} src={urls.regular} key={id} alt={description} />
            </div>
        )
    }
}

export default ImageCard;