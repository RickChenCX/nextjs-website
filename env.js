const fs = require("fs");
const path = require("path");

// 从环境变量中获取
const { NODE_ENV = "development" } = process.env;
//封装 resolve
const resolve = (p) => path.join(__dirname, p);

/**
 * 读取文件
 * 文件格式内容为
 * TEST=ABC
 * @param {路径} p 路径
 * @return [[TEST:ABC]]
 */
const readEnv = (p) => {
  return fs
    .readFileSync(resolve(p))
    .toString()
    .trim()
    .split("\n")
    .filter((l) => l.indexOf("=") !== -1)
    .map((v) => v.split("="));
};

// 读取./config/development/{RTE}中的文件，
fs.writeFileSync(
  resolve(
    `${NODE_ENV === "local" ? "./.env.development" : "./.env.production"}`
  ),
  readEnv(`./config/${NODE_ENV}`)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n")
);
