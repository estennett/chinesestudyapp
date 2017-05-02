import React from 'react';
import ReactDOM from 'react-dom';

class TextBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }
  componentDidMount(){
    this.timer = setInterval(
      ()=>this.getDate(), 1000
    )
    console.log('TextBox has mounted and the clocks are running')
  }
  getDate(){
    this.setState({
      date: new Date()
    })
  }
  render(){
    return(
      <div className="testBox">
        <h1>This is a test {this.props.name}</h1>
        <h2>now the date is {this.state.date.toString()}</h2>
      </div>
    )
  }
}

class TestContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {textBoxes : []}
    this.getTextBoxes = this.getTextBoxes.bind(this)
  }
  componentDidMount(){
    this.getTextBoxes()
  }
  getTextBoxes(){
    var arr = []
    for(var i = 0; i < 10; i++){
      arr.push(<TextBox/>)
    }
    this.setState({textBoxes : arr})
  }
  render(){
    return(<div>
            {this.state.textBoxes}
          </div>
    )
  }
}

ReactDOM.render(
  <div>
    <TestContainer/>
  </div>,
  document.getElementById('app'),
)

//
// <TextBox name="trex"/>
// <TextBox name="Jane"/>
// <TextBox name="Joseph"/>
// var DinoBox = React.createClass({
//   render: function(){
//     return(
//         <img src="http://www.enchantedlearning.com/tgifs/Trexskelanim.gif"></img>
//     )
//   }
// })
//
// var TestBox = React.createClass({
//   render: function(props){
//     return(
//       <div className="testBox">
//         <h1>This is a test {props.name}</h1>
//         <DinoBox/>
//       </div>
//     )
//   }
// })
