import React, { Component } from 'react';
import '../../style/FormSelection.css';

export default class FormSelection extends Component {
  constructor(props) {
    super(props);
    this.createCheckbox = this.createCheckbox.bind(this);
  }

  createCheckbox() {
    return this.props.forms.map((form) => {
      const id = `${form.id}`;
      const checkboxIcon = form.selected ?
        <i className="fas fa-check-square form-checkbox" /> :
        <i className="fas fa-square form-checkbox" />;
      return (
      // <label htmlFor={id} key={id}>
        <div key={id} className="form-checkbox-container" onClick={() => this.props.onClick(id, this.props.section)}>
          {checkboxIcon}
          <span className="form-checkbox-name">{form.name}</span>
        </div>
      // </label>
      );
    });
  }

  render() {
    const checkboxes = this.createCheckbox();
    const section = this.props.section.charAt(0).toUpperCase() + this.props.section.substr(1);
    return (
      <div className="form-selection-container">
        <div className="form-selection-title">
          <h2>{section}</h2>
        </div>
        <div className="form-selection-checkboxes">
          {checkboxes}
        </div>
      </div>
    );
  }
}

