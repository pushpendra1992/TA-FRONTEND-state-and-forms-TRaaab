import React from "react";

class ImageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  imageChanger = (imgUrl) => {
    this.setState({
      url: imgUrl,
    });
  };

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.imageChanger("/img/basketball.jpg");
            }}
          >
            Basketball
          </button>
          <button
            onClick={() => {
              this.imageChanger("/img/cricket.jpeg");
            }}
          >
            Cricket
          </button>
          <button
            onClick={() => {
              this.imageChanger("/img/laptop.jpg");
            }}
          >
            Laptop
          </button>
          <button
            onClick={() => {
              this.imageChanger("/img/phone.jpg");
            }}
          >
            Phone
          </button>
          <button
            onClick={() => {
              this.imageChanger("/img/pubg.jpeg");
            }}
          >
            Pubg
          </button>
          <button
            onClick={() => {
              this.imageChanger("/img/tiger.jpg");
            }}
          >
            Tiger
          </button>
        </div>
        <div>
          <img src={this.state.url} alt="  Clickk on button to get img." />
        </div>
      </div>
    );
  }
}

export default ImageBox;
