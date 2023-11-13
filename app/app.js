import React from "react";
import { Router, Stack, Route } from "expo-router";

import HomeDrinks from "./HomeDrinks";
import SearchResults from "./SearchResults";

export default function App() {
  return (
    <Router>
      <Stack>
        <Route path="/" component={HomeDrinks} />
        <Route path="/search-results" component={SearchResults} />
      </Stack>
    </Router>
  );
}
