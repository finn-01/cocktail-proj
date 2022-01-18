import React from "react";

import { useGlobalContext } from "../context";

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();

	return <div>Hello Search Form</div>;
};

export default SearchForm;
