import React, { Component } from 'react'
import './App.css'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Navbar,
  NavbarBrand
} from 'reactstrap'

class App extends Component {
  state = {
    SeenAnimals: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/SafariVacation/')
      .then(resp => resp.json())
      .then(SeenAnimals => {
        console.log(SeenAnimals)
        this.setState({ SeenAnimals })
      })
  }
  render() {
    return (
      <ul>
        {this.state.SeenAnimals.map(animal => (
          <li>
            <Card>
              <CardBody>
                <CardTitle> Animal Name: {animal.species}</CardTitle>
                <CardSubtitle>
                  Location:
                  {animal.locationOfLastSeen}
                </CardSubtitle>
                <CardSubtitle>
                  Times Seen:
                  {animal.countOfTimesSeen}
                </CardSubtitle>
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    )
  }
}

export default App
