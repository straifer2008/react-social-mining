import { createBrowserRouter } from 'react-router-dom';
import ROUTES from "./routes";
import { AppLayout, AuthLayout } from 'layouts';
import { Login, Register } from 'pages/Auth';

const router = createBrowserRouter([
	{
		path: ROUTES.ROOT,
		element: <AppLayout />,
		children: [
			{
				path: '',
				element: <h1>Home page</h1>
			}
		]
	},
	{
		path: ROUTES.AUTH.ROOT,
		element: <AuthLayout />,
		children: [
			{
				path: ROUTES.AUTH.LOGIN,
				element: <Login />
			},
			{
				path: ROUTES.AUTH.REGISTER,
				element: <Register />
			}
		]
	}
]);

export default router
