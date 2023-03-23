import { Cat } from "./cats.model";
import { findCat, createCat, putCat, patchCat, deleteCat } from "./utils";
import { v4 } from "uuid";
import { Router, Request, Response } from "express";

const router = Router();

// 여기가 네스트로 치면 서비스 모듈인 것 같다.
// 컨트롤러에 비즈니스 로직을 쓰지 않고 여기 서비스에서 비즈니스 로직을 처리함으로써
// router 에서는 가독성있게 어떤 서비스를 제공하는구나 직관적으로 알 수 있게됨.
// 그래서 유지 보수 측면에서도 서비스를 눌러서 수정할 부분만 골라서 수정하면 된다.

//* READ 고양이 데이터 전체를 가져오는 것
export const readAllCat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* READ 특정 고양이 데이터를가져오는 것
// 이런걸 동적 라우팅이라고 함
// 이런 id 값은 유저의 토큰값 등을 생각하면 됨 -> 세션 등에 들어있는 이 암호화된 정보를 파라미터에 넣고 조회하는식의 로그인

export const readOneCat = (req: Request, res: Response) => {
  try {
    const catId = req.params.id;
    const catData = findCat(catId);
    res.status(200).send({ success: true, data: { cat: catData } });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* CREATE 고양이 데이터 생성 및 추가
export const addCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    // express json이라는 미들웨어를 추가해야 json을 읽을 수 있음
    const uuid = v4();
    data.id = uuid;
    createCat(data);
    res.status(201).send({ success: true, data: { cat: data } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

//* UPDATE 특정 고양이 데이터의 전체를 수정
export const updateOneCatAll = (req: Request, res: Response) => {
  try {
    const catId = req.params.id;
    const data = req.body;
    const putData = putCat(catId, data);
    res.status(200).send({ success: true, data: { cat: putData } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

//* UPDATE 특정 고양이 데이터의 일부분 수정
export const updateOneCatPartially = (req: Request, res: Response) => {
  try {
    const data = req.body;
    const catId = req.params.id;
    const patchedData = patchCat(catId, data);
    res.status(200).send({ success: true, cat: patchedData });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

//* DELETE 특정 고양이 데이터 삭제
export const popoutCat = (req: Request, res: Response) => {
  try {
    const catId = req.params.id;
    deleteCat(catId);
    res.status(200).send({ success: true, data: Cat });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

export default router;
