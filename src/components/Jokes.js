import React, { Component } from 'react'
import { Bootstrap } from 'bootstrap/dist/css/bootstrap.css';

export default class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: {}
        }
    }

    componentWillMount() {
        console.log('Jokes mounted')
        fetch("https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw")
        .then(res => res.json())
        .then(data =>  this.setState({joke:data}));
    }
  render() {
      const joke = (
      <div>
      <hr />
      <h1>Random Joke</h1>
      <p><i>(this is without redux)</i></p>
      <i>{this.state.joke.setup}</i><br /><br />
      <b>{this.state.joke.delivery}</b>
      </div>
      )
    return (
      <div>
          {joke}
      </div>
    )
  }
}
