import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
	<ContentLoader
		speed={2}
		width={280}
		height={466}
		viewBox="0 0 280 466"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="140" cy="129" r="130" />
		<rect x="0" y="275" rx="0" ry="0" width="280" height="27" />
		<rect x="2" y="313" rx="0" ry="0" width="279" height="67" />
		<rect x="5" y="400" rx="0" ry="0" width="80" height="38" />
		<rect x="142" y="400" rx="0" ry="0" width="149" height="40" />
	</ContentLoader>
)

export default Skeleton