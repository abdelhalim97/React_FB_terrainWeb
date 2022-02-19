import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@material-ui/core'
export const IconButton = (props) => {
  return (
    <>
        <Button variant='text' className='rounded-md w-4/5' onClick={props.fnc} className={props.styles}>
          <FontAwesomeIcon icon={props.icon} className='mr-2'/>{props.title}
        </Button>
    </>
  )
}
