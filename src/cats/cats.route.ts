import { Router } from "express";
import {
  readAllCat,
  readOneCat,
  addCat,
  updateOneCatAll,
  updateOneCatPartially,
  popoutCat,
} from "./cats.service";

const router = Router();
//* READ 고양이 데이터 전체를 가져오는 것
router.get("/cats", readAllCat);

//* READ 특정 고양이 데이터를가져오는 것
// 이런걸 동적 라우팅이라고 함
// 이런 id 값은 유저의 토큰값 등을 생각하면 됨 -> 세션 등에 들어있는 이 암호화된 정보를 파라미터에 넣고 조회하는식의 로그인

router.get("/cats/:id", readOneCat);

//* CREATE 고양이 데이터 생성 및 추가
router.post("/cats", addCat);

//* UPDATE 특정 고양이 데이터의 전체를 수정
router.put("/cats/:id", updateOneCatAll);

//* UPDATE 특정 고양이 데이터의 일부분 수정
router.patch("/cats/:id", updateOneCatPartially);

//* DELETE 특정 고양이 데이터 삭제
router.delete("/cats/:id", popoutCat);

export default router;

// 위에처럼 한 것을 보면 router 의 역할은 특정 endpoint를 통해 요청을 받고
// 그에 따라 특정 로직을 실행할 뿐임. 요청을 전달 받고 요청을 실행한다.
// 하지만 그 요청이 뭔지는 모른다. 단지 들어오는 요청에 대한 로직을 실행할 뿐
