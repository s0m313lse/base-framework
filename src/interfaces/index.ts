export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  local?: boolean;
  icon?: string;
}

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}
