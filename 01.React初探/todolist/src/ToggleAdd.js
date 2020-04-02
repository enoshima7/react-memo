import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/toggle.css';
class ToggleAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {this.state.list.map((v, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={1000}
                classNames="fade"
                //   unmountOnExit
                onEntered={el => {
                  el.style.color = 'blue';
                }}
                appear={true}
              >
                <div>{v}</div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={this.handleToggle}>Toggle</button>
      </Fragment>
    );
  }
  handleToggle() {
    this.setState(prevState => ({
      list: [...prevState.list, 'item']
    }));
  }
}

export default ToggleAdd;
