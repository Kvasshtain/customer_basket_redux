import React from 'react'
import textStrings from '../data/textStrings.json'

class NotFound extends React.Component{
    render(){
        return <h2>{textStrings.notFound}</h2>;
    }
}

export { NotFound }