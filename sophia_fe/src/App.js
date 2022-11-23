import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { publicRoutes, privateRoutes, adminRoutes } from './routes/routes';
import AdminLayout from './layouts/AdminLayout/AdminLayout';

function App() {
    const currentUser = useSelector((state) => state.auth.login.currentUser);

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

                    {currentUser &&
                        adminRoutes.map((route, index) => {
                            let Layout = AdminLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        currentUser.isAdmin ? <Layout>{route.element}</Layout> : <Navigate to="/" />
                                    }
                                />
                            );
                        })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
