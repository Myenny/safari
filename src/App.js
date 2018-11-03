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
        this.setState({ SeenAnimals })
      })
  }
  render() {
    return (
      <div className="App">
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" color="dark">
            {' '}
            Jungle
          </NavbarBrand>
        </Navbar>
        <ul>
          {this.state.SeenAnimals.map(animal => {
            return (
              <li>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>
                      {animal.species} {animal.countOfTimesSeen}{' '}
                      {animal.locationOfLastSeen}
                    </CardTitle>
                  </CardBody>
                </Card>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
