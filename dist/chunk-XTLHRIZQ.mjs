import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";

// src/error-handle.ts
import { ZodError } from "zod";
var errorHandle = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: `Error validation request`,
      errors: error.flatten().fieldErrors
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }
  return reply.status(500).send({ message: "Internal server error!" });
};

export {
  errorHandle
};
