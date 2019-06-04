import React, { Component } from "react";
//When creating a redux form this imports must be made to create the form:
//Field will be a react component, and reduxForm will be a replacement for the connect function in redux
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
	//and here we render the Field component with a name that indicates its role.
	//the Field Component only contains the logic of the form, but it does not renders any html, so to do that other steps must be made
	// a component can be made to pass to the FIeld Component, but also a helper method, in this case that is what we will do
	renderInput = formProps => {
		//there are two ways of handling the props inside the input, one is the classic onChange={formProps.input.onChange}
		//the other consists on spreading the input element in the input {...formProps.input}
		console.log(formProps);
		let errored;
		if (formProps.meta.touched) {
			if (formProps.meta.error) {
				errored = (
					<div class="ui pointing red basic label">{formProps.meta.error}</div>
				);
			}
		}

		return (
			<div className="row">
				<div className="sixteen wide column">
					<div
						className={`ui input field fluid ${
							formProps.meta.error && formProps.meta.touched ? "error" : ""
						}`}>
						<input
							{...formProps.input}
							type={formProps.type}
							id={formProps.id}
							placeholder={formProps.label}
							autoComplete="off"
						/>
					</div>
				</div>
				{errored}
			</div>
		);
	};
	//when onSubmit is used in react forms it is not necessary to use e.preventDefault, and the element passed down to the onSUbmit handler will be the values wrote in the form, instead of an event
	onSubmit(formValues) {}
	render() {
		//each custom props that needs to be passed to the FIeld can be sent like in the next component, and will be put in the formProps to be passed to the render
		return (
			//to handle form submission we use a new method incorporated in redux form onSubmit={this.props.handleSubmit(this.onSubmit)}
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="error">
				<div className="ui grid">
					<Field
						name="title"
						component={this.renderInput}
						label="Enter Title"
						type="text"
						id="title"
					/>
					<Field
						name="description"
						component={this.renderInput}
						label="Enter Description"
						type="text"
						id="description"
					/>
					<div className="row">
						<button className="ui button primary ">Submit</button>
					</div>
				</div>
			</form>
		);
	}
}

const validate = formValues => {
	//validate is used to check if there has been any errors in the form before submission, if it returns an empty object it means everything went fine.
	let error = {};
	if (!formValues.title) {
		//only ran if the user does not enter a title
		error.title = "You must enter a title";
	}
	if (formValues.title && formValues.title.length < 5) {
		error.title = "Your title must be 5 characters or longer";
	}
	if (!formValues.description) {
		//only ran if the user does not enter a description
		error.description = "You must enter a description";
	}
	if (formValues.description && formValues.description.length < 5) {
		error.description = "Your description must be 5 characters or longer";
	}
	return error;
};

export default reduxForm({
	form: "streamCreate",
	validate
})(StreamCreate);
