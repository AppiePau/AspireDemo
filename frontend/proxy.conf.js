const target = process.env["services__backendapi__https__0"] || process.env["services__backendapi__http__0"] || "http://localhost:5106";
const env = process.env["NODE_ENV"] || "development";

const config = [{
  context: ["/api/**"],
  target: target,
  secure: env !== "development",
  pathRewrite: {
    "^/api": "/",
  },
}];


console.log("Proxy config", config);
console.log("NODE_ENV", process.env["NODE_ENV"]);
console.log("env", env);

module.exports = config;