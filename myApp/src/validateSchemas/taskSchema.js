import {z} from "zod";

export const createTaskSchema = z.object({
  tittle: z.string({
    required_error: "Tittle is required."
  }),
  description: z.string({
    required_error: "Tittle is required."
  }),
  date: z.string().datetime().optional()
})