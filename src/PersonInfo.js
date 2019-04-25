import React, {useState, useEffect,} from 'react'
import axios from 'axios';
import {Header,} from 'semantic-ui-react'
import { Link, } from 'react-router-dom'


const PersonInfo = ({person}) => {
  const [planet, setPlanet] = useState('')

  useEffect( () => {
    axios.get(person.homeworld)
      .then( res => {
        setPlanet(res.data.name)
        })
  }, [])


  return (
    <Link to={`/planet/${planet}`}>
      <Header as='h3'>
        Home Planet: {planet}
      </Header>
    </Link>
  )
}

export default PersonInfo