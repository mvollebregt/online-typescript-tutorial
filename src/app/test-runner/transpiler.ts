import * as ts from "typescript";

const modules = new Map<string, any>();

export function register(id: string, source: string): void {
  modules.set('exports', {});
  const outputText = ts.transpileModule(source, {compilerOptions: {module: ts.ModuleKind.AMD}}).outputText;
  eval(outputText);
  modules.set(id, modules.get('exports'));
}

export function define(argNames: any[], fn: (...deps) => any): void {
  fn(...argNames.map(name => modules.get(name)));
}
