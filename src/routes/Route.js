import React from "react"
import { Route } from "react-router-dom"
import DefaultLayout from "../pages/layouts/DefaultLayout"
import AdminLayout from "../pages/layouts/AdminLayout"

const RouteWrapper = ({component: Component, isPrivate, ...rest}) => {
	return (
		<Route
			{...rest}
			render={props => (
				<AdminLayout>
					<Component {...props} />
				</AdminLayout>
			)}
		/>
	)
}

export default RouteWrapper