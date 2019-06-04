import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";

class GoogleAuth extends Component {
	componentDidMount = () => {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"304666461312-50epjr416jblba332jg2lc1b0p2dhm0d.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	};
	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};
	//In the professor app he made two functions one onSignInCLick and one onSignOutCLick i prefer this way
	onAuthButtonPress = () => {
		let logMe;
		if (this.props.isSignedIn === null) {
			logMe = null;
		} else if (this.auth.isSignedIn.get() === true) {
			logMe = this.auth.signOut();
		} else {
			logMe = this.auth.signIn();
		}
		return logMe;
	};
	renderAuthButton = () => {
		let toRender;
		if (this.props.isSignedIn) {
			toRender = (
				<Fragment>
					<button
						onClick={this.onAuthButtonPress}
						className="ui red google button">
						<i className="google icon" />
						Sign Out
					</button>
				</Fragment>
			);
		} else {
			toRender = (
				<Fragment>
					<button
						onClick={this.onAuthButtonPress}
						className="ui pink google button">
						<i className="google icon" />
						Sign In
					</button>
				</Fragment>
			);
		}
		return toRender;
	};
	render = () => {
		return (
			<Fragment>
				<div>{this.renderAuthButton()}</div>
			</Fragment>
		);
	};
}
const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};
export default connect(
	mapStateToProps,
	{ signIn, signOut }
)(GoogleAuth);
