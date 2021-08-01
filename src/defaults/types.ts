export type Posts = {
  id: number;
  title: string;
  body: string;
  userId: number;
  comments?: Comments[];
};

export type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type PaginationNumber = {
  page: number;
  size: number;
};
