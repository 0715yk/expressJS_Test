import { Cat, CatType } from "./cats.model";

export const findCat = (id: string) => {
  const catData = Cat.find((cat) => {
    return cat.id === id;
  });

  return catData;
};

export const createCat = (catInform: CatType) => {
  Cat.push(catInform);
};

export const putCat = (catId: string, newCatInform: CatType) => {
  let result: number | null = null;
  Object.assign(
    Cat,
    Cat.map((cat, idx) => {
      if (cat.id === catId) {
        result = idx;
        return { ...cat, ...newCatInform };
      } else {
        return cat;
      }
    })
  );
  if (result !== null) {
    return Cat[result];
  } else {
    return null;
  }
};

export const patchCat = (catId: string, newCatInform: CatType) => {
  let result: number | null = null;
  Object.assign(
    Cat,
    Cat.map((cat, idx) => {
      if (cat.id === catId) {
        result = idx;
        return { ...cat, ...newCatInform };
      } else {
        return cat;
      }
    })
  );
  if (result !== null) {
    return Cat[result];
  } else {
    return null;
  }
};

export const deleteCat = (catId: string) => {
  Object.assign(
    Cat,
    Cat.filter((cat) => {
      return cat.id !== catId;
    })
  );
};
