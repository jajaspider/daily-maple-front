import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/main';
import Navbar from '@/components/navbar';
import About from '@/components/about';
import Feature from '@/components/feature';
import Screenshots from '@/components/screenshots';
import Team from '@/components/team';
import LatestBlog from '@/components/latest_blog';
import Price from '@/components/price';
import Testimonial from '@/components/testimonial';
import ContactUs from '@/components/contact_us';
import Subscribe from '@/components/subscribe';
import Map from '@/components/map';
import Tile from '@/components/tile';
import Footer from '@/components/footer';
import PageNotFound from '@/components/pagenotfound';
import js from '@/components/js';

import color from '@/components/color';

Vue.use(Router);
Vue.component('Navbar', Navbar);
Vue.component('About', About);
Vue.component('Feature', Feature);
Vue.component('Screenshots', Screenshots);
Vue.component('Team', Team);
Vue.component('Latest-blog', LatestBlog);
Vue.component('Price', Price);
Vue.component('Testimonial', Testimonial);
Vue.component('Contact_us', ContactUs);
Vue.component('Subscribe', Subscribe);
Vue.component('Map', Map);
Vue.component('Footer', Footer);
Vue.component('js', js);
Vue.component('Tile', Tile);
Vue.component('color', color);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/404',
      component: PageNotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
