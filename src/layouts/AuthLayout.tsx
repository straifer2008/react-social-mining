// created by Artem
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthenticationState } from "../store/auth";
import ROUTES from "../router/routes";
import Logo from '../assets/images/Logo.svg';
import './AuthLayout.scss';
import Card from '@mui/material/Card';

type AuthLayoutProps = {};
export const AuthLayout: FC<AuthLayoutProps> = () => {
	const isAuthenticated = useSelector(selectAuthenticationState);

	if (isAuthenticated) {
		return <Navigate to={ROUTES.ROOT} />;
	}

	return (
		<div className="auth-layout">
			<div className="auth-layout__left">
				<img className="logo" src={Logo}  alt="logo" />
			</div>
			<div className="auth-layout__form">
				<Card sx={{ minWidth: 275 }}>
					<Outlet />
				</Card>
			</div>
		</div>
	);
};
