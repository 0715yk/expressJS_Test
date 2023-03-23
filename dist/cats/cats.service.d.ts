import { Request, Response } from "express";
declare const router: import("express-serve-static-core").Router;
export declare const readAllCat: (req: Request, res: Response) => void;
export declare const readOneCat: (req: Request, res: Response) => void;
export declare const addCat: (req: Request, res: Response) => void;
export declare const updateOneCatAll: (req: Request, res: Response) => void;
export declare const updateOneCatPartially: (req: Request, res: Response) => void;
export declare const popoutCat: (req: Request, res: Response) => void;
export default router;
