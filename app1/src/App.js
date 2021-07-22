import React, {Suspense} from "react";

const RemoteApp2 = React.lazy(() => import("app2/App"));
const RemoteApp3 = React.lazy(() => import("app3/App"));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>I am the Shell application</h2>
    <Suspense fallback="Loading Button">
      <RemoteApp2 />
      <RemoteApp3 />
    </Suspense>
  </div>
);

export default App;
