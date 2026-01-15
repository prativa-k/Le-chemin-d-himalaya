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
						// identifant unique de la route
						id: "public",

						// préfixe des route
						path: "",

						// importation de la mise en page parente
						lazy: () => import("../layouts/public_layout"),

						children: [
							{
								id: "home",

								index: true,
								path: "",
								//path représente la route
								lazy: () => import("../pages/index"),
							},
							{
								id: "contact",
								path: "contact",
								lazy: () => import("../pages/contact/contact"),
							},
							{
								id: "reserver",
								path: "reserver",
								lazy: () => import("../pages/reserver/reserver"),
							},

							{
								id: "commander",
								path: "commander",
								lazy: () => import("../pages/commander/commander"),
							},

							{
								id: "galerie",
								path: "galerie",
								lazy: () => import("../pages/galerie/galerie"),
							},

							{
								id: "avis",
								path: "avis",
								lazy: () => import("../pages/avis/avis"),
							},

							{
								id: "carte",
								path: "carte",
								lazy: () => import("../pages/menu/carte"),
							},

							// {
							// 	id: "admin",
							// 	path: "admin",
							// 	lazy: () => import("../pages/admin/admin"),
							// },

							// {
							// 	id: "admin-menus-home",
							// 	path: "admin/menus",
							// 	lazy: () => import("../pages/admin-menu/admin-menus-home"),
							// },
							// {
							// 	id: "admin-menus-form",
							// 	//path représente la route
							// 	//varibale d'url est préfixée d'un :
							// 	// variable d'url optionnell est suffixée d'un ?
							// 	path: "admin/menus/form/:id?",
							// 	lazy: () => import("../pages/admin-menu/admin-menus-form"),
							// },
							// {
							// 	id: "delete",
							// 	//path représente la route
							// 	//varibale d'url est préfixée d'un :
							// 	// variable d'url optionnell est suffixée d'un ?
							// 	path: "delete/:id?",
							// 	lazy: () => import("../pages/delete"),
							// }
						],
					},

					{
						id: "admin",
						path: "/admin",
						lazy: () => import("../layouts/admin_layout"),
						children: [
							{
								id: "admin-home",
								index: true, // admin
								lazy: () => import("../pages/admin/admin"),
							},
							{
								id: "admin-menu",
								path: "menu",
								lazy: () => import("../pages/admin/menu/index"),
							},
							{
								id: "admin-menu-form",
								//path représente la route
								//varibale d'url est préfixée d'un :
								// variable d'url optionnell est suffixée d'un ?
								path: "menu/form/:id?",
								lazy: () => import("../pages/admin/menu/form"),
							},
							{
								id: "delete",
								//path représente la route
								//varibale d'url est préfixée d'un :
								// variable d'url optionnell est suffixée d'un ?
								path: "menu/delete/:id?",
								lazy: () => import("../pages/admin/menu/delete"),
							},
						],
					},
				],
			},
		] satisfies RSCRouteConfig;
	};
}

export default RouterService;
