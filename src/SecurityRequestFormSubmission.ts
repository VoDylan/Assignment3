export type SecurityRequest = {
  name: string;
  priority: string;
  location: string;
  //select between local or police
  securityoption: string[];
  //checkbox maybe?
  categories: string[];
  //radio button
  status: string;
};
