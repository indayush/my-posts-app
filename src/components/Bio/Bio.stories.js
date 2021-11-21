import React from "react";

import Bio from "./Bio";

export default {
	title: "Components/Bio",
	component: Bio,
};

const Template = () => (
	<Bio
		headshot="https://pbs.twimg.com/profile_images/924397205246525440/JL7gtm8Y_400x400.jpg"
		name="Ayush Adarsh"
		tagLine="Watching & Learning...🙂"
		role="Automation Engineer @ Publicis Sapient"
	/>
);

export const Default = Template.bind({});
