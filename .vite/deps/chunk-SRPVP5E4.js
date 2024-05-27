import {
  __esm
} from "./chunk-TIUEEL27.js";

// ../../.yarn/berry/cache/@emotion-memoize-npm-0.8.1-9b1e35ff15-10c0.zip/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var init_emotion_memoize_esm = __esm({
  "../../.yarn/berry/cache/@emotion-memoize-npm-0.8.1-9b1e35ff15-10c0.zip/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js"() {
  }
});

export {
  memoize,
  init_emotion_memoize_esm
};
//# sourceMappingURL=chunk-SRPVP5E4.js.map
