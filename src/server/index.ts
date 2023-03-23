import express from "express";
import catsRouter from "../cats/cats.route";

// 이렇게 하는걸 싱글턴 패턴이라고 한다.
// Server를 클래스로 만들어놨지만, 하나의 인스턴스만 생성해서 사용할 것이므로 메모리 측면에서 효율적이다.
// 이처럼 하나의 인스턴스만 생성되도록 하는 패턴을 싱글턴 패턴이라고 한다.

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // *logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is middleware");
      next();
      // next를 써야 이제 순서대로 아래의 라우터를 찾게 된다.
      // next를 안써주면 다음으로 넘어가지 않음. 미들웨어 단계에서 멈추는 것임
      // 또한 미들웨어는 이렇게 맨 앞에 써줘야 가장 먼저 거치게 되고, 그 다음 단계로 넘어간다. 맨 뒤에 써주게 되면 특정 라우터에서 처리를 하고 아예 이쪽을 거치지 않게됨
      // 하지만 위에 라우터에서 next()를 똑같이 써주면 가능함.
      // 이렇게 모든 라우터에 해당되는거면 맨앞에 써주면 된다.
      // res.send를 만나면 더이상 내려가지 않는다(next를 써주지 않는 이상).
      // ** next만 추가해주면 전부다 미들웨어가 된다. 거쳐서 다른 라우터로 이동을 하게 되므로
    });

    // * json middleware
    this.app.use(express.json());
    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      console.log("this is the end");
      res.send({ error: "404 not found error" });
      // 위의 라우터를 다 거쳐도 아무곳에서도 일치하지 않아서 send를 하지 않으면
      // 결국 여기까지 내려와 404 error 리턴하도록 할 수 있다.
      // 이렇게 미들웨어는 처음, 중간, 끝 어디에도 쓸 수 있다. 즉, 유연하게 사용하여 요청에 대한 처리가 가능하다.
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server is on...");
    });
  }
}

export default Server;
