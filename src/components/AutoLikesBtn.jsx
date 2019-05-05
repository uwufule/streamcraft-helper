import React from 'react';

const LATENCY = 3;

let interval;

export default class AutoLikesBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  componentDidUpdate() {
    const { checked } = this.state;

    if (checked) {
      interval = setInterval(() => {
        document.querySelector('.like-icon').click();
      }, LATENCY);
      return;
    }
    clearInterval(interval);
  }

  toggle(event) {
    if (event.target.nodeName === 'SPAN') return;

    this.setState(prev => ({ checked: !prev.checked }));
  }

  render() {
    const { checked } = this.state;

    const label = `el-checkbox manage-item${checked ? ' is-checked' : ''}`;
    const span = `el-checkbox__input${checked ? ' is-checked' : ''}`;

    return (
      <p>
        <label role="checkbox" className={label} onClick={this.toggle.bind(this)}>
          <span aria-checked="mixed" className={span}>
            <span className="el-checkbox__inner" />
            <input type="checkbox" aria-hidden="true" className="el-checkbox__original" value="" />
          </span>
          <span className="el-checkbox__label">Like</span>
        </label>
      </p>
    );
  }
}
