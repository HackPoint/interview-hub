import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Post } from '@ih/core/layout/shell';

export const postResolver: ResolveFn<Post> = (route) => {
  const api = inject(ApiService);
  const id = route.paramMap.get('id');
  if (!id) throw new Error('Missing post id');
  return api.get<Post>(`posts/${id}`);
};
