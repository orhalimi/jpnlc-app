import React, { Component } from 'react';
import FormSelection, { ALL_SELECTED_ID } from './FormsSelection';
import { getAvailableForms } from '../../util/requests';
import '../../style/selectConjuctionsPage.css';

export default class SelectConjuctionsPage extends Component {
  constructor(props) {
    super(props);
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
    this.state = {
      sections: {
        from: {
          name: 'from',
          allSelected: false,
          forms: [],
        },
        to: {
          name: 'to',
          allSelected: false,
          forms: [],
        },
      },
    };
  }


  componentDidMount() {
    const sections = this.getSections();
    getAvailableForms()
      .then((res) => {
        const availableForms = res.data;
        Object.keys(this.state.sections).forEach((section) => {
          sections[section].forms = availableForms;
        });
        this.setState({ sections });
      });
  }

  onCheckboxClick(id, sectionName) {
    if (id === ALL_SELECTED_ID) {
      this.selectAllhandler(sectionName);
    } else {
      const sections = this.getSections();
      sections[sectionName].forms.forEach((form) => {
        if (form.id === id) {
          form.selected = !form.selected;
          sections[sectionName].allSelected = false;
        }
      });
      this.setState({ sections });
    }
  }

  getSections() {
    return JSON.parse(JSON.stringify(this.state.sections));
  }


  selectAllhandler(sectionName) {
    const sections = this.getSections();
    sections[sectionName].allSelected = !sections[sectionName].allSelected;
    sections[sectionName].forms.forEach((form) => {
      form.selected = sections[sectionName].allSelected;
    });
    this.setState({ sections });
  }


  generateFormContainers() {
    const formContainers = Object.keys(this.state.sections).map(section => (
      <FormSelection
        key={this.state.sections[section].name}
        section={this.state.sections[section].name}
        forms={this.state.sections[section].forms}
        onClick={this.onCheckboxClick}
        allSelected={this.state.sections[section].allSelected}
      />
    ));

    return { FROMFormSection: formContainers[0], TOFormSection: formContainers[1] };
  }


  render() {
    const { FROMFormSection, TOFormSection } = this.generateFormContainers();

    return (
      <div className="select-conjuctions">
        {FROMFormSection}
        <button className="submit-conjuction-btn" type="button">
         START SESSION
        </button >
        {TOFormSection}
      </div>
    );
  }
}

