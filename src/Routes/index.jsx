import NavbarOnly from "../Component/Layout/NavbarOnly/index.jsx";

import DetailMovie from "../Pages/DetailMovie.jsx";
import Home from '../Pages/Home.jsx'
import Watch_Movie from "../Pages/Watch_Movie.jsx";
import Series_Movie from "../Pages/Series_Movie.jsx";
import Single_Movie from "../Pages/Single_Movie.jsx";
import Anime_Movie from "../Pages/Anime_Movie.jsx";
import TV_Shows from "../Pages/TV_Shows.jsx";
import Category_Movie from "../Pages/Category_Movie.jsx";
import Country_Movie from "../Pages/Country_Movie.jsx";
import Search_Movie from "../Pages/Search_Movie.jsx";
import SaveMovies from "../Pages/SaveMovies.jsx";
const PublicRoutes = [
    {path : '/', component: Home},
    {path : '/infoMovie/:slug', component: DetailMovie, layout : NavbarOnly},
    {path : '/watchMovie/:watch', component: Watch_Movie, layout : NavbarOnly},
    {path : '/Series_Movie', component: Series_Movie, layout : NavbarOnly},
    {path : '/Single_Movie', component: Single_Movie, layout : NavbarOnly},
    {path : '/Anime_Movie', component: Anime_Movie, layout : NavbarOnly},
    {path : '/TV_Shows', component: TV_Shows, layout : NavbarOnly}, 
    {path : '/Category_Movie/:slug_cate', component: Category_Movie, layout : NavbarOnly},
    {path : '/Country_Movie/:slug_country', component: Country_Movie, layout : NavbarOnly},
    {path : '/Search_Movie/:slug_Search', component: Search_Movie, layout : NavbarOnly},
    {path : '/Save_Movies', component: SaveMovies, layout : NavbarOnly}
]
const PrivateRoutes = []
export {PublicRoutes,PrivateRoutes}