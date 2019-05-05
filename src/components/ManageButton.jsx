import React from 'react';
import ManageBar from './ManageBar';

export default class ManageButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };
  }

  toggleVisibility() {
    this.setState(prev => ({ visible: !prev.visible }));
  }

  render() {
    const { visible } = this.state;

    return (
      <>
        <i className="icon set-icon" role="button" tabIndex={-1} onClick={this.toggleVisibility.bind(this)} onKeyDown />
        {visible && <ManageBar />}
      </>
    );
  }
}