import express from "express";
declare class Server {
    app: express.Application;
    constructor();
    private setRoute;
    private setMiddleware;
    listen(): void;
}
export default Server;
