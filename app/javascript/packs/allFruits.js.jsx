import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class AllFruits extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      fruits: []
    };
  }
  componentDidMount(){
    fetch('/api/v1/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });
  }
  
render(){
 var fruits = this.state.fruits.map((fruit) => {
  return(
   <i key={fruit.id}>
    <h1>{fruit.name}</h1>
    <p>{fruit.description}</p>
   </i>
  )
 })
 return(
  <div class="jumbotron">
  <ol>
   {fruits}
  </ol>
  </div>
 )
}

}

//const f = new AllFruits();

if(false){
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AllFruits />,
    document.body.appendChild(document.createElement('ol')),
  )
})
}

export default AllFruits