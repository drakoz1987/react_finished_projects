import React from "react";
import { connect } from "react-redux";
import UserHeader from "../UserHeader/UserHeader";
import { fetchPostsAndUsers } from "../../actions";

class PostList extends React.Component {
	componentDidMount = () => {
		this.props.fetchPostsAndUsers();
	};
	renderList = () => {
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.title}</p>
						</div>
						<UserHeader userId={post.userId} />
					</div>
				</div>
			);
		});
	};

	render() {
		console.log(this.props.users);
		return (
			<div className="ui relaxed divided list PostList">
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};

export default connect(
	mapStateToProps,
	{ fetchPostsAndUsers: fetchPostsAndUsers }
)(PostList);
