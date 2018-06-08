import React, { Component } from 'react';
import FormSelection from './FormsSelection';

export default class SelectConjuctionPage extends Component {
  constructor(props) {
    super(props);
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
    this.state = {
      sections: {
        from: {
          name: 'from',
          forms: [
            {
              name: 'plain',
              id: 'plain',
              selected: true,
            },
            {
              name: 'plain polite',
              id: 'polite affirmative',
            },
            {
              name: 'plain negative',
              id: 'plain negative',
            },
            {
              name: 'ば (hypothetical)',
              id: 'hypothetical',
            },
          ],
        },
      },
    };
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

