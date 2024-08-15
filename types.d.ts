type TextChild = {
  text: string;
  type: string;
}

type Paragraph = {
  type: string;
  children: TextChild[];
}

type Team = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  position: string;
  email: string;
  img: string;
}

type AboutAttributes = {
  title: string;
  description: string;
  ourVision: Paragraph[];
  ourStory: Paragraph[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  teams: {
    data?: Team[];
  };
}

type AboutData = {
  id: number;
  attributes: AboutAttributes;
}

type ApiResponse<T> = {
  data: T;
  meta: object;
}