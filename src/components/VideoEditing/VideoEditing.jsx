import React from "react";
import "./Design.scss";

//Data Import
import {videoData} from "../../data";

function VideoEditing(props) {
	const Elements = videoData.map((item) => {
		return (
			<div className="design__item">
				<img src={item.img} alt="" className="design__item__image" />
				<h2 className="design__item__heading">{item.heading}</h2>
				<img src={item.img} alt="" className="design__item__mini" />
			</div>
		);
	});

	return <div className="design">{Elements}</div>;
}
import "./Design.scss";
export default VideoEditing;