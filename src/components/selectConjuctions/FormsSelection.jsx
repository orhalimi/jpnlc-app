import React, { Component } from 'react';
import '../../style/FormSelection.css';

export const ALL_SELECTED_ID = 'allSelected';

export default class FormSelection extends Component {
  constructor(props) {
    super(props);
    this.createCheckbox = this.createCheckbox.bind(this);
  }

  createCheckbox(form) {
    const id = `${form.id}`;
    if (form.selected) {
      return (
        <div
          key={id}
          className="form-checkbox-container form-checkbox-container-selected"
          onClick={() => this.props.onClick(id, this.props.section)}
        >
          <i className="fas fa-check-square form-checkbox" />
          <span className="form-checkbox-name">{form.name}</span>
        </div>);
    }
    return (
      <div
        key={id}
        className="form-checkbox-container"
        onClick={() => this.props.onClick(id, this.props.section)}
      >
        <i className="fas fa-square form-checkbox" />
        <span className="form-checkbox-name">{form.name}</span>
      </div>);
  }

  createSelectAllCheckbox() {
    const checkboxText = this.props.allSelected ? 'Unselect All' : 'Select All';
    return this.createCheckbox({
      id: ALL_SELECTED_ID, section: this.props.section, name: checkboxText, selected: this.props.allSelected,
    });
  }

  render() {
    const selectAllCheckbox = this.createSelectAllCheckbox();
    const formsCheckboxes = this.props.forms.map(form => (this.createCheckbox(form)));
    const section = this.props.section.charAt(0).toUpperCase() + this.props.section.substr(1);
    return (
      <div className="form-selection-container">
        <div className="form-selection-title">
          <h2>{section}</h2>
        </div>
        <div className="form-selection-checkboxes">
          {selectAllCheckbox}
          {formsCheckboxes}
        </div>
      </div>
    );
  }
}

