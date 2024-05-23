import router, { routerObj } from "./router";
import {
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
  Link,
} from "react-router-dom";

function renderRoutes(routerObj) {
  return routerObj.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          index={route.index}
          element={route.element}
        >
          {route.children ? renderRoutes(route.children) : null}
        </Route>
      );
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        index={route.index}
        element={route.element}
      />
    );
  });
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">메인</Link>
      </div>
      <div>
        <Link to="/board">게시글</Link>
      </div>
      <div>
        <Link to="/board/write">글쓰기 페이지</Link>
      </div>
      <Routes>{renderRoutes(routerObj)}</Routes>
    </BrowserRouter>
  );
  // return <RouterProvider router={MainRouter}></RouterProvider>;
}

export default App;
