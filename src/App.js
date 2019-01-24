import React from 'react'
import Card from './components/Card'
import './App.css'

export default class App extends React.Component {
  state = {
    data: [],
    audio: ''
  }

  componentDidMount() {
    fetch('http://fbdev.khmercoders.co/music.json')
      .then(res =>  res.json())
      .then(data => {
        this.setState({data})
      })
      .catch(err => console.log(err))
  }

  render(){

    const playlist = this.state.data.map((e, index) => {
      return(
        <Card 
          title = {e.title}
          image = {e.image}
          key={index}
          onPlay={()=>{
            this.setState({
              audio: e.path
            })
          }}
        />
      )
    })

    return(
      <div className="container">
        <h3>Hello World</h3>
        <audio src={this.state.audio} controls autoPlay/>
        <div className="playlist">
          {playlist}
        </div>
      </div>
    )
  }
}
