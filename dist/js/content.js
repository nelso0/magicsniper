/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/js/content.js ***!
  \***************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var market = '';
var collectionName = '';
var floorPrice = 0;
var totalSupply = {
  value: 0,
  real: false
};
var customSupply = {
  value: 0,
  enabled: false
};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'search') {
    var links = _toConsumableArray(document.querySelectorAll('.grid-card__main[data-score]')).filter(function (card) {
      return card.dataset.score * 1 > request.gt;
    }).map(function (card) {
      return {
        link: card.dataset.link,
        name: card.dataset.name,
        price: card.dataset.price,
        rank: card.dataset.rank * 100,
        score: card.dataset.score
      };
    });

    sendResponse(links);
    return true;
  } else if (request.action === 'get-supply') {
    sendResponse({
      totalSupply: totalSupply,
      customSupply: customSupply,
      collectionName: collectionName
    });
    return true;
  } else if (request.action === 'set-supply') {
    customSupply = request.customSupply;
    market = location.pathname.split('/').pop();
    chrome.storage.local.set(_defineProperty({}, market, request.customSupply));
    init().then(function () {
      return document.querySelectorAll('.grid-card__main').forEach(work);
    });
    sendResponse('done');
    return true;
  }
});
var interval = setInterval(function () {
  if (!document.body) return;
  var observer = new MutationObserver(pageUpdated);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  clearInterval(interval);
}, 100);

function pageUpdated(_x, _x2) {
  return _pageUpdated.apply(this, arguments);
}

function _pageUpdated() {
  _pageUpdated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(mutations, observer) {
    var nfts;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nfts = document.querySelectorAll('.grid-card__main:not(.skeleton,[data-score])');

            if (nfts.length) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            // console.log(nfts)
            init().then(function () {
              return nfts.forEach(work);
            }); // for (const mutation of mutations) {
            //     let cards = [...mutation.addedNodes].filter(i => {
            //         console.log(i);
            //         return i.nodeType === Node.ELEMENT_NODE && ((i.classList.contains('grid-card__main') && !i.classList.contains('skeleton')) || i.classList.contains('tw-flex-wrap'))
            //     })
            //     if(!cards.length) continue
            //     // console.log(cards)
            //     await init()
            //     for (const card of cards) {
            //         if(card.classList.contains('grid-card__main')) {
            //             console.log('card loaded')
            //             work(card)
            //         }
            //         else if(card.classList.contains('tw-flex-wrap')) {
            //             console.log('page loaded')
            //             document.querySelectorAll('.grid-card__main:not(.skeleton)').forEach(work)
            //         }
            //     }
            // }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _pageUpdated.apply(this, arguments);
}

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _document$querySelect, _document$querySelect2, _document$querySelect3, _document$querySelect4, _document$querySelect5, supplyTxt, floorPriceTxt, _ref, _ref2, unit, supplyNum, units, _yield$chrome$storage, supply;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            collectionName = ((_document$querySelect = document.querySelector('h1')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.innerText.trim()) || 'N/A';
            supplyTxt = (_document$querySelect2 = document.querySelector('[title="Total Supply"]')) === null || _document$querySelect2 === void 0 ? void 0 : (_document$querySelect3 = _document$querySelect2.parentElement) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.nextElementSibling.innerText;
            floorPriceTxt = (_document$querySelect4 = document.querySelector('[title="Floor Price"]')) === null || _document$querySelect4 === void 0 ? void 0 : (_document$querySelect5 = _document$querySelect4.parentElement) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.nextElementSibling.innerText;

            if (!supplyTxt) {
              _context2.next = 14;
              break;
            }

            // console.log('real supply available')
            _ref = supplyTxt.match(/[A-Z]/) || [], _ref2 = _slicedToArray(_ref, 1), unit = _ref2[0];
            supplyNum = parseFloat(supplyTxt.replace(/[^0-9\.]+/g, ''));
            units = {
              K: 1000,
              M: 1000000,
              B: 1000000000
            };
            totalSupply.value = units[unit] ? supplyNum * units[unit] : supplyNum;
            totalSupply.real = true;
            chrome.storage.local.remove(market);
            customSupply = {
              value: 0,
              enabled: false
            };
            _context2.next = 22;
            break;

          case 14:
            // console.log('real supply not available')
            market = location.pathname.split('/').pop();
            _context2.next = 17;
            return chrome.storage.local.get(_defineProperty({}, market, {
              value: 0,
              enabled: false
            }));

          case 17:
            _yield$chrome$storage = _context2.sent;
            supply = _yield$chrome$storage[market];
            customSupply = supply;
            totalSupply.value = customSupply.value;
            totalSupply.real = false; // console.log(`custom supply for [${market}]`, supply)

          case 22:
            floorPrice = floorPriceTxt ? parseFloat(floorPriceTxt.replace(/[^0-9\.]+/g, '')) : 0;
            _context2.next = 28;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 25]]);
  }));
  return _init.apply(this, arguments);
}

function work(nftCard) {
  try {
    var rank = nftCard.querySelector('a[href*="moonrank.app"] span:last-child').innerText.trim() * 1;
    var price = findElementByXpath(".//*[text()='Price']", nftCard).nextElementSibling.innerText.trim() * 1;
    var score = 100 - price / floorPrice * 7 - rank / totalSupply.value * 100 * 4.5;
    score = isFinite(score) ? (score < 0 ? 0 : score > 100 ? 100 : score).toFixed(2) : 0; // console.log('floor price:', floorPrice, 'total supply:', totalSupply.value, 'rank', rank, 'price', price, 'output', score)

    var cardFooter = nftCard.querySelector('.tw-mt-3 .tw-justify-between');

    if (cardFooter) {
      var scoreEl = cardFooter.querySelector('[data-score]');

      if (!scoreEl) {
        cardFooter.insertAdjacentHTML('beforeend', '<span class="tw-text-sm tw-text-light-gray-500">Score</span>');
        cardFooter.insertAdjacentHTML('beforeend', "<span class=\"tw-text-sm tw-text-white-2 tw-font-bold\" data-score=\"true\">".concat(score, "</span>"));
      } else {
        scoreEl.innerText = score;
      }
    }

    var nftTitle = nftCard.querySelector('a[href*="/item-details"] h6');
    nftCard.dataset.score = score;
    nftCard.dataset.link = nftTitle.closest('a').href;
    nftCard.dataset.name = nftTitle.innerText.trim();
    nftCard.dataset.price = price.toFixed(2);
    nftCard.dataset.rank = totalSupply.value > 0 ? (rank / totalSupply.value).toFixed(2) : 0;
  } catch (error) {
    console.log(error);
  }
}

function findElementByXpath(xpath) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var el = document.evaluate(xpath, parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

  if (el && el.singleNodeValue) {
    return el.singleNodeValue;
  }
}
/******/ })()
;