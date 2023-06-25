export interface Dingus {
  _id:string;
  author: string;
  name: string;
  description: string;
  verified: boolean;
}

export const nullDingus:Dingus = {
  _id: '',
  author: '',
  name: '',
  description: '',
  verified: false
}

export interface Confirm {
  code: string;
  id?: string;
  name?: string;
}

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
