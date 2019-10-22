import React, { Component } from "react";
import axios from "axios";
import { format } from "util";

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: [],
    index: ""
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndexes: seenIndexes.data });
  }

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(",");
  }

  renderValues() {
    const entries = this.state.values.map((value, key) => {
      return (
        <div key={key}>
          For Index {key} I calculated {this.state.value}
        </div>
      );
    });
    return entries;
  }

  handleSubmit = async event => {
    event.preventDefault();
    await axios.post("/api/values", {
      index: this.state.index
    });
    this.setState({ index: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index</label>
          <input
            type="text"
            value={this.state.index}
            onChange={event => this.setState({ index: event.target.value })}
          />
          <button type="submit">Submit</button>
        </form>

        <h3>Indexes I have seen</h3>
        {this.renderSeenIndexes}
        <h3>Calculated values:</h3>

        {this.renderValues}
      </div>
    );
  }
}

export default Fib;
