import React from 'react';

export default class AutoOpenChestBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  componentDidUpdate() {
    // .chest
    console.log('WIP');
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
          <span className="el-checkbox__label">Chest</span>
        </label>
      </p>
    );
  }
}