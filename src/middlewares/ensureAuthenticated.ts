import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    req: Request, 
    res: Response, 
    next: NextFunction) 
{
    const authToken = req.headers.authorization;

    const [, token] = authToken.split(" ")

    const { sub } = verify(token, "e7aefb0d6e04a2fbdde5e9ecd01cb72d") as IPayload;

    req.user_id = sub;

    return next();
}