import { CatType } from "./cats.model";
export declare const findCat: (id: string) => CatType | undefined;
export declare const createCat: (catInform: CatType) => void;
export declare const putCat: (catId: string, newCatInform: CatType) => CatType | null;
export declare const patchCat: (catId: string, newCatInform: CatType) => CatType | null;
export declare const deleteCat: (catId: string) => void;
