import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { publicRoutes, privateRoutes } from './routes/routes';

function App() {
    let currentUser = true;
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />;
                    })}

                    {privateRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={currentUser ? <Layout>{route.element}</Layout> : <Navigate to="/" />}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
