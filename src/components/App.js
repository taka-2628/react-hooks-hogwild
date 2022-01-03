import React from "react";
import Nav from "./Nav";
import Tiles from "./Tiles";

import hogs from "../porkers_data";

function App() {
	console.log(hogs)

	return (
		<div className="App">
			<Nav />
			<Tiles hogs={hogs}/>
		</div>
	);
}

export default App;
