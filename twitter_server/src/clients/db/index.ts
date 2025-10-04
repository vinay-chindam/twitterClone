import { PrismaClient } from "@prisma/client";
import { log } from "console";

export const prismaClient=new PrismaClient({log:'query'});