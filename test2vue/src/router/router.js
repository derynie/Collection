import NotFound from "../pages/404";
import Home from "../pages/Home";
import Animes from "../pages/Animes";
import Anime from "../pages/Anime";

/*
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },
    ],
});*/

export const routes = [
  { path: "/", component: Home },
  { path: "/404", component: NotFound },
  { path: "/Animes", component: Animes, children: [
      { path: "/:id", component: Anime}
    ] },
];
