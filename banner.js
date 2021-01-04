// const childProcess = require("child_process")

module.exports = function banner() {
  // const version = childProcess.execSync("git rev-parse --short HEAD")
  // const user = childProcess.execSync("git config user.name")
  const version = "latest";
  const user = "JangMyungJoo";
  const date = new Date().toLocaleString();

  return `version: ${version}` + `Build Date: ${date}\n` + `Author: ${user}`;
};
