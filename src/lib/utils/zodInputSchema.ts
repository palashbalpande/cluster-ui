import { z } from "zod";

export const signUpSchema = z.object({
  firstname: z.string().min(1, { message: "Required FirstName" }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Invaid email format" }),
  password: z
    .string()
    .min(8, { message: "Minimim 8 chars" })
    .regex(/[A-Z]/, { message: "Atleast one uppercase" })
    .regex(/[a-z]/, { message: "Atleast one lowercase" })
    .regex(/[\W_]/, { message: "Atleast one special char" }),
  role: z.string().nonempty({ message: "Role is required" }),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
