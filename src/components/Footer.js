import React from "react";

// import "./App.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoading: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoading, items } = this.state;
    // console.log("item", items[0]);
    const randomItem = Math.floor(Math.random() * items.length);
    console.log("random", items[randomItem]);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="footer__content">
          <p>"{items[0].text}"</p>
          <h5>-{items[0].author}</h5>
        </div>
      );
    }
  }
}
