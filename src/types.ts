export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  character?: string;
  description?: string;
}

export interface Event {
  id: string;
  title: string;
  time: string;
  day: string;
  icon: string;
  image: string;
}
