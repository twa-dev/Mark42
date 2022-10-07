module.exports = {
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};
