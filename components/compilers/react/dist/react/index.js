"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@babel/preset-env");
require("@babel/preset-react");
require("@babel/plugin-proposal-class-properties");
require("@babel/plugin-proposal-export-default-from");
require("@babel/plugin-proposal-export-namespace-from");
require("@babel/plugin-proposal-object-rest-spread");
require("@babel/plugin-proposal-optional-chaining");
const baseCompile = require('@bit/bit.envs.internal.babel-base-compiler');
const compiledFileTypes = ['js', 'jsx'];
const compile = (files, distPath) => {
    return baseCompile(files, distPath, __dirname, compiledFileTypes);
};
exports.default = {
    compile
};
