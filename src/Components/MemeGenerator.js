import React from "react";
import styled from "styled-components";
import MemeBox from "./Meme";

const Tag = styled.h2`
  text-align: center;
`;

const Container = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 20px auto;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  height: 40px;
  width: 200px;
  font-family: VT323, monospace;
  font-size: 25px;
  letter-spacing: 1.5px;
  color: white;
  background: #0095ff;
  margin-bottom: 10px;
`;

const Input = styled.input`
  type: text;
  width: 45%;
  height: 40px;
  font-family: VT323, monospace;
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;
`;

const Upload = styled.input`
  name: "selectedFile";
`;

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/345v97.jpg",
      tags: "Woman Yelling At Cat",
      allMemeImgs: [],
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.genMeme = this.genMeme.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes
        });
      });
  }

  uploadImage(event) {
    this.setState({
      randomImg: URL.createObjectURL(event.target.files[0])
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  genMeme(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    const randtags = this.state.allMemeImgs[randNum].name;
    this.setState({ randomImg: randMemeImg, tags: randtags });
  }

  onChange(e) {
    var files = e.target.files;
    const image = files[0];

    this.props.onImageAdd(image);
  }

  onUploadedOcrSelected(i) {
    if (this.props.onSelect) {
      this.props.onSelect(i);
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.genMeme}>
          <Input
            type="text"
            placeholder="Top Text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <Button>Random Meme</Button>
          <Upload
            type="file"
            placeholder="Upload Image"
            onChange={this.uploadImage}
          />
        </Form>

        <Container>
          <Tag>Meme Name: {this.state.tags}</Tag>
        </Container>
        <MemeBox
          image={this.state.randomImg}
          top_text={this.state.topText}
          buttom_text={this.state.bottomText}
        />
      </Container>
    );
  }
}

export default MemeGenerator;
