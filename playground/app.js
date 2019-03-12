import React, { Component } from "react";
import { render } from "react-dom";

import Step from './Step/Step';
import Form from '../src';
import { processForm } from './utilities';
import { widgets } from './widgets';
import { originalEligibilitySchema, originalEligibilityUISchema } from './data/eligibility';

import { defineCustomElements } from 'ehealth-web-components/dist/loader';
import './css/styles.css';
import MockScreenshot from './images/entry-page.jpg';

const log = (type) => console.log.bind(console, type);

const originalFormData = {};
const initialState = processForm(originalEligibilitySchema, originalEligibilityUISchema, originalEligibilitySchema, originalEligibilityUISchema);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  openModal() {
    this.setState({isModalActive: true});
  }

  handleChange(data) {
    const schema = { ...this.state.schema };
    const uiSchema = { ...this.state.uiSchema };
    const { formData } = data;

    const newState = processForm(originalEligibilitySchema, originalEligibilityUISchema, schema, uiSchema, formData);

    this.setState(newState);
    console.log(formData)
  }

  handleStepChange() {
    console.log('Transitioning to next step');
  }

  handleFormSubmit(data) {
    const { formData } = data;

    console.log('This is the form info we will submit', formData);
  }

  render() {
    return (
      <main>
        <eh-header></eh-header>
        <div className="pb-xl"
          onClick={this.openModal.bind(this)}>
          <div className="relative text-center cursor-pointer border-t border-solid border-grey">
            <img className="mx-auto" src={MockScreenshot}/>
            <div className="absolute pin-b pin-l w-full h-48 z-10"
            style={{background: 'linear-gradient(to top, #ffffff,  rgba(255, 255, 255, 0.2) '}}></div>
          </div>
          <h3 className="pt-lg h3 text-center">Click Above to Start <span className="h2 ml-xs">☝️</span></h3>
        </div>

        {this.state.isModalActive && (

          <Step title="The Open Enrollment period has ended."
            subtitle="But, you still have great options for complete healthcare coverage.">
            <Form schema={this.state.schema}
              uiSchema={this.state.uiSchema}
              widgets={widgets}
              formData={this.state.formData}
              onChange={this.handleChange.bind(this)}
              onSubmit={this.handleFormSubmit.bind(this)}
              onError={log("errors")}>

              <div className="flex justify-between text-white">
                <button className="button button-xlg bg-grey" onClick={() => console.log('Sup Gina!')}>Prev</button>
                <button className="button button-xlg bg-blue" onClick={this.handleStepChange()}>Next</button>
              </div>

            </Form>
          </Step>

        )}
        
        <eh-footer></eh-footer>
      </main>
    );
  }
}

render(<App />, document.getElementById("app"));

defineCustomElements(window);



