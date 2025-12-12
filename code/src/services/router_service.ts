import type { unstable_RSCRouteConfig as RSCRouteConfig } from "react-router";

class RouterService {
	public getRouter = () => {
		return [
			{
				// identifant unique de la route
				id: "root",

				// préfixe des route
				path: "/",

				// importation de la mise en page parente
				lazy: () => import("../layouts/root_layout"),
				children: [
					{
						id: "public",
						path: "",
						lazy: () => import("../layouts/public_layout"),

						children: [
							{
								id: "home",
								index: true,
								path: "",
								lazy: () => import("../pages/index"),
							},
							{
								id: "contact",
								path: "contact",
								lazy: () => import("../pages/contact"),
							},
							{
								id: "reserver",
								path: "reserver",
								lazy: () => import("../pages/reserver"),
							},

							{
								id: "commander",
								path: "commander",
								lazy: () => import("../pages/commander"),
							},

							{
								id: "galarie",
								path: "galarie",
								lazy: () => import("../pages/galerie"),
							},

							{
								id: "avis",
								path: "avis",
								lazy: () => import("../pages/avis"),
							},

							{
								id: "carte",
								path: "carte",
								lazy: () => import("../pages/carte"),
							},

							{
								id: "admin",
								path: "admin",
								lazy: () => import("../pages/admin"),
							},
						],
					},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouterService;
