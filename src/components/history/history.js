import React from 'react';
import './history.scss'

class History extends React.Component{

  getHistory = e => {
    let req = e.target.innerHTML;
    req = req.split(' ');
    let method = req[0]
    let url = req[1]
    this.props.handleHistory(method, url)
  }

  render(){
    let items = this.props.history.map((query, idx) => 
      <li key={idx} onClick={this.getHistory}>
        {query.method} {query.url}
      </li>)
    return(
      <React.Fragment>
      <section className="history">
        <h1>History</h1>
        <ul>
          {items}
        </ul>
      </section>
    </React.Fragment>
    )
  }

}

export default History
