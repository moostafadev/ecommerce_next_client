export interface IProject {
  id: string;
  title: string;
  body: string | null;
  image: string | null;
  type?: "populare" | "mostSales" | null;
}
