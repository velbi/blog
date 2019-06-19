import React from 'react'
import ReactDOM from 'react-dom'



class IndecisionApp extends React.Component {
    render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
      const options = ['Thing one', 'Thing two', 'Thing four'];
  
      return (
        <div>
          <Options options={options} />
        </div>
      );
    }
  }
  
  
  class Options extends React.Component {
    handleRemoveAll() {
      console.log(this.props.options); 
    }
    render() {
      return (
        <div>
          <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
          {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render() {
      return (
        <div>
          { this.props.optionText }
        </div>
      );
    }
  }
  

  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));