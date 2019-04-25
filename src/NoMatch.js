import React from 'react'
import { Link, } from 'react-router-dom'
import {Button} from 'semantic-ui-react'

const NoMatch = () => {

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <h1 style={{color: 'yellow'}}>
      Whoops, you made it to the wrong Galaxy.
    </h1>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
    <Link to='/'>

      <Button color="blue">
        Return Home
      </Button>
    </Link>
    </div>
    </>
  )
}

export default NoMatch