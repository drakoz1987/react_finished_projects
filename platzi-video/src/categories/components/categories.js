import React from "react";
import Category from "./category";
import "./categories.css";
import Search from "../../widgets/containers/search";
import Media from "../../playlist/components/media";

function Categories(props) {
	let toRender;
	if (props.search.length !== 0) {
		toRender = props.search.map(item => {
			return (
				<Media
					key={item.id}
					{...item}
					handleOpenModal={props.handleOpenModal}
				/>
			);
		});
	} else {
		toRender = props.categories.map(item => {
			return (
				<Category
					key={item.id}
					{...item}
					handleOpenModal={props.handleOpenModal}
				/>
			);
		});
	}
	return (
		<div className="Categories">
			<Search />
			{toRender}
		</div>
	);
}

export default Categories;
