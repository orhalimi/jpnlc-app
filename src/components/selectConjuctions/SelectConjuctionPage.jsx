import React, { Component } from 'react';
import FormSelection from './FormsSelection';
import { getAvailableForms } from '../../util/requests';

export default class SelectConjuctionPage extends Component {
  constructor(props) {
    super(props);
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
    this.state = {
      sections: {
        from: {
          name: 'from',
          forms: [],
        },
        to: {
          name: 'to',
          forms: [],
        },
      },
    };
  }

  componentDidMount() {
    const sections = JSON.parse(JSON.stringify(this.state.sections));
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
    const sections = JSON.parse(JSON.stringify(this.state.sections));
    sections[sectionName].forms.forEach((form) => {
      if (form.id === id) {
        form.selected = !form.selected;
      }
    });
    this.setState({ sections });
  }


  render() {
    const formContainers = Object.keys(this.state.sections).map(section => (
      <FormSelection
        key={this.state.sections[section].name}
        section={this.state.sections[section].name}
        forms={this.state.sections[section].forms}
        onClick={this.onCheckboxClick}
      />
    ));

    return (
      <div className="select-conjuction">
        {formContainers}
      </div>
    );
  }
}

