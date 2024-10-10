import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const userid = localStorage.getItem('userId');
  localStorage.setItem('lastPath', to.path);
  if (!userid) {
    return next({
      name: 'login',
    });
  }
    return next();
  
};

export default isAuthenticatedGuard;
