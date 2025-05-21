export type TFieldType =
  | "text"
  | "textarea"
  | "password"
  | "radio"
  | "select"
  | "checkbox";

export interface IFieldConfig {
  name: string;
  label: string;
  type: TFieldType;
  options?: { label: string; value: string }[];
  placeholder?: string;
}

export const signUpConfig: IFieldConfig[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Last Name",
  },
  {
    name: "email",
    label: "EmailID",
    type: "text",
    placeholder: "EmailID",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    options: [
      { label: "Intern", value: "intern" },
      { label: "Jr.Dev", value: "jr.dev" },
      { label: "Sr.Dev", value: "sr.dev" },
      { label: "HR", value: "hr" },
      { label: "Manager", value: "manager" },
    ],
  },
];
