export type Brand<K, T> = K & { readonly __brand: T };

export type PostId = Brand<string, 'PostId'>;
export type UserId = Brand<number, 'UserId'>;
export type CommentId = Brand<number, 'CommentId'>;

export interface Post {
  userId: UserId;
  id: PostId;
  title: string;
  body: string;
}

export interface Comment {
  postId: PostId;
  id: CommentId;
  name: string;
  email: string;
  body: string;
}

