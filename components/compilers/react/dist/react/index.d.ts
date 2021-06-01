import '@babel/preset-env';
import '@babel/preset-react';
import '@babel/plugin-proposal-class-properties';
import '@babel/plugin-proposal-export-default-from';
import '@babel/plugin-proposal-export-namespace-from';
import '@babel/plugin-proposal-object-rest-spread';
import '@babel/plugin-proposal-optional-chaining';
import Vinyl from 'vinyl';
declare const _default: {
    compile: (files: Vinyl[], distPath: string) => any;
};
export default _default;
