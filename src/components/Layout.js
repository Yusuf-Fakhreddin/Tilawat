import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Player from "./Player";
import Text from "./Text";
const Layout = () => {
	return (
		<Container maxWidth="lg">
			<Typography>Tilawat</Typography>
			<Text />
			<Player />
		</Container>
	);
};

export default Layout;
