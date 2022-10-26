import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "../router";


function App() {
	return (
    <div className="App">
	    <Suspense fallback={<h1>...loading</h1>}>
		    <RouterProvider router={router} />
	    </Suspense>
    </div>
  );
}

export default App;
