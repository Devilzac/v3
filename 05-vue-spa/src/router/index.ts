import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [      
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/modules/404/NotFound404.vue') },
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticatedGuard],
          props: (route)=>{
            const id = Number(route.params.id);
            return isNaN(id) ? { id:1 } : { id: id }
              
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },
    //Auth
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children:[
        {
          path: '/login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        }
      ]
    },
  ],
});

export default router;
