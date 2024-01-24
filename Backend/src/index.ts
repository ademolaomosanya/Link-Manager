import * as http from "http";
import App from "./app";
import { env, envMap } from "./config/env.config";

const usedPorts: number[] = [];
const port = envMap[env].port || 0;

App.set("port", port);
const server = http.createServer(App);
server.listen(port, () => {
  const addr = server.address();
  if (addr && typeof addr !== "string" && addr?.port) {
    usedPorts.push(addr?.port);
  }
});

server.on("listening", function (): void {
  const addr = server.address();
  const bind =
    typeof addr === "string"
      ? `pipe ${addr}`
      : `port:: ${addr?.port} family:: ${addr?.family} address:: ${addr?.address}`;
  console.info(`Listening on ${bind}`, addr);
});

process.on("SIGTERM", () => {
  if (env === "test") {
    server.close(() => {
      // console.log("...........---------👋------...........");
    });
  }
});

module.exports = App;
