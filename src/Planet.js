import React, { useState, useEffect, } from 'react';
import axios from 'axios'
import { Segment, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Planet extends React.Component {
  state = {planet: {}}

  componentDidMount () {
    axios.get(`https://swapi.co/api/planets/?search=${this.props.name}`).then( res => {
     this.setState({planet: res.data.results[0]})
     console.log(res.data.results[0])
    })
  } 

  render() {
    return(
    <>
    <Segment>
      <Header as='h1'>
        {this.state.planet.name}
      </Header>
    </Segment>
    <Segment style={{display: 'flex', justifyContent: 'space-around'}}>
      <div style={{width: '25%', display: 'inline-block', margin: '0 auto'}}>
      <Header as='h3' >
        Climate: {this.state.planet.climate}
      </Header>
      </div>
      <div style={{width: '25%', display: 'inline-block', margin: '0 auto'}}>

      <Header as='h3'>
        Population: {this.state.planet.population}
      </Header>

      </div>
      <div style={{width: '25%', display: 'inline-block', margin: '0 auto'}}>

      <Header as='h3'>
        Terrain: {this.state.planet.terrain}
      </Header>
      </div>
      <div style={{width: '25%', display: 'inline-block', margin: '0 auto'}}>

      <Header as='h3' >
        Diameter: {this.state.planet.diameter}
      </Header>
      </div>
    </Segment>

    <Button as={Link} to='/people' color='blue'>Back</Button>
    </>
    )
  }
}





export default Planet





// const Planet = ({name}) => {
//   const [planet, setPlanet] = useState({})
  
//   useEffect( () => {
//     axios.get(`https://swapi.co/api/planets/?search=${name}`).then( res => {
//       let planetinfo = res.data.results[0]
//       setPlanet(res.data.results[0])
//     })
//   }, [])

//   return (
//     <>

//     </>
//   )
// }
