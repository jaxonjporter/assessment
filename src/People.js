import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import { Card, Header, Form, Button, Container } from 'semantic-ui-react'
import PersonInfo from './PersonInfo'


const People = () => {
  const [people, setPeople] = useState([])
  const [search, setSearch] = useState('')

  useEffect( () => {
    axios.get(`https://swapi.co/api/people/`)
      .then( res => {
        setPeople(res.data.results)
        })
  }, [])

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (search !== ''){
      axios.get(`https://swapi.co/api/people/?search=${search}`)
      .then( res => {
        setPeople(res.data.results)
      })
    } else {
      axios.get(`https://swapi.co/api/people/`)
        .then( res => {
          setPeople(res.data.results)
        }) 
    }
  }

  const renderPeople = () => {
    return people.map( person => (
      <Card key={person.name}>
        <Card.Content>
          <Header as='h1'>
            {person.name}
          </Header>
        </Card.Content>
        <Card.Content>
          <p style={{width: '50%', display: 'inline-block'}}>
            <strong>Hair Color:</strong> {person.hair_color}
          </p>
          <p style={{width: '50%', display: 'inline-block'}}>
            <strong>Skin Color:</strong> {person.skin_color}
          </p>
          <p style={{width: '50%', display: 'inline-block'}}>
            <strong>Gender:</strong> {person.gender}
          </p>
          <p style={{width: '50%', display: 'inline-block'}}>
            <strong>Birth Year:</strong> {person.birth_year}
          </p>
        </Card.Content>
        <Card.Content extra>
            <PersonInfo person={person} />
        </Card.Content>
      </Card>
    ))
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    // axios.get(`https://swapi.co/api/people/?search=${search}`)
    // .then( res => {
    //   setPeople(res.data.results)
    // })
  }

  return(

    <>
      <Form onSubmit={handleSubmit} style={{marginTop: '10px', display: 'flex', justifyContent: 'center'}}>
        <Form.Input name='search' value={search}  placeholder='Search' onChange={handleChange} style={{width: '40vw'}}/>
        <Button style={{height: '100%', marginLeft: '1vw'}}>Search</Button>
      </Form>
      <Card.Group itemsPerRow={3}>
      { renderPeople() }
      </Card.Group>
    </>
  )
}

export default People