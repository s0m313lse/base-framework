export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  local?: boolean;
  icon?: string;
}

export interface Dingus {
  _id:string;
  name: string;
  description: string;
  verified: string;
}

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}
