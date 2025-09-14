import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'feed' },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./features/auth/login-form.component').then(m => m.LoginFormComponent),
  // },
  // {
  //   path: 'feed',
  //   loadComponent: () => import('./features/feed/feed.page').then(m => m.FeedPageComponent),
  // },
  // {
  //   path: 'post/:id',
  //   loadComponent: () => import('./features/post/post-details.page').then(m => m.PostDetailsPageComponent),
  //   resolve: { post: () => import('./core/resolvers/post.resolver').then(m => m.postResolver) },
  // },
  // {
  //   path: 'admin',
  //   canMatch: [() => import('./core/guards/feature-match.guard').then(m => m.featureMatchGuard)],
  //   loadComponent: () => import('./features/admin/admin.panel').then(m => m.AdminPanelComponent),
  // },
  { path: '**', redirectTo: 'feed' }
];
