
  /**
   * @license
   * author: koji kanao
   * cyberfuture.js v0.1.5-beta
   * Released under the MIT license.
   */

var cyberfuture = (function () {
	'use strict';

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var reactExports = {};
	var react = {
	  get exports(){ return reactExports; },
	  set exports(v){ reactExports = v; },
	};

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	var react_production_min = {};

	var hasRequiredReact_production_min;
	function requireReact_production_min() {
	  if (hasRequiredReact_production_min) return react_production_min;
	  hasRequiredReact_production_min = 1;
	  var l = Symbol.for("react.element"),
	    n = Symbol.for("react.portal"),
	    p = Symbol.for("react.fragment"),
	    q = Symbol.for("react.strict_mode"),
	    r = Symbol.for("react.profiler"),
	    t = Symbol.for("react.provider"),
	    u = Symbol.for("react.context"),
	    v = Symbol.for("react.forward_ref"),
	    w = Symbol.for("react.suspense"),
	    x = Symbol.for("react.memo"),
	    y = Symbol.for("react.lazy"),
	    z = Symbol.iterator;
	  function A(a) {
	    if (null === a || "object" !== _typeof(a)) return null;
	    a = z && a[z] || a["@@iterator"];
	    return "function" === typeof a ? a : null;
	  }
	  var B = {
	      isMounted: function isMounted() {
	        return !1;
	      },
	      enqueueForceUpdate: function enqueueForceUpdate() {},
	      enqueueReplaceState: function enqueueReplaceState() {},
	      enqueueSetState: function enqueueSetState() {}
	    },
	    C = Object.assign,
	    D = {};
	  function E(a, b, e) {
	    this.props = a;
	    this.context = b;
	    this.refs = D;
	    this.updater = e || B;
	  }
	  E.prototype.isReactComponent = {};
	  E.prototype.setState = function (a, b) {
	    if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	    this.updater.enqueueSetState(this, a, b, "setState");
	  };
	  E.prototype.forceUpdate = function (a) {
	    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	  };
	  function F() {}
	  F.prototype = E.prototype;
	  function G(a, b, e) {
	    this.props = a;
	    this.context = b;
	    this.refs = D;
	    this.updater = e || B;
	  }
	  var H = G.prototype = new F();
	  H.constructor = G;
	  C(H, E.prototype);
	  H.isPureReactComponent = !0;
	  var I = Array.isArray,
	    J = Object.prototype.hasOwnProperty,
	    K = {
	      current: null
	    },
	    L = {
	      key: !0,
	      ref: !0,
	      __self: !0,
	      __source: !0
	    };
	  function M(a, b, e) {
	    var d,
	      c = {},
	      k = null,
	      h = null;
	    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
	    var g = arguments.length - 2;
	    if (1 === g) c.children = e;else if (1 < g) {
	      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
	      c.children = f;
	    }
	    if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
	    return {
	      $$typeof: l,
	      type: a,
	      key: k,
	      ref: h,
	      props: c,
	      _owner: K.current
	    };
	  }
	  function N(a, b) {
	    return {
	      $$typeof: l,
	      type: a.type,
	      key: b,
	      ref: a.ref,
	      props: a.props,
	      _owner: a._owner
	    };
	  }
	  function O(a) {
	    return "object" === _typeof(a) && null !== a && a.$$typeof === l;
	  }
	  function escape(a) {
	    var b = {
	      "=": "=0",
	      ":": "=2"
	    };
	    return "$" + a.replace(/[=:]/g, function (a) {
	      return b[a];
	    });
	  }
	  var P = /\/+/g;
	  function Q(a, b) {
	    return "object" === _typeof(a) && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	  }
	  function R(a, b, e, d, c) {
	    var k = _typeof(a);
	    if ("undefined" === k || "boolean" === k) a = null;
	    var h = !1;
	    if (null === a) h = !0;else switch (k) {
	      case "string":
	      case "number":
	        h = !0;
	        break;
	      case "object":
	        switch (a.$$typeof) {
	          case l:
	          case n:
	            h = !0;
	        }
	    }
	    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
	      return a;
	    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
	    h = 0;
	    d = "" === d ? "." : d + ":";
	    if (I(a)) for (var g = 0; g < a.length; g++) {
	      k = a[g];
	      var f = d + Q(k, g);
	      h += R(k, b, e, f, c);
	    } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
	    return h;
	  }
	  function S(a, b, e) {
	    if (null == a) return a;
	    var d = [],
	      c = 0;
	    R(a, d, "", "", function (a) {
	      return b.call(e, a, c++);
	    });
	    return d;
	  }
	  function T(a) {
	    if (-1 === a._status) {
	      var b = a._result;
	      b = b();
	      b.then(function (b) {
	        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
	      }, function (b) {
	        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
	      });
	      -1 === a._status && (a._status = 0, a._result = b);
	    }
	    if (1 === a._status) return a._result.default;
	    throw a._result;
	  }
	  var U = {
	      current: null
	    },
	    V = {
	      transition: null
	    },
	    W = {
	      ReactCurrentDispatcher: U,
	      ReactCurrentBatchConfig: V,
	      ReactCurrentOwner: K
	    };
	  react_production_min.Children = {
	    map: S,
	    forEach: function forEach(a, b, e) {
	      S(a, function () {
	        b.apply(this, arguments);
	      }, e);
	    },
	    count: function count(a) {
	      var b = 0;
	      S(a, function () {
	        b++;
	      });
	      return b;
	    },
	    toArray: function toArray(a) {
	      return S(a, function (a) {
	        return a;
	      }) || [];
	    },
	    only: function only(a) {
	      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
	      return a;
	    }
	  };
	  react_production_min.Component = E;
	  react_production_min.Fragment = p;
	  react_production_min.Profiler = r;
	  react_production_min.PureComponent = G;
	  react_production_min.StrictMode = q;
	  react_production_min.Suspense = w;
	  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
	  react_production_min.cloneElement = function (a, b, e) {
	    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
	    var d = C({}, a.props),
	      c = a.key,
	      k = a.ref,
	      h = a._owner;
	    if (null != b) {
	      void 0 !== b.ref && (k = b.ref, h = K.current);
	      void 0 !== b.key && (c = "" + b.key);
	      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
	      for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	    }
	    var f = arguments.length - 2;
	    if (1 === f) d.children = e;else if (1 < f) {
	      g = Array(f);
	      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
	      d.children = g;
	    }
	    return {
	      $$typeof: l,
	      type: a.type,
	      key: c,
	      ref: k,
	      props: d,
	      _owner: h
	    };
	  };
	  react_production_min.createContext = function (a) {
	    a = {
	      $$typeof: u,
	      _currentValue: a,
	      _currentValue2: a,
	      _threadCount: 0,
	      Provider: null,
	      Consumer: null,
	      _defaultValue: null,
	      _globalName: null
	    };
	    a.Provider = {
	      $$typeof: t,
	      _context: a
	    };
	    return a.Consumer = a;
	  };
	  react_production_min.createElement = M;
	  react_production_min.createFactory = function (a) {
	    var b = M.bind(null, a);
	    b.type = a;
	    return b;
	  };
	  react_production_min.createRef = function () {
	    return {
	      current: null
	    };
	  };
	  react_production_min.forwardRef = function (a) {
	    return {
	      $$typeof: v,
	      render: a
	    };
	  };
	  react_production_min.isValidElement = O;
	  react_production_min.lazy = function (a) {
	    return {
	      $$typeof: y,
	      _payload: {
	        _status: -1,
	        _result: a
	      },
	      _init: T
	    };
	  };
	  react_production_min.memo = function (a, b) {
	    return {
	      $$typeof: x,
	      type: a,
	      compare: void 0 === b ? null : b
	    };
	  };
	  react_production_min.startTransition = function (a) {
	    var b = V.transition;
	    V.transition = {};
	    try {
	      a();
	    } finally {
	      V.transition = b;
	    }
	  };
	  react_production_min.unstable_act = function () {
	    throw Error("act(...) is not supported in production builds of React.");
	  };
	  react_production_min.useCallback = function (a, b) {
	    return U.current.useCallback(a, b);
	  };
	  react_production_min.useContext = function (a) {
	    return U.current.useContext(a);
	  };
	  react_production_min.useDebugValue = function () {};
	  react_production_min.useDeferredValue = function (a) {
	    return U.current.useDeferredValue(a);
	  };
	  react_production_min.useEffect = function (a, b) {
	    return U.current.useEffect(a, b);
	  };
	  react_production_min.useId = function () {
	    return U.current.useId();
	  };
	  react_production_min.useImperativeHandle = function (a, b, e) {
	    return U.current.useImperativeHandle(a, b, e);
	  };
	  react_production_min.useInsertionEffect = function (a, b) {
	    return U.current.useInsertionEffect(a, b);
	  };
	  react_production_min.useLayoutEffect = function (a, b) {
	    return U.current.useLayoutEffect(a, b);
	  };
	  react_production_min.useMemo = function (a, b) {
	    return U.current.useMemo(a, b);
	  };
	  react_production_min.useReducer = function (a, b, e) {
	    return U.current.useReducer(a, b, e);
	  };
	  react_production_min.useRef = function (a) {
	    return U.current.useRef(a);
	  };
	  react_production_min.useState = function (a) {
	    return U.current.useState(a);
	  };
	  react_production_min.useSyncExternalStore = function (a, b, e) {
	    return U.current.useSyncExternalStore(a, b, e);
	  };
	  react_production_min.useTransition = function () {
	    return U.current.useTransition();
	  };
	  react_production_min.version = "18.2.0";
	  return react_production_min;
	}

	var react_developmentExports = {};
	var react_development = {
	  get exports(){ return react_developmentExports; },
	  set exports(v){ react_developmentExports = v; },
	};

	var hasRequiredReact_development;
	function requireReact_development() {
	  if (hasRequiredReact_development) return react_developmentExports;
	  hasRequiredReact_development = 1;
	  (function (module, exports) {

	    if (process.env.NODE_ENV !== "production") {
	      (function () {

	        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
	          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	        }
	        var ReactVersion = '18.2.0';

	        // ATTENTION
	        // When adding new symbols to this file,
	        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	        // The Symbol used to tag the ReactElement-like types.
	        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	        var REACT_MEMO_TYPE = Symbol.for('react.memo');
	        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	        var FAUX_ITERATOR_SYMBOL = '@@iterator';
	        function getIteratorFn(maybeIterable) {
	          if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
	            return null;
	          }
	          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
	          if (typeof maybeIterator === 'function') {
	            return maybeIterator;
	          }
	          return null;
	        }

	        /**
	         * Keeps track of the current dispatcher.
	         */
	        var ReactCurrentDispatcher = {
	          /**
	           * @internal
	           * @type {ReactComponent}
	           */
	          current: null
	        };

	        /**
	         * Keeps track of the current batch's configuration such as how long an update
	         * should suspend for if it needs to.
	         */
	        var ReactCurrentBatchConfig = {
	          transition: null
	        };
	        var ReactCurrentActQueue = {
	          current: null,
	          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
	          isBatchingLegacy: false,
	          didScheduleLegacyUpdate: false
	        };

	        /**
	         * Keeps track of the current owner.
	         *
	         * The current owner is the component who should own any components that are
	         * currently being constructed.
	         */
	        var ReactCurrentOwner = {
	          /**
	           * @internal
	           * @type {ReactComponent}
	           */
	          current: null
	        };
	        var ReactDebugCurrentFrame = {};
	        var currentExtraStackFrame = null;
	        function setExtraStackFrame(stack) {
	          {
	            currentExtraStackFrame = stack;
	          }
	        }
	        {
	          ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
	            {
	              currentExtraStackFrame = stack;
	            }
	          }; // Stack implementation injected by the current renderer.

	          ReactDebugCurrentFrame.getCurrentStack = null;
	          ReactDebugCurrentFrame.getStackAddendum = function () {
	            var stack = ''; // Add an extra top frame while an element is being validated

	            if (currentExtraStackFrame) {
	              stack += currentExtraStackFrame;
	            } // Delegate to the injected renderer-specific implementation

	            var impl = ReactDebugCurrentFrame.getCurrentStack;
	            if (impl) {
	              stack += impl() || '';
	            }
	            return stack;
	          };
	        }

	        // -----------------------------------------------------------------------------

	        var enableScopeAPI = false; // Experimental Create Event Handle API.
	        var enableCacheElement = false;
	        var enableTransitionTracing = false; // No known bugs, but needs performance testing

	        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	        // stuff. Intended to enable React core members to more easily debug scheduling
	        // issues in DEV builds.

	        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	        var ReactSharedInternals = {
	          ReactCurrentDispatcher: ReactCurrentDispatcher,
	          ReactCurrentBatchConfig: ReactCurrentBatchConfig,
	          ReactCurrentOwner: ReactCurrentOwner
	        };
	        {
	          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
	          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
	        }

	        // by calls to these methods by a Babel plugin.
	        //
	        // In PROD (or in packages without access to React internals),
	        // they are left as they are instead.

	        function warn(format) {
	          {
	            {
	              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	              }
	              printWarning('warn', format, args);
	            }
	          }
	        }
	        function error(format) {
	          {
	            {
	              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	              }
	              printWarning('error', format, args);
	            }
	          }
	        }
	        function printWarning(level, format, args) {
	          // When changing this logic, you might want to also
	          // update consoleWithStackDev.www.js as well.
	          {
	            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	            var stack = ReactDebugCurrentFrame.getStackAddendum();
	            if (stack !== '') {
	              format += '%s';
	              args = args.concat([stack]);
	            } // eslint-disable-next-line react-internal/safe-string-coercion

	            var argsWithFormat = args.map(function (item) {
	              return String(item);
	            }); // Careful: RN currently depends on this prefix

	            argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	            // breaks IE9: https://github.com/facebook/react/issues/13610
	            // eslint-disable-next-line react-internal/no-production-logging

	            Function.prototype.apply.call(console[level], console, argsWithFormat);
	          }
	        }
	        var didWarnStateUpdateForUnmountedComponent = {};
	        function warnNoop(publicInstance, callerName) {
	          {
	            var _constructor = publicInstance.constructor;
	            var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
	            var warningKey = componentName + "." + callerName;
	            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
	              return;
	            }
	            error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
	            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
	          }
	        }
	        /**
	         * This is the abstract API for an update queue.
	         */

	        var ReactNoopUpdateQueue = {
	          /**
	           * Checks whether or not this composite component is mounted.
	           * @param {ReactClass} publicInstance The instance we want to test.
	           * @return {boolean} True if mounted, false otherwise.
	           * @protected
	           * @final
	           */
	          isMounted: function isMounted(publicInstance) {
	            return false;
	          },
	          /**
	           * Forces an update. This should only be invoked when it is known with
	           * certainty that we are **not** in a DOM transaction.
	           *
	           * You may want to call this when you know that some deeper aspect of the
	           * component's state has changed but `setState` was not called.
	           *
	           * This will not invoke `shouldComponentUpdate`, but it will invoke
	           * `componentWillUpdate` and `componentDidUpdate`.
	           *
	           * @param {ReactClass} publicInstance The instance that should rerender.
	           * @param {?function} callback Called after component is updated.
	           * @param {?string} callerName name of the calling function in the public API.
	           * @internal
	           */
	          enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
	            warnNoop(publicInstance, 'forceUpdate');
	          },
	          /**
	           * Replaces all of the state. Always use this or `setState` to mutate state.
	           * You should treat `this.state` as immutable.
	           *
	           * There is no guarantee that `this.state` will be immediately updated, so
	           * accessing `this.state` after calling this method may return the old value.
	           *
	           * @param {ReactClass} publicInstance The instance that should rerender.
	           * @param {object} completeState Next state.
	           * @param {?function} callback Called after component is updated.
	           * @param {?string} callerName name of the calling function in the public API.
	           * @internal
	           */
	          enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
	            warnNoop(publicInstance, 'replaceState');
	          },
	          /**
	           * Sets a subset of the state. This only exists because _pendingState is
	           * internal. This provides a merging strategy that is not available to deep
	           * properties which is confusing. TODO: Expose pendingState or don't use it
	           * during the merge.
	           *
	           * @param {ReactClass} publicInstance The instance that should rerender.
	           * @param {object} partialState Next partial state to be merged with state.
	           * @param {?function} callback Called after component is updated.
	           * @param {?string} Name of the calling function in the public API.
	           * @internal
	           */
	          enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
	            warnNoop(publicInstance, 'setState');
	          }
	        };
	        var assign = Object.assign;
	        var emptyObject = {};
	        {
	          Object.freeze(emptyObject);
	        }
	        /**
	         * Base class helpers for the updating state of a component.
	         */

	        function Component(props, context, updater) {
	          this.props = props;
	          this.context = context; // If a component has string refs, we will assign a different object later.

	          this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
	          // renderer.

	          this.updater = updater || ReactNoopUpdateQueue;
	        }
	        Component.prototype.isReactComponent = {};
	        /**
	         * Sets a subset of the state. Always use this to mutate
	         * state. You should treat `this.state` as immutable.
	         *
	         * There is no guarantee that `this.state` will be immediately updated, so
	         * accessing `this.state` after calling this method may return the old value.
	         *
	         * There is no guarantee that calls to `setState` will run synchronously,
	         * as they may eventually be batched together.  You can provide an optional
	         * callback that will be executed when the call to setState is actually
	         * completed.
	         *
	         * When a function is provided to setState, it will be called at some point in
	         * the future (not synchronously). It will be called with the up to date
	         * component arguments (state, props, context). These values can be different
	         * from this.* because your function may be called after receiveProps but before
	         * shouldComponentUpdate, and this new state, props, and context will not yet be
	         * assigned to this.
	         *
	         * @param {object|function} partialState Next partial state or function to
	         *        produce next partial state to be merged with current state.
	         * @param {?function} callback Called after state is updated.
	         * @final
	         * @protected
	         */

	        Component.prototype.setState = function (partialState, callback) {
	          if (_typeof(partialState) !== 'object' && typeof partialState !== 'function' && partialState != null) {
	            throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
	          }
	          this.updater.enqueueSetState(this, partialState, callback, 'setState');
	        };
	        /**
	         * Forces an update. This should only be invoked when it is known with
	         * certainty that we are **not** in a DOM transaction.
	         *
	         * You may want to call this when you know that some deeper aspect of the
	         * component's state has changed but `setState` was not called.
	         *
	         * This will not invoke `shouldComponentUpdate`, but it will invoke
	         * `componentWillUpdate` and `componentDidUpdate`.
	         *
	         * @param {?function} callback Called after update is complete.
	         * @final
	         * @protected
	         */

	        Component.prototype.forceUpdate = function (callback) {
	          this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	        };
	        /**
	         * Deprecated APIs. These APIs used to exist on classic React classes but since
	         * we would like to deprecate them, we're not going to move them over to this
	         * modern base class. Instead, we define a getter that warns if it's accessed.
	         */

	        {
	          var deprecatedAPIs = {
	            isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	            replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	          };
	          var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
	            Object.defineProperty(Component.prototype, methodName, {
	              get: function get() {
	                warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	                return undefined;
	              }
	            });
	          };
	          for (var fnName in deprecatedAPIs) {
	            if (deprecatedAPIs.hasOwnProperty(fnName)) {
	              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	            }
	          }
	        }
	        function ComponentDummy() {}
	        ComponentDummy.prototype = Component.prototype;
	        /**
	         * Convenience component with default shallow equality check for sCU.
	         */

	        function PureComponent(props, context, updater) {
	          this.props = props;
	          this.context = context; // If a component has string refs, we will assign a different object later.

	          this.refs = emptyObject;
	          this.updater = updater || ReactNoopUpdateQueue;
	        }
	        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	        pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

	        assign(pureComponentPrototype, Component.prototype);
	        pureComponentPrototype.isPureReactComponent = true;

	        // an immutable object with a single mutable value
	        function createRef() {
	          var refObject = {
	            current: null
	          };
	          {
	            Object.seal(refObject);
	          }
	          return refObject;
	        }
	        var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	        function isArray(a) {
	          return isArrayImpl(a);
	        }

	        /*
	         * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	         * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	         *
	         * The functions in this module will throw an easier-to-understand,
	         * easier-to-debug exception with a clear errors message message explaining the
	         * problem. (Instead of a confusing exception thrown inside the implementation
	         * of the `value` object).
	         */
	        // $FlowFixMe only called in DEV, so void return is not possible.
	        function typeName(value) {
	          {
	            // toStringTag is needed for namespaced types like Temporal.Instant
	            var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	            return type;
	          }
	        } // $FlowFixMe only called in DEV, so void return is not possible.

	        function willCoercionThrow(value) {
	          {
	            try {
	              testStringCoercion(value);
	              return false;
	            } catch (e) {
	              return true;
	            }
	          }
	        }
	        function testStringCoercion(value) {
	          // If you ended up here by following an exception call stack, here's what's
	          // happened: you supplied an object or symbol value to React (as a prop, key,
	          // DOM attribute, CSS property, string ref, etc.) and when React tried to
	          // coerce it to a string using `'' + value`, an exception was thrown.
	          //
	          // The most common types that will cause this exception are `Symbol` instances
	          // and Temporal objects like `Temporal.Instant`. But any object that has a
	          // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	          // exception. (Library authors do this to prevent users from using built-in
	          // numeric operators like `+` or comparison operators like `>=` because custom
	          // methods are needed to perform accurate arithmetic or comparison.)
	          //
	          // To fix the problem, coerce this object or symbol value to a string before
	          // passing it to React. The most reliable way is usually `String(value)`.
	          //
	          // To find which value is throwing, check the browser or debugger console.
	          // Before this exception was thrown, there should be `console.error` output
	          // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	          // problem and how that type was used: key, atrribute, input value prop, etc.
	          // In most cases, this console output also shows the component and its
	          // ancestor components where the exception happened.
	          //
	          // eslint-disable-next-line react-internal/safe-string-coercion
	          return '' + value;
	        }
	        function checkKeyStringCoercion(value) {
	          {
	            if (willCoercionThrow(value)) {
	              error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
	              return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	            }
	          }
	        }

	        function getWrappedName(outerType, innerType, wrapperName) {
	          var displayName = outerType.displayName;
	          if (displayName) {
	            return displayName;
	          }
	          var functionName = innerType.displayName || innerType.name || '';
	          return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	        } // Keep in sync with react-reconciler/getComponentNameFromFiber

	        function getContextName(type) {
	          return type.displayName || 'Context';
	        } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

	        function getComponentNameFromType(type) {
	          if (type == null) {
	            // Host root, text node or just invalid type.
	            return null;
	          }
	          {
	            if (typeof type.tag === 'number') {
	              error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	            }
	          }
	          if (typeof type === 'function') {
	            return type.displayName || type.name || null;
	          }
	          if (typeof type === 'string') {
	            return type;
	          }
	          switch (type) {
	            case REACT_FRAGMENT_TYPE:
	              return 'Fragment';
	            case REACT_PORTAL_TYPE:
	              return 'Portal';
	            case REACT_PROFILER_TYPE:
	              return 'Profiler';
	            case REACT_STRICT_MODE_TYPE:
	              return 'StrictMode';
	            case REACT_SUSPENSE_TYPE:
	              return 'Suspense';
	            case REACT_SUSPENSE_LIST_TYPE:
	              return 'SuspenseList';
	          }
	          if (_typeof(type) === 'object') {
	            switch (type.$$typeof) {
	              case REACT_CONTEXT_TYPE:
	                var context = type;
	                return getContextName(context) + '.Consumer';
	              case REACT_PROVIDER_TYPE:
	                var provider = type;
	                return getContextName(provider._context) + '.Provider';
	              case REACT_FORWARD_REF_TYPE:
	                return getWrappedName(type, type.render, 'ForwardRef');
	              case REACT_MEMO_TYPE:
	                var outerName = type.displayName || null;
	                if (outerName !== null) {
	                  return outerName;
	                }
	                return getComponentNameFromType(type.type) || 'Memo';
	              case REACT_LAZY_TYPE:
	                {
	                  var lazyComponent = type;
	                  var payload = lazyComponent._payload;
	                  var init = lazyComponent._init;
	                  try {
	                    return getComponentNameFromType(init(payload));
	                  } catch (x) {
	                    return null;
	                  }
	                }

	              // eslint-disable-next-line no-fallthrough
	            }
	          }

	          return null;
	        }
	        var hasOwnProperty = Object.prototype.hasOwnProperty;
	        var RESERVED_PROPS = {
	          key: true,
	          ref: true,
	          __self: true,
	          __source: true
	        };
	        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
	        {
	          didWarnAboutStringRefs = {};
	        }
	        function hasValidRef(config) {
	          {
	            if (hasOwnProperty.call(config, 'ref')) {
	              var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	              if (getter && getter.isReactWarning) {
	                return false;
	              }
	            }
	          }
	          return config.ref !== undefined;
	        }
	        function hasValidKey(config) {
	          {
	            if (hasOwnProperty.call(config, 'key')) {
	              var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	              if (getter && getter.isReactWarning) {
	                return false;
	              }
	            }
	          }
	          return config.key !== undefined;
	        }
	        function defineKeyPropWarningGetter(props, displayName) {
	          var warnAboutAccessingKey = function warnAboutAccessingKey() {
	            {
	              if (!specialPropKeyWarningShown) {
	                specialPropKeyWarningShown = true;
	                error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	              }
	            }
	          };
	          warnAboutAccessingKey.isReactWarning = true;
	          Object.defineProperty(props, 'key', {
	            get: warnAboutAccessingKey,
	            configurable: true
	          });
	        }
	        function defineRefPropWarningGetter(props, displayName) {
	          var warnAboutAccessingRef = function warnAboutAccessingRef() {
	            {
	              if (!specialPropRefWarningShown) {
	                specialPropRefWarningShown = true;
	                error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	              }
	            }
	          };
	          warnAboutAccessingRef.isReactWarning = true;
	          Object.defineProperty(props, 'ref', {
	            get: warnAboutAccessingRef,
	            configurable: true
	          });
	        }
	        function warnIfStringRefCannotBeAutoConverted(config) {
	          {
	            if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
	              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
	              if (!didWarnAboutStringRefs[componentName]) {
	                error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
	                didWarnAboutStringRefs[componentName] = true;
	              }
	            }
	          }
	        }
	        /**
	         * Factory method to create a new React element. This no longer adheres to
	         * the class pattern, so do not use new to call it. Also, instanceof check
	         * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	         * if something is a React Element.
	         *
	         * @param {*} type
	         * @param {*} props
	         * @param {*} key
	         * @param {string|object} ref
	         * @param {*} owner
	         * @param {*} self A *temporary* helper to detect places where `this` is
	         * different from the `owner` when React.createElement is called, so that we
	         * can warn. We want to get rid of owner and replace string `ref`s with arrow
	         * functions, and as long as `this` and owner are the same, there will be no
	         * change in behavior.
	         * @param {*} source An annotation object (added by a transpiler or otherwise)
	         * indicating filename, line number, and/or other information.
	         * @internal
	         */

	        var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
	          var element = {
	            // This tag allows us to uniquely identify this as a React Element
	            $$typeof: REACT_ELEMENT_TYPE,
	            // Built-in properties that belong on the element
	            type: type,
	            key: key,
	            ref: ref,
	            props: props,
	            // Record the component responsible for creating this element.
	            _owner: owner
	          };
	          {
	            // The validation flag is currently mutative. We put it on
	            // an external backing store so that we can freeze the whole object.
	            // This can be replaced with a WeakMap once they are implemented in
	            // commonly used development environments.
	            element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	            // the validation flag non-enumerable (where possible, which should
	            // include every environment we run tests in), so the test framework
	            // ignores it.

	            Object.defineProperty(element._store, 'validated', {
	              configurable: false,
	              enumerable: false,
	              writable: true,
	              value: false
	            }); // self and source are DEV only properties.

	            Object.defineProperty(element, '_self', {
	              configurable: false,
	              enumerable: false,
	              writable: false,
	              value: self
	            }); // Two elements created in two different places should be considered
	            // equal for testing purposes and therefore we hide it from enumeration.

	            Object.defineProperty(element, '_source', {
	              configurable: false,
	              enumerable: false,
	              writable: false,
	              value: source
	            });
	            if (Object.freeze) {
	              Object.freeze(element.props);
	              Object.freeze(element);
	            }
	          }
	          return element;
	        };
	        /**
	         * Create and return a new ReactElement of the given type.
	         * See https://reactjs.org/docs/react-api.html#createelement
	         */

	        function createElement(type, config, children) {
	          var propName; // Reserved names are extracted

	          var props = {};
	          var key = null;
	          var ref = null;
	          var self = null;
	          var source = null;
	          if (config != null) {
	            if (hasValidRef(config)) {
	              ref = config.ref;
	              {
	                warnIfStringRefCannotBeAutoConverted(config);
	              }
	            }
	            if (hasValidKey(config)) {
	              {
	                checkKeyStringCoercion(config.key);
	              }
	              key = '' + config.key;
	            }
	            self = config.__self === undefined ? null : config.__self;
	            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

	            for (propName in config) {
	              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	                props[propName] = config[propName];
	              }
	            }
	          } // Children can be more than one argument, and those are transferred onto
	          // the newly allocated props object.

	          var childrenLength = arguments.length - 2;
	          if (childrenLength === 1) {
	            props.children = children;
	          } else if (childrenLength > 1) {
	            var childArray = Array(childrenLength);
	            for (var i = 0; i < childrenLength; i++) {
	              childArray[i] = arguments[i + 2];
	            }
	            {
	              if (Object.freeze) {
	                Object.freeze(childArray);
	              }
	            }
	            props.children = childArray;
	          } // Resolve default props

	          if (type && type.defaultProps) {
	            var defaultProps = type.defaultProps;
	            for (propName in defaultProps) {
	              if (props[propName] === undefined) {
	                props[propName] = defaultProps[propName];
	              }
	            }
	          }
	          {
	            if (key || ref) {
	              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	              if (key) {
	                defineKeyPropWarningGetter(props, displayName);
	              }
	              if (ref) {
	                defineRefPropWarningGetter(props, displayName);
	              }
	            }
	          }
	          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	        }
	        function cloneAndReplaceKey(oldElement, newKey) {
	          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	          return newElement;
	        }
	        /**
	         * Clone and return a new ReactElement using element as the starting point.
	         * See https://reactjs.org/docs/react-api.html#cloneelement
	         */

	        function cloneElement(element, config, children) {
	          if (element === null || element === undefined) {
	            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
	          }
	          var propName; // Original props are copied

	          var props = assign({}, element.props); // Reserved names are extracted

	          var key = element.key;
	          var ref = element.ref; // Self is preserved since the owner is preserved.

	          var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
	          // transpiler, and the original source is probably a better indicator of the
	          // true owner.

	          var source = element._source; // Owner will be preserved, unless ref is overridden

	          var owner = element._owner;
	          if (config != null) {
	            if (hasValidRef(config)) {
	              // Silently steal the ref from the parent.
	              ref = config.ref;
	              owner = ReactCurrentOwner.current;
	            }
	            if (hasValidKey(config)) {
	              {
	                checkKeyStringCoercion(config.key);
	              }
	              key = '' + config.key;
	            } // Remaining properties override existing props

	            var defaultProps;
	            if (element.type && element.type.defaultProps) {
	              defaultProps = element.type.defaultProps;
	            }
	            for (propName in config) {
	              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	                if (config[propName] === undefined && defaultProps !== undefined) {
	                  // Resolve default props
	                  props[propName] = defaultProps[propName];
	                } else {
	                  props[propName] = config[propName];
	                }
	              }
	            }
	          } // Children can be more than one argument, and those are transferred onto
	          // the newly allocated props object.

	          var childrenLength = arguments.length - 2;
	          if (childrenLength === 1) {
	            props.children = children;
	          } else if (childrenLength > 1) {
	            var childArray = Array(childrenLength);
	            for (var i = 0; i < childrenLength; i++) {
	              childArray[i] = arguments[i + 2];
	            }
	            props.children = childArray;
	          }
	          return ReactElement(element.type, key, ref, self, source, owner, props);
	        }
	        /**
	         * Verifies the object is a ReactElement.
	         * See https://reactjs.org/docs/react-api.html#isvalidelement
	         * @param {?object} object
	         * @return {boolean} True if `object` is a ReactElement.
	         * @final
	         */

	        function isValidElement(object) {
	          return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	        }
	        var SEPARATOR = '.';
	        var SUBSEPARATOR = ':';
	        /**
	         * Escape and wrap key so it is safe to use as a reactid
	         *
	         * @param {string} key to be escaped.
	         * @return {string} the escaped key.
	         */

	        function escape(key) {
	          var escapeRegex = /[=:]/g;
	          var escaperLookup = {
	            '=': '=0',
	            ':': '=2'
	          };
	          var escapedString = key.replace(escapeRegex, function (match) {
	            return escaperLookup[match];
	          });
	          return '$' + escapedString;
	        }
	        /**
	         * TODO: Test that a single child and an array with one item have the same key
	         * pattern.
	         */

	        var didWarnAboutMaps = false;
	        var userProvidedKeyEscapeRegex = /\/+/g;
	        function escapeUserProvidedKey(text) {
	          return text.replace(userProvidedKeyEscapeRegex, '$&/');
	        }
	        /**
	         * Generate a key string that identifies a element within a set.
	         *
	         * @param {*} element A element that could contain a manual key.
	         * @param {number} index Index that is used if a manual key is not provided.
	         * @return {string}
	         */

	        function getElementKey(element, index) {
	          // Do some typechecking here since we call this blindly. We want to ensure
	          // that we don't block potential future ES APIs.
	          if (_typeof(element) === 'object' && element !== null && element.key != null) {
	            // Explicit key
	            {
	              checkKeyStringCoercion(element.key);
	            }
	            return escape('' + element.key);
	          } // Implicit key determined by the index in the set

	          return index.toString(36);
	        }
	        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	          var type = _typeof(children);
	          if (type === 'undefined' || type === 'boolean') {
	            // All of the above are perceived as null.
	            children = null;
	          }
	          var invokeCallback = false;
	          if (children === null) {
	            invokeCallback = true;
	          } else {
	            switch (type) {
	              case 'string':
	              case 'number':
	                invokeCallback = true;
	                break;
	              case 'object':
	                switch (children.$$typeof) {
	                  case REACT_ELEMENT_TYPE:
	                  case REACT_PORTAL_TYPE:
	                    invokeCallback = true;
	                }
	            }
	          }
	          if (invokeCallback) {
	            var _child = children;
	            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
	            // so that it's consistent if the number of children grows:

	            var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
	            if (isArray(mappedChild)) {
	              var escapedChildKey = '';
	              if (childKey != null) {
	                escapedChildKey = escapeUserProvidedKey(childKey) + '/';
	              }
	              mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
	                return c;
	              });
	            } else if (mappedChild != null) {
	              if (isValidElement(mappedChild)) {
	                {
	                  // The `if` statement here prevents auto-disabling of the safe
	                  // coercion ESLint rule, so we must manually disable it below.
	                  // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
	                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
	                    checkKeyStringCoercion(mappedChild.key);
	                  }
	                }
	                mappedChild = cloneAndReplaceKey(mappedChild,
	                // Keep both the (mapped) and old keys if they differ, just as
	                // traverseAllChildren used to do for objects as children
	                escapedPrefix + (
	                // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
	                mappedChild.key && (!_child || _child.key !== mappedChild.key) ?
	                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
	                // eslint-disable-next-line react-internal/safe-string-coercion
	                escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
	              }
	              array.push(mappedChild);
	            }
	            return 1;
	          }
	          var child;
	          var nextName;
	          var subtreeCount = 0; // Count of children found in the current subtree.

	          var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              child = children[i];
	              nextName = nextNamePrefix + getElementKey(child, i);
	              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
	            }
	          } else {
	            var iteratorFn = getIteratorFn(children);
	            if (typeof iteratorFn === 'function') {
	              var iterableChildren = children;
	              {
	                // Warn about using Maps as children
	                if (iteratorFn === iterableChildren.entries) {
	                  if (!didWarnAboutMaps) {
	                    warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
	                  }
	                  didWarnAboutMaps = true;
	                }
	              }
	              var iterator = iteratorFn.call(iterableChildren);
	              var step;
	              var ii = 0;
	              while (!(step = iterator.next()).done) {
	                child = step.value;
	                nextName = nextNamePrefix + getElementKey(child, ii++);
	                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
	              }
	            } else if (type === 'object') {
	              // eslint-disable-next-line react-internal/safe-string-coercion
	              var childrenString = String(children);
	              throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
	            }
	          }
	          return subtreeCount;
	        }

	        /**
	         * Maps children that are typically specified as `props.children`.
	         *
	         * See https://reactjs.org/docs/react-api.html#reactchildrenmap
	         *
	         * The provided mapFunction(child, index) will be called for each
	         * leaf child.
	         *
	         * @param {?*} children Children tree container.
	         * @param {function(*, int)} func The map function.
	         * @param {*} context Context for mapFunction.
	         * @return {object} Object containing the ordered map of results.
	         */
	        function mapChildren(children, func, context) {
	          if (children == null) {
	            return children;
	          }
	          var result = [];
	          var count = 0;
	          mapIntoArray(children, result, '', '', function (child) {
	            return func.call(context, child, count++);
	          });
	          return result;
	        }
	        /**
	         * Count the number of children that are typically specified as
	         * `props.children`.
	         *
	         * See https://reactjs.org/docs/react-api.html#reactchildrencount
	         *
	         * @param {?*} children Children tree container.
	         * @return {number} The number of children.
	         */

	        function countChildren(children) {
	          var n = 0;
	          mapChildren(children, function () {
	            n++; // Don't return anything
	          });

	          return n;
	        }

	        /**
	         * Iterates through children that are typically specified as `props.children`.
	         *
	         * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
	         *
	         * The provided forEachFunc(child, index) will be called for each
	         * leaf child.
	         *
	         * @param {?*} children Children tree container.
	         * @param {function(*, int)} forEachFunc
	         * @param {*} forEachContext Context for forEachContext.
	         */
	        function forEachChildren(children, forEachFunc, forEachContext) {
	          mapChildren(children, function () {
	            forEachFunc.apply(this, arguments); // Don't return anything.
	          }, forEachContext);
	        }
	        /**
	         * Flatten a children object (typically specified as `props.children`) and
	         * return an array with appropriately re-keyed children.
	         *
	         * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
	         */

	        function toArray(children) {
	          return mapChildren(children, function (child) {
	            return child;
	          }) || [];
	        }
	        /**
	         * Returns the first child in a collection of children and verifies that there
	         * is only one child in the collection.
	         *
	         * See https://reactjs.org/docs/react-api.html#reactchildrenonly
	         *
	         * The current implementation of this function assumes that a single child gets
	         * passed without a wrapper, but the purpose of this helper function is to
	         * abstract away the particular structure of children.
	         *
	         * @param {?object} children Child collection structure.
	         * @return {ReactElement} The first and only `ReactElement` contained in the
	         * structure.
	         */

	        function onlyChild(children) {
	          if (!isValidElement(children)) {
	            throw new Error('React.Children.only expected to receive a single React element child.');
	          }
	          return children;
	        }
	        function createContext(defaultValue) {
	          // TODO: Second argument used to be an optional `calculateChangedBits`
	          // function. Warn to reserve for future use?
	          var context = {
	            $$typeof: REACT_CONTEXT_TYPE,
	            // As a workaround to support multiple concurrent renderers, we categorize
	            // some renderers as primary and others as secondary. We only expect
	            // there to be two concurrent renderers at most: React Native (primary) and
	            // Fabric (secondary); React DOM (primary) and React ART (secondary).
	            // Secondary renderers store their context values on separate fields.
	            _currentValue: defaultValue,
	            _currentValue2: defaultValue,
	            // Used to track how many concurrent renderers this context currently
	            // supports within in a single renderer. Such as parallel server rendering.
	            _threadCount: 0,
	            // These are circular
	            Provider: null,
	            Consumer: null,
	            // Add these to use same hidden class in VM as ServerContext
	            _defaultValue: null,
	            _globalName: null
	          };
	          context.Provider = {
	            $$typeof: REACT_PROVIDER_TYPE,
	            _context: context
	          };
	          var hasWarnedAboutUsingNestedContextConsumers = false;
	          var hasWarnedAboutUsingConsumerProvider = false;
	          var hasWarnedAboutDisplayNameOnConsumer = false;
	          {
	            // A separate object, but proxies back to the original context object for
	            // backwards compatibility. It has a different $$typeof, so we can properly
	            // warn for the incorrect usage of Context as a Consumer.
	            var Consumer = {
	              $$typeof: REACT_CONTEXT_TYPE,
	              _context: context
	            }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

	            Object.defineProperties(Consumer, {
	              Provider: {
	                get: function get() {
	                  if (!hasWarnedAboutUsingConsumerProvider) {
	                    hasWarnedAboutUsingConsumerProvider = true;
	                    error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
	                  }
	                  return context.Provider;
	                },
	                set: function set(_Provider) {
	                  context.Provider = _Provider;
	                }
	              },
	              _currentValue: {
	                get: function get() {
	                  return context._currentValue;
	                },
	                set: function set(_currentValue) {
	                  context._currentValue = _currentValue;
	                }
	              },
	              _currentValue2: {
	                get: function get() {
	                  return context._currentValue2;
	                },
	                set: function set(_currentValue2) {
	                  context._currentValue2 = _currentValue2;
	                }
	              },
	              _threadCount: {
	                get: function get() {
	                  return context._threadCount;
	                },
	                set: function set(_threadCount) {
	                  context._threadCount = _threadCount;
	                }
	              },
	              Consumer: {
	                get: function get() {
	                  if (!hasWarnedAboutUsingNestedContextConsumers) {
	                    hasWarnedAboutUsingNestedContextConsumers = true;
	                    error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	                  }
	                  return context.Consumer;
	                }
	              },
	              displayName: {
	                get: function get() {
	                  return context.displayName;
	                },
	                set: function set(displayName) {
	                  if (!hasWarnedAboutDisplayNameOnConsumer) {
	                    warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
	                    hasWarnedAboutDisplayNameOnConsumer = true;
	                  }
	                }
	              }
	            }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

	            context.Consumer = Consumer;
	          }
	          {
	            context._currentRenderer = null;
	            context._currentRenderer2 = null;
	          }
	          return context;
	        }
	        var Uninitialized = -1;
	        var Pending = 0;
	        var Resolved = 1;
	        var Rejected = 2;
	        function lazyInitializer(payload) {
	          if (payload._status === Uninitialized) {
	            var ctor = payload._result;
	            var thenable = ctor(); // Transition to the next state.
	            // This might throw either because it's missing or throws. If so, we treat it
	            // as still uninitialized and try again next time. Which is the same as what
	            // happens if the ctor or any wrappers processing the ctor throws. This might
	            // end up fixing it if the resolution was a concurrency bug.

	            thenable.then(function (moduleObject) {
	              if (payload._status === Pending || payload._status === Uninitialized) {
	                // Transition to the next state.
	                var resolved = payload;
	                resolved._status = Resolved;
	                resolved._result = moduleObject;
	              }
	            }, function (error) {
	              if (payload._status === Pending || payload._status === Uninitialized) {
	                // Transition to the next state.
	                var rejected = payload;
	                rejected._status = Rejected;
	                rejected._result = error;
	              }
	            });
	            if (payload._status === Uninitialized) {
	              // In case, we're still uninitialized, then we're waiting for the thenable
	              // to resolve. Set it as pending in the meantime.
	              var pending = payload;
	              pending._status = Pending;
	              pending._result = thenable;
	            }
	          }
	          if (payload._status === Resolved) {
	            var moduleObject = payload._result;
	            {
	              if (moduleObject === undefined) {
	                error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
	                // Break up imports to avoid accidentally parsing them as dependencies.
	                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
	              }
	            }
	            {
	              if (!('default' in moduleObject)) {
	                error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
	                // Break up imports to avoid accidentally parsing them as dependencies.
	                'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
	              }
	            }
	            return moduleObject.default;
	          } else {
	            throw payload._result;
	          }
	        }
	        function lazy(ctor) {
	          var payload = {
	            // We use these fields to store the result.
	            _status: Uninitialized,
	            _result: ctor
	          };
	          var lazyType = {
	            $$typeof: REACT_LAZY_TYPE,
	            _payload: payload,
	            _init: lazyInitializer
	          };
	          {
	            // In production, this would just set it on the object.
	            var defaultProps;
	            var propTypes; // $FlowFixMe

	            Object.defineProperties(lazyType, {
	              defaultProps: {
	                configurable: true,
	                get: function get() {
	                  return defaultProps;
	                },
	                set: function set(newDefaultProps) {
	                  error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
	                  defaultProps = newDefaultProps; // Match production behavior more closely:
	                  // $FlowFixMe

	                  Object.defineProperty(lazyType, 'defaultProps', {
	                    enumerable: true
	                  });
	                }
	              },
	              propTypes: {
	                configurable: true,
	                get: function get() {
	                  return propTypes;
	                },
	                set: function set(newPropTypes) {
	                  error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
	                  propTypes = newPropTypes; // Match production behavior more closely:
	                  // $FlowFixMe

	                  Object.defineProperty(lazyType, 'propTypes', {
	                    enumerable: true
	                  });
	                }
	              }
	            });
	          }
	          return lazyType;
	        }
	        function forwardRef(render) {
	          {
	            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
	              error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
	            } else if (typeof render !== 'function') {
	              error('forwardRef requires a render function but was given %s.', render === null ? 'null' : _typeof(render));
	            } else {
	              if (render.length !== 0 && render.length !== 2) {
	                error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
	              }
	            }
	            if (render != null) {
	              if (render.defaultProps != null || render.propTypes != null) {
	                error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
	              }
	            }
	          }
	          var elementType = {
	            $$typeof: REACT_FORWARD_REF_TYPE,
	            render: render
	          };
	          {
	            var ownName;
	            Object.defineProperty(elementType, 'displayName', {
	              enumerable: false,
	              configurable: true,
	              get: function get() {
	                return ownName;
	              },
	              set: function set(name) {
	                ownName = name; // The inner component shouldn't inherit this display name in most cases,
	                // because the component may be used elsewhere.
	                // But it's nice for anonymous functions to inherit the name,
	                // so that our component-stack generation logic will display their frames.
	                // An anonymous function generally suggests a pattern like:
	                //   React.forwardRef((props, ref) => {...});
	                // This kind of inner function is not used elsewhere so the side effect is okay.

	                if (!render.name && !render.displayName) {
	                  render.displayName = name;
	                }
	              }
	            });
	          }
	          return elementType;
	        }
	        var REACT_MODULE_REFERENCE;
	        {
	          REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	        }
	        function isValidElementType(type) {
	          if (typeof type === 'string' || typeof type === 'function') {
	            return true;
	          } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

	          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
	            return true;
	          }
	          if (_typeof(type) === 'object' && type !== null) {
	            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
	            // This needs to include all possible module reference object
	            // types supported by any Flight configuration anywhere since
	            // we don't know which Flight build this will end up being used
	            // with.
	            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	              return true;
	            }
	          }
	          return false;
	        }
	        function memo(type, compare) {
	          {
	            if (!isValidElementType(type)) {
	              error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : _typeof(type));
	            }
	          }
	          var elementType = {
	            $$typeof: REACT_MEMO_TYPE,
	            type: type,
	            compare: compare === undefined ? null : compare
	          };
	          {
	            var ownName;
	            Object.defineProperty(elementType, 'displayName', {
	              enumerable: false,
	              configurable: true,
	              get: function get() {
	                return ownName;
	              },
	              set: function set(name) {
	                ownName = name; // The inner component shouldn't inherit this display name in most cases,
	                // because the component may be used elsewhere.
	                // But it's nice for anonymous functions to inherit the name,
	                // so that our component-stack generation logic will display their frames.
	                // An anonymous function generally suggests a pattern like:
	                //   React.memo((props) => {...});
	                // This kind of inner function is not used elsewhere so the side effect is okay.

	                if (!type.name && !type.displayName) {
	                  type.displayName = name;
	                }
	              }
	            });
	          }
	          return elementType;
	        }
	        function resolveDispatcher() {
	          var dispatcher = ReactCurrentDispatcher.current;
	          {
	            if (dispatcher === null) {
	              error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
	            }
	          } // Will result in a null access error if accessed outside render phase. We
	          // intentionally don't throw our own error because this is in a hot path.
	          // Also helps ensure this is inlined.

	          return dispatcher;
	        }
	        function useContext(Context) {
	          var dispatcher = resolveDispatcher();
	          {
	            // TODO: add a more generic warning for invalid values.
	            if (Context._context !== undefined) {
	              var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
	              // and nobody should be using this in existing code.

	              if (realContext.Consumer === Context) {
	                error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
	              } else if (realContext.Provider === Context) {
	                error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
	              }
	            }
	          }
	          return dispatcher.useContext(Context);
	        }
	        function useState(initialState) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useState(initialState);
	        }
	        function useReducer(reducer, initialArg, init) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useReducer(reducer, initialArg, init);
	        }
	        function useRef(initialValue) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useRef(initialValue);
	        }
	        function useEffect(create, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useEffect(create, deps);
	        }
	        function useInsertionEffect(create, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useInsertionEffect(create, deps);
	        }
	        function useLayoutEffect(create, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useLayoutEffect(create, deps);
	        }
	        function useCallback(callback, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useCallback(callback, deps);
	        }
	        function useMemo(create, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useMemo(create, deps);
	        }
	        function useImperativeHandle(ref, create, deps) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useImperativeHandle(ref, create, deps);
	        }
	        function useDebugValue(value, formatterFn) {
	          {
	            var dispatcher = resolveDispatcher();
	            return dispatcher.useDebugValue(value, formatterFn);
	          }
	        }
	        function useTransition() {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useTransition();
	        }
	        function useDeferredValue(value) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useDeferredValue(value);
	        }
	        function useId() {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useId();
	        }
	        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	          var dispatcher = resolveDispatcher();
	          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	        }

	        // Helpers to patch console.logs to avoid logging during side-effect free
	        // replaying on render function. This currently only patches the object
	        // lazily which won't cover if the log function was extracted eagerly.
	        // We could also eagerly patch the method.
	        var disabledDepth = 0;
	        var prevLog;
	        var prevInfo;
	        var prevWarn;
	        var prevError;
	        var prevGroup;
	        var prevGroupCollapsed;
	        var prevGroupEnd;
	        function disabledLog() {}
	        disabledLog.__reactDisabledLog = true;
	        function disableLogs() {
	          {
	            if (disabledDepth === 0) {
	              /* eslint-disable react-internal/no-production-logging */
	              prevLog = console.log;
	              prevInfo = console.info;
	              prevWarn = console.warn;
	              prevError = console.error;
	              prevGroup = console.group;
	              prevGroupCollapsed = console.groupCollapsed;
	              prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	              var props = {
	                configurable: true,
	                enumerable: true,
	                value: disabledLog,
	                writable: true
	              }; // $FlowFixMe Flow thinks console is immutable.

	              Object.defineProperties(console, {
	                info: props,
	                log: props,
	                warn: props,
	                error: props,
	                group: props,
	                groupCollapsed: props,
	                groupEnd: props
	              });
	              /* eslint-enable react-internal/no-production-logging */
	            }

	            disabledDepth++;
	          }
	        }
	        function reenableLogs() {
	          {
	            disabledDepth--;
	            if (disabledDepth === 0) {
	              /* eslint-disable react-internal/no-production-logging */
	              var props = {
	                configurable: true,
	                enumerable: true,
	                writable: true
	              }; // $FlowFixMe Flow thinks console is immutable.

	              Object.defineProperties(console, {
	                log: assign({}, props, {
	                  value: prevLog
	                }),
	                info: assign({}, props, {
	                  value: prevInfo
	                }),
	                warn: assign({}, props, {
	                  value: prevWarn
	                }),
	                error: assign({}, props, {
	                  value: prevError
	                }),
	                group: assign({}, props, {
	                  value: prevGroup
	                }),
	                groupCollapsed: assign({}, props, {
	                  value: prevGroupCollapsed
	                }),
	                groupEnd: assign({}, props, {
	                  value: prevGroupEnd
	                })
	              });
	              /* eslint-enable react-internal/no-production-logging */
	            }

	            if (disabledDepth < 0) {
	              error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	            }
	          }
	        }
	        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
	        var prefix;
	        function describeBuiltInComponentFrame(name, source, ownerFn) {
	          {
	            if (prefix === undefined) {
	              // Extract the VM specific prefix used by each line.
	              try {
	                throw Error();
	              } catch (x) {
	                var match = x.stack.trim().match(/\n( *(at )?)/);
	                prefix = match && match[1] || '';
	              }
	            } // We use the prefix to ensure our stacks line up with native stack frames.

	            return '\n' + prefix + name;
	          }
	        }
	        var reentry = false;
	        var componentFrameCache;
	        {
	          var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	          componentFrameCache = new PossiblyWeakMap();
	        }
	        function describeNativeComponentFrame(fn, construct) {
	          // If something asked for a stack inside a fake render, it should get ignored.
	          if (!fn || reentry) {
	            return '';
	          }
	          {
	            var frame = componentFrameCache.get(fn);
	            if (frame !== undefined) {
	              return frame;
	            }
	          }
	          var control;
	          reentry = true;
	          var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	          Error.prepareStackTrace = undefined;
	          var previousDispatcher;
	          {
	            previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
	            // for warnings.

	            ReactCurrentDispatcher$1.current = null;
	            disableLogs();
	          }
	          try {
	            // This should throw.
	            if (construct) {
	              // Something should be setting the props in the constructor.
	              var Fake = function Fake() {
	                throw Error();
	              }; // $FlowFixMe

	              Object.defineProperty(Fake.prototype, 'props', {
	                set: function set() {
	                  // We use a throwing setter instead of frozen or non-writable props
	                  // because that won't throw in a non-strict mode function.
	                  throw Error();
	                }
	              });
	              if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect.construct) {
	                // We construct a different control for this case to include any extra
	                // frames added by the construct call.
	                try {
	                  Reflect.construct(Fake, []);
	                } catch (x) {
	                  control = x;
	                }
	                Reflect.construct(fn, [], Fake);
	              } else {
	                try {
	                  Fake.call();
	                } catch (x) {
	                  control = x;
	                }
	                fn.call(Fake.prototype);
	              }
	            } else {
	              try {
	                throw Error();
	              } catch (x) {
	                control = x;
	              }
	              fn();
	            }
	          } catch (sample) {
	            // This is inlined manually because closure doesn't do it for us.
	            if (sample && control && typeof sample.stack === 'string') {
	              // This extracts the first frame from the sample that isn't also in the control.
	              // Skipping one frame that we assume is the frame that calls the two.
	              var sampleLines = sample.stack.split('\n');
	              var controlLines = control.stack.split('\n');
	              var s = sampleLines.length - 1;
	              var c = controlLines.length - 1;
	              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	                // We expect at least one stack frame to be shared.
	                // Typically this will be the root most one. However, stack frames may be
	                // cut off due to maximum stack limits. In this case, one maybe cut off
	                // earlier than the other. We assume that the sample is longer or the same
	                // and there for cut off earlier. So we should find the root most frame in
	                // the sample somewhere in the control.
	                c--;
	              }
	              for (; s >= 1 && c >= 0; s--, c--) {
	                // Next we find the first one that isn't the same which should be the
	                // frame that called our sample function and the control.
	                if (sampleLines[s] !== controlLines[c]) {
	                  // In V8, the first line is describing the message but other VMs don't.
	                  // If we're about to return the first line, and the control is also on the same
	                  // line, that's a pretty good indicator that our sample threw at same line as
	                  // the control. I.e. before we entered the sample frame. So we ignore this result.
	                  // This can happen if you passed a class to function component, or non-function.
	                  if (s !== 1 || c !== 1) {
	                    do {
	                      s--;
	                      c--; // We may still have similar intermediate frames from the construct call.
	                      // The next one that isn't the same should be our match though.

	                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                        // but we have a user-provided "displayName"
	                        // splice it in to make the stack more readable.

	                        if (fn.displayName && _frame.includes('<anonymous>')) {
	                          _frame = _frame.replace('<anonymous>', fn.displayName);
	                        }
	                        {
	                          if (typeof fn === 'function') {
	                            componentFrameCache.set(fn, _frame);
	                          }
	                        } // Return the line we found.

	                        return _frame;
	                      }
	                    } while (s >= 1 && c >= 0);
	                  }
	                  break;
	                }
	              }
	            }
	          } finally {
	            reentry = false;
	            {
	              ReactCurrentDispatcher$1.current = previousDispatcher;
	              reenableLogs();
	            }
	            Error.prepareStackTrace = previousPrepareStackTrace;
	          } // Fallback to just using the name if we couldn't make it throw.

	          var name = fn ? fn.displayName || fn.name : '';
	          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
	          {
	            if (typeof fn === 'function') {
	              componentFrameCache.set(fn, syntheticFrame);
	            }
	          }
	          return syntheticFrame;
	        }
	        function describeFunctionComponentFrame(fn, source, ownerFn) {
	          {
	            return describeNativeComponentFrame(fn, false);
	          }
	        }
	        function shouldConstruct(Component) {
	          var prototype = Component.prototype;
	          return !!(prototype && prototype.isReactComponent);
	        }
	        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
	          if (type == null) {
	            return '';
	          }
	          if (typeof type === 'function') {
	            {
	              return describeNativeComponentFrame(type, shouldConstruct(type));
	            }
	          }
	          if (typeof type === 'string') {
	            return describeBuiltInComponentFrame(type);
	          }
	          switch (type) {
	            case REACT_SUSPENSE_TYPE:
	              return describeBuiltInComponentFrame('Suspense');
	            case REACT_SUSPENSE_LIST_TYPE:
	              return describeBuiltInComponentFrame('SuspenseList');
	          }
	          if (_typeof(type) === 'object') {
	            switch (type.$$typeof) {
	              case REACT_FORWARD_REF_TYPE:
	                return describeFunctionComponentFrame(type.render);
	              case REACT_MEMO_TYPE:
	                // Memo may contain any component type so we recursively resolve it.
	                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
	              case REACT_LAZY_TYPE:
	                {
	                  var lazyComponent = type;
	                  var payload = lazyComponent._payload;
	                  var init = lazyComponent._init;
	                  try {
	                    // Lazy may contain any component type so we recursively resolve it.
	                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	                  } catch (x) {}
	                }
	            }
	          }
	          return '';
	        }
	        var loggedTypeFailures = {};
	        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
	        function setCurrentlyValidatingElement(element) {
	          {
	            if (element) {
	              var owner = element._owner;
	              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	            } else {
	              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	            }
	          }
	        }
	        function checkPropTypes(typeSpecs, values, location, componentName, element) {
	          {
	            // $FlowFixMe This is okay but Flow doesn't know it.
	            var has = Function.call.bind(hasOwnProperty);
	            for (var typeSpecName in typeSpecs) {
	              if (has(typeSpecs, typeSpecName)) {
	                var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	                // fail the render phase where it didn't fail before. So we log it.
	                // After these have been cleaned up, we'll let them throw.

	                try {
	                  // This is intentionally an invariant that gets caught. It's the same
	                  // behavior as without this statement except with a better message.
	                  if (typeof typeSpecs[typeSpecName] !== 'function') {
	                    // eslint-disable-next-line react-internal/prod-error-codes
	                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	                    err.name = 'Invariant Violation';
	                    throw err;
	                  }
	                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	                } catch (ex) {
	                  error$1 = ex;
	                }
	                if (error$1 && !(error$1 instanceof Error)) {
	                  setCurrentlyValidatingElement(element);
	                  error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, _typeof(error$1));
	                  setCurrentlyValidatingElement(null);
	                }
	                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	                  // Only monitor this failure once because there tends to be a lot of the
	                  // same error.
	                  loggedTypeFailures[error$1.message] = true;
	                  setCurrentlyValidatingElement(element);
	                  error('Failed %s type: %s', location, error$1.message);
	                  setCurrentlyValidatingElement(null);
	                }
	              }
	            }
	          }
	        }
	        function setCurrentlyValidatingElement$1(element) {
	          {
	            if (element) {
	              var owner = element._owner;
	              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	              setExtraStackFrame(stack);
	            } else {
	              setExtraStackFrame(null);
	            }
	          }
	        }
	        var propTypesMisspellWarningShown;
	        {
	          propTypesMisspellWarningShown = false;
	        }
	        function getDeclarationErrorAddendum() {
	          if (ReactCurrentOwner.current) {
	            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
	            if (name) {
	              return '\n\nCheck the render method of `' + name + '`.';
	            }
	          }
	          return '';
	        }
	        function getSourceInfoErrorAddendum(source) {
	          if (source !== undefined) {
	            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	            var lineNumber = source.lineNumber;
	            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	          }
	          return '';
	        }
	        function getSourceInfoErrorAddendumForProps(elementProps) {
	          if (elementProps !== null && elementProps !== undefined) {
	            return getSourceInfoErrorAddendum(elementProps.__source);
	          }
	          return '';
	        }
	        /**
	         * Warn if there's no key explicitly set on dynamic arrays of children or
	         * object keys are not valid. This allows us to keep track of children between
	         * updates.
	         */

	        var ownerHasKeyUseWarning = {};
	        function getCurrentComponentErrorInfo(parentType) {
	          var info = getDeclarationErrorAddendum();
	          if (!info) {
	            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	            if (parentName) {
	              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	            }
	          }
	          return info;
	        }
	        /**
	         * Warn if the element doesn't have an explicit key assigned to it.
	         * This element is in an array. The array could grow and shrink or be
	         * reordered. All children that haven't already been validated are required to
	         * have a "key" property assigned to it. Error statuses are cached so a warning
	         * will only be shown once.
	         *
	         * @internal
	         * @param {ReactElement} element Element that requires a key.
	         * @param {*} parentType element's parent's type.
	         */

	        function validateExplicitKey(element, parentType) {
	          if (!element._store || element._store.validated || element.key != null) {
	            return;
	          }
	          element._store.validated = true;
	          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	            return;
	          }
	          ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	          // property, it may be the creator of the child that's responsible for
	          // assigning it a key.

	          var childOwner = '';
	          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	            // Give the component that originally created this child.
	            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	          }
	          {
	            setCurrentlyValidatingElement$1(element);
	            error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
	            setCurrentlyValidatingElement$1(null);
	          }
	        }
	        /**
	         * Ensure that every element either is passed in a static location, in an
	         * array with an explicit keys property defined, or in an object literal
	         * with valid key property.
	         *
	         * @internal
	         * @param {ReactNode} node Statically passed child of any type.
	         * @param {*} parentType node's parent's type.
	         */

	        function validateChildKeys(node, parentType) {
	          if (_typeof(node) !== 'object') {
	            return;
	          }
	          if (isArray(node)) {
	            for (var i = 0; i < node.length; i++) {
	              var child = node[i];
	              if (isValidElement(child)) {
	                validateExplicitKey(child, parentType);
	              }
	            }
	          } else if (isValidElement(node)) {
	            // This element was passed in a valid location.
	            if (node._store) {
	              node._store.validated = true;
	            }
	          } else if (node) {
	            var iteratorFn = getIteratorFn(node);
	            if (typeof iteratorFn === 'function') {
	              // Entry iterators used to provide implicit keys,
	              // but now we print a separate warning for them later.
	              if (iteratorFn !== node.entries) {
	                var iterator = iteratorFn.call(node);
	                var step;
	                while (!(step = iterator.next()).done) {
	                  if (isValidElement(step.value)) {
	                    validateExplicitKey(step.value, parentType);
	                  }
	                }
	              }
	            }
	          }
	        }
	        /**
	         * Given an element, validate that its props follow the propTypes definition,
	         * provided by the type.
	         *
	         * @param {ReactElement} element
	         */

	        function validatePropTypes(element) {
	          {
	            var type = element.type;
	            if (type === null || type === undefined || typeof type === 'string') {
	              return;
	            }
	            var propTypes;
	            if (typeof type === 'function') {
	              propTypes = type.propTypes;
	            } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
	            // Note: Memo only checks outer props here.
	            // Inner props are checked in the reconciler.
	            type.$$typeof === REACT_MEMO_TYPE)) {
	              propTypes = type.propTypes;
	            } else {
	              return;
	            }
	            if (propTypes) {
	              // Intentionally inside to avoid triggering lazy initializers:
	              var name = getComponentNameFromType(type);
	              checkPropTypes(propTypes, element.props, 'prop', name, element);
	            } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	              propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	              var _name = getComponentNameFromType(type);
	              error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	            }
	            if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	              error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	            }
	          }
	        }
	        /**
	         * Given a fragment, validate that it can only be provided with fragment props
	         * @param {ReactElement} fragment
	         */

	        function validateFragmentProps(fragment) {
	          {
	            var keys = Object.keys(fragment.props);
	            for (var i = 0; i < keys.length; i++) {
	              var key = keys[i];
	              if (key !== 'children' && key !== 'key') {
	                setCurrentlyValidatingElement$1(fragment);
	                error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
	                setCurrentlyValidatingElement$1(null);
	                break;
	              }
	            }
	            if (fragment.ref !== null) {
	              setCurrentlyValidatingElement$1(fragment);
	              error('Invalid attribute `ref` supplied to `React.Fragment`.');
	              setCurrentlyValidatingElement$1(null);
	            }
	          }
	        }
	        function createElementWithValidation(type, props, children) {
	          var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	          // succeed and there will likely be errors in render.

	          if (!validType) {
	            var info = '';
	            if (type === undefined || _typeof(type) === 'object' && type !== null && Object.keys(type).length === 0) {
	              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	            }
	            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
	            if (sourceInfo) {
	              info += sourceInfo;
	            } else {
	              info += getDeclarationErrorAddendum();
	            }
	            var typeString;
	            if (type === null) {
	              typeString = 'null';
	            } else if (isArray(type)) {
	              typeString = 'array';
	            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	              typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	              info = ' Did you accidentally export a JSX literal instead of a component?';
	            } else {
	              typeString = _typeof(type);
	            }
	            {
	              error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	            }
	          }
	          var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
	          // TODO: Drop this when these are no longer allowed as the type argument.

	          if (element == null) {
	            return element;
	          } // Skip key warning if the type isn't valid since our key validation logic
	          // doesn't expect a non-string/function type and can throw confusing errors.
	          // We don't want exception behavior to differ between dev and prod.
	          // (Rendering will throw with a helpful message and as soon as the type is
	          // fixed, the key warnings will appear.)

	          if (validType) {
	            for (var i = 2; i < arguments.length; i++) {
	              validateChildKeys(arguments[i], type);
	            }
	          }
	          if (type === REACT_FRAGMENT_TYPE) {
	            validateFragmentProps(element);
	          } else {
	            validatePropTypes(element);
	          }
	          return element;
	        }
	        var didWarnAboutDeprecatedCreateFactory = false;
	        function createFactoryWithValidation(type) {
	          var validatedFactory = createElementWithValidation.bind(null, type);
	          validatedFactory.type = type;
	          {
	            if (!didWarnAboutDeprecatedCreateFactory) {
	              didWarnAboutDeprecatedCreateFactory = true;
	              warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
	            } // Legacy hook: remove it

	            Object.defineProperty(validatedFactory, 'type', {
	              enumerable: false,
	              get: function get() {
	                warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	                Object.defineProperty(this, 'type', {
	                  value: type
	                });
	                return type;
	              }
	            });
	          }
	          return validatedFactory;
	        }
	        function cloneElementWithValidation(element, props, children) {
	          var newElement = cloneElement.apply(this, arguments);
	          for (var i = 2; i < arguments.length; i++) {
	            validateChildKeys(arguments[i], newElement.type);
	          }
	          validatePropTypes(newElement);
	          return newElement;
	        }
	        function startTransition(scope, options) {
	          var prevTransition = ReactCurrentBatchConfig.transition;
	          ReactCurrentBatchConfig.transition = {};
	          var currentTransition = ReactCurrentBatchConfig.transition;
	          {
	            ReactCurrentBatchConfig.transition._updatedFibers = new Set();
	          }
	          try {
	            scope();
	          } finally {
	            ReactCurrentBatchConfig.transition = prevTransition;
	            {
	              if (prevTransition === null && currentTransition._updatedFibers) {
	                var updatedFibersCount = currentTransition._updatedFibers.size;
	                if (updatedFibersCount > 10) {
	                  warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
	                }
	                currentTransition._updatedFibers.clear();
	              }
	            }
	          }
	        }
	        var didWarnAboutMessageChannel = false;
	        var enqueueTaskImpl = null;
	        function enqueueTask(task) {
	          if (enqueueTaskImpl === null) {
	            try {
	              // read require off the module object to get around the bundlers.
	              // we don't want them to detect a require and bundle a Node polyfill.
	              var requireString = ('require' + Math.random()).slice(0, 7);
	              var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
	              // version of setImmediate, bypassing fake timers if any.

	              enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
	            } catch (_err) {
	              // we're in a browser
	              // we can't use regular timers because they may still be faked
	              // so we try MessageChannel+postMessage instead
	              enqueueTaskImpl = function enqueueTaskImpl(callback) {
	                {
	                  if (didWarnAboutMessageChannel === false) {
	                    didWarnAboutMessageChannel = true;
	                    if (typeof MessageChannel === 'undefined') {
	                      error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
	                    }
	                  }
	                }
	                var channel = new MessageChannel();
	                channel.port1.onmessage = callback;
	                channel.port2.postMessage(undefined);
	              };
	            }
	          }
	          return enqueueTaskImpl(task);
	        }
	        var actScopeDepth = 0;
	        var didWarnNoAwaitAct = false;
	        function act(callback) {
	          {
	            // `act` calls can be nested, so we track the depth. This represents the
	            // number of `act` scopes on the stack.
	            var prevActScopeDepth = actScopeDepth;
	            actScopeDepth++;
	            if (ReactCurrentActQueue.current === null) {
	              // This is the outermost `act` scope. Initialize the queue. The reconciler
	              // will detect the queue and use it instead of Scheduler.
	              ReactCurrentActQueue.current = [];
	            }
	            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
	            var result;
	            try {
	              // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
	              // set to `true` while the given callback is executed, not for updates
	              // triggered during an async event, because this is how the legacy
	              // implementation of `act` behaved.
	              ReactCurrentActQueue.isBatchingLegacy = true;
	              result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
	              // which flushed updates immediately after the scope function exits, even
	              // if it's an async function.

	              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
	                var queue = ReactCurrentActQueue.current;
	                if (queue !== null) {
	                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
	                  flushActQueue(queue);
	                }
	              }
	            } catch (error) {
	              popActScope(prevActScopeDepth);
	              throw error;
	            } finally {
	              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
	            }
	            if (result !== null && _typeof(result) === 'object' && typeof result.then === 'function') {
	              var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
	              // for it to resolve before exiting the current scope.

	              var wasAwaited = false;
	              var thenable = {
	                then: function then(resolve, reject) {
	                  wasAwaited = true;
	                  thenableResult.then(function (returnValue) {
	                    popActScope(prevActScopeDepth);
	                    if (actScopeDepth === 0) {
	                      // We've exited the outermost act scope. Recursively flush the
	                      // queue until there's no remaining work.
	                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	                    } else {
	                      resolve(returnValue);
	                    }
	                  }, function (error) {
	                    // The callback threw an error.
	                    popActScope(prevActScopeDepth);
	                    reject(error);
	                  });
	                }
	              };
	              {
	                if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
	                  // eslint-disable-next-line no-undef
	                  Promise.resolve().then(function () {}).then(function () {
	                    if (!wasAwaited) {
	                      didWarnNoAwaitAct = true;
	                      error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
	                    }
	                  });
	                }
	              }
	              return thenable;
	            } else {
	              var returnValue = result; // The callback is not an async function. Exit the current scope
	              // immediately, without awaiting.

	              popActScope(prevActScopeDepth);
	              if (actScopeDepth === 0) {
	                // Exiting the outermost act scope. Flush the queue.
	                var _queue = ReactCurrentActQueue.current;
	                if (_queue !== null) {
	                  flushActQueue(_queue);
	                  ReactCurrentActQueue.current = null;
	                } // Return a thenable. If the user awaits it, we'll flush again in
	                // case additional work was scheduled by a microtask.

	                var _thenable = {
	                  then: function then(resolve, reject) {
	                    // Confirm we haven't re-entered another `act` scope, in case
	                    // the user does something weird like await the thenable
	                    // multiple times.
	                    if (ReactCurrentActQueue.current === null) {
	                      // Recursively flush the queue until there's no remaining work.
	                      ReactCurrentActQueue.current = [];
	                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	                    } else {
	                      resolve(returnValue);
	                    }
	                  }
	                };
	                return _thenable;
	              } else {
	                // Since we're inside a nested `act` scope, the returned thenable
	                // immediately resolves. The outer scope will flush the queue.
	                var _thenable2 = {
	                  then: function then(resolve, reject) {
	                    resolve(returnValue);
	                  }
	                };
	                return _thenable2;
	              }
	            }
	          }
	        }
	        function popActScope(prevActScopeDepth) {
	          {
	            if (prevActScopeDepth !== actScopeDepth - 1) {
	              error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
	            }
	            actScopeDepth = prevActScopeDepth;
	          }
	        }
	        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
	          {
	            var queue = ReactCurrentActQueue.current;
	            if (queue !== null) {
	              try {
	                flushActQueue(queue);
	                enqueueTask(function () {
	                  if (queue.length === 0) {
	                    // No additional work was scheduled. Finish.
	                    ReactCurrentActQueue.current = null;
	                    resolve(returnValue);
	                  } else {
	                    // Keep flushing work until there's none left.
	                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	                  }
	                });
	              } catch (error) {
	                reject(error);
	              }
	            } else {
	              resolve(returnValue);
	            }
	          }
	        }
	        var isFlushing = false;
	        function flushActQueue(queue) {
	          {
	            if (!isFlushing) {
	              // Prevent re-entrance.
	              isFlushing = true;
	              var i = 0;
	              try {
	                for (; i < queue.length; i++) {
	                  var callback = queue[i];
	                  do {
	                    callback = callback(true);
	                  } while (callback !== null);
	                }
	                queue.length = 0;
	              } catch (error) {
	                // If something throws, leave the remaining callbacks on the queue.
	                queue = queue.slice(i + 1);
	                throw error;
	              } finally {
	                isFlushing = false;
	              }
	            }
	          }
	        }
	        var createElement$1 = createElementWithValidation;
	        var cloneElement$1 = cloneElementWithValidation;
	        var createFactory = createFactoryWithValidation;
	        var Children = {
	          map: mapChildren,
	          forEach: forEachChildren,
	          count: countChildren,
	          toArray: toArray,
	          only: onlyChild
	        };
	        exports.Children = Children;
	        exports.Component = Component;
	        exports.Fragment = REACT_FRAGMENT_TYPE;
	        exports.Profiler = REACT_PROFILER_TYPE;
	        exports.PureComponent = PureComponent;
	        exports.StrictMode = REACT_STRICT_MODE_TYPE;
	        exports.Suspense = REACT_SUSPENSE_TYPE;
	        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
	        exports.cloneElement = cloneElement$1;
	        exports.createContext = createContext;
	        exports.createElement = createElement$1;
	        exports.createFactory = createFactory;
	        exports.createRef = createRef;
	        exports.forwardRef = forwardRef;
	        exports.isValidElement = isValidElement;
	        exports.lazy = lazy;
	        exports.memo = memo;
	        exports.startTransition = startTransition;
	        exports.unstable_act = act;
	        exports.useCallback = useCallback;
	        exports.useContext = useContext;
	        exports.useDebugValue = useDebugValue;
	        exports.useDeferredValue = useDeferredValue;
	        exports.useEffect = useEffect;
	        exports.useId = useId;
	        exports.useImperativeHandle = useImperativeHandle;
	        exports.useInsertionEffect = useInsertionEffect;
	        exports.useLayoutEffect = useLayoutEffect;
	        exports.useMemo = useMemo;
	        exports.useReducer = useReducer;
	        exports.useRef = useRef;
	        exports.useState = useState;
	        exports.useSyncExternalStore = useSyncExternalStore;
	        exports.useTransition = useTransition;
	        exports.version = ReactVersion;
	        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
	          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	        }
	      })();
	    }
	  })(react_development, react_developmentExports);
	  return react_developmentExports;
	}

	(function (module) {

	  if (process.env.NODE_ENV === 'production') {
	    module.exports = requireReact_production_min();
	  } else {
	    module.exports = requireReact_development();
	  }
	})(react);
	var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

	var reactIsExports$1 = {};
	var reactIs$2 = {
	  get exports(){ return reactIsExports$1; },
	  set exports(v){ reactIsExports$1 = v; },
	};

	var reactIs_production_min$1 = {};

	var hasRequiredReactIs_production_min$1;
	function requireReactIs_production_min$1() {
	  if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
	  hasRequiredReactIs_production_min$1 = 1;
	  var b = Symbol.for("react.element"),
	    c = Symbol.for("react.portal"),
	    d = Symbol.for("react.fragment"),
	    e = Symbol.for("react.strict_mode"),
	    f = Symbol.for("react.profiler"),
	    g = Symbol.for("react.provider"),
	    h = Symbol.for("react.context"),
	    k = Symbol.for("react.server_context"),
	    l = Symbol.for("react.forward_ref"),
	    m = Symbol.for("react.suspense"),
	    n = Symbol.for("react.suspense_list"),
	    p = Symbol.for("react.memo"),
	    q = Symbol.for("react.lazy"),
	    t = Symbol.for("react.offscreen"),
	    u;
	  u = Symbol.for("react.module.reference");
	  function v(a) {
	    if ("object" === _typeof(a) && null !== a) {
	      var r = a.$$typeof;
	      switch (r) {
	        case b:
	          switch (a = a.type, a) {
	            case d:
	            case f:
	            case e:
	            case m:
	            case n:
	              return a;
	            default:
	              switch (a = a && a.$$typeof, a) {
	                case k:
	                case h:
	                case l:
	                case q:
	                case p:
	                case g:
	                  return a;
	                default:
	                  return r;
	              }
	          }
	        case c:
	          return r;
	      }
	    }
	  }
	  reactIs_production_min$1.ContextConsumer = h;
	  reactIs_production_min$1.ContextProvider = g;
	  reactIs_production_min$1.Element = b;
	  reactIs_production_min$1.ForwardRef = l;
	  reactIs_production_min$1.Fragment = d;
	  reactIs_production_min$1.Lazy = q;
	  reactIs_production_min$1.Memo = p;
	  reactIs_production_min$1.Portal = c;
	  reactIs_production_min$1.Profiler = f;
	  reactIs_production_min$1.StrictMode = e;
	  reactIs_production_min$1.Suspense = m;
	  reactIs_production_min$1.SuspenseList = n;
	  reactIs_production_min$1.isAsyncMode = function () {
	    return !1;
	  };
	  reactIs_production_min$1.isConcurrentMode = function () {
	    return !1;
	  };
	  reactIs_production_min$1.isContextConsumer = function (a) {
	    return v(a) === h;
	  };
	  reactIs_production_min$1.isContextProvider = function (a) {
	    return v(a) === g;
	  };
	  reactIs_production_min$1.isElement = function (a) {
	    return "object" === _typeof(a) && null !== a && a.$$typeof === b;
	  };
	  reactIs_production_min$1.isForwardRef = function (a) {
	    return v(a) === l;
	  };
	  reactIs_production_min$1.isFragment = function (a) {
	    return v(a) === d;
	  };
	  reactIs_production_min$1.isLazy = function (a) {
	    return v(a) === q;
	  };
	  reactIs_production_min$1.isMemo = function (a) {
	    return v(a) === p;
	  };
	  reactIs_production_min$1.isPortal = function (a) {
	    return v(a) === c;
	  };
	  reactIs_production_min$1.isProfiler = function (a) {
	    return v(a) === f;
	  };
	  reactIs_production_min$1.isStrictMode = function (a) {
	    return v(a) === e;
	  };
	  reactIs_production_min$1.isSuspense = function (a) {
	    return v(a) === m;
	  };
	  reactIs_production_min$1.isSuspenseList = function (a) {
	    return v(a) === n;
	  };
	  reactIs_production_min$1.isValidElementType = function (a) {
	    return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === _typeof(a) && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? !0 : !1;
	  };
	  reactIs_production_min$1.typeOf = v;
	  return reactIs_production_min$1;
	}

	var reactIs_development$1 = {};

	var hasRequiredReactIs_development$1;
	function requireReactIs_development$1() {
	  if (hasRequiredReactIs_development$1) return reactIs_development$1;
	  hasRequiredReactIs_development$1 = 1;
	  if (process.env.NODE_ENV !== "production") {
	    (function () {

	      // ATTENTION
	      // When adding new symbols to this file,
	      // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	      // The Symbol used to tag the ReactElement-like types.
	      var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	      var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	      var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	      var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	      var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	      var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	      var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	      var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
	      var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	      var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	      var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	      var REACT_MEMO_TYPE = Symbol.for('react.memo');
	      var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	      var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

	      // -----------------------------------------------------------------------------

	      var enableScopeAPI = false; // Experimental Create Event Handle API.
	      var enableCacheElement = false;
	      var enableTransitionTracing = false; // No known bugs, but needs performance testing

	      var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	      // stuff. Intended to enable React core members to more easily debug scheduling
	      // issues in DEV builds.

	      var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	      var REACT_MODULE_REFERENCE;
	      {
	        REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	      }
	      function isValidElementType(type) {
	        if (typeof type === 'string' || typeof type === 'function') {
	          return true;
	        } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

	        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
	          return true;
	        }
	        if (_typeof(type) === 'object' && type !== null) {
	          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
	          // This needs to include all possible module reference object
	          // types supported by any Flight configuration anywhere since
	          // we don't know which Flight build this will end up being used
	          // with.
	          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	            return true;
	          }
	        }
	        return false;
	      }
	      function typeOf(object) {
	        if (_typeof(object) === 'object' && object !== null) {
	          var $$typeof = object.$$typeof;
	          switch ($$typeof) {
	            case REACT_ELEMENT_TYPE:
	              var type = object.type;
	              switch (type) {
	                case REACT_FRAGMENT_TYPE:
	                case REACT_PROFILER_TYPE:
	                case REACT_STRICT_MODE_TYPE:
	                case REACT_SUSPENSE_TYPE:
	                case REACT_SUSPENSE_LIST_TYPE:
	                  return type;
	                default:
	                  var $$typeofType = type && type.$$typeof;
	                  switch ($$typeofType) {
	                    case REACT_SERVER_CONTEXT_TYPE:
	                    case REACT_CONTEXT_TYPE:
	                    case REACT_FORWARD_REF_TYPE:
	                    case REACT_LAZY_TYPE:
	                    case REACT_MEMO_TYPE:
	                    case REACT_PROVIDER_TYPE:
	                      return $$typeofType;
	                    default:
	                      return $$typeof;
	                  }
	              }
	            case REACT_PORTAL_TYPE:
	              return $$typeof;
	          }
	        }
	        return undefined;
	      }
	      var ContextConsumer = REACT_CONTEXT_TYPE;
	      var ContextProvider = REACT_PROVIDER_TYPE;
	      var Element = REACT_ELEMENT_TYPE;
	      var ForwardRef = REACT_FORWARD_REF_TYPE;
	      var Fragment = REACT_FRAGMENT_TYPE;
	      var Lazy = REACT_LAZY_TYPE;
	      var Memo = REACT_MEMO_TYPE;
	      var Portal = REACT_PORTAL_TYPE;
	      var Profiler = REACT_PROFILER_TYPE;
	      var StrictMode = REACT_STRICT_MODE_TYPE;
	      var Suspense = REACT_SUSPENSE_TYPE;
	      var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	      var hasWarnedAboutDeprecatedIsAsyncMode = false;
	      var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	      function isAsyncMode(object) {
	        {
	          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	          }
	        }
	        return false;
	      }
	      function isConcurrentMode(object) {
	        {
	          if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	            hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	            console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	          }
	        }
	        return false;
	      }
	      function isContextConsumer(object) {
	        return typeOf(object) === REACT_CONTEXT_TYPE;
	      }
	      function isContextProvider(object) {
	        return typeOf(object) === REACT_PROVIDER_TYPE;
	      }
	      function isElement(object) {
	        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	      }
	      function isForwardRef(object) {
	        return typeOf(object) === REACT_FORWARD_REF_TYPE;
	      }
	      function isFragment(object) {
	        return typeOf(object) === REACT_FRAGMENT_TYPE;
	      }
	      function isLazy(object) {
	        return typeOf(object) === REACT_LAZY_TYPE;
	      }
	      function isMemo(object) {
	        return typeOf(object) === REACT_MEMO_TYPE;
	      }
	      function isPortal(object) {
	        return typeOf(object) === REACT_PORTAL_TYPE;
	      }
	      function isProfiler(object) {
	        return typeOf(object) === REACT_PROFILER_TYPE;
	      }
	      function isStrictMode(object) {
	        return typeOf(object) === REACT_STRICT_MODE_TYPE;
	      }
	      function isSuspense(object) {
	        return typeOf(object) === REACT_SUSPENSE_TYPE;
	      }
	      function isSuspenseList(object) {
	        return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	      }
	      reactIs_development$1.ContextConsumer = ContextConsumer;
	      reactIs_development$1.ContextProvider = ContextProvider;
	      reactIs_development$1.Element = Element;
	      reactIs_development$1.ForwardRef = ForwardRef;
	      reactIs_development$1.Fragment = Fragment;
	      reactIs_development$1.Lazy = Lazy;
	      reactIs_development$1.Memo = Memo;
	      reactIs_development$1.Portal = Portal;
	      reactIs_development$1.Profiler = Profiler;
	      reactIs_development$1.StrictMode = StrictMode;
	      reactIs_development$1.Suspense = Suspense;
	      reactIs_development$1.SuspenseList = SuspenseList;
	      reactIs_development$1.isAsyncMode = isAsyncMode;
	      reactIs_development$1.isConcurrentMode = isConcurrentMode;
	      reactIs_development$1.isContextConsumer = isContextConsumer;
	      reactIs_development$1.isContextProvider = isContextProvider;
	      reactIs_development$1.isElement = isElement;
	      reactIs_development$1.isForwardRef = isForwardRef;
	      reactIs_development$1.isFragment = isFragment;
	      reactIs_development$1.isLazy = isLazy;
	      reactIs_development$1.isMemo = isMemo;
	      reactIs_development$1.isPortal = isPortal;
	      reactIs_development$1.isProfiler = isProfiler;
	      reactIs_development$1.isStrictMode = isStrictMode;
	      reactIs_development$1.isSuspense = isSuspense;
	      reactIs_development$1.isSuspenseList = isSuspenseList;
	      reactIs_development$1.isValidElementType = isValidElementType;
	      reactIs_development$1.typeOf = typeOf;
	    })();
	  }
	  return reactIs_development$1;
	}

	(function (module) {

	  if (process.env.NODE_ENV === 'production') {
	    module.exports = requireReactIs_production_min$1();
	  } else {
	    module.exports = requireReactIs_development$1();
	  }
	})(reactIs$2);

	function stylis_min(W) {
	  function M(d, c, e, h, a) {
	    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
	      g = e.charCodeAt(l);
	      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
	      if (0 === b + n + v + m) {
	        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
	          switch (g) {
	            case 32:
	            case 9:
	            case 59:
	            case 13:
	            case 10:
	              break;
	            default:
	              f += e.charAt(l);
	          }
	          g = 59;
	        }
	        switch (g) {
	          case 123:
	            f = f.trim();
	            q = f.charCodeAt(0);
	            k = 1;
	            for (t = ++l; l < B;) {
	              switch (g = e.charCodeAt(l)) {
	                case 123:
	                  k++;
	                  break;
	                case 125:
	                  k--;
	                  break;
	                case 47:
	                  switch (g = e.charCodeAt(l + 1)) {
	                    case 42:
	                    case 47:
	                      a: {
	                        for (u = l + 1; u < J; ++u) {
	                          switch (e.charCodeAt(u)) {
	                            case 47:
	                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
	                                l = u + 1;
	                                break a;
	                              }
	                              break;
	                            case 10:
	                              if (47 === g) {
	                                l = u + 1;
	                                break a;
	                              }
	                          }
	                        }
	                        l = u;
	                      }
	                  }
	                  break;
	                case 91:
	                  g++;
	                case 40:
	                  g++;
	                case 34:
	                case 39:
	                  for (; l++ < J && e.charCodeAt(l) !== g;) {}
	              }
	              if (0 === k) break;
	              l++;
	            }
	            k = e.substring(t, l);
	            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
	            switch (q) {
	              case 64:
	                0 < r && (f = f.replace(N, ''));
	                g = f.charCodeAt(1);
	                switch (g) {
	                  case 100:
	                  case 109:
	                  case 115:
	                  case 45:
	                    r = c;
	                    break;
	                  default:
	                    r = O;
	                }
	                k = M(c, r, k, g, a + 1);
	                t = k.length;
	                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
	                if (0 < t) switch (g) {
	                  case 115:
	                    f = f.replace(da, ea);
	                  case 100:
	                  case 109:
	                  case 45:
	                    k = f + '{' + k + '}';
	                    break;
	                  case 107:
	                    f = f.replace(fa, '$1 $2');
	                    k = f + '{' + k + '}';
	                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
	                    break;
	                  default:
	                    k = f + k, 112 === h && (k = (p += k, ''));
	                } else k = '';
	                break;
	              default:
	                k = M(c, X(c, f, I), k, h, a + 1);
	            }
	            F += k;
	            k = I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	            break;
	          case 125:
	          case 59:
	            f = (0 < r ? f.replace(N, '') : f).trim();
	            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
	              case 0:
	                break;
	              case 64:
	                if (105 === g || 99 === g) {
	                  G += f + e.charAt(l);
	                  break;
	                }
	              default:
	                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
	            }
	            I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	        }
	      }
	      switch (g) {
	        case 13:
	        case 10:
	          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
	          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
	          z = 1;
	          D++;
	          break;
	        case 59:
	        case 125:
	          if (0 === b + n + v + m) {
	            z++;
	            break;
	          }
	        default:
	          z++;
	          y = e.charAt(l);
	          switch (g) {
	            case 9:
	            case 32:
	              if (0 === n + m + b) switch (x) {
	                case 44:
	                case 58:
	                case 9:
	                case 32:
	                  y = '';
	                  break;
	                default:
	                  32 !== g && (y = ' ');
	              }
	              break;
	            case 0:
	              y = '\\0';
	              break;
	            case 12:
	              y = '\\f';
	              break;
	            case 11:
	              y = '\\v';
	              break;
	            case 38:
	              0 === n + b + m && (r = I = 1, y = '\f' + y);
	              break;
	            case 108:
	              if (0 === n + b + m + E && 0 < u) switch (l - u) {
	                case 2:
	                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
	                case 8:
	                  111 === K && (E = K);
	              }
	              break;
	            case 58:
	              0 === n + b + m && (u = l);
	              break;
	            case 44:
	              0 === b + v + n + m && (r = 1, y += '\r');
	              break;
	            case 34:
	            case 39:
	              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
	              break;
	            case 91:
	              0 === n + b + v && m++;
	              break;
	            case 93:
	              0 === n + b + v && m--;
	              break;
	            case 41:
	              0 === n + b + m && v--;
	              break;
	            case 40:
	              if (0 === n + b + m) {
	                if (0 === q) switch (2 * x + 3 * K) {
	                  case 533:
	                    break;
	                  default:
	                    q = 1;
	                }
	                v++;
	              }
	              break;
	            case 64:
	              0 === b + v + n + m + u + k && (k = 1);
	              break;
	            case 42:
	            case 47:
	              if (!(0 < n + m + v)) switch (b) {
	                case 0:
	                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
	                    case 235:
	                      b = 47;
	                      break;
	                    case 220:
	                      t = l, b = 42;
	                  }
	                  break;
	                case 42:
	                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
	              }
	          }
	          0 === b && (f += y);
	      }
	      K = x;
	      x = g;
	      l++;
	    }
	    t = p.length;
	    if (0 < t) {
	      r = c;
	      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
	      p = r.join(',') + '{' + p + '}';
	      if (0 !== w * E) {
	        2 !== w || L(p, 2) || (E = 0);
	        switch (E) {
	          case 111:
	            p = p.replace(ha, ':-moz-$1') + p;
	            break;
	          case 112:
	            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
	        }
	        E = 0;
	      }
	    }
	    return G + p + F;
	  }
	  function X(d, c, e) {
	    var h = c.trim().split(ia);
	    c = h;
	    var a = h.length,
	      m = d.length;
	    switch (m) {
	      case 0:
	      case 1:
	        var b = 0;
	        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
	          c[b] = Z(d, c[b], e).trim();
	        }
	        break;
	      default:
	        var v = b = 0;
	        for (c = []; b < a; ++b) {
	          for (var n = 0; n < m; ++n) {
	            c[v++] = Z(d[n] + ' ', h[b], e).trim();
	          }
	        }
	    }
	    return c;
	  }
	  function Z(d, c, e) {
	    var h = c.charCodeAt(0);
	    33 > h && (h = (c = c.trim()).charCodeAt(0));
	    switch (h) {
	      case 38:
	        return c.replace(F, '$1' + d.trim());
	      case 58:
	        return d.trim() + c.replace(F, '$1' + d.trim());
	      default:
	        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
	    }
	    return d + c;
	  }
	  function P(d, c, e, h) {
	    var a = d + ';',
	      m = 2 * c + 3 * e + 4 * h;
	    if (944 === m) {
	      d = a.indexOf(':', 9) + 1;
	      var b = a.substring(d, a.length - 1).trim();
	      b = a.substring(0, d).trim() + b + ';';
	      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
	    }
	    if (0 === w || 2 === w && !L(a, 1)) return a;
	    switch (m) {
	      case 1015:
	        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
	      case 951:
	        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
	      case 963:
	        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
	      case 1009:
	        if (100 !== a.charCodeAt(4)) break;
	      case 969:
	      case 942:
	        return '-webkit-' + a + a;
	      case 978:
	        return '-webkit-' + a + '-moz-' + a + a;
	      case 1019:
	      case 983:
	        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
	      case 883:
	        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
	        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
	        break;
	      case 932:
	        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
	          case 103:
	            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
	          case 115:
	            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
	          case 98:
	            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
	        }
	        return '-webkit-' + a + '-ms-' + a + a;
	      case 964:
	        return '-webkit-' + a + '-ms-flex-' + a + a;
	      case 1023:
	        if (99 !== a.charCodeAt(8)) break;
	        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
	        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
	      case 1005:
	        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
	      case 1e3:
	        b = a.substring(13).trim();
	        c = b.indexOf('-') + 1;
	        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
	          case 226:
	            b = a.replace(G, 'tb');
	            break;
	          case 232:
	            b = a.replace(G, 'tb-rl');
	            break;
	          case 220:
	            b = a.replace(G, 'lr');
	            break;
	          default:
	            return a;
	        }
	        return '-webkit-' + a + '-ms-' + b + a;
	      case 1017:
	        if (-1 === a.indexOf('sticky', 9)) break;
	      case 975:
	        c = (a = d).length - 10;
	        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
	        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
	          case 203:
	            if (111 > b.charCodeAt(8)) break;
	          case 115:
	            a = a.replace(b, '-webkit-' + b) + ';' + a;
	            break;
	          case 207:
	          case 102:
	            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
	        }
	        return a + ';';
	      case 938:
	        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
	          case 105:
	            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
	          case 115:
	            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
	          default:
	            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
	        }
	        break;
	      case 973:
	      case 989:
	        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
	      case 931:
	      case 953:
	        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
	        break;
	      case 962:
	        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
	    }
	    return a;
	  }
	  function L(d, c) {
	    var e = d.indexOf(1 === c ? ':' : '{'),
	      h = d.substring(0, 3 !== c ? e : 10);
	    e = d.substring(e + 1, d.length - 1);
	    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
	  }
	  function ea(d, c) {
	    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
	    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
	  }
	  function H(d, c, e, h, a, m, b, v, n, q) {
	    for (var g = 0, x = c, w; g < A; ++g) {
	      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
	        case void 0:
	        case !1:
	        case !0:
	        case null:
	          break;
	        default:
	          x = w;
	      }
	    }
	    if (x !== c) return x;
	  }
	  function T(d) {
	    switch (d) {
	      case void 0:
	      case null:
	        A = S.length = 0;
	        break;
	      default:
	        if ('function' === typeof d) S[A++] = d;else if ('object' === _typeof(d)) for (var c = 0, e = d.length; c < e; ++c) {
	          T(d[c]);
	        } else Y = !!d | 0;
	    }
	    return T;
	  }
	  function U(d) {
	    d = d.prefix;
	    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
	    return U;
	  }
	  function B(d, c) {
	    var e = d;
	    33 > e.charCodeAt(0) && (e = e.trim());
	    V = e;
	    e = [V];
	    if (0 < A) {
	      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
	      void 0 !== h && 'string' === typeof h && (c = h);
	    }
	    var a = M(O, e, c, 0, 0);
	    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
	    V = '';
	    E = 0;
	    z = D = 1;
	    return a;
	  }
	  var ca = /^\0+/g,
	    N = /[\0\r\f]/g,
	    aa = /: */g,
	    ka = /zoo|gra/,
	    ma = /([,: ])(transform)/g,
	    ia = /,\r+?/g,
	    F = /([\t\r\n ])*\f?&/g,
	    fa = /@(k\w+)\s*(\S*)\s*/,
	    Q = /::(place)/g,
	    ha = /:(read-only)/g,
	    G = /[svh]\w+-[tblr]{2}/,
	    da = /\(\s*(.*)\s*\)/g,
	    oa = /([\s\S]*?);/g,
	    ba = /-self|flex-/g,
	    na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
	    la = /stretch|:\s*\w+\-(?:conte|avail)/,
	    ja = /([^-])(image-set\()/,
	    z = 1,
	    D = 1,
	    E = 0,
	    w = 1,
	    O = [],
	    S = [],
	    A = 0,
	    R = null,
	    Y = 0,
	    V = '';
	  B.use = T;
	  B.set = U;
	  void 0 !== W && U(W);
	  return B;
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	function memoize(fn) {
	  var cache = Object.create(null);
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

	var isPropValid = /* #__PURE__ */memoize(function (prop) {
	  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
	  /* o */ && prop.charCodeAt(1) === 110
	  /* n */ && prop.charCodeAt(2) < 91;
	}
	/* Z+1 */);

	var reactIsExports = {};
	var reactIs$1 = {
	  get exports(){ return reactIsExports; },
	  set exports(v){ reactIsExports = v; },
	};

	var reactIs_production_min = {};

	var hasRequiredReactIs_production_min;
	function requireReactIs_production_min() {
	  if (hasRequiredReactIs_production_min) return reactIs_production_min;
	  hasRequiredReactIs_production_min = 1;
	  var b = "function" === typeof Symbol && Symbol.for,
	    c = b ? Symbol.for("react.element") : 60103,
	    d = b ? Symbol.for("react.portal") : 60106,
	    e = b ? Symbol.for("react.fragment") : 60107,
	    f = b ? Symbol.for("react.strict_mode") : 60108,
	    g = b ? Symbol.for("react.profiler") : 60114,
	    h = b ? Symbol.for("react.provider") : 60109,
	    k = b ? Symbol.for("react.context") : 60110,
	    l = b ? Symbol.for("react.async_mode") : 60111,
	    m = b ? Symbol.for("react.concurrent_mode") : 60111,
	    n = b ? Symbol.for("react.forward_ref") : 60112,
	    p = b ? Symbol.for("react.suspense") : 60113,
	    q = b ? Symbol.for("react.suspense_list") : 60120,
	    r = b ? Symbol.for("react.memo") : 60115,
	    t = b ? Symbol.for("react.lazy") : 60116,
	    v = b ? Symbol.for("react.block") : 60121,
	    w = b ? Symbol.for("react.fundamental") : 60117,
	    x = b ? Symbol.for("react.responder") : 60118,
	    y = b ? Symbol.for("react.scope") : 60119;
	  function z(a) {
	    if ("object" === _typeof(a) && null !== a) {
	      var u = a.$$typeof;
	      switch (u) {
	        case c:
	          switch (a = a.type, a) {
	            case l:
	            case m:
	            case e:
	            case g:
	            case f:
	            case p:
	              return a;
	            default:
	              switch (a = a && a.$$typeof, a) {
	                case k:
	                case n:
	                case t:
	                case r:
	                case h:
	                  return a;
	                default:
	                  return u;
	              }
	          }
	        case d:
	          return u;
	      }
	    }
	  }
	  function A(a) {
	    return z(a) === m;
	  }
	  reactIs_production_min.AsyncMode = l;
	  reactIs_production_min.ConcurrentMode = m;
	  reactIs_production_min.ContextConsumer = k;
	  reactIs_production_min.ContextProvider = h;
	  reactIs_production_min.Element = c;
	  reactIs_production_min.ForwardRef = n;
	  reactIs_production_min.Fragment = e;
	  reactIs_production_min.Lazy = t;
	  reactIs_production_min.Memo = r;
	  reactIs_production_min.Portal = d;
	  reactIs_production_min.Profiler = g;
	  reactIs_production_min.StrictMode = f;
	  reactIs_production_min.Suspense = p;
	  reactIs_production_min.isAsyncMode = function (a) {
	    return A(a) || z(a) === l;
	  };
	  reactIs_production_min.isConcurrentMode = A;
	  reactIs_production_min.isContextConsumer = function (a) {
	    return z(a) === k;
	  };
	  reactIs_production_min.isContextProvider = function (a) {
	    return z(a) === h;
	  };
	  reactIs_production_min.isElement = function (a) {
	    return "object" === _typeof(a) && null !== a && a.$$typeof === c;
	  };
	  reactIs_production_min.isForwardRef = function (a) {
	    return z(a) === n;
	  };
	  reactIs_production_min.isFragment = function (a) {
	    return z(a) === e;
	  };
	  reactIs_production_min.isLazy = function (a) {
	    return z(a) === t;
	  };
	  reactIs_production_min.isMemo = function (a) {
	    return z(a) === r;
	  };
	  reactIs_production_min.isPortal = function (a) {
	    return z(a) === d;
	  };
	  reactIs_production_min.isProfiler = function (a) {
	    return z(a) === g;
	  };
	  reactIs_production_min.isStrictMode = function (a) {
	    return z(a) === f;
	  };
	  reactIs_production_min.isSuspense = function (a) {
	    return z(a) === p;
	  };
	  reactIs_production_min.isValidElementType = function (a) {
	    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	  };
	  reactIs_production_min.typeOf = z;
	  return reactIs_production_min;
	}

	var reactIs_development = {};

	var hasRequiredReactIs_development;
	function requireReactIs_development() {
	  if (hasRequiredReactIs_development) return reactIs_development;
	  hasRequiredReactIs_development = 1;
	  if (process.env.NODE_ENV !== "production") {
	    (function () {

	      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	      // nor polyfill, then a plain number is used for performance.
	      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	      // (unstable) APIs that have been removed. Can we remove the symbols?

	      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
	      function isValidElementType(type) {
	        return typeof type === 'string' || typeof type === 'function' ||
	        // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	      }
	      function typeOf(object) {
	        if (_typeof(object) === 'object' && object !== null) {
	          var $$typeof = object.$$typeof;
	          switch ($$typeof) {
	            case REACT_ELEMENT_TYPE:
	              var type = object.type;
	              switch (type) {
	                case REACT_ASYNC_MODE_TYPE:
	                case REACT_CONCURRENT_MODE_TYPE:
	                case REACT_FRAGMENT_TYPE:
	                case REACT_PROFILER_TYPE:
	                case REACT_STRICT_MODE_TYPE:
	                case REACT_SUSPENSE_TYPE:
	                  return type;
	                default:
	                  var $$typeofType = type && type.$$typeof;
	                  switch ($$typeofType) {
	                    case REACT_CONTEXT_TYPE:
	                    case REACT_FORWARD_REF_TYPE:
	                    case REACT_LAZY_TYPE:
	                    case REACT_MEMO_TYPE:
	                    case REACT_PROVIDER_TYPE:
	                      return $$typeofType;
	                    default:
	                      return $$typeof;
	                  }
	              }
	            case REACT_PORTAL_TYPE:
	              return $$typeof;
	          }
	        }
	        return undefined;
	      } // AsyncMode is deprecated along with isAsyncMode

	      var AsyncMode = REACT_ASYNC_MODE_TYPE;
	      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	      var ContextConsumer = REACT_CONTEXT_TYPE;
	      var ContextProvider = REACT_PROVIDER_TYPE;
	      var Element = REACT_ELEMENT_TYPE;
	      var ForwardRef = REACT_FORWARD_REF_TYPE;
	      var Fragment = REACT_FRAGMENT_TYPE;
	      var Lazy = REACT_LAZY_TYPE;
	      var Memo = REACT_MEMO_TYPE;
	      var Portal = REACT_PORTAL_TYPE;
	      var Profiler = REACT_PROFILER_TYPE;
	      var StrictMode = REACT_STRICT_MODE_TYPE;
	      var Suspense = REACT_SUSPENSE_TYPE;
	      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	      function isAsyncMode(object) {
	        {
	          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	          }
	        }
	        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	      }
	      function isConcurrentMode(object) {
	        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	      }
	      function isContextConsumer(object) {
	        return typeOf(object) === REACT_CONTEXT_TYPE;
	      }
	      function isContextProvider(object) {
	        return typeOf(object) === REACT_PROVIDER_TYPE;
	      }
	      function isElement(object) {
	        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	      }
	      function isForwardRef(object) {
	        return typeOf(object) === REACT_FORWARD_REF_TYPE;
	      }
	      function isFragment(object) {
	        return typeOf(object) === REACT_FRAGMENT_TYPE;
	      }
	      function isLazy(object) {
	        return typeOf(object) === REACT_LAZY_TYPE;
	      }
	      function isMemo(object) {
	        return typeOf(object) === REACT_MEMO_TYPE;
	      }
	      function isPortal(object) {
	        return typeOf(object) === REACT_PORTAL_TYPE;
	      }
	      function isProfiler(object) {
	        return typeOf(object) === REACT_PROFILER_TYPE;
	      }
	      function isStrictMode(object) {
	        return typeOf(object) === REACT_STRICT_MODE_TYPE;
	      }
	      function isSuspense(object) {
	        return typeOf(object) === REACT_SUSPENSE_TYPE;
	      }
	      reactIs_development.AsyncMode = AsyncMode;
	      reactIs_development.ConcurrentMode = ConcurrentMode;
	      reactIs_development.ContextConsumer = ContextConsumer;
	      reactIs_development.ContextProvider = ContextProvider;
	      reactIs_development.Element = Element;
	      reactIs_development.ForwardRef = ForwardRef;
	      reactIs_development.Fragment = Fragment;
	      reactIs_development.Lazy = Lazy;
	      reactIs_development.Memo = Memo;
	      reactIs_development.Portal = Portal;
	      reactIs_development.Profiler = Profiler;
	      reactIs_development.StrictMode = StrictMode;
	      reactIs_development.Suspense = Suspense;
	      reactIs_development.isAsyncMode = isAsyncMode;
	      reactIs_development.isConcurrentMode = isConcurrentMode;
	      reactIs_development.isContextConsumer = isContextConsumer;
	      reactIs_development.isContextProvider = isContextProvider;
	      reactIs_development.isElement = isElement;
	      reactIs_development.isForwardRef = isForwardRef;
	      reactIs_development.isFragment = isFragment;
	      reactIs_development.isLazy = isLazy;
	      reactIs_development.isMemo = isMemo;
	      reactIs_development.isPortal = isPortal;
	      reactIs_development.isProfiler = isProfiler;
	      reactIs_development.isStrictMode = isStrictMode;
	      reactIs_development.isSuspense = isSuspense;
	      reactIs_development.isValidElementType = isValidElementType;
	      reactIs_development.typeOf = typeOf;
	    })();
	  }
	  return reactIs_development;
	}

	(function (module) {

	  if (process.env.NODE_ENV === 'production') {
	    module.exports = requireReactIs_production_min();
	  } else {
	    module.exports = requireReactIs_development();
	  }
	})(reactIs$1);

	var reactIs = reactIsExports;

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above

	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);
	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }
	    var keys = getOwnPropertyNames(sourceComponent);
	    if (getOwnPropertySymbols$1) {
	      keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
	    }
	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];
	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }
	  return targetComponent;
	}
	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	function v() {
	  return (v = Object.assign || function (e) {
	    for (var t = 1; t < arguments.length; t++) {
	      var n = arguments[t];
	      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
	    }
	    return e;
	  }).apply(this, arguments);
	}
	var g = function g(e, t) {
	    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
	    return n;
	  },
	  S = function S(t) {
	    return null !== t && "object" == _typeof(t) && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !reactIsExports$1.typeOf(t);
	  },
	  w = Object.freeze([]),
	  E = Object.freeze({});
	function b(e) {
	  return "function" == typeof e;
	}
	function _(e) {
	  return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
	}
	function N(e) {
	  return e && "string" == typeof e.styledComponentId;
	}
	var A = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
	  I = "undefined" != typeof window && "HTMLElement" in window,
	  P = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : "production" !== process.env.NODE_ENV)),
	  R = "production" !== process.env.NODE_ENV ? {
	    1: "Cannot create styled-component for component: %s.\n\n",
	    2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
	    3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
	    4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
	    5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
	    6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
	    7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
	    8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
	    9: "Missing document `<head>`\n\n",
	    10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
	    11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
	    12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
	    13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
	    14: 'ThemeProvider: "theme" prop is required.\n\n',
	    15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
	    16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
	    17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
	  } : {};
	function D() {
	  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, r = arguments.length; n < r; n += 1) t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
	  return t.forEach(function (t) {
	    e = e.replace(/%[a-z]/, t);
	  }), e;
	}
	function j(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	  throw "production" === process.env.NODE_ENV ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) : new Error(D.apply(void 0, [R[e]].concat(n)).trim());
	}
	var T = function () {
	    function e(e) {
	      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
	    }
	    var t = e.prototype;
	    return t.indexOfGroup = function (e) {
	      for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
	      return t;
	    }, t.insertRules = function (e, t) {
	      if (e >= this.groupSizes.length) {
	        for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && j(16, "" + e);
	        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
	        for (var s = r; s < o; s++) this.groupSizes[s] = 0;
	      }
	      for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
	    }, t.clearGroup = function (e) {
	      if (e < this.length) {
	        var t = this.groupSizes[e],
	          n = this.indexOfGroup(e),
	          r = n + t;
	        this.groupSizes[e] = 0;
	        for (var o = n; o < r; o++) this.tag.deleteRule(n);
	      }
	    }, t.getGroup = function (e) {
	      var t = "";
	      if (e >= this.length || 0 === this.groupSizes[e]) return t;
	      for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += this.tag.getRule(s) + "/*!sc*/\n";
	      return t;
	    }, e;
	  }(),
	  x = new Map(),
	  k = new Map(),
	  V = 1,
	  B = function B(e) {
	    if (x.has(e)) return x.get(e);
	    for (; k.has(V);) V++;
	    var t = V++;
	    return "production" !== process.env.NODE_ENV && ((0 | t) < 0 || t > 1 << 30) && j(16, "" + t), x.set(e, t), k.set(t, e), t;
	  },
	  z = function z(e) {
	    return k.get(e);
	  },
	  M = function M(e, t) {
	    t >= V && (V = t + 1), x.set(e, t), k.set(t, e);
	  },
	  G = "style[" + A + '][data-styled-version="5.3.9"]',
	  L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
	  F = function F(e, t, n) {
	    for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
	  },
	  Y = function Y(e, t) {
	    for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
	      var i = n[o].trim();
	      if (i) {
	        var a = i.match(L);
	        if (a) {
	          var c = 0 | parseInt(a[1], 10),
	            u = a[2];
	          0 !== c && (M(u, c), F(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
	        } else r.push(i);
	      }
	    }
	  },
	  q = function q() {
	    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
	  },
	  H = function H(e) {
	    var t = document.head,
	      n = e || t,
	      r = document.createElement("style"),
	      o = function (e) {
	        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
	          var r = t[n];
	          if (r && 1 === r.nodeType && r.hasAttribute(A)) return r;
	        }
	      }(n),
	      s = void 0 !== o ? o.nextSibling : null;
	    r.setAttribute(A, "active"), r.setAttribute("data-styled-version", "5.3.9");
	    var i = q();
	    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
	  },
	  $ = function () {
	    function e(e) {
	      var t = this.element = H(e);
	      t.appendChild(document.createTextNode("")), this.sheet = function (e) {
	        if (e.sheet) return e.sheet;
	        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
	          var o = t[n];
	          if (o.ownerNode === e) return o;
	        }
	        j(17);
	      }(t), this.length = 0;
	    }
	    var t = e.prototype;
	    return t.insertRule = function (e, t) {
	      try {
	        return this.sheet.insertRule(t, e), this.length++, !0;
	      } catch (e) {
	        return !1;
	      }
	    }, t.deleteRule = function (e) {
	      this.sheet.deleteRule(e), this.length--;
	    }, t.getRule = function (e) {
	      var t = this.sheet.cssRules[e];
	      return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
	    }, e;
	  }(),
	  W = function () {
	    function e(e) {
	      var t = this.element = H(e);
	      this.nodes = t.childNodes, this.length = 0;
	    }
	    var t = e.prototype;
	    return t.insertRule = function (e, t) {
	      if (e <= this.length && e >= 0) {
	        var n = document.createTextNode(t),
	          r = this.nodes[e];
	        return this.element.insertBefore(n, r || null), this.length++, !0;
	      }
	      return !1;
	    }, t.deleteRule = function (e) {
	      this.element.removeChild(this.nodes[e]), this.length--;
	    }, t.getRule = function (e) {
	      return e < this.length ? this.nodes[e].textContent : "";
	    }, e;
	  }(),
	  U = function () {
	    function e(e) {
	      this.rules = [], this.length = 0;
	    }
	    var t = e.prototype;
	    return t.insertRule = function (e, t) {
	      return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
	    }, t.deleteRule = function (e) {
	      this.rules.splice(e, 1), this.length--;
	    }, t.getRule = function (e) {
	      return e < this.length ? this.rules[e] : "";
	    }, e;
	  }(),
	  J = I,
	  X = {
	    isServer: !I,
	    useCSSOMInjection: !P
	  },
	  Z = function () {
	    function e(e, t, n) {
	      void 0 === e && (e = E), void 0 === t && (t = {}), this.options = v({}, X, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && I && J && (J = !1, function (e) {
	        for (var t = document.querySelectorAll(G), n = 0, r = t.length; n < r; n++) {
	          var o = t[n];
	          o && "active" !== o.getAttribute(A) && (Y(e, o), o.parentNode && o.parentNode.removeChild(o));
	        }
	      }(this));
	    }
	    e.registerId = function (e) {
	      return B(e);
	    };
	    var t = e.prototype;
	    return t.reconstructWithOptions = function (t, n) {
	      return void 0 === n && (n = !0), new e(v({}, this.options, {}, t), this.gs, n && this.names || void 0);
	    }, t.allocateGSInstance = function (e) {
	      return this.gs[e] = (this.gs[e] || 0) + 1;
	    }, t.getTag = function () {
	      return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new U(o) : r ? new $(o) : new W(o), new T(e)));
	      var e, t, n, r, o;
	    }, t.hasNameForId = function (e, t) {
	      return this.names.has(e) && this.names.get(e).has(t);
	    }, t.registerName = function (e, t) {
	      if (B(e), this.names.has(e)) this.names.get(e).add(t);else {
	        var n = new Set();
	        n.add(t), this.names.set(e, n);
	      }
	    }, t.insertRules = function (e, t, n) {
	      this.registerName(e, t), this.getTag().insertRules(B(e), n);
	    }, t.clearNames = function (e) {
	      this.names.has(e) && this.names.get(e).clear();
	    }, t.clearRules = function (e) {
	      this.getTag().clearGroup(B(e)), this.clearNames(e);
	    }, t.clearTag = function () {
	      this.tag = void 0;
	    }, t.toString = function () {
	      return function (e) {
	        for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
	          var s = z(o);
	          if (void 0 !== s) {
	            var i = e.names.get(s),
	              a = t.getGroup(o);
	            if (i && a && i.size) {
	              var c = A + ".g" + o + '[id="' + s + '"]',
	                u = "";
	              void 0 !== i && i.forEach(function (e) {
	                e.length > 0 && (u += e + ",");
	              }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
	            }
	          }
	        }
	        return r;
	      }(this);
	    }, e;
	  }(),
	  K = /(a)(d)/gi,
	  Q = function Q(e) {
	    return String.fromCharCode(e + (e > 25 ? 39 : 97));
	  };
	function ee(e) {
	  var t,
	    n = "";
	  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Q(t % 52) + n;
	  return (Q(t % 52) + n).replace(K, "$1-$2");
	}
	var te = function te(e, t) {
	    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
	    return e;
	  },
	  ne = function ne(e) {
	    return te(5381, e);
	  };
	function re(e) {
	  for (var t = 0; t < e.length; t += 1) {
	    var n = e[t];
	    if (b(n) && !N(n)) return !1;
	  }
	  return !0;
	}
	var oe = ne("5.3.9"),
	  se = function () {
	    function e(e, t, n) {
	      this.rules = e, this.staticRulesId = "", this.isStatic = "production" === process.env.NODE_ENV && (void 0 === n || n.isStatic) && re(e), this.componentId = t, this.baseHash = te(oe, t), this.baseStyle = n, Z.registerId(t);
	    }
	    return e.prototype.generateAndInjectStyles = function (e, t, n) {
	      var r = this.componentId,
	        o = [];
	      if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
	        if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
	          var s = Ne(this.rules, e, t, n).join(""),
	            i = ee(te(this.baseHash, s) >>> 0);
	          if (!t.hasNameForId(r, i)) {
	            var a = n(s, "." + i, void 0, r);
	            t.insertRules(r, i, a);
	          }
	          o.push(i), this.staticRulesId = i;
	        }
	      } else {
	        for (var c = this.rules.length, u = te(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
	          var h = this.rules[d];
	          if ("string" == typeof h) l += h, "production" !== process.env.NODE_ENV && (u = te(u, h + d));else if (h) {
	            var p = Ne(h, e, t, n),
	              f = Array.isArray(p) ? p.join("") : p;
	            u = te(u, f + d), l += f;
	          }
	        }
	        if (l) {
	          var m = ee(u >>> 0);
	          if (!t.hasNameForId(r, m)) {
	            var y = n(l, "." + m, void 0, r);
	            t.insertRules(r, m, y);
	          }
	          o.push(m);
	        }
	      }
	      return o.join(" ");
	    }, e;
	  }(),
	  ie = /^\s*\/\/.*$/gm,
	  ae = [":", "[", ".", "#"];
	function ce(e) {
	  var t,
	    n,
	    r,
	    o,
	    s = void 0 === e ? E : e,
	    i = s.options,
	    a = void 0 === i ? E : i,
	    c = s.plugins,
	    u = void 0 === c ? w : c,
	    l = new stylis_min(a),
	    d = [],
	    h = function (e) {
	      function t(t) {
	        if (t) try {
	          e(t + "}");
	        } catch (e) {}
	      }
	      return function (n, r, o, s, i, a, c, u, l, d) {
	        switch (n) {
	          case 1:
	            if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
	            break;
	          case 2:
	            if (0 === u) return r + "/*|*/";
	            break;
	          case 3:
	            switch (u) {
	              case 102:
	              case 112:
	                return e(o[0] + r), "";
	              default:
	                return r + (0 === d ? "/*|*/" : "");
	            }
	          case -2:
	            r.split("/*|*/}").forEach(t);
	        }
	      };
	    }(function (e) {
	      d.push(e);
	    }),
	    f = function f(e, r, s) {
	      return 0 === r && -1 !== ae.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
	    };
	  function m(e, s, i, a) {
	    void 0 === a && (a = "&");
	    var c = e.replace(ie, ""),
	      u = s && i ? i + " " + s + " { " + c + " }" : c;
	    return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
	  }
	  return l.use([].concat(u, [function (e, t, o) {
	    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
	  }, h, function (e) {
	    if (-2 === e) {
	      var t = d;
	      return d = [], t;
	    }
	  }])), m.hash = u.length ? u.reduce(function (e, t) {
	    return t.name || j(15), te(e, t.name);
	  }, 5381).toString() : "", m;
	}
	var ue = React.createContext();
	  ue.Consumer;
	  var de = React.createContext(),
	  he = (de.Consumer, new Z()),
	  pe = ce();
	function fe() {
	  return reactExports.useContext(ue) || he;
	}
	function me() {
	  return reactExports.useContext(de) || pe;
	}
	var ve = function () {
	    function e(e, t) {
	      var n = this;
	      this.inject = function (e, t) {
	        void 0 === t && (t = pe);
	        var r = n.name + t.hash;
	        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
	      }, this.toString = function () {
	        return j(12, String(n.name));
	      }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
	    }
	    return e.prototype.getName = function (e) {
	      return void 0 === e && (e = pe), this.name + e.hash;
	    }, e;
	  }(),
	  ge = /([A-Z])/,
	  Se = /([A-Z])/g,
	  we = /^ms-/,
	  Ee = function Ee(e) {
	    return "-" + e.toLowerCase();
	  };
	function be(e) {
	  return ge.test(e) ? e.replace(Se, Ee).replace(we, "-ms-") : e;
	}
	var _e = function _e(e) {
	  return null == e || !1 === e || "" === e;
	};
	function Ne(e, n, r, o) {
	  if (Array.isArray(e)) {
	    for (var s, i = [], a = 0, c = e.length; a < c; a += 1) "" !== (s = Ne(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
	    return i;
	  }
	  if (_e(e)) return "";
	  if (N(e)) return "." + e.styledComponentId;
	  if (b(e)) {
	    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
	    var u = e(n);
	    return "production" !== process.env.NODE_ENV && reactIsExports$1.isElement(u) && console.warn(_(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Ne(u, n, r, o);
	  }
	  var l;
	  return e instanceof ve ? r ? (e.inject(r, o), e.getName(o)) : e : S(e) ? function e(t, n) {
	    var r,
	      o,
	      s = [];
	    for (var i in t) t.hasOwnProperty(i) && !_e(t[i]) && (Array.isArray(t[i]) && t[i].isCss || b(t[i]) ? s.push(be(i) + ":", t[i], ";") : S(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push(be(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in unitlessKeys ? String(o).trim() : o + "px") + ";"));
	    return n ? [n + " {"].concat(s, ["}"]) : s;
	  }(e) : e.toString();
	}
	var Ae = function Ae(e) {
	  return Array.isArray(e) && (e.isCss = !0), e;
	};
	function Ce(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	  return b(e) || S(e) ? Ae(Ne(g(w, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ae(Ne(g(e, n)));
	}
	var Ie = /invalid hook call/i,
	  Pe = new Set(),
	  Oe = function Oe(e, t) {
	    if ("production" !== process.env.NODE_ENV) {
	      var n = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
	        r = console.error;
	      try {
	        var o = !0;
	        console.error = function (e) {
	          if (Ie.test(e)) o = !1, Pe.delete(n);else {
	            for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) s[i - 1] = arguments[i];
	            r.apply(void 0, [e].concat(s));
	          }
	        }, reactExports.useRef(), o && !Pe.has(n) && (console.warn(n), Pe.add(n));
	      } catch (e) {
	        Ie.test(e.message) && Pe.delete(n);
	      } finally {
	        console.error = r;
	      }
	    }
	  },
	  Re = function Re(e, t, n) {
	    return void 0 === n && (n = E), e.theme !== n.theme && e.theme || t || n.theme;
	  },
	  De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
	  je = /(^-|-$)/g;
	function Te(e) {
	  return e.replace(De, "-").replace(je, "");
	}
	var xe = function xe(e) {
	  return ee(ne(e) >>> 0);
	};
	function ke(e) {
	  return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
	}
	var Ve = function Ve(e) {
	    return "function" == typeof e || "object" == _typeof(e) && null !== e && !Array.isArray(e);
	  },
	  Be = function Be(e) {
	    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
	  };
	function ze(e, t, n) {
	  var r = e[n];
	  Ve(t) && Ve(r) ? Me(r, t) : e[n] = t;
	}
	function Me(e) {
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	  for (var o = 0, s = n; o < s.length; o++) {
	    var i = s[o];
	    if (Ve(i)) for (var a in i) Be(a) && ze(e, i[a], a);
	  }
	  return e;
	}
	var Ge = React.createContext();
	  Ge.Consumer;
	function Fe(e) {
	  var t = reactExports.useContext(Ge),
	    n = reactExports.useMemo(function () {
	      return function (e, t) {
	        if (!e) return j(14);
	        if (b(e)) {
	          var n = e(t);
	          return "production" === process.env.NODE_ENV || null !== n && !Array.isArray(n) && "object" == _typeof(n) ? n : j(7);
	        }
	        return Array.isArray(e) || "object" != _typeof(e) ? j(8) : t ? v({}, t, {}, e) : e;
	      }(e.theme, t);
	    }, [e.theme, t]);
	  return e.children ? React.createElement(Ge.Provider, {
	    value: n
	  }, e.children) : null;
	}
	var Ye = {};
	function qe(e, t, n) {
	  var o = N(e),
	    i = !ke(e),
	    a = t.attrs,
	    c = void 0 === a ? w : a,
	    d = t.componentId,
	    h = void 0 === d ? function (e, t) {
	      var n = "string" != typeof e ? "sc" : Te(e);
	      Ye[n] = (Ye[n] || 0) + 1;
	      var r = n + "-" + xe("5.3.9" + n + Ye[n]);
	      return t ? t + "-" + r : r;
	    }(t.displayName, t.parentComponentId) : d,
	    p = t.displayName,
	    f = void 0 === p ? function (e) {
	      return ke(e) ? "styled." + e : "Styled(" + _(e) + ")";
	    }(e) : p,
	    g = t.displayName && t.componentId ? Te(t.displayName) + "-" + t.componentId : t.componentId || h,
	    S = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
	    A = t.shouldForwardProp;
	  o && e.shouldForwardProp && (A = t.shouldForwardProp ? function (n, r, o) {
	    return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
	  } : e.shouldForwardProp);
	  var C,
	    I = new se(n, g, o ? e.componentStyle : void 0),
	    P = I.isStatic && 0 === c.length,
	    O = function O(e, t) {
	      return function (e, t, n, r) {
	        var o = e.attrs,
	          i = e.componentStyle,
	          a = e.defaultProps,
	          c = e.foldedComponentIds,
	          d = e.shouldForwardProp,
	          h = e.styledComponentId,
	          p = e.target;
	        "production" !== process.env.NODE_ENV && reactExports.useDebugValue(h);
	        var f = function (e, t, n) {
	            void 0 === e && (e = E);
	            var r = v({}, t, {
	                theme: e
	              }),
	              o = {};
	            return n.forEach(function (e) {
	              var t,
	                n,
	                s,
	                i = e;
	              for (t in b(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
	            }), [r, o];
	          }(Re(t, reactExports.useContext(Ge), a) || E, t, o),
	          y = f[0],
	          g = f[1],
	          S = function (e, t, n, r) {
	            var o = fe(),
	              s = me(),
	              i = t ? e.generateAndInjectStyles(E, o, s) : e.generateAndInjectStyles(n, o, s);
	            return "production" !== process.env.NODE_ENV && reactExports.useDebugValue(i), "production" !== process.env.NODE_ENV && !t && r && r(i), i;
	          }(i, r, y, "production" !== process.env.NODE_ENV ? e.warnTooManyClasses : void 0),
	          w = n,
	          _ = g.$as || t.$as || g.as || t.as || p,
	          N = ke(_),
	          A = g !== t ? v({}, t, {}, g) : t,
	          C = {};
	        for (var I in A) "$" !== I[0] && "as" !== I && ("forwardedAs" === I ? C.as = A[I] : (d ? d(I, isPropValid, _) : !N || isPropValid(I)) && (C[I] = A[I]));
	        return t.style && g.style !== t.style && (C.style = v({}, t.style, {}, g.style)), C.className = Array.prototype.concat(c, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "), C.ref = w, reactExports.createElement(_, C);
	      }(C, e, t, P);
	    };
	  return O.displayName = f, (C = React.forwardRef(O)).attrs = S, C.componentStyle = I, C.displayName = f, C.shouldForwardProp = A, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : w, C.styledComponentId = g, C.target = o ? e.target : e, C.withComponent = function (e) {
	    var r = t.componentId,
	      o = function (e, t) {
	        if (null == e) return {};
	        var n,
	          r,
	          o = {},
	          s = Object.keys(e);
	        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
	        return o;
	      }(t, ["componentId"]),
	      s = r && r + "-" + (ke(e) ? e : Te(_(e)));
	    return qe(e, v({}, o, {
	      attrs: S,
	      componentId: s
	    }), n);
	  }, Object.defineProperty(C, "defaultProps", {
	    get: function get() {
	      return this._foldedDefaultProps;
	    },
	    set: function set(t) {
	      this._foldedDefaultProps = o ? Me({}, e.defaultProps, t) : t;
	    }
	  }), "production" !== process.env.NODE_ENV && (Oe(f, g), C.warnTooManyClasses = function (e, t) {
	    var n = {},
	      r = !1;
	    return function (o) {
	      if (!r && (n[o] = !0, Object.keys(n).length >= 200)) {
	        var s = t ? ' with the id of "' + t + '"' : "";
	        console.warn("Over 200 classes were generated for component " + e + s + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r = !0, n = {};
	      }
	    };
	  }(f, g)), Object.defineProperty(C, "toString", {
	    value: function value() {
	      return "." + C.styledComponentId;
	    }
	  }), i && hoistNonReactStatics_cjs(C, e, {
	    attrs: !0,
	    componentStyle: !0,
	    displayName: !0,
	    foldedComponentIds: !0,
	    shouldForwardProp: !0,
	    styledComponentId: !0,
	    target: !0,
	    withComponent: !0
	  }), C;
	}
	var He = function He(e) {
	  return function e(t, r, o) {
	    if (void 0 === o && (o = E), !reactIsExports$1.isValidElementType(r)) return j(1, String(r));
	    var s = function s() {
	      return t(r, o, Ce.apply(void 0, arguments));
	    };
	    return s.withConfig = function (n) {
	      return e(t, r, v({}, o, {}, n));
	    }, s.attrs = function (n) {
	      return e(t, r, v({}, o, {
	        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
	      }));
	    }, s;
	  }(qe, e);
	};
	["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function (e) {
	  He[e] = He(e);
	});
	function Ue(e) {
	  "production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
	  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	  var o = Ce.apply(void 0, [e].concat(n)).join(""),
	    s = xe(o);
	  return new ve(s, o);
	}
	"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
	var styled = He;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }
	  return Object(val);
	}
	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    }

	    // Detect buggy property enumeration order in older V8 versions.

	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
	    test1[5] = 'de';
	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test2 = {};
	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }
	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });
	    if (order2.join('') !== '0123456789') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });
	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }
	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}
	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;
	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	    if (getOwnPropertySymbols) {
	      symbols = getOwnPropertySymbols(from);
	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }
	  return to;
	};

	var merge = function merge(a, b) {
	  var result = objectAssign({}, a, b);
	  for (var key in a) {
	    var _assign;
	    if (!a[key] || _typeof(b[key]) !== 'object') continue;
	    objectAssign(result, (_assign = {}, _assign[key] = objectAssign(a[key], b[key]), _assign));
	  }
	  return result;
	}; // sort object-value responsive styles

	var sort = function sort(obj) {
	  var next = {};
	  Object.keys(obj).sort(function (a, b) {
	    return a.localeCompare(b, undefined, {
	      numeric: true,
	      sensitivity: 'base'
	    });
	  }).forEach(function (key) {
	    next[key] = obj[key];
	  });
	  return next;
	};
	var defaults$4 = {
	  breakpoints: [40, 52, 64].map(function (n) {
	    return n + 'em';
	  })
	};
	var createMediaQuery = function createMediaQuery(n) {
	  return "@media screen and (min-width: " + n + ")";
	};
	var getValue = function getValue(n, scale) {
	  return get$1(scale, n, n);
	};
	var get$1 = function get(obj, key, def, p, undef) {
	  key = key && key.split ? key.split('.') : [key];
	  for (p = 0; p < key.length; p++) {
	    obj = obj ? obj[key[p]] : undef;
	  }
	  return obj === undef ? def : obj;
	};
	var createParser = function createParser(config) {
	  var cache = {};
	  var parse = function parse(props) {
	    var styles = {};
	    var shouldSort = false;
	    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;
	    for (var key in props) {
	      if (!config[key]) continue;
	      var sx = config[key];
	      var raw = props[key];
	      var scale = get$1(props.theme, sx.scale, sx.defaults);
	      if (_typeof(raw) === 'object') {
	        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get$1(props.theme, 'breakpoints', defaults$4.breakpoints);
	        if (Array.isArray(raw)) {
	          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
	          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
	          continue;
	        }
	        if (raw !== null) {
	          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
	          shouldSort = true;
	        }
	        continue;
	      }
	      objectAssign(styles, sx(raw, scale, props));
	    } // sort object-based responsive styles

	    if (shouldSort) {
	      styles = sort(styles);
	    }
	    return styles;
	  };
	  parse.config = config;
	  parse.propNames = Object.keys(config);
	  parse.cache = cache;
	  var keys = Object.keys(config).filter(function (k) {
	    return k !== 'config';
	  });
	  if (keys.length > 1) {
	    keys.forEach(function (key) {
	      var _createParser;
	      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
	    });
	  }
	  return parse;
	};
	var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
	  var styles = {};
	  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
	    var media = mediaQueries[i];
	    var style = sx(value, scale, _props);
	    if (!media) {
	      objectAssign(styles, style);
	    } else {
	      var _assign2;
	      objectAssign(styles, (_assign2 = {}, _assign2[media] = objectAssign({}, styles[media], style), _assign2));
	    }
	  });
	  return styles;
	};
	var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
	  var styles = {};
	  for (var key in raw) {
	    var breakpoint = breakpoints[key];
	    var value = raw[key];
	    var style = sx(value, scale, _props);
	    if (!breakpoint) {
	      objectAssign(styles, style);
	    } else {
	      var _assign3;
	      var media = createMediaQuery(breakpoint);
	      objectAssign(styles, (_assign3 = {}, _assign3[media] = objectAssign({}, styles[media], style), _assign3));
	    }
	  }
	  return styles;
	};
	var createStyleFunction = function createStyleFunction(_ref) {
	  var properties = _ref.properties,
	    property = _ref.property,
	    scale = _ref.scale,
	    _ref$transform = _ref.transform,
	    transform = _ref$transform === void 0 ? getValue : _ref$transform,
	    defaultScale = _ref.defaultScale;
	  properties = properties || [property];
	  var sx = function sx(value, scale, _props) {
	    var result = {};
	    var n = transform(value, scale, _props);
	    if (n === null) return;
	    properties.forEach(function (prop) {
	      result[prop] = n;
	    });
	    return result;
	  };
	  sx.scale = scale;
	  sx.defaults = defaultScale;
	  return sx;
	}; // new v5 API

	var system = function system(args) {
	  if (args === void 0) {
	    args = {};
	  }
	  var config = {};
	  Object.keys(args).forEach(function (key) {
	    var conf = args[key];
	    if (conf === true) {
	      // shortcut definition
	      config[key] = createStyleFunction({
	        property: key,
	        scale: key
	      });
	      return;
	    }
	    if (typeof conf === 'function') {
	      config[key] = conf;
	      return;
	    }
	    config[key] = createStyleFunction(conf);
	  });
	  var parser = createParser(config);
	  return parser;
	};
	var compose = function compose() {
	  var config = {};
	  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
	    parsers[_key] = arguments[_key];
	  }
	  parsers.forEach(function (parser) {
	    if (!parser || !parser.config) return;
	    objectAssign(config, parser.config);
	  });
	  var parser = createParser(config);
	  return parser;
	};

	var isNumber$1 = function isNumber(n) {
	  return typeof n === 'number' && !isNaN(n);
	};
	var getWidth = function getWidth(n, scale) {
	  return get$1(scale, n, !isNumber$1(n) || n > 1 ? n : n * 100 + '%');
	};
	var config$7 = {
	  width: {
	    property: 'width',
	    scale: 'sizes',
	    transform: getWidth
	  },
	  height: {
	    property: 'height',
	    scale: 'sizes'
	  },
	  minWidth: {
	    property: 'minWidth',
	    scale: 'sizes'
	  },
	  minHeight: {
	    property: 'minHeight',
	    scale: 'sizes'
	  },
	  maxWidth: {
	    property: 'maxWidth',
	    scale: 'sizes'
	  },
	  maxHeight: {
	    property: 'maxHeight',
	    scale: 'sizes'
	  },
	  size: {
	    properties: ['width', 'height'],
	    scale: 'sizes'
	  },
	  overflow: true,
	  overflowX: true,
	  overflowY: true,
	  display: true,
	  verticalAlign: true
	};
	var layout = system(config$7);

	var config$6 = {
	  color: {
	    property: 'color',
	    scale: 'colors'
	  },
	  backgroundColor: {
	    property: 'backgroundColor',
	    scale: 'colors'
	  },
	  opacity: true
	};
	config$6.bg = config$6.backgroundColor;
	var color = system(config$6);

	var defaults$3 = {
	  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
	};
	var config$5 = {
	  fontFamily: {
	    property: 'fontFamily',
	    scale: 'fonts'
	  },
	  fontSize: {
	    property: 'fontSize',
	    scale: 'fontSizes',
	    defaultScale: defaults$3.fontSizes
	  },
	  fontWeight: {
	    property: 'fontWeight',
	    scale: 'fontWeights'
	  },
	  lineHeight: {
	    property: 'lineHeight',
	    scale: 'lineHeights'
	  },
	  letterSpacing: {
	    property: 'letterSpacing',
	    scale: 'letterSpacings'
	  },
	  textAlign: true,
	  fontStyle: true
	};
	var typography = system(config$5);

	var config$4 = {
	  alignItems: true,
	  alignContent: true,
	  justifyItems: true,
	  justifyContent: true,
	  flexWrap: true,
	  flexDirection: true,
	  // item
	  flex: true,
	  flexGrow: true,
	  flexShrink: true,
	  flexBasis: true,
	  justifySelf: true,
	  alignSelf: true,
	  order: true
	};
	var flexbox = system(config$4);

	var defaults$2 = {
	  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
	};
	var config$3 = {
	  gridGap: {
	    property: 'gridGap',
	    scale: 'space',
	    defaultScale: defaults$2.space
	  },
	  gridColumnGap: {
	    property: 'gridColumnGap',
	    scale: 'space',
	    defaultScale: defaults$2.space
	  },
	  gridRowGap: {
	    property: 'gridRowGap',
	    scale: 'space',
	    defaultScale: defaults$2.space
	  },
	  gridColumn: true,
	  gridRow: true,
	  gridAutoFlow: true,
	  gridAutoColumns: true,
	  gridAutoRows: true,
	  gridTemplateColumns: true,
	  gridTemplateRows: true,
	  gridTemplateAreas: true,
	  gridArea: true
	};
	var grid = system(config$3);

	var config$2 = {
	  border: {
	    property: 'border',
	    scale: 'borders'
	  },
	  borderWidth: {
	    property: 'borderWidth',
	    scale: 'borderWidths'
	  },
	  borderStyle: {
	    property: 'borderStyle',
	    scale: 'borderStyles'
	  },
	  borderColor: {
	    property: 'borderColor',
	    scale: 'colors'
	  },
	  borderRadius: {
	    property: 'borderRadius',
	    scale: 'radii'
	  },
	  borderTop: {
	    property: 'borderTop',
	    scale: 'borders'
	  },
	  borderTopLeftRadius: {
	    property: 'borderTopLeftRadius',
	    scale: 'radii'
	  },
	  borderTopRightRadius: {
	    property: 'borderTopRightRadius',
	    scale: 'radii'
	  },
	  borderRight: {
	    property: 'borderRight',
	    scale: 'borders'
	  },
	  borderBottom: {
	    property: 'borderBottom',
	    scale: 'borders'
	  },
	  borderBottomLeftRadius: {
	    property: 'borderBottomLeftRadius',
	    scale: 'radii'
	  },
	  borderBottomRightRadius: {
	    property: 'borderBottomRightRadius',
	    scale: 'radii'
	  },
	  borderLeft: {
	    property: 'borderLeft',
	    scale: 'borders'
	  },
	  borderX: {
	    properties: ['borderLeft', 'borderRight'],
	    scale: 'borders'
	  },
	  borderY: {
	    properties: ['borderTop', 'borderBottom'],
	    scale: 'borders'
	  }
	};
	config$2.borderTopWidth = {
	  property: 'borderTopWidth',
	  scale: 'borderWidths'
	};
	config$2.borderTopColor = {
	  property: 'borderTopColor',
	  scale: 'colors'
	};
	config$2.borderTopStyle = {
	  property: 'borderTopStyle',
	  scale: 'borderStyles'
	};
	config$2.borderTopLeftRadius = {
	  property: 'borderTopLeftRadius',
	  scale: 'radii'
	};
	config$2.borderTopRightRadius = {
	  property: 'borderTopRightRadius',
	  scale: 'radii'
	};
	config$2.borderBottomWidth = {
	  property: 'borderBottomWidth',
	  scale: 'borderWidths'
	};
	config$2.borderBottomColor = {
	  property: 'borderBottomColor',
	  scale: 'colors'
	};
	config$2.borderBottomStyle = {
	  property: 'borderBottomStyle',
	  scale: 'borderStyles'
	};
	config$2.borderBottomLeftRadius = {
	  property: 'borderBottomLeftRadius',
	  scale: 'radii'
	};
	config$2.borderBottomRightRadius = {
	  property: 'borderBottomRightRadius',
	  scale: 'radii'
	};
	config$2.borderLeftWidth = {
	  property: 'borderLeftWidth',
	  scale: 'borderWidths'
	};
	config$2.borderLeftColor = {
	  property: 'borderLeftColor',
	  scale: 'colors'
	};
	config$2.borderLeftStyle = {
	  property: 'borderLeftStyle',
	  scale: 'borderStyles'
	};
	config$2.borderRightWidth = {
	  property: 'borderRightWidth',
	  scale: 'borderWidths'
	};
	config$2.borderRightColor = {
	  property: 'borderRightColor',
	  scale: 'colors'
	};
	config$2.borderRightStyle = {
	  property: 'borderRightStyle',
	  scale: 'borderStyles'
	};
	var border = system(config$2);

	var config$1 = {
	  background: true,
	  backgroundImage: true,
	  backgroundSize: true,
	  backgroundPosition: true,
	  backgroundRepeat: true
	};
	config$1.bgImage = config$1.backgroundImage;
	config$1.bgSize = config$1.backgroundSize;
	config$1.bgPosition = config$1.backgroundPosition;
	config$1.bgRepeat = config$1.backgroundRepeat;
	var background = system(config$1);

	var defaults$1 = {
	  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
	};
	var config = {
	  position: true,
	  zIndex: {
	    property: 'zIndex',
	    scale: 'zIndices'
	  },
	  top: {
	    property: 'top',
	    scale: 'space',
	    defaultScale: defaults$1.space
	  },
	  right: {
	    property: 'right',
	    scale: 'space',
	    defaultScale: defaults$1.space
	  },
	  bottom: {
	    property: 'bottom',
	    scale: 'space',
	    defaultScale: defaults$1.space
	  },
	  left: {
	    property: 'left',
	    scale: 'space',
	    defaultScale: defaults$1.space
	  }
	};
	var position = system(config);

	var defaults = {
	  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
	};
	var isNumber = function isNumber(n) {
	  return typeof n === 'number' && !isNaN(n);
	};
	var getMargin = function getMargin(n, scale) {
	  if (!isNumber(n)) {
	    return get$1(scale, n, n);
	  }
	  var isNegative = n < 0;
	  var absolute = Math.abs(n);
	  var value = get$1(scale, absolute, absolute);
	  if (!isNumber(value)) {
	    return isNegative ? '-' + value : value;
	  }
	  return value * (isNegative ? -1 : 1);
	};
	var configs = {};
	configs.margin = {
	  margin: {
	    property: 'margin',
	    scale: 'space',
	    transform: getMargin,
	    defaultScale: defaults.space
	  },
	  marginTop: {
	    property: 'marginTop',
	    scale: 'space',
	    transform: getMargin,
	    defaultScale: defaults.space
	  },
	  marginRight: {
	    property: 'marginRight',
	    scale: 'space',
	    transform: getMargin,
	    defaultScale: defaults.space
	  },
	  marginBottom: {
	    property: 'marginBottom',
	    scale: 'space',
	    transform: getMargin,
	    defaultScale: defaults.space
	  },
	  marginLeft: {
	    property: 'marginLeft',
	    scale: 'space',
	    transform: getMargin,
	    defaultScale: defaults.space
	  },
	  marginX: {
	    properties: ['marginLeft', 'marginRight'],
	    scale: 'space',
	    transform: getMargin,
	    defaultScale: defaults.space
	  },
	  marginY: {
	    properties: ['marginTop', 'marginBottom'],
	    scale: 'space',
	    transform: getMargin,
	    defaultScale: defaults.space
	  }
	};
	configs.margin.m = configs.margin.margin;
	configs.margin.mt = configs.margin.marginTop;
	configs.margin.mr = configs.margin.marginRight;
	configs.margin.mb = configs.margin.marginBottom;
	configs.margin.ml = configs.margin.marginLeft;
	configs.margin.mx = configs.margin.marginX;
	configs.margin.my = configs.margin.marginY;
	configs.padding = {
	  padding: {
	    property: 'padding',
	    scale: 'space',
	    defaultScale: defaults.space
	  },
	  paddingTop: {
	    property: 'paddingTop',
	    scale: 'space',
	    defaultScale: defaults.space
	  },
	  paddingRight: {
	    property: 'paddingRight',
	    scale: 'space',
	    defaultScale: defaults.space
	  },
	  paddingBottom: {
	    property: 'paddingBottom',
	    scale: 'space',
	    defaultScale: defaults.space
	  },
	  paddingLeft: {
	    property: 'paddingLeft',
	    scale: 'space',
	    defaultScale: defaults.space
	  },
	  paddingX: {
	    properties: ['paddingLeft', 'paddingRight'],
	    scale: 'space',
	    defaultScale: defaults.space
	  },
	  paddingY: {
	    properties: ['paddingTop', 'paddingBottom'],
	    scale: 'space',
	    defaultScale: defaults.space
	  }
	};
	configs.padding.p = configs.padding.padding;
	configs.padding.pt = configs.padding.paddingTop;
	configs.padding.pr = configs.padding.paddingRight;
	configs.padding.pb = configs.padding.paddingBottom;
	configs.padding.pl = configs.padding.paddingLeft;
	configs.padding.px = configs.padding.paddingX;
	configs.padding.py = configs.padding.paddingY;
	var margin = system(configs.margin);
	var padding = system(configs.padding);
	var space = compose(margin, padding);

	system({
	  boxShadow: {
	    property: 'boxShadow',
	    scale: 'shadows'
	  },
	  textShadow: {
	    property: 'textShadow',
	    scale: 'shadows'
	  }
	});

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	    return target;
	  };
	  return _extends.apply(this, arguments);
	}

	// based on https://github.com/developit/dlv
	var get = function get(obj, key, def, p, undef) {
	  key = key && key.split ? key.split('.') : [key];
	  for (p = 0; p < key.length; p++) {
	    obj = obj ? obj[key[p]] : undef;
	  }
	  return obj === undef ? def : obj;
	};
	var defaultBreakpoints = [40, 52, 64].map(function (n) {
	  return n + 'em';
	});
	var defaultTheme = {
	  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
	};
	var aliases = {
	  bg: 'backgroundColor',
	  m: 'margin',
	  mt: 'marginTop',
	  mr: 'marginRight',
	  mb: 'marginBottom',
	  ml: 'marginLeft',
	  mx: 'marginX',
	  my: 'marginY',
	  p: 'padding',
	  pt: 'paddingTop',
	  pr: 'paddingRight',
	  pb: 'paddingBottom',
	  pl: 'paddingLeft',
	  px: 'paddingX',
	  py: 'paddingY'
	};
	var multiples = {
	  marginX: ['marginLeft', 'marginRight'],
	  marginY: ['marginTop', 'marginBottom'],
	  paddingX: ['paddingLeft', 'paddingRight'],
	  paddingY: ['paddingTop', 'paddingBottom'],
	  size: ['width', 'height']
	};
	var scales = {
	  color: 'colors',
	  backgroundColor: 'colors',
	  borderColor: 'colors',
	  margin: 'space',
	  marginTop: 'space',
	  marginRight: 'space',
	  marginBottom: 'space',
	  marginLeft: 'space',
	  marginX: 'space',
	  marginY: 'space',
	  padding: 'space',
	  paddingTop: 'space',
	  paddingRight: 'space',
	  paddingBottom: 'space',
	  paddingLeft: 'space',
	  paddingX: 'space',
	  paddingY: 'space',
	  top: 'space',
	  right: 'space',
	  bottom: 'space',
	  left: 'space',
	  gridGap: 'space',
	  gridColumnGap: 'space',
	  gridRowGap: 'space',
	  gap: 'space',
	  columnGap: 'space',
	  rowGap: 'space',
	  fontFamily: 'fonts',
	  fontSize: 'fontSizes',
	  fontWeight: 'fontWeights',
	  lineHeight: 'lineHeights',
	  letterSpacing: 'letterSpacings',
	  border: 'borders',
	  borderTop: 'borders',
	  borderRight: 'borders',
	  borderBottom: 'borders',
	  borderLeft: 'borders',
	  borderWidth: 'borderWidths',
	  borderStyle: 'borderStyles',
	  borderRadius: 'radii',
	  borderTopRightRadius: 'radii',
	  borderTopLeftRadius: 'radii',
	  borderBottomRightRadius: 'radii',
	  borderBottomLeftRadius: 'radii',
	  borderTopWidth: 'borderWidths',
	  borderTopColor: 'colors',
	  borderTopStyle: 'borderStyles',
	  borderBottomWidth: 'borderWidths',
	  borderBottomColor: 'colors',
	  borderBottomStyle: 'borderStyles',
	  borderLeftWidth: 'borderWidths',
	  borderLeftColor: 'colors',
	  borderLeftStyle: 'borderStyles',
	  borderRightWidth: 'borderWidths',
	  borderRightColor: 'colors',
	  borderRightStyle: 'borderStyles',
	  outlineColor: 'colors',
	  boxShadow: 'shadows',
	  textShadow: 'shadows',
	  zIndex: 'zIndices',
	  width: 'sizes',
	  minWidth: 'sizes',
	  maxWidth: 'sizes',
	  height: 'sizes',
	  minHeight: 'sizes',
	  maxHeight: 'sizes',
	  flexBasis: 'sizes',
	  size: 'sizes',
	  // svg
	  fill: 'colors',
	  stroke: 'colors'
	};
	var positiveOrNegative = function positiveOrNegative(scale, value) {
	  if (typeof value !== 'number' || value >= 0) {
	    return get(scale, value, value);
	  }
	  var absolute = Math.abs(value);
	  var n = get(scale, absolute, absolute);
	  if (typeof n === 'string') return '-' + n;
	  return n * -1;
	};
	var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
	  var _extends2;
	  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
	}, {});
	var responsive = function responsive(styles) {
	  return function (theme) {
	    var next = {};
	    var breakpoints = get(theme, 'breakpoints', defaultBreakpoints);
	    var mediaQueries = [null].concat(breakpoints.map(function (n) {
	      return "@media screen and (min-width: " + n + ")";
	    }));
	    for (var key in styles) {
	      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
	      if (value == null) continue;
	      if (!Array.isArray(value)) {
	        next[key] = value;
	        continue;
	      }
	      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
	        var media = mediaQueries[i];
	        if (!media) {
	          next[key] = value[i];
	          continue;
	        }
	        next[media] = next[media] || {};
	        if (value[i] == null) continue;
	        next[media][key] = value[i];
	      }
	    }
	    return next;
	  };
	};
	var css = function css(args) {
	  return function (props) {
	    if (props === void 0) {
	      props = {};
	    }
	    var theme = _extends({}, defaultTheme, {}, props.theme || props);
	    var result = {};
	    var obj = typeof args === 'function' ? args(theme) : args;
	    var styles = responsive(obj)(theme);
	    for (var key in styles) {
	      var x = styles[key];
	      var val = typeof x === 'function' ? x(theme) : x;
	      if (key === 'variant') {
	        var variant = css(get(theme, val))(theme);
	        result = _extends({}, result, {}, variant);
	        continue;
	      }
	      if (val && _typeof(val) === 'object') {
	        result[key] = css(val)(theme);
	        continue;
	      }
	      var prop = get(aliases, key, key);
	      var scaleName = get(scales, prop);
	      var scale = get(theme, scaleName, get(theme, prop, {}));
	      var transform = get(transforms, prop, get);
	      var value = transform(scale, val, val);
	      if (multiples[prop]) {
	        var dirs = multiples[prop];
	        for (var i = 0; i < dirs.length; i++) {
	          result[dirs[i]] = value;
	        }
	      } else {
	        result[prop] = value;
	      }
	    }
	    return result;
	  };
	};
	var css$1 = css;

	var variant = function variant(_ref) {
	  var _config;
	  var scale = _ref.scale,
	    _ref$prop = _ref.prop,
	    prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
	    _ref$variants = _ref.variants,
	    variants = _ref$variants === void 0 ? {} : _ref$variants,
	    key = _ref.key;
	  var sx;
	  if (Object.keys(variants).length) {
	    sx = function sx(value, scale, props) {
	      return css$1(get$1(scale, value, null))(props.theme);
	    };
	  } else {
	    sx = function sx(value, scale) {
	      return get$1(scale, value, null);
	    };
	  }
	  sx.scale = scale || key;
	  sx.defaults = variants;
	  var config = (_config = {}, _config[prop] = sx, _config);
	  var parser = createParser(config);
	  return parser;
	};
	var buttonStyle = variant({
	  key: 'buttons'
	});
	variant({
	  key: 'textStyles',
	  prop: 'textStyle'
	});
	variant({
	  key: 'colorStyles',
	  prop: 'colors'
	});

	layout.width;
	  layout.height;
	  layout.minWidth;
	  layout.minHeight;
	  layout.maxWidth;
	  layout.maxHeight;
	  layout.size;
	  layout.verticalAlign;
	  layout.display;
	  layout.overflow;
	  layout.overflowX;
	  layout.overflowY;
	color.opacity;
	var fontSize = typography.fontSize;
	  typography.fontFamily;
	  typography.fontWeight;
	  typography.lineHeight;
	  typography.textAlign;
	  typography.fontStyle;
	  typography.letterSpacing;
	flexbox.alignItems;
	  flexbox.alignContent;
	  flexbox.justifyItems;
	  flexbox.justifyContent;
	  flexbox.flexWrap;
	  flexbox.flexDirection;
	  flexbox.flex;
	  flexbox.flexGrow;
	  flexbox.flexShrink;
	  flexbox.flexBasis;
	  flexbox.justifySelf;
	  flexbox.alignSelf;
	  flexbox.order;
	grid.gridGap;
	  grid.gridColumnGap;
	  grid.gridRowGap;
	  grid.gridColumn;
	  grid.gridRow;
	  grid.gridAutoFlow;
	  grid.gridAutoColumns;
	  grid.gridAutoRows;
	  grid.gridTemplateColumns;
	  grid.gridTemplateRows;
	  grid.gridTemplateAreas;
	  grid.gridArea;
	border.borderWidth;
	  border.borderStyle;
	  border.borderColor;
	  border.borderTop;
	  border.borderRight;
	  border.borderBottom;
	  border.borderLeft;
	  border.borderRadius;
	background.backgroundImage;
	  background.backgroundSize;
	  background.backgroundPosition;
	  background.backgroundRepeat;
	position.zIndex;
	  position.top;
	  position.right;
	  position.bottom;
	  position.left;

	const BeforeCard = styled("div")({
	    position: "relative",
	    padding: "calc(1.5% - 1vmin) calc(1% - 1vmin)",
	    margin: "20px auto",
	    boxSizing: "border-box",
	    clipPath: "polygon(20% 0%, 100% 0, 100% 20%, 100% 80%, 80% 100%, 0 100%, 0% 80%, 0 0);",
	    backdropFilter: "blur(6px) saturate(180%)",
	    backgroundSize: "cover",
	    "&:before": {
	        content: '""',
	        position: "absolute",
	        width: "6px",
	        height: "36%",
	        background: "white",
	        transform: "skew(-35deg)",
	        bottom: "-1px",
	        right: "0",
	        zIndex: "4",
	    },
	}, variant({
	    variants: {
	        Matrix: {
	            color: "white",
	            border: "4px solid #00ff32",
	            "&:before": {
	                background: "#00ff32",
	            },
	        },
	        Rose: {
	            color: "white",
	            border: "4px solid #ff296d",
	            "&:before": {
	                background: "#ff296d",
	            },
	        },
	        Punk: {
	            color: "white",
	            border: "4px solid #8e52f5",
	            "&:before": {
	                background: "#8e52f5",
	            },
	        },
	        Gold: {
	            color: "white",
	            border: "4px solid #95f11c",
	            "&:before": {
	                background: "#95f11c",
	            },
	        },
	    },
	}));
	const CardtTitle = styled.div `
  display: flex;
  word-break: break-all;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40%;
  box-sizing: border-box;
  padding: 1% 2%;
  letter-spacing: 0.2em;
  font-weight: bold;
`;
	const CardtBody = styled.div `
  position: relative;
  word-break: break-all;
  overflow: hidden;
  top: 10%;
  width: 100%;
  height: 30%;
  display: flex;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(130px, auto);
  gap: 2%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 1rem;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;

  &:active {
    cursor: grabbing;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  > * {
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%);
    background: #8e52f5;
    width: 100px;
    height: 80%;
    border-radius: 0.25rem;
    padding: 0.5rem;
    user-select: none;
  }
`;
	const CardtFooter = styled.div `
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 10%;
  box-sizing: border-box;
  padding: 2% 4%;
  margin: auto auto;
`;
	const Card = ({ title, body, end, CardBody, background, width = "calc(350px - 2vmin)", height = "30em", }) => {
	    return (React.createElement(BeforeCard, { style: {
	            background: background === undefined ? "rgba(17, 25, 40, 0.75)" : background,
	            width: width,
	            height: height,
	        } },
	        React.createElement(CardtTitle, null, title),
	        React.createElement(CardtBody, null, body),
	        React.createElement(CardtFooter, null, end)));
	};
	const CardCarousel = ({ title, body, end, CardBody, variant, background, width = "calc(350px - 2vmin)", height = "30em", }) => {
	    return (React.createElement(BeforeCard, { style: {
	            background: background === undefined ? "rgba(17, 25, 40, 0.75)" : background,
	            width: width,
	            height: height,
	        } },
	        React.createElement(CardtTitle, null, title),
	        React.createElement(CardtBody, null, CardBody),
	        React.createElement(CardtFooter, null, end)));
	};

	const noise2 = Ue `
  0% {
		 clip-path: inset(38% 0 58% 0);
	}
	 5% {
		 clip-path: inset(29% 0 27% 0);
	}
	 10% {
		 clip-path: inset(56% 0 21% 0);
	}
	 15% {
		 clip-path: inset(37% 0 19% 0);
	}
	 20% {
		 clip-path: inset(14% 0 30% 0);
	}
	 25% {
		 clip-path: inset(83% 0 18% 0);
	}
	 30% {
		 clip-path: inset(31% 0 66% 0);
	}
	 35% {
		 clip-path: inset(91% 0 5% 0);
	}
	 40% {
		 clip-path: inset(96% 0 2% 0);
	}
	 45% {
		 clip-path: inset(77% 0 5% 0);
	}
	 50% {
		 clip-path: inset(1% 0 67% 0);
	}
	 55% {
		 clip-path: inset(74% 0 7% 0);
	}
	 60% {
		 clip-path: inset(57% 0 27% 0);
	}
	 65% {
		 clip-path: inset(51% 0 29% 0);
	}
	 70% {
		 clip-path: inset(1% 0 60% 0);
	}
	 75% {
		 clip-path: inset(39% 0 35% 0);
	}
	 80% {
		 clip-path: inset(53% 0 6% 0);
	}
	 85% {
		 clip-path: inset(63% 0 17% 0);
	}
	 90% {
		 clip-path: inset(19% 0 1% 0);
	}
	 95% {
		 clip-path: inset(21% 0 10% 0);
	}
	 100% {
		 clip-path: inset(21% 0 58% 0);
	}
`;
	const noise1 = Ue `
  0% {
		 clip-path: inset(6% 0 42% 0);
	}
	 5% {
		 clip-path: inset(59% 0 29% 0);
	}
	 10% {
		 clip-path: inset(93% 0 4% 0);
	}
	 15% {
		 clip-path: inset(100% 0 1% 0);
	}
	 20% {
		 clip-path: inset(85% 0 15% 0);
	}
	 25% {
		 clip-path: inset(50% 0 18% 0);
	}
	 30% {
		 clip-path: inset(67% 0 16% 0);
	}
	 35% {
		 clip-path: inset(43% 0 48% 0);
	}
	 40% {
		 clip-path: inset(37% 0 9% 0);
	}
	 45% {
		 clip-path: inset(91% 0 7% 0);
	}
	 50% {
		 clip-path: inset(2% 0 72% 0);
	}
	 55% {
		 clip-path: inset(17% 0 17% 0);
	}
	 60% {
		 clip-path: inset(13% 0 85% 0);
	}
	 65% {
		 clip-path: inset(18% 0 38% 0);
	}
	 70% {
		 clip-path: inset(12% 0 88% 0);
	}
	 75% {
		 clip-path: inset(42% 0 31% 0);
	}
	 80% {
		 clip-path: inset(95% 0 2% 0);
	}
	 85% {
		 clip-path: inset(59% 0 8% 0);
	}
	 90% {
		 clip-path: inset(24% 0 44% 0);
	}
	 95% {
		 clip-path: inset(57% 0 5% 0);
	}
	 100% {
		 clip-path: inset(93% 0 3% 0);
	}
`;
	const RoseGradient = "linear-gradient(106deg, #00f6ff 8%, #ffec00 50%, #ff00ec 87%)";
	const CyberSky = "linear-gradient(106deg, #ffe900 8%, #0043ff 44%, #a200ff 87%)";
	const theme = {
	    colors: {
	        matrix: "#00ff32",
	        gold: "#95f11c",
	        cyber: "#edda0c",
	        rose: "#ff296d",
	        punk: "#8e52f5",
	    },
	    textStyles: {
	        outlined: {
	            transform: "skew(-21deg)",
	        },
	    },
	    buttons: {
	        OutlinedCyberRose: {
	            transform: "skew(-21deg)",
	            color: "#ff296d",
	            cursor: "pointer",
	            padding: "6px 12px",
	            border: "2px solid",
	            borderImageSlice: "1",
	            borderWidth: "2px",
	            borderImageSource: `${RoseGradient}`,
	        },
	        OutlinedCyberSky: {
	            transform: "skew(-21deg)",
	            color: "#0043FF",
	            cursor: "pointer",
	            padding: "6px 12px",
	            border: "2px solid",
	            borderImageSlice: "1",
	            borderWidth: "2px",
	            borderImageSource: `${CyberSky}`,
	        },
	        Matrix: {
	            transform: "skew(-21deg)",
	            cursor: "pointer",
	            padding: "6px 12px",
	            border: "2px solid #00ff32",
	            color: "#00ff32",
	            boxShadow: "0 4px 6px 0 #00ff32",
	        },
	        Rose: {
	            transform: "skew(-31deg)",
	            cursor: "pointer",
	            padding: "6px 12px",
	            color: "#ff296d",
	            border: "2px solid #ff296d",
	            boxShadow: "0 4px 6px 0 #ff296d",
	        },
	        Punk: {
	            transform: "skew(-21deg)",
	            cursor: "pointer",
	            padding: "6px 12px",
	            color: "#8e52f5",
	            border: "2px solid #8e52f5",
	            boxShadow: "0 4px 6px 0 #8e52f5",
	        },
	        Gold: {
	            transform: "skew(-21deg)",
	            cursor: "pointer",
	            padding: "6px 12px",
	            color: "#95f11c",
	            border: "2px solid #95f11c",
	            boxShadow: "0 4px 6px 0 #95f11c",
	        },
	    },
	    bg: {
	        type: { background: "red" },
	    },
	};
	const BeforeButton = styled.button `
  border: 0;
  outline: 0;
  transition: 0.4s;
  margin: 5px;

  &:active {
    position: relative;
    top: 5px;
    box-shadow: none;
  }
  ${color}
  ${space}
  ${fontSize}
  ${buttonStyle}
`;
	const Span = styled.span `
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  transition: 1s;
  letter-spacing: 0.3em;
  transform: skewX(20deg) !important;
  :hover::after {
    content: attr(data-text);
    transform: skewX(20deg) !important;
    position: absolute;
    left: 10px;
    text-shadow: -1px 0 red;
    top: 0;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: ${noise1} 2s infinite linear alternate-reverse;
  }

  :hover::before {
    content: attr(data-text);
    position: absolute;
    left: 10px;
    text-shadow: 3px 0 red;
    top: 5px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    animation: ${noise2} 15s infinite linear alternate-reverse;
  }
}`;
	BeforeButton.defaultProps = {
	    variant: "primary",
	};
	const Button = ({ text, variant, color }) => {
	    return (React.createElement(Fe, { theme: theme },
	        React.createElement(BeforeButton, { color: color, variant: variant },
	            React.createElement(Span, { "data-text": text }, text))));
	};

	const CyberInput = ({ type = "text", label, value }) => (React.createElement("div", { className: "simple-form-group" },
	    label && React.createElement("label", { className: "simple-text-label" }, label),
	    React.createElement("input", { type: type, className: "simple-text-input", value: value })));

	// export { CyberInput, CyberButton, Card, CardCarousel };
	var index = {
	    CyberInput, CyberButton: Button, Card, CardCarousel
	};

	return index;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LWlzQDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LWlzQDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LWlzQDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vQGVtb3Rpb24rc3R5bGlzQDAuOC41L25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vQGVtb3Rpb24rdW5pdGxlc3NAMC43LjUvbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vQGVtb3Rpb24rbWVtb2l6ZUAwLjguMC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L2Vtb3Rpb24tbWVtb2l6ZS5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vQGVtb3Rpb24raXMtcHJvcC12YWxpZEAxLjIuMC9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2Vtb3Rpb24taXMtcHJvcC12YWxpZC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtaXNAMTYuMTMuMS9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LWlzQDE2LjEzLjEvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1pc0AxNi4xMy4xL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9ob2lzdC1ub24tcmVhY3Qtc3RhdGljc0AzLjMuMi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGVkLWNvbXBvbmVudHNANS4zLjlfN2k1bXllaWdlaHFhaDQzaTV1N3diZWtnYmEvbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2Rpc3Qvc3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vb2JqZWN0LWFzc2lnbkA0LjEuMS9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3R5bGVkLXN5c3RlbStjb3JlQDUuMS4yL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jb3JlL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHlsZWQtc3lzdGVtK2xheW91dEA1LjEuMi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vbGF5b3V0L2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHlsZWQtc3lzdGVtK2NvbG9yQDUuMS4yL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jb2xvci9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3R5bGVkLXN5c3RlbSt0eXBvZ3JhcGh5QDUuMS4yL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS90eXBvZ3JhcGh5L2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHlsZWQtc3lzdGVtK2ZsZXhib3hANS4xLjIvbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2ZsZXhib3gvZGlzdC9pbmRleC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0eWxlZC1zeXN0ZW0rZ3JpZEA1LjEuMi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vZ3JpZC9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3R5bGVkLXN5c3RlbStib3JkZXJANS4xLjUvbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2JvcmRlci9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3R5bGVkLXN5c3RlbStiYWNrZ3JvdW5kQDUuMS4yL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9iYWNrZ3JvdW5kL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzdHlsZWQtc3lzdGVtK3Bvc2l0aW9uQDUuMS4yL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9wb3NpdGlvbi9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3R5bGVkLXN5c3RlbStzcGFjZUA1LjEuMi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vc3BhY2UvZGlzdC9pbmRleC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0eWxlZC1zeXN0ZW0rc2hhZG93QDUuMS4yL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9zaGFkb3cvZGlzdC9pbmRleC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0eWxlZC1zeXN0ZW0rY3NzQDUuMS41L25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jc3MvZGlzdC9pbmRleC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vQHN0eWxlZC1zeXN0ZW0rdmFyaWFudEA1LjEuNS9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vdmFyaWFudC9kaXN0L2luZGV4LmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZWQtc3lzdGVtQDUuMS41L25vZGVfbW9kdWxlcy9zdHlsZWQtc3lzdGVtL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vc3JjL2NhcmQvaW5kZXgudHN4IiwiLi4vc3JjL2J1dHRvbi9pbmRleC50c3giLCIuLi9zcmMvaW5wdXQvaW5kZXgudHN4IiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSxuPVN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIikscD1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIikscT1TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIikscj1TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIiksdD1TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksdT1TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSx2PVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSx3PVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSx4PVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHk9U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksej1TeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gQShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eiYmYVt6XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfVxudmFyIEI9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEM9T2JqZWN0LmFzc2lnbixEPXt9O2Z1bmN0aW9uIEUoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZXx8Qn1FLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O1xuRS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07RS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gRigpe31GLnByb3RvdHlwZT1FLnByb3RvdHlwZTtmdW5jdGlvbiBHKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWV8fEJ9dmFyIEg9Ry5wcm90b3R5cGU9bmV3IEY7XG5ILmNvbnN0cnVjdG9yPUc7QyhILEUucHJvdG90eXBlKTtILmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBJPUFycmF5LmlzQXJyYXksSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEs9e2N1cnJlbnQ6bnVsbH0sTD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gTShhLGIsZSl7dmFyIGQsYz17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGQgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilKLmNhbGwoYixkKSYmIUwuaGFzT3duUHJvcGVydHkoZCkmJihjW2RdPWJbZF0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZyljLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2MuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZCBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09Y1tkXSYmKGNbZF09Z1tkXSk7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmMsX293bmVyOksuY3VycmVudH19XG5mdW5jdGlvbiBOKGEsYil7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBPKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1sfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgUD0vXFwvKy9nO2Z1bmN0aW9uIFEoYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBSKGEsYixlLGQsYyl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIGw6Y2FzZSBuOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxjPWMoaCksYT1cIlwiPT09ZD9cIi5cIitRKGgsMCk6ZCxJKGMpPyhlPVwiXCIsbnVsbCE9YSYmKGU9YS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpLFIoYyxiLGUsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1jJiYoTyhjKSYmKGM9TihjLGUrKCFjLmtleXx8aCYmaC5rZXk9PT1jLmtleT9cIlwiOihcIlwiK2Mua2V5KS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goYykpLDE7aD0wO2Q9XCJcIj09PWQ/XCIuXCI6ZCtcIjpcIjtpZihJKGEpKWZvcih2YXIgZz0wO2c8YS5sZW5ndGg7ZysrKXtrPVxuYVtnXTt2YXIgZj1kK1EoayxnKTtoKz1SKGssYixlLGYsYyl9ZWxzZSBpZihmPUEoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWQrUShrLGcrKyksaCs9UihrLGIsZSxmLGMpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1TdHJpbmcoYSksRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiKyhcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKStcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIik7cmV0dXJuIGh9XG5mdW5jdGlvbiBTKGEsYixlKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBkPVtdLGM9MDtSKGEsZCxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChlLGEsYysrKX0pO3JldHVybiBkfWZ1bmN0aW9uIFQoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTtiLnRoZW4oZnVuY3Rpb24oYil7aWYoMD09PWEuX3N0YXR1c3x8LTE9PT1hLl9zdGF0dXMpYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWJ9LGZ1bmN0aW9uKGIpe2lmKDA9PT1hLl9zdGF0dXN8fC0xPT09YS5fc3RhdHVzKWEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1ifSk7LTE9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MCxhLl9yZXN1bHQ9Yil9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0LmRlZmF1bHQ7dGhyb3cgYS5fcmVzdWx0O31cbnZhciBVPXtjdXJyZW50Om51bGx9LFY9e3RyYW5zaXRpb246bnVsbH0sVz17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpVLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOlYsUmVhY3RDdXJyZW50T3duZXI6S307ZXhwb3J0cy5DaGlsZHJlbj17bWFwOlMsZm9yRWFjaDpmdW5jdGlvbihhLGIsZSl7UyhhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1MoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBTKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIU8oYSkpdGhyb3cgRXJyb3IoXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIik7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1FO2V4cG9ydHMuRnJhZ21lbnQ9cDtcbmV4cG9ydHMuUHJvZmlsZXI9cjtleHBvcnRzLlB1cmVDb21wb25lbnQ9RztleHBvcnRzLlN0cmljdE1vZGU9cTtleHBvcnRzLlN1c3BlbnNlPXc7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1XO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGUpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIrYStcIi5cIik7dmFyIGQ9Qyh7fSxhLnByb3BzKSxjPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1LLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoYz1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUouY2FsbChiLGYpJiYhTC5oYXNPd25Qcm9wZXJ0eShmKSYmKGRbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZilkLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7XG5mb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpsLHR5cGU6YS50eXBlLGtleTpjLHJlZjprLHByb3BzOmQsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSl7YT17JCR0eXBlb2Y6dSxfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGwsX2RlZmF1bHRWYWx1ZTpudWxsLF9nbG9iYWxOYW1lOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnQsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PU07ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPU0uYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtcbmV4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TztleHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnksX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpUfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOngsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnN0YXJ0VHJhbnNpdGlvbj1mdW5jdGlvbihhKXt2YXIgYj1WLnRyYW5zaXRpb247Vi50cmFuc2l0aW9uPXt9O3RyeXthKCl9ZmluYWxseXtWLnRyYW5zaXRpb249Yn19O2V4cG9ydHMudW5zdGFibGVfYWN0PWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJhY3QoLi4uKSBpcyBub3Qgc3VwcG9ydGVkIGluIHByb2R1Y3Rpb24gYnVpbGRzIG9mIFJlYWN0LlwiKTt9O1xuZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlQ29udGV4dChhKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZURlZmVycmVkVmFsdWU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VEZWZlcnJlZFZhbHVlKGEpfTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSWQ9ZnVuY3Rpb24oKXtyZXR1cm4gVS5jdXJyZW50LnVzZUlkKCl9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixlKX07XG5leHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlSW5zZXJ0aW9uRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWR1Y2VyKGEsYixlKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VTdGF0ZShhKX07ZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VTeW5jRXh0ZXJuYWxTdG9yZShhLGIsZSl9O1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIFUuY3VycmVudC51c2VUcmFuc2l0aW9uKCl9O2V4cG9ydHMudmVyc2lvbj1cIjE4LjIuMFwiO1xuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3RWZXJzaW9uID0gJzE4LjIuMCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiBudWxsXG59O1xuXG52YXIgUmVhY3RDdXJyZW50QWN0UXVldWUgPSB7XG4gIGN1cnJlbnQ6IG51bGwsXG4gIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuXG4gIGlzQmF0Y2hpbmdMZWdhY3k6IGZhbHNlLFxuICBkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZTogZmFsc2Vcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXJcbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudEFjdFF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdmdW5jdGlvbicgJiYgcGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgJyArICdmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJyk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiKTtcbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHtcbiAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oZWxlbWVudC5rZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIC8vIFRoZSBgaWZgIHN0YXRlbWVudCBoZXJlIHByZXZlbnRzIGF1dG8tZGlzYWJsaW5nIG9mIHRoZSBzYWZlXG4gICAgICAgICAgLy8gY29lcmNpb24gRVNMaW50IHJ1bGUsIHNvIHdlIG11c3QgbWFudWFsbHkgZGlzYWJsZSBpdCBiZWxvdy5cbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgICBpZiAobWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkpIHtcbiAgICAgICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWFwcGVkQ2hpbGQua2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gXCIgKyAnSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcbiAgLy8gVE9ETzogU2Vjb25kIGFyZ3VtZW50IHVzZWQgdG8gYmUgYW4gb3B0aW9uYWwgYGNhbGN1bGF0ZUNoYW5nZWRCaXRzYFxuICAvLyBmdW5jdGlvbi4gV2FybiB0byByZXNlcnZlIGZvciBmdXR1cmUgdXNlP1xuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGwsXG4gICAgLy8gQWRkIHRoZXNlIHRvIHVzZSBzYW1lIGhpZGRlbiBjbGFzcyBpbiBWTSBhcyBTZXJ2ZXJDb250ZXh0XG4gICAgX2RlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBfZ2xvYmFsTmFtZTogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgIC8vIFRoaXMgbWlnaHQgdGhyb3cgZWl0aGVyIGJlY2F1c2UgaXQncyBtaXNzaW5nIG9yIHRocm93cy4gSWYgc28sIHdlIHRyZWF0IGl0XG4gICAgLy8gYXMgc3RpbGwgdW5pbml0aWFsaXplZCBhbmQgdHJ5IGFnYWluIG5leHQgdGltZS4gV2hpY2ggaXMgdGhlIHNhbWUgYXMgd2hhdFxuICAgIC8vIGhhcHBlbnMgaWYgdGhlIGN0b3Igb3IgYW55IHdyYXBwZXJzIHByb2Nlc3NpbmcgdGhlIGN0b3IgdGhyb3dzLiBUaGlzIG1pZ2h0XG4gICAgLy8gZW5kIHVwIGZpeGluZyBpdCBpZiB0aGUgcmVzb2x1dGlvbiB3YXMgYSBjb25jdXJyZW5jeSBidWcuXG5cbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IG1vZHVsZU9iamVjdDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgLy8gSW4gY2FzZSwgd2UncmUgc3RpbGwgdW5pbml0aWFsaXplZCwgdGhlbiB3ZSdyZSB3YWl0aW5nIGZvciB0aGUgdGhlbmFibGVcbiAgICAgIC8vIHRvIHJlc29sdmUuIFNldCBpdCBhcyBwZW5kaW5nIGluIHRoZSBtZWFudGltZS5cbiAgICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB9XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHZhciBtb2R1bGVPYmplY3QgPSBwYXlsb2FkLl9yZXN1bHQ7XG5cbiAgICB7XG4gICAgICBpZiAobW9kdWxlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVxcblxcblwiICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHB1dCBjdXJseSBicmFjZXMgYXJvdW5kIHRoZSBpbXBvcnQ/JywgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoISgnZGVmYXVsdCcgaW4gbW9kdWxlT2JqZWN0KSkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IFVuaW5pdGlhbGl6ZWQsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghcmVuZGVyLm5hbWUgJiYgIXJlbmRlci5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QubWVtbygocHJvcHMpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXR5cGUubmFtZSAmJiAhdHlwZS5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICB7XG4gICAgaWYgKGRpc3BhdGNoZXIgPT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yJyArICcgb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4nICsgJzEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbicgKyAnMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbicgKyAnMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcbicgKyAnU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uJyk7XG4gICAgfVxuICB9IC8vIFdpbGwgcmVzdWx0IGluIGEgbnVsbCBhY2Nlc3MgZXJyb3IgaWYgYWNjZXNzZWQgb3V0c2lkZSByZW5kZXIgcGhhc2UuIFdlXG4gIC8vIGludGVudGlvbmFsbHkgZG9uJ3QgdGhyb3cgb3VyIG93biBlcnJvciBiZWNhdXNlIHRoaXMgaXMgaW4gYSBob3QgcGF0aC5cbiAgLy8gQWxzbyBoZWxwcyBlbnN1cmUgdGhpcyBpcyBpbmxpbmVkLlxuXG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlVHJhbnNpdGlvbigpO1xufVxuZnVuY3Rpb24gdXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZURlZmVycmVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlSWQoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSWQoKTtcbn1cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzdGFydFRyYW5zaXRpb24oc2NvcGUsIG9wdGlvbnMpIHtcbiAgdmFyIHByZXZUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHt9O1xuICB2YXIgY3VycmVudFRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuXG4gIHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uLl91cGRhdGVkRmliZXJzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBzY29wZSgpO1xuICB9IGZpbmFsbHkge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSBwcmV2VHJhbnNpdGlvbjtcblxuICAgIHtcbiAgICAgIGlmIChwcmV2VHJhbnNpdGlvbiA9PT0gbnVsbCAmJiBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycykge1xuICAgICAgICB2YXIgdXBkYXRlZEZpYmVyc0NvdW50ID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZTtcblxuICAgICAgICBpZiAodXBkYXRlZEZpYmVyc0NvdW50ID4gMTApIHtcbiAgICAgICAgICB3YXJuKCdEZXRlY3RlZCBhIGxhcmdlIG51bWJlciBvZiB1cGRhdGVzIGluc2lkZSBzdGFydFRyYW5zaXRpb24uICcgKyAnSWYgdGhpcyBpcyBkdWUgdG8gYSBzdWJzY3JpcHRpb24gcGxlYXNlIHJlLXdyaXRlIGl0IHRvIHVzZSBSZWFjdCBwcm92aWRlZCBob29rcy4gJyArICdPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSBmYWxzZTtcbnZhciBlbnF1ZXVlVGFza0ltcGwgPSBudWxsO1xuZnVuY3Rpb24gZW5xdWV1ZVRhc2sodGFzaykge1xuICBpZiAoZW5xdWV1ZVRhc2tJbXBsID09PSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHJlYWQgcmVxdWlyZSBvZmYgdGhlIG1vZHVsZSBvYmplY3QgdG8gZ2V0IGFyb3VuZCB0aGUgYnVuZGxlcnMuXG4gICAgICAvLyB3ZSBkb24ndCB3YW50IHRoZW0gdG8gZGV0ZWN0IGEgcmVxdWlyZSBhbmQgYnVuZGxlIGEgTm9kZSBwb2x5ZmlsbC5cbiAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gKCdyZXF1aXJlJyArIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDcpO1xuICAgICAgdmFyIG5vZGVSZXF1aXJlID0gbW9kdWxlICYmIG1vZHVsZVtyZXF1aXJlU3RyaW5nXTsgLy8gYXNzdW1pbmcgd2UncmUgaW4gbm9kZSwgbGV0J3MgdHJ5IHRvIGdldCBub2RlJ3NcbiAgICAgIC8vIHZlcnNpb24gb2Ygc2V0SW1tZWRpYXRlLCBieXBhc3NpbmcgZmFrZSB0aW1lcnMgaWYgYW55LlxuXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBub2RlUmVxdWlyZS5jYWxsKG1vZHVsZSwgJ3RpbWVycycpLnNldEltbWVkaWF0ZTtcbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAvLyB3ZSdyZSBpbiBhIGJyb3dzZXJcbiAgICAgIC8vIHdlIGNhbid0IHVzZSByZWd1bGFyIHRpbWVycyBiZWNhdXNlIHRoZXkgbWF5IHN0aWxsIGJlIGZha2VkXG4gICAgICAvLyBzbyB3ZSB0cnkgTWVzc2FnZUNoYW5uZWwrcG9zdE1lc3NhZ2UgaW5zdGVhZFxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhIE1lc3NhZ2VDaGFubmVsIGltcGxlbWVudGF0aW9uLCAnICsgJ3NvIGVucXVldWluZyB0YXNrcyB2aWEgYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLikgd2lsbCBmYWlsLiAnICsgJ1BsZWFzZSBmaWxlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMgJyArICdpZiB5b3UgZW5jb3VudGVyIHRoaXMgd2FybmluZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKHVuZGVmaW5lZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnF1ZXVlVGFza0ltcGwodGFzayk7XG59XG5cbnZhciBhY3RTY29wZURlcHRoID0gMDtcbnZhciBkaWRXYXJuTm9Bd2FpdEFjdCA9IGZhbHNlO1xuZnVuY3Rpb24gYWN0KGNhbGxiYWNrKSB7XG4gIHtcbiAgICAvLyBgYWN0YCBjYWxscyBjYW4gYmUgbmVzdGVkLCBzbyB3ZSB0cmFjayB0aGUgZGVwdGguIFRoaXMgcmVwcmVzZW50cyB0aGVcbiAgICAvLyBudW1iZXIgb2YgYGFjdGAgc2NvcGVzIG9uIHRoZSBzdGFjay5cbiAgICB2YXIgcHJldkFjdFNjb3BlRGVwdGggPSBhY3RTY29wZURlcHRoO1xuICAgIGFjdFNjb3BlRGVwdGgrKztcblxuICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBvdXRlcm1vc3QgYGFjdGAgc2NvcGUuIEluaXRpYWxpemUgdGhlIHF1ZXVlLiBUaGUgcmVjb25jaWxlclxuICAgICAgLy8gd2lsbCBkZXRlY3QgdGhlIHF1ZXVlIGFuZCB1c2UgaXQgaW5zdGVhZCBvZiBTY2hlZHVsZXIuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgfVxuXG4gICAgdmFyIHByZXZJc0JhdGNoaW5nTGVnYWN5ID0gUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuIE9ubHlcbiAgICAgIC8vIHNldCB0byBgdHJ1ZWAgd2hpbGUgdGhlIGdpdmVuIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLCBub3QgZm9yIHVwZGF0ZXNcbiAgICAgIC8vIHRyaWdnZXJlZCBkdXJpbmcgYW4gYXN5bmMgZXZlbnQsIGJlY2F1c2UgdGhpcyBpcyBob3cgdGhlIGxlZ2FjeVxuICAgICAgLy8gaW1wbGVtZW50YXRpb24gb2YgYGFjdGAgYmVoYXZlZC5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soKTsgLy8gUmVwbGljYXRlIGJlaGF2aW9yIG9mIG9yaWdpbmFsIGBhY3RgIGltcGxlbWVudGF0aW9uIGluIGxlZ2FjeSBtb2RlLFxuICAgICAgLy8gd2hpY2ggZmx1c2hlZCB1cGRhdGVzIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBzY29wZSBmdW5jdGlvbiBleGl0cywgZXZlblxuICAgICAgLy8gaWYgaXQncyBhbiBhc3luYyBmdW5jdGlvbi5cblxuICAgICAgaWYgKCFwcmV2SXNCYXRjaGluZ0xlZ2FjeSAmJiBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSkge1xuICAgICAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSBwcmV2SXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHRoZW5hYmxlUmVzdWx0ID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgYW4gYXN5bmMgZnVuY3Rpb24gKGkuZS4gcmV0dXJuZWQgYSBwcm9taXNlKS4gV2FpdFxuICAgICAgLy8gZm9yIGl0IHRvIHJlc29sdmUgYmVmb3JlIGV4aXRpbmcgdGhlIGN1cnJlbnQgc2NvcGUuXG5cbiAgICAgIHZhciB3YXNBd2FpdGVkID0gZmFsc2U7XG4gICAgICB2YXIgdGhlbmFibGUgPSB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB3YXNBd2FpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGVuYWJsZVJlc3VsdC50aGVuKGZ1bmN0aW9uIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICAgICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyBXZSd2ZSBleGl0ZWQgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZVxuICAgICAgICAgICAgICAvLyBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGUgY2FsbGJhY2sgdGhyZXcgYW4gZXJyb3IuXG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB7XG4gICAgICAgIGlmICghZGlkV2Fybk5vQXdhaXRBY3QgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7fSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXdhc0F3YWl0ZWQpIHtcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGVycm9yKCdZb3UgY2FsbGVkIGFjdChhc3luYyAoKSA9PiAuLi4pIHdpdGhvdXQgYXdhaXQuICcgKyAnVGhpcyBjb3VsZCBsZWFkIHRvIHVuZXhwZWN0ZWQgdGVzdGluZyBiZWhhdmlvdXIsICcgKyAnaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyICcgKyAnc2NvcGVzLiAnICsgJ1lvdSBzaG91bGQgLSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKTsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhlbmFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIG5vdCBhbiBhc3luYyBmdW5jdGlvbi4gRXhpdCB0aGUgY3VycmVudCBzY29wZVxuICAgICAgLy8gaW1tZWRpYXRlbHksIHdpdGhvdXQgYXdhaXRpbmcuXG5cbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgLy8gRXhpdGluZyB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gRmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3F1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAoX3F1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShfcXVldWUpO1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9IC8vIFJldHVybiBhIHRoZW5hYmxlLiBJZiB0aGUgdXNlciBhd2FpdHMgaXQsIHdlJ2xsIGZsdXNoIGFnYWluIGluXG4gICAgICAgIC8vIGNhc2UgYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQgYnkgYSBtaWNyb3Rhc2suXG5cblxuICAgICAgICB2YXIgX3RoZW5hYmxlID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIENvbmZpcm0gd2UgaGF2ZW4ndCByZS1lbnRlcmVkIGFub3RoZXIgYGFjdGAgc2NvcGUsIGluIGNhc2VcbiAgICAgICAgICAgIC8vIHRoZSB1c2VyIGRvZXMgc29tZXRoaW5nIHdlaXJkIGxpa2UgYXdhaXQgdGhlIHRoZW5hYmxlXG4gICAgICAgICAgICAvLyBtdWx0aXBsZSB0aW1lcy5cbiAgICAgICAgICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZSBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBpbnNpZGUgYSBuZXN0ZWQgYGFjdGAgc2NvcGUsIHRoZSByZXR1cm5lZCB0aGVuYWJsZVxuICAgICAgICAvLyBpbW1lZGlhdGVseSByZXNvbHZlcy4gVGhlIG91dGVyIHNjb3BlIHdpbGwgZmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3RoZW5hYmxlMiA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGUyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCkge1xuICB7XG4gICAgaWYgKHByZXZBY3RTY29wZURlcHRoICE9PSBhY3RTY29wZURlcHRoIC0gMSkge1xuICAgICAgZXJyb3IoJ1lvdSBzZWVtIHRvIGhhdmUgb3ZlcmxhcHBpbmcgYWN0KCkgY2FsbHMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZC4gJyArICdCZSBzdXJlIHRvIGF3YWl0IHByZXZpb3VzIGFjdCgpIGNhbGxzIGJlZm9yZSBtYWtpbmcgYSBuZXcgb25lLiAnKTtcbiAgICB9XG5cbiAgICBhY3RTY29wZURlcHRoID0gcHJldkFjdFNjb3BlRGVwdGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHtcbiAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5vIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkLiBGaW5pc2guXG4gICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBLZWVwIGZsdXNoaW5nIHdvcmsgdW50aWwgdGhlcmUncyBub25lIGxlZnQuXG4gICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzRmx1c2hpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hBY3RRdWV1ZShxdWV1ZSkge1xuICB7XG4gICAgaWYgKCFpc0ZsdXNoaW5nKSB7XG4gICAgICAvLyBQcmV2ZW50IHJlLWVudHJhbmNlLlxuICAgICAgaXNGbHVzaGluZyA9IHRydWU7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcblxuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgfSB3aGlsZSAoY2FsbGJhY2sgIT09IG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyB0aHJvd3MsIGxlYXZlIHRoZSByZW1haW5pbmcgY2FsbGJhY2tzIG9uIHRoZSBxdWV1ZS5cbiAgICAgICAgcXVldWUgPSBxdWV1ZS5zbGljZShpICsgMSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNGbHVzaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnN0YXJ0VHJhbnNpdGlvbiA9IHN0YXJ0VHJhbnNpdGlvbjtcbmV4cG9ydHMudW5zdGFibGVfYWN0ID0gYWN0O1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZURlZmVycmVkVmFsdWUgPSB1c2VEZWZlcnJlZFZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUlkID0gdXNlSWQ7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSB1c2VJbnNlcnRpb25FZmZlY3Q7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID0gdXNlU3luY0V4dGVybmFsU3RvcmU7XG5leHBvcnRzLnVzZVRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYj1TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSxjPVN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIiksZD1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIiksZT1TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIiksZj1TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIiksZz1TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksaD1TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSxrPVN5bWJvbC5mb3IoXCJyZWFjdC5zZXJ2ZXJfY29udGV4dFwiKSxsPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxtPVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSxuPVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpLHA9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikscT1TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSx0PVN5bWJvbC5mb3IoXCJyZWFjdC5vZmZzY3JlZW5cIiksdTt1PVN5bWJvbC5mb3IoXCJyZWFjdC5tb2R1bGUucmVmZXJlbmNlXCIpO1xuZnVuY3Rpb24gdihhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgcj1hLiQkdHlwZW9mO3N3aXRjaChyKXtjYXNlIGI6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgZDpjYXNlIGY6Y2FzZSBlOmNhc2UgbTpjYXNlIG46cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIGg6Y2FzZSBsOmNhc2UgcTpjYXNlIHA6Y2FzZSBnOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHJ9fWNhc2UgYzpyZXR1cm4gcn19fWV4cG9ydHMuQ29udGV4dENvbnN1bWVyPWg7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9ZztleHBvcnRzLkVsZW1lbnQ9YjtleHBvcnRzLkZvcndhcmRSZWY9bDtleHBvcnRzLkZyYWdtZW50PWQ7ZXhwb3J0cy5MYXp5PXE7ZXhwb3J0cy5NZW1vPXA7ZXhwb3J0cy5Qb3J0YWw9YztleHBvcnRzLlByb2ZpbGVyPWY7ZXhwb3J0cy5TdHJpY3RNb2RlPWU7ZXhwb3J0cy5TdXNwZW5zZT1tO1xuZXhwb3J0cy5TdXNwZW5zZUxpc3Q9bjtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKCl7cmV0dXJuITF9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT1mdW5jdGlvbigpe3JldHVybiExfTtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpPT09aH07ZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4gdihhKT09PWd9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1ifTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4gdihhKT09PWx9O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4gdihhKT09PWR9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpPT09cX07ZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1wfTtcbmV4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1jfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1mfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdihhKT09PWV9O2V4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4gdihhKT09PW19O2V4cG9ydHMuaXNTdXNwZW5zZUxpc3Q9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSk9PT1ufTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1kfHxhPT09Znx8YT09PWV8fGE9PT1tfHxhPT09bnx8YT09PXR8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09cXx8YS4kJHR5cGVvZj09PXB8fGEuJCR0eXBlb2Y9PT1nfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWx8fGEuJCR0eXBlb2Y9PT11fHx2b2lkIDAhPT1hLmdldE1vZHVsZUlkKT8hMDohMX07ZXhwb3J0cy50eXBlT2Y9djtcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnNlcnZlcl9jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIFN1c3BlbnNlTGlzdCA9IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlTGlzdChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5TdXNwZW5zZUxpc3QgPSBTdXNwZW5zZUxpc3Q7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNTdXNwZW5zZUxpc3QgPSBpc1N1c3BlbnNlTGlzdDtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFiYnJ8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8ZW50ZXJLZXlIaW50fGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHJhbnNsYXRlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5jcmVtZW50YWx8ZmFsbGJhY2t8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufG9wdGlvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpc1Byb3BWYWxpZCA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaXNQcm9wVmFsaWQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsYz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGU9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsZj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxnPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksaz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGw9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxtPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxuPWI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHA9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMscT1iP1xuU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik6NjAxMjAscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOjYwMTE1LHQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNix2PWI/U3ltYm9sLmZvcihcInJlYWN0LmJsb2NrXCIpOjYwMTIxLHc9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnVuZGFtZW50YWxcIik6NjAxMTcseD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIik6NjAxMTgseT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zY29wZVwiKTo2MDExOTtcbmZ1bmN0aW9uIHooYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIHQ6Y2FzZSByOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiBBKGEpe3JldHVybiB6KGEpPT09bX1leHBvcnRzLkFzeW5jTW9kZT1sO2V4cG9ydHMuQ29uY3VycmVudE1vZGU9bTtleHBvcnRzLkNvbnRleHRDb25zdW1lcj1rO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWg7ZXhwb3J0cy5FbGVtZW50PWM7ZXhwb3J0cy5Gb3J3YXJkUmVmPW47ZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT10O2V4cG9ydHMuTWVtbz1yO2V4cG9ydHMuUG9ydGFsPWQ7XG5leHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIEEoYSl8fHooYSk9PT1sfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9QTtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09a307ZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWh9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1jfTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PW59O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWV9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09dH07XG5leHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXJ9O2V4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1kfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1nfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWZ9O2V4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXB9O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxhPT09cXx8XCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmKGEuJCR0eXBlb2Y9PT10fHxhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1rfHxhLiQkdHlwZW9mPT09bnx8YS4kJHR5cGVvZj09PXd8fGEuJCR0eXBlb2Y9PT14fHxhLiQkdHlwZW9mPT09eXx8YS4kJHR5cGVvZj09PXYpfTtleHBvcnRzLnR5cGVPZj16O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiaW1wb3J0e3R5cGVPZiBhcyBlLGlzRWxlbWVudCBhcyB0LGlzVmFsaWRFbGVtZW50VHlwZSBhcyBufWZyb21cInJlYWN0LWlzXCI7aW1wb3J0IHIse3VzZVN0YXRlIGFzIG8sdXNlQ29udGV4dCBhcyBzLHVzZU1lbW8gYXMgaSx1c2VFZmZlY3QgYXMgYSx1c2VSZWYgYXMgYyxjcmVhdGVFbGVtZW50IGFzIHUsdXNlRGVidWdWYWx1ZSBhcyBsLHVzZUxheW91dEVmZmVjdCBhcyBkfWZyb21cInJlYWN0XCI7aW1wb3J0IGggZnJvbVwic2hhbGxvd2VxdWFsXCI7aW1wb3J0IHAgZnJvbVwiQGVtb3Rpb24vc3R5bGlzXCI7aW1wb3J0IGYgZnJvbVwiQGVtb3Rpb24vdW5pdGxlc3NcIjtpbXBvcnQgbSBmcm9tXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCI7aW1wb3J0IHkgZnJvbVwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjtmdW5jdGlvbiB2KCl7cmV0dXJuKHY9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bZVswXV0scj0wLG89dC5sZW5ndGg7cjxvO3IrPTEpbi5wdXNoKHRbcl0sZVtyKzFdKTtyZXR1cm4gbn0sUz1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcIltvYmplY3QgT2JqZWN0XVwiPT09KHQudG9TdHJpbmc/dC50b1N0cmluZygpOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSkmJiFlKHQpfSx3PU9iamVjdC5mcmVlemUoW10pLEU9T2JqZWN0LmZyZWV6ZSh7fSk7ZnVuY3Rpb24gYihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfWZ1bmN0aW9uIF8oZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fGUuZGlzcGxheU5hbWV8fGUubmFtZXx8XCJDb21wb25lbnRcIn1mdW5jdGlvbiBOKGUpe3JldHVybiBlJiZcInN0cmluZ1wiPT10eXBlb2YgZS5zdHlsZWRDb21wb25lbnRJZH12YXIgQT1cInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYmJihwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfQVRUUnx8cHJvY2Vzcy5lbnYuU0NfQVRUUil8fFwiZGF0YS1zdHlsZWRcIixDPVwiNS4zLjlcIixJPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiSFRNTEVsZW1lbnRcImluIHdpbmRvdyxQPUJvb2xlYW4oXCJib29sZWFuXCI9PXR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWT9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYmJih2b2lkIDAhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk6dm9pZCAwIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWT9cImZhbHNlXCIhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSYmcHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk6XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVikpLE89e30sUj1cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3sxOlwiQ2Fubm90IGNyZWF0ZSBzdHlsZWQtY29tcG9uZW50IGZvciBjb21wb25lbnQ6ICVzLlxcblxcblwiLDI6XCJDYW4ndCBjb2xsZWN0IHN0eWxlcyBvbmNlIHlvdSd2ZSBjb25zdW1lZCBhIGBTZXJ2ZXJTdHlsZVNoZWV0YCdzIHN0eWxlcyEgYFNlcnZlclN0eWxlU2hlZXRgIGlzIGEgb25lIG9mZiBpbnN0YW5jZSBmb3IgZWFjaCBzZXJ2ZXItc2lkZSByZW5kZXIgY3ljbGUuXFxuXFxuLSBBcmUgeW91IHRyeWluZyB0byByZXVzZSBpdCBhY3Jvc3MgcmVuZGVycz9cXG4tIEFyZSB5b3UgYWNjaWRlbnRhbGx5IGNhbGxpbmcgY29sbGVjdFN0eWxlcyB0d2ljZT9cXG5cXG5cIiwzOlwiU3RyZWFtaW5nIFNTUiBpcyBvbmx5IHN1cHBvcnRlZCBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQ7IFBsZWFzZSBkbyBub3QgdHJ5IHRvIGNhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGJyb3dzZXIuXFxuXFxuXCIsNDpcIlRoZSBgU3R5bGVTaGVldE1hbmFnZXJgIGV4cGVjdHMgYSB2YWxpZCB0YXJnZXQgb3Igc2hlZXQgcHJvcCFcXG5cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgY2xpZW50IGFuZCBpcyB5b3VyIHRhcmdldCBmYWxzeT9cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgc2VydmVyIGFuZCBpcyB0aGUgc2hlZXQgZmFsc3k/XFxuXFxuXCIsNTpcIlRoZSBjbG9uZSBtZXRob2QgY2Fubm90IGJlIHVzZWQgb24gdGhlIGNsaWVudCFcXG5cXG4tIEFyZSB5b3UgcnVubmluZyBpbiBhIGNsaWVudC1saWtlIGVudmlyb25tZW50IG9uIHRoZSBzZXJ2ZXI/XFxuLSBBcmUgeW91IHRyeWluZyB0byBydW4gU1NSIG9uIHRoZSBjbGllbnQ/XFxuXFxuXCIsNjpcIlRyeWluZyB0byBpbnNlcnQgYSBuZXcgc3R5bGUgdGFnLCBidXQgdGhlIGdpdmVuIE5vZGUgaXMgdW5tb3VudGVkIVxcblxcbi0gQXJlIHlvdSB1c2luZyBhIGN1c3RvbSB0YXJnZXQgdGhhdCBpc24ndCBtb3VudGVkP1xcbi0gRG9lcyB5b3VyIGRvY3VtZW50IG5vdCBoYXZlIGEgdmFsaWQgaGVhZCBlbGVtZW50P1xcbi0gSGF2ZSB5b3UgYWNjaWRlbnRhbGx5IHJlbW92ZWQgYSBzdHlsZSB0YWcgbWFudWFsbHk/XFxuXFxuXCIsNzonVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFwidGhlbWVcIiBwcm9wIGZ1bmN0aW9uLCBlLmcuXFxuXFxuYGBganNcXG50aGVtZT17KCkgPT4gKHt9KX1cXG5gYGBcXG5cXG4nLDg6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXCJ0aGVtZVwiIHByb3AgYW4gb2JqZWN0LlxcblxcbicsOTpcIk1pc3NpbmcgZG9jdW1lbnQgYDxoZWFkPmBcXG5cXG5cIiwxMDpcIkNhbm5vdCBmaW5kIGEgU3R5bGVTaGVldCBpbnN0YW5jZS4gVXN1YWxseSB0aGlzIGhhcHBlbnMgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBzdHlsZWQtY29tcG9uZW50cyBsb2FkZWQgYXQgb25jZS4gQ2hlY2sgb3V0IHRoaXMgaXNzdWUgZm9yIGhvdyB0byB0cm91Ymxlc2hvb3QgYW5kIGZpeCB0aGUgY29tbW9uIGNhc2VzIHdoZXJlIHRoaXMgc2l0dWF0aW9uIGNhbiBoYXBwZW46IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9pc3N1ZXMvMTk0MSNpc3N1ZWNvbW1lbnQtNDE3ODYyMDIxXFxuXFxuXCIsMTE6XCJfVGhpcyBlcnJvciB3YXMgcmVwbGFjZWQgd2l0aCBhIGRldi10aW1lIHdhcm5pbmcsIGl0IHdpbGwgYmUgZGVsZXRlZCBmb3IgdjQgZmluYWwuXyBbY3JlYXRlR2xvYmFsU3R5bGVdIHJlY2VpdmVkIGNoaWxkcmVuIHdoaWNoIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBQbGVhc2UgdXNlIHRoZSBjb21wb25lbnQgd2l0aG91dCBwYXNzaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxcblxcblwiLDEyOlwiSXQgc2VlbXMgeW91IGFyZSBpbnRlcnBvbGF0aW5nIGEga2V5ZnJhbWUgZGVjbGFyYXRpb24gKCVzKSBpbnRvIGFuIHVudGFnZ2VkIHN0cmluZy4gVGhpcyB3YXMgc3VwcG9ydGVkIGluIHN0eWxlZC1jb21wb25lbnRzIHYzLCBidXQgaXMgbm90IGxvbmdlciBzdXBwb3J0ZWQgaW4gdjQgYXMga2V5ZnJhbWVzIGFyZSBub3cgaW5qZWN0ZWQgb24tZGVtYW5kLiBQbGVhc2Ugd3JhcCB5b3VyIHN0cmluZyBpbiB0aGUgY3NzXFxcXGBcXFxcYCBoZWxwZXIgd2hpY2ggZW5zdXJlcyB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hcGkjY3NzXFxuXFxuXCIsMTM6XCIlcyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXFxuXFxuXCIsMTQ6J1RoZW1lUHJvdmlkZXI6IFwidGhlbWVcIiBwcm9wIGlzIHJlcXVpcmVkLlxcblxcbicsMTU6XCJBIHN0eWxpcyBwbHVnaW4gaGFzIGJlZW4gc3VwcGxpZWQgdGhhdCBpcyBub3QgbmFtZWQuIFdlIG5lZWQgYSBuYW1lIGZvciBlYWNoIHBsdWdpbiB0byBiZSBhYmxlIHRvIHByZXZlbnQgc3R5bGluZyBjb2xsaXNpb25zIGJldHdlZW4gZGlmZmVyZW50IHN0eWxpcyBjb25maWd1cmF0aW9ucyB3aXRoaW4gdGhlIHNhbWUgYXBwLiBCZWZvcmUgeW91IHBhc3MgeW91ciBwbHVnaW4gdG8gYDxTdHlsZVNoZWV0TWFuYWdlciBzdHlsaXNQbHVnaW5zPXtbXX0+YCwgcGxlYXNlIG1ha2Ugc3VyZSBlYWNoIHBsdWdpbiBpcyB1bmlxdWVseS1uYW1lZCwgZS5nLlxcblxcbmBgYGpzXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGltcG9ydGVkUGx1Z2luLCAnbmFtZScsIHsgdmFsdWU6ICdzb21lLXVuaXF1ZS1uYW1lJyB9KTtcXG5gYGBcXG5cXG5cIiwxNjpcIlJlYWNoZWQgdGhlIGxpbWl0IG9mIGhvdyBtYW55IHN0eWxlZCBjb21wb25lbnRzIG1heSBiZSBjcmVhdGVkIGF0IGdyb3VwICVzLlxcbllvdSBtYXkgb25seSBjcmVhdGUgdXAgdG8gMSwwNzMsNzQxLDgyNCBjb21wb25lbnRzLiBJZiB5b3UncmUgY3JlYXRpbmcgY29tcG9uZW50cyBkeW5hbWljYWxseSxcXG5hcyBmb3IgaW5zdGFuY2UgaW4geW91ciByZW5kZXIgbWV0aG9kIHRoZW4geW91IG1heSBiZSBydW5uaW5nIGludG8gdGhpcyBsaW1pdGF0aW9uLlxcblxcblwiLDE3OlwiQ1NTU3R5bGVTaGVldCBjb3VsZCBub3QgYmUgZm91bmQgb24gSFRNTFN0eWxlRWxlbWVudC5cXG5IYXMgc3R5bGVkLWNvbXBvbmVudHMnIHN0eWxlIHRhZyBiZWVuIHVubW91bnRlZCBvciBhbHRlcmVkIGJ5IGFub3RoZXIgc2NyaXB0P1xcblwifTp7fTtmdW5jdGlvbiBEKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTA/dm9pZCAwOmFyZ3VtZW50c1swXSx0PVtdLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rPTEpdC5wdXNoKG48MHx8YXJndW1lbnRzLmxlbmd0aDw9bj92b2lkIDA6YXJndW1lbnRzW25dKTtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtlPWUucmVwbGFjZSgvJVthLXpdLyx0KX0pKSxlfWZ1bmN0aW9uIGooZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3Rocm93XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVj9uZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0LmlvL0pVSWFFI1wiK2UrXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIrKG4ubGVuZ3RoPjA/XCIgQXJnczogXCIrbi5qb2luKFwiLCBcIik6XCJcIikpOm5ldyBFcnJvcihELmFwcGx5KHZvaWQgMCxbUltlXV0uY29uY2F0KG4pKS50cmltKCkpfXZhciBUPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KDUxMiksdGhpcy5sZW5ndGg9NTEyLHRoaXMudGFnPWV9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5kZXhPZkdyb3VwPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtuPGU7bisrKXQrPXRoaXMuZ3JvdXBTaXplc1tuXTtyZXR1cm4gdH0sdC5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQpe2lmKGU+PXRoaXMuZ3JvdXBTaXplcy5sZW5ndGgpe2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXMscj1uLmxlbmd0aCxvPXI7ZT49bzspKG88PD0xKTwwJiZqKDE2LFwiXCIrZSk7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheShvKSx0aGlzLmdyb3VwU2l6ZXMuc2V0KG4pLHRoaXMubGVuZ3RoPW87Zm9yKHZhciBzPXI7czxvO3MrKyl0aGlzLmdyb3VwU2l6ZXNbc109MH1mb3IodmFyIGk9dGhpcy5pbmRleE9mR3JvdXAoZSsxKSxhPTAsYz10Lmxlbmd0aDthPGM7YSsrKXRoaXMudGFnLmluc2VydFJ1bGUoaSx0W2FdKSYmKHRoaXMuZ3JvdXBTaXplc1tlXSsrLGkrKyl9LHQuY2xlYXJHcm91cD1mdW5jdGlvbihlKXtpZihlPHRoaXMubGVuZ3RoKXt2YXIgdD10aGlzLmdyb3VwU2l6ZXNbZV0sbj10aGlzLmluZGV4T2ZHcm91cChlKSxyPW4rdDt0aGlzLmdyb3VwU2l6ZXNbZV09MDtmb3IodmFyIG89bjtvPHI7bysrKXRoaXMudGFnLmRlbGV0ZVJ1bGUobil9fSx0LmdldEdyb3VwPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7aWYoZT49dGhpcy5sZW5ndGh8fDA9PT10aGlzLmdyb3VwU2l6ZXNbZV0pcmV0dXJuIHQ7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplc1tlXSxyPXRoaXMuaW5kZXhPZkdyb3VwKGUpLG89cituLHM9cjtzPG87cysrKXQrPXRoaXMudGFnLmdldFJ1bGUocykrXCIvKiFzYyovXFxuXCI7cmV0dXJuIHR9LGV9KCkseD1uZXcgTWFwLGs9bmV3IE1hcCxWPTEsQj1mdW5jdGlvbihlKXtpZih4LmhhcyhlKSlyZXR1cm4geC5nZXQoZSk7Zm9yKDtrLmhhcyhWKTspVisrO3ZhciB0PVYrKztyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoKDB8dCk8MHx8dD4xPDwzMCkmJmooMTYsXCJcIit0KSx4LnNldChlLHQpLGsuc2V0KHQsZSksdH0sej1mdW5jdGlvbihlKXtyZXR1cm4gay5nZXQoZSl9LE09ZnVuY3Rpb24oZSx0KXt0Pj1WJiYoVj10KzEpLHguc2V0KGUsdCksay5zZXQodCxlKX0sRz1cInN0eWxlW1wiK0ErJ11bZGF0YS1zdHlsZWQtdmVyc2lvbj1cIjUuMy45XCJdJyxMPW5ldyBSZWdFeHAoXCJeXCIrQSsnXFxcXC5nKFxcXFxkKylcXFxcW2lkPVwiKFtcXFxcd1xcXFxkLV0rKVwiXFxcXF0uKj9cIihbXlwiXSopJyksRj1mdW5jdGlvbihlLHQsbil7Zm9yKHZhciByLG89bi5zcGxpdChcIixcIikscz0wLGk9by5sZW5ndGg7czxpO3MrKykocj1vW3NdKSYmZS5yZWdpc3Rlck5hbWUodCxyKX0sWT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0odC50ZXh0Q29udGVudHx8XCJcIikuc3BsaXQoXCIvKiFzYyovXFxuXCIpLHI9W10sbz0wLHM9bi5sZW5ndGg7bzxzO28rKyl7dmFyIGk9bltvXS50cmltKCk7aWYoaSl7dmFyIGE9aS5tYXRjaChMKTtpZihhKXt2YXIgYz0wfHBhcnNlSW50KGFbMV0sMTApLHU9YVsyXTswIT09YyYmKE0odSxjKSxGKGUsdSxhWzNdKSxlLmdldFRhZygpLmluc2VydFJ1bGVzKGMscikpLHIubGVuZ3RoPTB9ZWxzZSByLnB1c2goaSl9fX0scT1mdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsfSxIPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmhlYWQsbj1lfHx0LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hpbGROb2RlcyxuPXQubGVuZ3RoO24+PTA7bi0tKXt2YXIgcj10W25dO2lmKHImJjE9PT1yLm5vZGVUeXBlJiZyLmhhc0F0dHJpYnV0ZShBKSlyZXR1cm4gcn19KG4pLHM9dm9pZCAwIT09bz9vLm5leHRTaWJsaW5nOm51bGw7ci5zZXRBdHRyaWJ1dGUoQSxcImFjdGl2ZVwiKSxyLnNldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVkLXZlcnNpb25cIixcIjUuMy45XCIpO3ZhciBpPXEoKTtyZXR1cm4gaSYmci5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLGkpLG4uaW5zZXJ0QmVmb3JlKHIscykscn0sJD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSksdGhpcy5zaGVldD1mdW5jdGlvbihlKXtpZihlLnNoZWV0KXJldHVybiBlLnNoZWV0O2Zvcih2YXIgdD1kb2N1bWVudC5zdHlsZVNoZWV0cyxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO2lmKG8ub3duZXJOb2RlPT09ZSlyZXR1cm4gb31qKDE3KX0odCksdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUodCxlKSx0aGlzLmxlbmd0aCsrLCEwfWNhdGNoKGUpe3JldHVybiExfX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuc2hlZXQuZGVsZXRlUnVsZShlKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5zaGVldC5jc3NSdWxlc1tlXTtyZXR1cm4gdm9pZCAwIT09dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQuY3NzVGV4dD90LmNzc1RleHQ6XCJcIn0sZX0oKSxXPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmVsZW1lbnQ9SChlKTt0aGlzLm5vZGVzPXQuY2hpbGROb2Rlcyx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtpZihlPD10aGlzLmxlbmd0aCYmZT49MCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkscj10aGlzLm5vZGVzW2VdO3JldHVybiB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKG4scnx8bnVsbCksdGhpcy5sZW5ndGgrKywhMH1yZXR1cm4hMX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2VdKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ub2Rlc1tlXS50ZXh0Q29udGVudDpcIlwifSxlfSgpLFU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMucnVsZXM9W10sdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8PXRoaXMubGVuZ3RoJiYodGhpcy5ydWxlcy5zcGxpY2UoZSwwLHQpLHRoaXMubGVuZ3RoKyssITApfSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5ydWxlcy5zcGxpY2UoZSwxKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ydWxlc1tlXTpcIlwifSxlfSgpLEo9SSxYPXtpc1NlcnZlcjohSSx1c2VDU1NPTUluamVjdGlvbjohUH0sWj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3ZvaWQgMD09PWUmJihlPUUpLHZvaWQgMD09PXQmJih0PXt9KSx0aGlzLm9wdGlvbnM9dih7fSxYLHt9LGUpLHRoaXMuZ3M9dCx0aGlzLm5hbWVzPW5ldyBNYXAobiksdGhpcy5zZXJ2ZXI9ISFlLmlzU2VydmVyLCF0aGlzLnNlcnZlciYmSSYmSiYmKEo9ITEsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoRyksbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtvJiZcImFjdGl2ZVwiIT09by5nZXRBdHRyaWJ1dGUoQSkmJihZKGUsbyksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobykpfX0odGhpcykpfWUucmVnaXN0ZXJJZD1mdW5jdGlvbihlKXtyZXR1cm4gQihlKX07dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucz1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj0hMCksbmV3IGUodih7fSx0aGlzLm9wdGlvbnMse30sdCksdGhpcy5ncyxuJiZ0aGlzLm5hbWVzfHx2b2lkIDApfSx0LmFsbG9jYXRlR1NJbnN0YW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nc1tlXT0odGhpcy5nc1tlXXx8MCkrMX0sdC5nZXRUYWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YWd8fCh0aGlzLnRhZz0obj0odD10aGlzLm9wdGlvbnMpLmlzU2VydmVyLHI9dC51c2VDU1NPTUluamVjdGlvbixvPXQudGFyZ2V0LGU9bj9uZXcgVShvKTpyP25ldyAkKG8pOm5ldyBXKG8pLG5ldyBUKGUpKSk7dmFyIGUsdCxuLHIsb30sdC5oYXNOYW1lRm9ySWQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmhhcyh0KX0sdC5yZWdpc3Rlck5hbWU9ZnVuY3Rpb24oZSx0KXtpZihCKGUpLHRoaXMubmFtZXMuaGFzKGUpKXRoaXMubmFtZXMuZ2V0KGUpLmFkZCh0KTtlbHNle3ZhciBuPW5ldyBTZXQ7bi5hZGQodCksdGhpcy5uYW1lcy5zZXQoZSxuKX19LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0LG4pe3RoaXMucmVnaXN0ZXJOYW1lKGUsdCksdGhpcy5nZXRUYWcoKS5pbnNlcnRSdWxlcyhCKGUpLG4pfSx0LmNsZWFyTmFtZXM9ZnVuY3Rpb24oZSl7dGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmNsZWFyKCl9LHQuY2xlYXJSdWxlcz1mdW5jdGlvbihlKXt0aGlzLmdldFRhZygpLmNsZWFyR3JvdXAoQihlKSksdGhpcy5jbGVhck5hbWVzKGUpfSx0LmNsZWFyVGFnPWZ1bmN0aW9uKCl7dGhpcy50YWc9dm9pZCAwfSx0LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmdldFRhZygpLG49dC5sZW5ndGgscj1cIlwiLG89MDtvPG47bysrKXt2YXIgcz16KG8pO2lmKHZvaWQgMCE9PXMpe3ZhciBpPWUubmFtZXMuZ2V0KHMpLGE9dC5nZXRHcm91cChvKTtpZihpJiZhJiZpLnNpemUpe3ZhciBjPUErXCIuZ1wiK28rJ1tpZD1cIicrcysnXCJdJyx1PVwiXCI7dm9pZCAwIT09aSYmaS5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmxlbmd0aD4wJiYodSs9ZStcIixcIil9KSkscis9XCJcIithK2MrJ3tjb250ZW50OlwiJyt1KydcIn0vKiFzYyovXFxuJ319fXJldHVybiByfSh0aGlzKX0sZX0oKSxLPS8oYSkoZCkvZ2ksUT1mdW5jdGlvbihlKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKyhlPjI1PzM5Ojk3KSl9O2Z1bmN0aW9uIGVlKGUpe3ZhciB0LG49XCJcIjtmb3IodD1NYXRoLmFicyhlKTt0PjUyO3Q9dC81MnwwKW49USh0JTUyKStuO3JldHVybihRKHQlNTIpK24pLnJlcGxhY2UoSyxcIiQxLSQyXCIpfXZhciB0ZT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10Lmxlbmd0aDtuOyllPTMzKmVedC5jaGFyQ29kZUF0KC0tbik7cmV0dXJuIGV9LG5lPWZ1bmN0aW9uKGUpe3JldHVybiB0ZSg1MzgxLGUpfTtmdW5jdGlvbiByZShlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrPTEpe3ZhciBuPWVbdF07aWYoYihuKSYmIU4obikpcmV0dXJuITF9cmV0dXJuITB9dmFyIG9lPW5lKFwiNS4zLjlcIiksc2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLnJ1bGVzPWUsdGhpcy5zdGF0aWNSdWxlc0lkPVwiXCIsdGhpcy5pc1N0YXRpYz1cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodm9pZCAwPT09bnx8bi5pc1N0YXRpYykmJnJlKGUpLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmJhc2VIYXNoPXRlKG9lLHQpLHRoaXMuYmFzZVN0eWxlPW4sWi5yZWdpc3RlcklkKHQpfXJldHVybiBlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5jb21wb25lbnRJZCxvPVtdO2lmKHRoaXMuYmFzZVN0eWxlJiZvLnB1c2godGhpcy5iYXNlU3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZSx0LG4pKSx0aGlzLmlzU3RhdGljJiYhbi5oYXNoKWlmKHRoaXMuc3RhdGljUnVsZXNJZCYmdC5oYXNOYW1lRm9ySWQocix0aGlzLnN0YXRpY1J1bGVzSWQpKW8ucHVzaCh0aGlzLnN0YXRpY1J1bGVzSWQpO2Vsc2V7dmFyIHM9TmUodGhpcy5ydWxlcyxlLHQsbikuam9pbihcIlwiKSxpPWVlKHRlKHRoaXMuYmFzZUhhc2gscyk+Pj4wKTtpZighdC5oYXNOYW1lRm9ySWQocixpKSl7dmFyIGE9bihzLFwiLlwiK2ksdm9pZCAwLHIpO3QuaW5zZXJ0UnVsZXMocixpLGEpfW8ucHVzaChpKSx0aGlzLnN0YXRpY1J1bGVzSWQ9aX1lbHNle2Zvcih2YXIgYz10aGlzLnJ1bGVzLmxlbmd0aCx1PXRlKHRoaXMuYmFzZUhhc2gsbi5oYXNoKSxsPVwiXCIsZD0wO2Q8YztkKyspe3ZhciBoPXRoaXMucnVsZXNbZF07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGgpbCs9aCxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodT10ZSh1LGgrZCkpO2Vsc2UgaWYoaCl7dmFyIHA9TmUoaCxlLHQsbiksZj1BcnJheS5pc0FycmF5KHApP3Auam9pbihcIlwiKTpwO3U9dGUodSxmK2QpLGwrPWZ9fWlmKGwpe3ZhciBtPWVlKHU+Pj4wKTtpZighdC5oYXNOYW1lRm9ySWQocixtKSl7dmFyIHk9bihsLFwiLlwiK20sdm9pZCAwLHIpO3QuaW5zZXJ0UnVsZXMocixtLHkpfW8ucHVzaChtKX19cmV0dXJuIG8uam9pbihcIiBcIil9LGV9KCksaWU9L15cXHMqXFwvXFwvLiokL2dtLGFlPVtcIjpcIixcIltcIixcIi5cIixcIiNcIl07ZnVuY3Rpb24gY2UoZSl7dmFyIHQsbixyLG8scz12b2lkIDA9PT1lP0U6ZSxpPXMub3B0aW9ucyxhPXZvaWQgMD09PWk/RTppLGM9cy5wbHVnaW5zLHU9dm9pZCAwPT09Yz93OmMsbD1uZXcgcChhKSxkPVtdLGg9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0KXtpZih0KXRyeXtlKHQrXCJ9XCIpfWNhdGNoKGUpe319cmV0dXJuIGZ1bmN0aW9uKG4scixvLHMsaSxhLGMsdSxsLGQpe3N3aXRjaChuKXtjYXNlIDE6aWYoMD09PWwmJjY0PT09ci5jaGFyQ29kZUF0KDApKXJldHVybiBlKHIrXCI7XCIpLFwiXCI7YnJlYWs7Y2FzZSAyOmlmKDA9PT11KXJldHVybiByK1wiLyp8Ki9cIjticmVhaztjYXNlIDM6c3dpdGNoKHUpe2Nhc2UgMTAyOmNhc2UgMTEyOnJldHVybiBlKG9bMF0rciksXCJcIjtkZWZhdWx0OnJldHVybiByKygwPT09ZD9cIi8qfCovXCI6XCJcIil9Y2FzZS0yOnIuc3BsaXQoXCIvKnwqL31cIikuZm9yRWFjaCh0KX19fSgoZnVuY3Rpb24oZSl7ZC5wdXNoKGUpfSkpLGY9ZnVuY3Rpb24oZSxyLHMpe3JldHVybiAwPT09ciYmLTEhPT1hZS5pbmRleE9mKHNbbi5sZW5ndGhdKXx8cy5tYXRjaChvKT9lOlwiLlwiK3R9O2Z1bmN0aW9uIG0oZSxzLGksYSl7dm9pZCAwPT09YSYmKGE9XCImXCIpO3ZhciBjPWUucmVwbGFjZShpZSxcIlwiKSx1PXMmJmk/aStcIiBcIitzK1wiIHsgXCIrYytcIiB9XCI6YztyZXR1cm4gdD1hLG49cyxyPW5ldyBSZWdFeHAoXCJcXFxcXCIrbitcIlxcXFxiXCIsXCJnXCIpLG89bmV3IFJlZ0V4cChcIihcXFxcXCIrbitcIlxcXFxiKXsyLH1cIiksbChpfHwhcz9cIlwiOnMsdSl9cmV0dXJuIGwudXNlKFtdLmNvbmNhdCh1LFtmdW5jdGlvbihlLHQsbyl7Mj09PWUmJm8ubGVuZ3RoJiZvWzBdLmxhc3RJbmRleE9mKG4pPjAmJihvWzBdPW9bMF0ucmVwbGFjZShyLGYpKX0saCxmdW5jdGlvbihlKXtpZigtMj09PWUpe3ZhciB0PWQ7cmV0dXJuIGQ9W10sdH19XSkpLG0uaGFzaD11Lmxlbmd0aD91LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5uYW1lfHxqKDE1KSx0ZShlLHQubmFtZSl9KSw1MzgxKS50b1N0cmluZygpOlwiXCIsbX12YXIgdWU9ci5jcmVhdGVDb250ZXh0KCksbGU9dWUuQ29uc3VtZXIsZGU9ci5jcmVhdGVDb250ZXh0KCksaGU9KGRlLkNvbnN1bWVyLG5ldyBaKSxwZT1jZSgpO2Z1bmN0aW9uIGZlKCl7cmV0dXJuIHModWUpfHxoZX1mdW5jdGlvbiBtZSgpe3JldHVybiBzKGRlKXx8cGV9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9byhlLnN0eWxpc1BsdWdpbnMpLG49dFswXSxzPXRbMV0sYz1mZSgpLHU9aSgoZnVuY3Rpb24oKXt2YXIgdD1jO3JldHVybiBlLnNoZWV0P3Q9ZS5zaGVldDplLnRhcmdldCYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt0YXJnZXQ6ZS50YXJnZXR9LCExKSksZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24mJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dXNlQ1NTT01JbmplY3Rpb246ITF9KSksdH0pLFtlLmRpc2FibGVDU1NPTUluamVjdGlvbixlLnNoZWV0LGUudGFyZ2V0XSksbD1pKChmdW5jdGlvbigpe3JldHVybiBjZSh7b3B0aW9uczp7cHJlZml4OiFlLmRpc2FibGVWZW5kb3JQcmVmaXhlc30scGx1Z2luczpufSl9KSxbZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXMsbl0pO3JldHVybiBhKChmdW5jdGlvbigpe2gobixlLnN0eWxpc1BsdWdpbnMpfHxzKGUuc3R5bGlzUGx1Z2lucyl9KSxbZS5zdHlsaXNQbHVnaW5zXSksci5jcmVhdGVFbGVtZW50KHVlLlByb3ZpZGVyLHt2YWx1ZTp1fSxyLmNyZWF0ZUVsZW1lbnQoZGUuUHJvdmlkZXIse3ZhbHVlOmx9LFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ci5DaGlsZHJlbi5vbmx5KGUuY2hpbGRyZW4pOmUuY2hpbGRyZW4pKX12YXIgdmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dmFyIG49dGhpczt0aGlzLmluamVjdD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PXBlKTt2YXIgcj1uLm5hbWUrdC5oYXNoO2UuaGFzTmFtZUZvcklkKG4uaWQscil8fGUuaW5zZXJ0UnVsZXMobi5pZCxyLHQobi5ydWxlcyxyLFwiQGtleWZyYW1lc1wiKSl9LHRoaXMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gaigxMixTdHJpbmcobi5uYW1lKSl9LHRoaXMubmFtZT1lLHRoaXMuaWQ9XCJzYy1rZXlmcmFtZXMtXCIrZSx0aGlzLnJ1bGVzPXR9cmV0dXJuIGUucHJvdG90eXBlLmdldE5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXBlKSx0aGlzLm5hbWUrZS5oYXNofSxlfSgpLGdlPS8oW0EtWl0pLyxTZT0vKFtBLVpdKS9nLHdlPS9ebXMtLyxFZT1mdW5jdGlvbihlKXtyZXR1cm5cIi1cIitlLnRvTG93ZXJDYXNlKCl9O2Z1bmN0aW9uIGJlKGUpe3JldHVybiBnZS50ZXN0KGUpP2UucmVwbGFjZShTZSxFZSkucmVwbGFjZSh3ZSxcIi1tcy1cIik6ZX12YXIgX2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWV8fCExPT09ZXx8XCJcIj09PWV9O2Z1bmN0aW9uIE5lKGUsbixyLG8pe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgcyxpPVtdLGE9MCxjPWUubGVuZ3RoO2E8YzthKz0xKVwiXCIhPT0ocz1OZShlW2FdLG4scixvKSkmJihBcnJheS5pc0FycmF5KHMpP2kucHVzaC5hcHBseShpLHMpOmkucHVzaChzKSk7cmV0dXJuIGl9aWYoX2UoZSkpcmV0dXJuXCJcIjtpZihOKGUpKXJldHVyblwiLlwiK2Uuc3R5bGVkQ29tcG9uZW50SWQ7aWYoYihlKSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YobD1lKXx8bC5wcm90b3R5cGUmJmwucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR8fCFuKXJldHVybiBlO3ZhciB1PWUobik7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdCh1KSYmY29uc29sZS53YXJuKF8oZSkrXCIgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlwiKSxOZSh1LG4scixvKX12YXIgbDtyZXR1cm4gZSBpbnN0YW5jZW9mIHZlP3I/KGUuaW5qZWN0KHIsbyksZS5nZXROYW1lKG8pKTplOlMoZSk/ZnVuY3Rpb24gZSh0LG4pe3ZhciByLG8scz1bXTtmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiYhX2UodFtpXSkmJihBcnJheS5pc0FycmF5KHRbaV0pJiZ0W2ldLmlzQ3NzfHxiKHRbaV0pP3MucHVzaChiZShpKStcIjpcIix0W2ldLFwiO1wiKTpTKHRbaV0pP3MucHVzaC5hcHBseShzLGUodFtpXSxpKSk6cy5wdXNoKGJlKGkpK1wiOiBcIisocj1pLG51bGw9PShvPXRbaV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIG98fFwiXCI9PT1vP1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIG98fDA9PT1vfHxyIGluIGY/U3RyaW5nKG8pLnRyaW0oKTpvK1wicHhcIikrXCI7XCIpKTtyZXR1cm4gbj9bbitcIiB7XCJdLmNvbmNhdChzLFtcIn1cIl0pOnN9KGUpOmUudG9TdHJpbmcoKX12YXIgQWU9ZnVuY3Rpb24oZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSkmJihlLmlzQ3NzPSEwKSxlfTtmdW5jdGlvbiBDZShlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07cmV0dXJuIGIoZSl8fFMoZSk/QWUoTmUoZyh3LFtlXS5jb25jYXQobikpKSk6MD09PW4ubGVuZ3RoJiYxPT09ZS5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzBdP2U6QWUoTmUoZyhlLG4pKSl9dmFyIEllPS9pbnZhbGlkIGhvb2sgY2FsbC9pLFBlPW5ldyBTZXQsT2U9ZnVuY3Rpb24oZSx0KXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgbj1cIlRoZSBjb21wb25lbnQgXCIrZSsodD8nIHdpdGggdGhlIGlkIG9mIFwiJyt0KydcIic6XCJcIikrXCIgaGFzIGJlZW4gY3JlYXRlZCBkeW5hbWljYWxseS5cXG5Zb3UgbWF5IHNlZSB0aGlzIHdhcm5pbmcgYmVjYXVzZSB5b3UndmUgY2FsbGVkIHN0eWxlZCBpbnNpZGUgYW5vdGhlciBjb21wb25lbnQuXFxuVG8gcmVzb2x2ZSB0aGlzIG9ubHkgY3JlYXRlIG5ldyBTdHlsZWRDb21wb25lbnRzIG91dHNpZGUgb2YgYW55IHJlbmRlciBtZXRob2QgYW5kIGZ1bmN0aW9uIGNvbXBvbmVudC5cIixyPWNvbnNvbGUuZXJyb3I7dHJ5e3ZhciBvPSEwO2NvbnNvbGUuZXJyb3I9ZnVuY3Rpb24oZSl7aWYoSWUudGVzdChlKSlvPSExLFBlLmRlbGV0ZShuKTtlbHNle2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLHM9bmV3IEFycmF5KHQ+MT90LTE6MCksaT0xO2k8dDtpKyspc1tpLTFdPWFyZ3VtZW50c1tpXTtyLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KHMpKX19LGMoKSxvJiYhUGUuaGFzKG4pJiYoY29uc29sZS53YXJuKG4pLFBlLmFkZChuKSl9Y2F0Y2goZSl7SWUudGVzdChlLm1lc3NhZ2UpJiZQZS5kZWxldGUobil9ZmluYWxseXtjb25zb2xlLmVycm9yPXJ9fX0sUmU9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj1FKSxlLnRoZW1lIT09bi50aGVtZSYmZS50aGVtZXx8dHx8bi50aGVtZX0sRGU9L1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZyxqZT0vKF4tfC0kKS9nO2Z1bmN0aW9uIFRlKGUpe3JldHVybiBlLnJlcGxhY2UoRGUsXCItXCIpLnJlcGxhY2UoamUsXCJcIil9dmFyIHhlPWZ1bmN0aW9uKGUpe3JldHVybiBlZShuZShlKT4+PjApfTtmdW5jdGlvbiBrZShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKFwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fGUuY2hhckF0KDApPT09ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSl9dmFyIFZlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmIUFycmF5LmlzQXJyYXkoZSl9LEJlPWZ1bmN0aW9uKGUpe3JldHVyblwiX19wcm90b19fXCIhPT1lJiZcImNvbnN0cnVjdG9yXCIhPT1lJiZcInByb3RvdHlwZVwiIT09ZX07ZnVuY3Rpb24gemUoZSx0LG4pe3ZhciByPWVbbl07VmUodCkmJlZlKHIpP01lKHIsdCk6ZVtuXT10fWZ1bmN0aW9uIE1lKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtmb3IodmFyIG89MCxzPW47bzxzLmxlbmd0aDtvKyspe3ZhciBpPXNbb107aWYoVmUoaSkpZm9yKHZhciBhIGluIGkpQmUoYSkmJnplKGUsaVthXSxhKX1yZXR1cm4gZX12YXIgR2U9ci5jcmVhdGVDb250ZXh0KCksTGU9R2UuQ29uc3VtZXI7ZnVuY3Rpb24gRmUoZSl7dmFyIHQ9cyhHZSksbj1pKChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiBqKDE0KTtpZihiKGUpKXt2YXIgbj1lKHQpO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fG51bGwhPT1uJiYhQXJyYXkuaXNBcnJheShuKSYmXCJvYmplY3RcIj09dHlwZW9mIG4/bjpqKDcpfXJldHVybiBBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiIT10eXBlb2YgZT9qKDgpOnQ/dih7fSx0LHt9LGUpOmV9KGUudGhlbWUsdCl9KSxbZS50aGVtZSx0XSk7cmV0dXJuIGUuY2hpbGRyZW4/ci5jcmVhdGVFbGVtZW50KEdlLlByb3ZpZGVyLHt2YWx1ZTpufSxlLmNoaWxkcmVuKTpudWxsfXZhciBZZT17fTtmdW5jdGlvbiBxZShlLHQsbil7dmFyIG89TihlKSxpPSFrZShlKSxhPXQuYXR0cnMsYz12b2lkIDA9PT1hP3c6YSxkPXQuY29tcG9uZW50SWQsaD12b2lkIDA9PT1kP2Z1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIiE9dHlwZW9mIGU/XCJzY1wiOlRlKGUpO1llW25dPShZZVtuXXx8MCkrMTt2YXIgcj1uK1wiLVwiK3hlKFwiNS4zLjlcIituK1llW25dKTtyZXR1cm4gdD90K1wiLVwiK3I6cn0odC5kaXNwbGF5TmFtZSx0LnBhcmVudENvbXBvbmVudElkKTpkLHA9dC5kaXNwbGF5TmFtZSxmPXZvaWQgMD09PXA/ZnVuY3Rpb24oZSl7cmV0dXJuIGtlKGUpP1wic3R5bGVkLlwiK2U6XCJTdHlsZWQoXCIrXyhlKStcIilcIn0oZSk6cCxnPXQuZGlzcGxheU5hbWUmJnQuY29tcG9uZW50SWQ/VGUodC5kaXNwbGF5TmFtZSkrXCItXCIrdC5jb21wb25lbnRJZDp0LmNvbXBvbmVudElkfHxoLFM9byYmZS5hdHRycz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuYXR0cnMsYykuZmlsdGVyKEJvb2xlYW4pOmMsQT10LnNob3VsZEZvcndhcmRQcm9wO28mJmUuc2hvdWxkRm9yd2FyZFByb3AmJihBPXQuc2hvdWxkRm9yd2FyZFByb3A/ZnVuY3Rpb24obixyLG8pe3JldHVybiBlLnNob3VsZEZvcndhcmRQcm9wKG4scixvKSYmdC5zaG91bGRGb3J3YXJkUHJvcChuLHIsbyl9OmUuc2hvdWxkRm9yd2FyZFByb3ApO3ZhciBDLEk9bmV3IHNlKG4sZyxvP2UuY29tcG9uZW50U3R5bGU6dm9pZCAwKSxQPUkuaXNTdGF0aWMmJjA9PT1jLmxlbmd0aCxPPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWUuYXR0cnMsaT1lLmNvbXBvbmVudFN0eWxlLGE9ZS5kZWZhdWx0UHJvcHMsYz1lLmZvbGRlZENvbXBvbmVudElkcyxkPWUuc2hvdWxkRm9yd2FyZFByb3AsaD1lLnN0eWxlZENvbXBvbmVudElkLHA9ZS50YXJnZXQ7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChoKTt2YXIgZj1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09ZSYmKGU9RSk7dmFyIHI9dih7fSx0LHt0aGVtZTplfSksbz17fTtyZXR1cm4gbi5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdCxuLHMsaT1lO2Zvcih0IGluIGIoaSkmJihpPWkocikpLGkpclt0XT1vW3RdPVwiY2xhc3NOYW1lXCI9PT10PyhuPW9bdF0scz1pW3RdLG4mJnM/bitcIiBcIitzOm58fHMpOmlbdF19KSksW3Isb119KFJlKHQscyhHZSksYSl8fEUsdCxvKSx5PWZbMF0sZz1mWzFdLFM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZmUoKSxzPW1lKCksaT10P2UuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRSxvLHMpOmUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMobixvLHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmwoaSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmIXQmJnImJnIoaSksaX0oaSxyLHksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9lLndhcm5Ub29NYW55Q2xhc3Nlczp2b2lkIDApLHc9bixfPWcuJGFzfHx0LiRhc3x8Zy5hc3x8dC5hc3x8cCxOPWtlKF8pLEE9ZyE9PXQ/dih7fSx0LHt9LGcpOnQsQz17fTtmb3IodmFyIEkgaW4gQSlcIiRcIiE9PUlbMF0mJlwiYXNcIiE9PUkmJihcImZvcndhcmRlZEFzXCI9PT1JP0MuYXM9QVtJXTooZD9kKEksbSxfKTohTnx8bShJKSkmJihDW0ldPUFbSV0pKTtyZXR1cm4gdC5zdHlsZSYmZy5zdHlsZSE9PXQuc3R5bGUmJihDLnN0eWxlPXYoe30sdC5zdHlsZSx7fSxnLnN0eWxlKSksQy5jbGFzc05hbWU9QXJyYXkucHJvdG90eXBlLmNvbmNhdChjLGgsUyE9PWg/UzpudWxsLHQuY2xhc3NOYW1lLGcuY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksQy5yZWY9dyx1KF8sQyl9KEMsZSx0LFApfTtyZXR1cm4gTy5kaXNwbGF5TmFtZT1mLChDPXIuZm9yd2FyZFJlZihPKSkuYXR0cnM9UyxDLmNvbXBvbmVudFN0eWxlPUksQy5kaXNwbGF5TmFtZT1mLEMuc2hvdWxkRm9yd2FyZFByb3A9QSxDLmZvbGRlZENvbXBvbmVudElkcz1vP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5mb2xkZWRDb21wb25lbnRJZHMsZS5zdHlsZWRDb21wb25lbnRJZCk6dyxDLnN0eWxlZENvbXBvbmVudElkPWcsQy50YXJnZXQ9bz9lLnRhcmdldDplLEMud2l0aENvbXBvbmVudD1mdW5jdGlvbihlKXt2YXIgcj10LmNvbXBvbmVudElkLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciBuLHIsbz17fSxzPU9iamVjdC5rZXlzKGUpO2ZvcihyPTA7cjxzLmxlbmd0aDtyKyspbj1zW3JdLHQuaW5kZXhPZihuKT49MHx8KG9bbl09ZVtuXSk7cmV0dXJuIG99KHQsW1wiY29tcG9uZW50SWRcIl0pLHM9ciYmcitcIi1cIisoa2UoZSk/ZTpUZShfKGUpKSk7cmV0dXJuIHFlKGUsdih7fSxvLHthdHRyczpTLGNvbXBvbmVudElkOnN9KSxuKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KEMsXCJkZWZhdWx0UHJvcHNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wc30sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcz1vP01lKHt9LGUuZGVmYXVsdFByb3BzLHQpOnR9fSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKE9lKGYsZyksQy53YXJuVG9vTWFueUNsYXNzZXM9ZnVuY3Rpb24oZSx0KXt2YXIgbj17fSxyPSExO3JldHVybiBmdW5jdGlvbihvKXtpZighciYmKG5bb109ITAsT2JqZWN0LmtleXMobikubGVuZ3RoPj0yMDApKXt2YXIgcz10Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiO2NvbnNvbGUud2FybihcIk92ZXIgMjAwIGNsYXNzZXMgd2VyZSBnZW5lcmF0ZWQgZm9yIGNvbXBvbmVudCBcIitlK3MrXCIuXFxuQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG5FeGFtcGxlOlxcbiAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xcbiAgICBzdHlsZToge1xcbiAgICAgIGJhY2tncm91bmQ6IHByb3BzLmJhY2tncm91bmQsXFxuICAgIH0sXFxuICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbiAgPENvbXBvbmVudCAvPlwiKSxyPSEwLG49e319fX0oZixnKSksT2JqZWN0LmRlZmluZVByb3BlcnR5KEMsXCJ0b1N0cmluZ1wiLHt2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwiLlwiK0Muc3R5bGVkQ29tcG9uZW50SWR9fSksaSYmeShDLGUse2F0dHJzOiEwLGNvbXBvbmVudFN0eWxlOiEwLGRpc3BsYXlOYW1lOiEwLGZvbGRlZENvbXBvbmVudElkczohMCxzaG91bGRGb3J3YXJkUHJvcDohMCxzdHlsZWRDb21wb25lbnRJZDohMCx0YXJnZXQ6ITAsd2l0aENvbXBvbmVudDohMH0pLEN9dmFyIEhlPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbiBlKHQscixvKXtpZih2b2lkIDA9PT1vJiYobz1FKSwhbihyKSlyZXR1cm4gaigxLFN0cmluZyhyKSk7dmFyIHM9ZnVuY3Rpb24oKXtyZXR1cm4gdChyLG8sQ2UuYXBwbHkodm9pZCAwLGFyZ3VtZW50cykpfTtyZXR1cm4gcy53aXRoQ29uZmlnPWZ1bmN0aW9uKG4pe3JldHVybiBlKHQscix2KHt9LG8se30sbikpfSxzLmF0dHJzPWZ1bmN0aW9uKG4pe3JldHVybiBlKHQscix2KHt9LG8se2F0dHJzOkFycmF5LnByb3RvdHlwZS5jb25jYXQoby5hdHRycyxuKS5maWx0ZXIoQm9vbGVhbil9KSl9LHN9KHFlLGUpfTtbXCJhXCIsXCJhYmJyXCIsXCJhZGRyZXNzXCIsXCJhcmVhXCIsXCJhcnRpY2xlXCIsXCJhc2lkZVwiLFwiYXVkaW9cIixcImJcIixcImJhc2VcIixcImJkaVwiLFwiYmRvXCIsXCJiaWdcIixcImJsb2NrcXVvdGVcIixcImJvZHlcIixcImJyXCIsXCJidXR0b25cIixcImNhbnZhc1wiLFwiY2FwdGlvblwiLFwiY2l0ZVwiLFwiY29kZVwiLFwiY29sXCIsXCJjb2xncm91cFwiLFwiZGF0YVwiLFwiZGF0YWxpc3RcIixcImRkXCIsXCJkZWxcIixcImRldGFpbHNcIixcImRmblwiLFwiZGlhbG9nXCIsXCJkaXZcIixcImRsXCIsXCJkdFwiLFwiZW1cIixcImVtYmVkXCIsXCJmaWVsZHNldFwiLFwiZmlnY2FwdGlvblwiLFwiZmlndXJlXCIsXCJmb290ZXJcIixcImZvcm1cIixcImgxXCIsXCJoMlwiLFwiaDNcIixcImg0XCIsXCJoNVwiLFwiaDZcIixcImhlYWRcIixcImhlYWRlclwiLFwiaGdyb3VwXCIsXCJoclwiLFwiaHRtbFwiLFwiaVwiLFwiaWZyYW1lXCIsXCJpbWdcIixcImlucHV0XCIsXCJpbnNcIixcImtiZFwiLFwia2V5Z2VuXCIsXCJsYWJlbFwiLFwibGVnZW5kXCIsXCJsaVwiLFwibGlua1wiLFwibWFpblwiLFwibWFwXCIsXCJtYXJrXCIsXCJtYXJxdWVlXCIsXCJtZW51XCIsXCJtZW51aXRlbVwiLFwibWV0YVwiLFwibWV0ZXJcIixcIm5hdlwiLFwibm9zY3JpcHRcIixcIm9iamVjdFwiLFwib2xcIixcIm9wdGdyb3VwXCIsXCJvcHRpb25cIixcIm91dHB1dFwiLFwicFwiLFwicGFyYW1cIixcInBpY3R1cmVcIixcInByZVwiLFwicHJvZ3Jlc3NcIixcInFcIixcInJwXCIsXCJydFwiLFwicnVieVwiLFwic1wiLFwic2FtcFwiLFwic2NyaXB0XCIsXCJzZWN0aW9uXCIsXCJzZWxlY3RcIixcInNtYWxsXCIsXCJzb3VyY2VcIixcInNwYW5cIixcInN0cm9uZ1wiLFwic3R5bGVcIixcInN1YlwiLFwic3VtbWFyeVwiLFwic3VwXCIsXCJ0YWJsZVwiLFwidGJvZHlcIixcInRkXCIsXCJ0ZXh0YXJlYVwiLFwidGZvb3RcIixcInRoXCIsXCJ0aGVhZFwiLFwidGltZVwiLFwidGl0bGVcIixcInRyXCIsXCJ0cmFja1wiLFwidVwiLFwidWxcIixcInZhclwiLFwidmlkZW9cIixcIndiclwiLFwiY2lyY2xlXCIsXCJjbGlwUGF0aFwiLFwiZGVmc1wiLFwiZWxsaXBzZVwiLFwiZm9yZWlnbk9iamVjdFwiLFwiZ1wiLFwiaW1hZ2VcIixcImxpbmVcIixcImxpbmVhckdyYWRpZW50XCIsXCJtYXJrZXJcIixcIm1hc2tcIixcInBhdGhcIixcInBhdHRlcm5cIixcInBvbHlnb25cIixcInBvbHlsaW5lXCIsXCJyYWRpYWxHcmFkaWVudFwiLFwicmVjdFwiLFwic3RvcFwiLFwic3ZnXCIsXCJ0ZXh0XCIsXCJ0ZXh0UGF0aFwiLFwidHNwYW5cIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7SGVbZV09SGUoZSl9KSk7dmFyICRlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3RoaXMucnVsZXM9ZSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5pc1N0YXRpYz1yZShlKSxaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCsxKX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jcmVhdGVTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89cihOZSh0aGlzLnJ1bGVzLHQsbixyKS5qb2luKFwiXCIpLFwiXCIpLHM9dGhpcy5jb21wb25lbnRJZCtlO24uaW5zZXJ0UnVsZXMocyxzLG8pfSx0LnJlbW92ZVN0eWxlcz1mdW5jdGlvbihlLHQpe3QuY2xlYXJSdWxlcyh0aGlzLmNvbXBvbmVudElkK2UpfSx0LnJlbmRlclN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXtlPjImJloucmVnaXN0ZXJJZCh0aGlzLmNvbXBvbmVudElkK2UpLHRoaXMucmVtb3ZlU3R5bGVzKGUsbiksdGhpcy5jcmVhdGVTdHlsZXMoZSx0LG4scil9LGV9KCk7ZnVuY3Rpb24gV2UoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKyluW28tMV09YXJndW1lbnRzW29dO3ZhciBpPUNlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG4pKSxhPVwic2MtZ2xvYmFsLVwiK3hlKEpTT04uc3RyaW5naWZ5KGkpKSx1PW5ldyAkZShpLGEpO2Z1bmN0aW9uIGwoZSl7dmFyIHQ9ZmUoKSxuPW1lKCksbz1zKEdlKSxsPWModC5hbGxvY2F0ZUdTSW5zdGFuY2UoYSkpLmN1cnJlbnQ7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmci5DaGlsZHJlbi5jb3VudChlLmNoaWxkcmVuKSYmY29uc29sZS53YXJuKFwiVGhlIGdsb2JhbCBzdHlsZSBjb21wb25lbnQgXCIrYStcIiB3YXMgZ2l2ZW4gY2hpbGQgSlNYLiBjcmVhdGVHbG9iYWxTdHlsZSBkb2VzIG5vdCByZW5kZXIgY2hpbGRyZW4uXCIpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmkuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJi0xIT09ZS5pbmRleE9mKFwiQGltcG9ydFwiKX0pKSYmY29uc29sZS53YXJuKFwiUGxlYXNlIGRvIG5vdCB1c2UgQGltcG9ydCBDU1Mgc3ludGF4IGluIGNyZWF0ZUdsb2JhbFN0eWxlIGF0IHRoaXMgdGltZSwgYXMgdGhlIENTU09NIEFQSXMgd2UgdXNlIGluIHByb2R1Y3Rpb24gZG8gbm90IGhhbmRsZSBpdCB3ZWxsLiBJbnN0ZWFkLCB3ZSByZWNvbW1lbmQgdXNpbmcgYSBsaWJyYXJ5IHN1Y2ggYXMgcmVhY3QtaGVsbWV0IHRvIGluamVjdCBhIHR5cGljYWwgPGxpbms+IG1ldGEgdGFnIHRvIHRoZSBzdHlsZXNoZWV0LCBvciBzaW1wbHkgZW1iZWRkaW5nIGl0IG1hbnVhbGx5IGluIHlvdXIgaW5kZXguaHRtbCA8aGVhZD4gc2VjdGlvbiBmb3IgYSBzaW1wbGVyIGFwcC5cIiksdC5zZXJ2ZXImJmgobCxlLHQsbyxuKSxkKChmdW5jdGlvbigpe2lmKCF0LnNlcnZlcilyZXR1cm4gaChsLGUsdCxvLG4pLGZ1bmN0aW9uKCl7cmV0dXJuIHUucmVtb3ZlU3R5bGVzKGwsdCl9fSksW2wsZSx0LG8sbl0pLG51bGx9ZnVuY3Rpb24gaChlLHQsbixyLG8pe2lmKHUuaXNTdGF0aWMpdS5yZW5kZXJTdHlsZXMoZSxPLG4sbyk7ZWxzZXt2YXIgcz12KHt9LHQse3RoZW1lOlJlKHQscixsLmRlZmF1bHRQcm9wcyl9KTt1LnJlbmRlclN0eWxlcyhlLHMsbixvKX19cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmT2UoYSksci5tZW1vKGwpfWZ1bmN0aW9uIFVlKGUpe1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJga2V5ZnJhbWVzYCBjYW5ub3QgYmUgdXNlZCBvbiBSZWFjdE5hdGl2ZSwgb25seSBvbiB0aGUgd2ViLiBUbyBkbyBhbmltYXRpb24gaW4gUmVhY3ROYXRpdmUgcGxlYXNlIHVzZSBBbmltYXRlZC5cIik7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3ZhciBvPUNlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG4pKS5qb2luKFwiXCIpLHM9eGUobyk7cmV0dXJuIG5ldyB2ZShzLG8pfXZhciBKZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt2YXIgZT10aGlzO3RoaXMuX2VtaXRTaGVldENTUz1mdW5jdGlvbigpe3ZhciB0PWUuaW5zdGFuY2UudG9TdHJpbmcoKTtpZighdClyZXR1cm5cIlwiO3ZhciBuPXEoKTtyZXR1cm5cIjxzdHlsZSBcIitbbiYmJ25vbmNlPVwiJytuKydcIicsQSsnPVwidHJ1ZVwiJywnZGF0YS1zdHlsZWQtdmVyc2lvbj1cIjUuMy45XCInXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikrXCI+XCIrdCtcIjwvc3R5bGU+XCJ9LHRoaXMuZ2V0U3R5bGVUYWdzPWZ1bmN0aW9uKCl7cmV0dXJuIGUuc2VhbGVkP2ooMik6ZS5fZW1pdFNoZWV0Q1NTKCl9LHRoaXMuZ2V0U3R5bGVFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIHQ7aWYoZS5zZWFsZWQpcmV0dXJuIGooMik7dmFyIG49KCh0PXt9KVtBXT1cIlwiLHRbXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCJdPVwiNS4zLjlcIix0LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtfX2h0bWw6ZS5pbnN0YW5jZS50b1N0cmluZygpfSx0KSxvPXEoKTtyZXR1cm4gbyYmKG4ubm9uY2U9byksW3IuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsdih7fSxuLHtrZXk6XCJzYy0wLTBcIn0pKV19LHRoaXMuc2VhbD1mdW5jdGlvbigpe2Uuc2VhbGVkPSEwfSx0aGlzLmluc3RhbmNlPW5ldyBaKHtpc1NlcnZlcjohMH0pLHRoaXMuc2VhbGVkPSExfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmNvbGxlY3RTdHlsZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2VhbGVkP2ooMik6ci5jcmVhdGVFbGVtZW50KHllLHtzaGVldDp0aGlzLmluc3RhbmNlfSxlKX0sdC5pbnRlcmxlYXZlV2l0aE5vZGVTdHJlYW09ZnVuY3Rpb24oZSl7cmV0dXJuIGooMyl9LGV9KCksWGU9ZnVuY3Rpb24oZSl7dmFyIHQ9ci5mb3J3YXJkUmVmKChmdW5jdGlvbih0LG4pe3ZhciBvPXMoR2UpLGk9ZS5kZWZhdWx0UHJvcHMsYT1SZSh0LG8saSk7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdm9pZCAwPT09YSYmY29uc29sZS53YXJuKCdbd2l0aFRoZW1lXSBZb3UgYXJlIG5vdCB1c2luZyBhIFRoZW1lUHJvdmlkZXIgbm9yIHBhc3NpbmcgYSB0aGVtZSBwcm9wIG9yIGEgdGhlbWUgaW4gZGVmYXVsdFByb3BzIGluIGNvbXBvbmVudCBjbGFzcyBcIicrXyhlKSsnXCInKSxyLmNyZWF0ZUVsZW1lbnQoZSx2KHt9LHQse3RoZW1lOmEscmVmOm59KSl9KSk7cmV0dXJuIHkodCxlKSx0LmRpc3BsYXlOYW1lPVwiV2l0aFRoZW1lKFwiK18oZSkrXCIpXCIsdH0sWmU9ZnVuY3Rpb24oKXtyZXR1cm4gcyhHZSl9LEtlPXtTdHlsZVNoZWV0OlosbWFzdGVyU2hlZXQ6aGV9O1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5QZXJoYXBzIHlvdSdyZSBsb29raW5nIHRvIGltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJz9cXG5SZWFkIG1vcmUgYWJvdXQgdGhpcyBhdCBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9iYXNpY3MjcmVhY3QtbmF0aXZlXCIpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidGVzdFwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJih3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXT13aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXXx8MCwxPT09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl0mJmNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mICdzdHlsZWQtY29tcG9uZW50cycgaW5pdGlhbGl6ZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi4gVGhpcyBtYXkgY2F1c2UgZHluYW1pYyBzdHlsZXMgdG8gbm90IHJlbmRlciBwcm9wZXJseSwgZXJyb3JzIGR1cmluZyB0aGUgcmVoeWRyYXRpb24gcHJvY2VzcywgYSBtaXNzaW5nIHRoZW1lIHByb3AsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGdvb2QgcmVhc29uLlxcblxcblNlZSBodHRwczovL3MtYy5zaC8yQkFYemVkIGZvciBtb3JlIGluZm8uXCIpLHdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdKz0xKTtleHBvcnQgZGVmYXVsdCBIZTtleHBvcnR7SmUgYXMgU2VydmVyU3R5bGVTaGVldCxsZSBhcyBTdHlsZVNoZWV0Q29uc3VtZXIsdWUgYXMgU3R5bGVTaGVldENvbnRleHQseWUgYXMgU3R5bGVTaGVldE1hbmFnZXIsTGUgYXMgVGhlbWVDb25zdW1lcixHZSBhcyBUaGVtZUNvbnRleHQsRmUgYXMgVGhlbWVQcm92aWRlcixLZSBhcyBfX1BSSVZBVEVfXyxXZSBhcyBjcmVhdGVHbG9iYWxTdHlsZSxDZSBhcyBjc3MsTiBhcyBpc1N0eWxlZENvbXBvbmVudCxVZSBhcyBrZXlmcmFtZXMsWmUgYXMgdXNlVGhlbWUsQyBhcyB2ZXJzaW9uLFhlIGFzIHdpdGhUaGVtZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcy5tYXBcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJpbXBvcnQgYXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nO1xuZXhwb3J0IHZhciBtZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKGEsIGIpIHtcbiAgdmFyIHJlc3VsdCA9IGFzc2lnbih7fSwgYSwgYik7XG5cbiAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICB2YXIgX2Fzc2lnbjtcblxuICAgIGlmICghYVtrZXldIHx8IHR5cGVvZiBiW2tleV0gIT09ICdvYmplY3QnKSBjb250aW51ZTtcbiAgICBhc3NpZ24ocmVzdWx0LCAoX2Fzc2lnbiA9IHt9LCBfYXNzaWduW2tleV0gPSBhc3NpZ24oYVtrZXldLCBiW2tleV0pLCBfYXNzaWduKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTsgLy8gc29ydCBvYmplY3QtdmFsdWUgcmVzcG9uc2l2ZSBzdHlsZXNcblxudmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KG9iaikge1xuICB2YXIgbmV4dCA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS5sb2NhbGVDb21wYXJlKGIsIHVuZGVmaW5lZCwge1xuICAgICAgbnVtZXJpYzogdHJ1ZSxcbiAgICAgIHNlbnNpdGl2aXR5OiAnYmFzZSdcbiAgICB9KTtcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgbmV4dFtrZXldID0gb2JqW2tleV07XG4gIH0pO1xuICByZXR1cm4gbmV4dDtcbn07XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYnJlYWtwb2ludHM6IFs0MCwgNTIsIDY0XS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiArICdlbSc7XG4gIH0pXG59O1xuXG52YXIgY3JlYXRlTWVkaWFRdWVyeSA9IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhUXVlcnkobikge1xuICByZXR1cm4gXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBcIiArIG4gKyBcIilcIjtcbn07XG5cbnZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIGdldFZhbHVlKG4sIHNjYWxlKSB7XG4gIHJldHVybiBnZXQoc2NhbGUsIG4sIG4pO1xufTtcblxuZXhwb3J0IHZhciBnZXQgPSBmdW5jdGlvbiBnZXQob2JqLCBrZXksIGRlZiwgcCwgdW5kZWYpIHtcbiAga2V5ID0ga2V5ICYmIGtleS5zcGxpdCA/IGtleS5zcGxpdCgnLicpIDogW2tleV07XG5cbiAgZm9yIChwID0gMDsgcCA8IGtleS5sZW5ndGg7IHArKykge1xuICAgIG9iaiA9IG9iaiA/IG9ialtrZXlbcF1dIDogdW5kZWY7XG4gIH1cblxuICByZXR1cm4gb2JqID09PSB1bmRlZiA/IGRlZiA6IG9iajtcbn07XG5leHBvcnQgdmFyIGNyZWF0ZVBhcnNlciA9IGZ1bmN0aW9uIGNyZWF0ZVBhcnNlcihjb25maWcpIHtcbiAgdmFyIGNhY2hlID0ge307XG5cbiAgdmFyIHBhcnNlID0gZnVuY3Rpb24gcGFyc2UocHJvcHMpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIHNob3VsZFNvcnQgPSBmYWxzZTtcbiAgICB2YXIgaXNDYWNoZURpc2FibGVkID0gcHJvcHMudGhlbWUgJiYgcHJvcHMudGhlbWUuZGlzYWJsZVN0eWxlZFN5c3RlbUNhY2hlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoIWNvbmZpZ1trZXldKSBjb250aW51ZTtcbiAgICAgIHZhciBzeCA9IGNvbmZpZ1trZXldO1xuICAgICAgdmFyIHJhdyA9IHByb3BzW2tleV07XG4gICAgICB2YXIgc2NhbGUgPSBnZXQocHJvcHMudGhlbWUsIHN4LnNjYWxlLCBzeC5kZWZhdWx0cyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmF3ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjYWNoZS5icmVha3BvaW50cyA9ICFpc0NhY2hlRGlzYWJsZWQgJiYgY2FjaGUuYnJlYWtwb2ludHMgfHwgZ2V0KHByb3BzLnRoZW1lLCAnYnJlYWtwb2ludHMnLCBkZWZhdWx0cy5icmVha3BvaW50cyk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmF3KSkge1xuICAgICAgICAgIGNhY2hlLm1lZGlhID0gIWlzQ2FjaGVEaXNhYmxlZCAmJiBjYWNoZS5tZWRpYSB8fCBbbnVsbF0uY29uY2F0KGNhY2hlLmJyZWFrcG9pbnRzLm1hcChjcmVhdGVNZWRpYVF1ZXJ5KSk7XG4gICAgICAgICAgc3R5bGVzID0gbWVyZ2Uoc3R5bGVzLCBwYXJzZVJlc3BvbnNpdmVTdHlsZShjYWNoZS5tZWRpYSwgc3gsIHNjYWxlLCByYXcsIHByb3BzKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmF3ICE9PSBudWxsKSB7XG4gICAgICAgICAgc3R5bGVzID0gbWVyZ2Uoc3R5bGVzLCBwYXJzZVJlc3BvbnNpdmVPYmplY3QoY2FjaGUuYnJlYWtwb2ludHMsIHN4LCBzY2FsZSwgcmF3LCBwcm9wcykpO1xuICAgICAgICAgIHNob3VsZFNvcnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFzc2lnbihzdHlsZXMsIHN4KHJhdywgc2NhbGUsIHByb3BzKSk7XG4gICAgfSAvLyBzb3J0IG9iamVjdC1iYXNlZCByZXNwb25zaXZlIHN0eWxlc1xuXG5cbiAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgc3R5bGVzID0gc29ydChzdHlsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG4gIH07XG5cbiAgcGFyc2UuY29uZmlnID0gY29uZmlnO1xuICBwYXJzZS5wcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuICBwYXJzZS5jYWNoZSA9IGNhY2hlO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGNvbmZpZykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIGsgIT09ICdjb25maWcnO1xuICB9KTtcblxuICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBfY3JlYXRlUGFyc2VyO1xuXG4gICAgICBwYXJzZVtrZXldID0gY3JlYXRlUGFyc2VyKChfY3JlYXRlUGFyc2VyID0ge30sIF9jcmVhdGVQYXJzZXJba2V5XSA9IGNvbmZpZ1trZXldLCBfY3JlYXRlUGFyc2VyKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2U7XG59O1xuXG52YXIgcGFyc2VSZXNwb25zaXZlU3R5bGUgPSBmdW5jdGlvbiBwYXJzZVJlc3BvbnNpdmVTdHlsZShtZWRpYVF1ZXJpZXMsIHN4LCBzY2FsZSwgcmF3LCBfcHJvcHMpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICByYXcuc2xpY2UoMCwgbWVkaWFRdWVyaWVzLmxlbmd0aCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICB2YXIgbWVkaWEgPSBtZWRpYVF1ZXJpZXNbaV07XG4gICAgdmFyIHN0eWxlID0gc3godmFsdWUsIHNjYWxlLCBfcHJvcHMpO1xuXG4gICAgaWYgKCFtZWRpYSkge1xuICAgICAgYXNzaWduKHN0eWxlcywgc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2Fzc2lnbjI7XG5cbiAgICAgIGFzc2lnbihzdHlsZXMsIChfYXNzaWduMiA9IHt9LCBfYXNzaWduMlttZWRpYV0gPSBhc3NpZ24oe30sIHN0eWxlc1ttZWRpYV0sIHN0eWxlKSwgX2Fzc2lnbjIpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3R5bGVzO1xufTtcblxudmFyIHBhcnNlUmVzcG9uc2l2ZU9iamVjdCA9IGZ1bmN0aW9uIHBhcnNlUmVzcG9uc2l2ZU9iamVjdChicmVha3BvaW50cywgc3gsIHNjYWxlLCByYXcsIF9wcm9wcykge1xuICB2YXIgc3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHJhdykge1xuICAgIHZhciBicmVha3BvaW50ID0gYnJlYWtwb2ludHNba2V5XTtcbiAgICB2YXIgdmFsdWUgPSByYXdba2V5XTtcbiAgICB2YXIgc3R5bGUgPSBzeCh2YWx1ZSwgc2NhbGUsIF9wcm9wcyk7XG5cbiAgICBpZiAoIWJyZWFrcG9pbnQpIHtcbiAgICAgIGFzc2lnbihzdHlsZXMsIHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9hc3NpZ24zO1xuXG4gICAgICB2YXIgbWVkaWEgPSBjcmVhdGVNZWRpYVF1ZXJ5KGJyZWFrcG9pbnQpO1xuICAgICAgYXNzaWduKHN0eWxlcywgKF9hc3NpZ24zID0ge30sIF9hc3NpZ24zW21lZGlhXSA9IGFzc2lnbih7fSwgc3R5bGVzW21lZGlhXSwgc3R5bGUpLCBfYXNzaWduMykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG5leHBvcnQgdmFyIGNyZWF0ZVN0eWxlRnVuY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVTdHlsZUZ1bmN0aW9uKF9yZWYpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBfcmVmLnByb3BlcnRpZXMsXG4gICAgICBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHksXG4gICAgICBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBfcmVmJHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZiR0cmFuc2Zvcm0gPT09IHZvaWQgMCA/IGdldFZhbHVlIDogX3JlZiR0cmFuc2Zvcm0sXG4gICAgICBkZWZhdWx0U2NhbGUgPSBfcmVmLmRlZmF1bHRTY2FsZTtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwgW3Byb3BlcnR5XTtcblxuICB2YXIgc3ggPSBmdW5jdGlvbiBzeCh2YWx1ZSwgc2NhbGUsIF9wcm9wcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgbiA9IHRyYW5zZm9ybSh2YWx1ZSwgc2NhbGUsIF9wcm9wcyk7XG4gICAgaWYgKG4gPT09IG51bGwpIHJldHVybjtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJlc3VsdFtwcm9wXSA9IG47XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBzeC5zY2FsZSA9IHNjYWxlO1xuICBzeC5kZWZhdWx0cyA9IGRlZmF1bHRTY2FsZTtcbiAgcmV0dXJuIHN4O1xufTsgLy8gbmV3IHY1IEFQSVxuXG5leHBvcnQgdmFyIHN5c3RlbSA9IGZ1bmN0aW9uIHN5c3RlbShhcmdzKSB7XG4gIGlmIChhcmdzID09PSB2b2lkIDApIHtcbiAgICBhcmdzID0ge307XG4gIH1cblxuICB2YXIgY29uZmlnID0ge307XG4gIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjb25mID0gYXJnc1trZXldO1xuXG4gICAgaWYgKGNvbmYgPT09IHRydWUpIHtcbiAgICAgIC8vIHNob3J0Y3V0IGRlZmluaXRpb25cbiAgICAgIGNvbmZpZ1trZXldID0gY3JlYXRlU3R5bGVGdW5jdGlvbih7XG4gICAgICAgIHByb3BlcnR5OiBrZXksXG4gICAgICAgIHNjYWxlOiBrZXlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnW2tleV0gPSBjb25mO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZpZ1trZXldID0gY3JlYXRlU3R5bGVGdW5jdGlvbihjb25mKTtcbiAgfSk7XG4gIHZhciBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlcjtcbn07XG5leHBvcnQgdmFyIGNvbXBvc2UgPSBmdW5jdGlvbiBjb21wb3NlKCkge1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcnNlcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyc2Vyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgaWYgKCFwYXJzZXIgfHwgIXBhcnNlci5jb25maWcpIHJldHVybjtcbiAgICBhc3NpZ24oY29uZmlnLCBwYXJzZXIuY29uZmlnKTtcbiAgfSk7XG4gIHZhciBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlcjtcbn07XG4iLCJpbXBvcnQgeyBzeXN0ZW0sIGdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xuXG52YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcihuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG4pO1xufTtcblxudmFyIGdldFdpZHRoID0gZnVuY3Rpb24gZ2V0V2lkdGgobiwgc2NhbGUpIHtcbiAgcmV0dXJuIGdldChzY2FsZSwgbiwgIWlzTnVtYmVyKG4pIHx8IG4gPiAxID8gbiA6IG4gKiAxMDAgKyAnJScpO1xufTtcblxudmFyIGNvbmZpZyA9IHtcbiAgd2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ3dpZHRoJyxcbiAgICBzY2FsZTogJ3NpemVzJyxcbiAgICB0cmFuc2Zvcm06IGdldFdpZHRoXG4gIH0sXG4gIGhlaWdodDoge1xuICAgIHByb3BlcnR5OiAnaGVpZ2h0JyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBtaW5XaWR0aDoge1xuICAgIHByb3BlcnR5OiAnbWluV2lkdGgnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG1pbkhlaWdodDoge1xuICAgIHByb3BlcnR5OiAnbWluSGVpZ2h0JyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBtYXhXaWR0aDoge1xuICAgIHByb3BlcnR5OiAnbWF4V2lkdGgnLFxuICAgIHNjYWxlOiAnc2l6ZXMnXG4gIH0sXG4gIG1heEhlaWdodDoge1xuICAgIHByb3BlcnR5OiAnbWF4SGVpZ2h0JyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBzaXplOiB7XG4gICAgcHJvcGVydGllczogWyd3aWR0aCcsICdoZWlnaHQnXSxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBvdmVyZmxvdzogdHJ1ZSxcbiAgb3ZlcmZsb3dYOiB0cnVlLFxuICBvdmVyZmxvd1k6IHRydWUsXG4gIGRpc3BsYXk6IHRydWUsXG4gIHZlcnRpY2FsQWxpZ246IHRydWVcbn07XG5leHBvcnQgdmFyIGxheW91dCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgbGF5b3V0O1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgY29uZmlnID0ge1xuICBjb2xvcjoge1xuICAgIHByb3BlcnR5OiAnY29sb3InLFxuICAgIHNjYWxlOiAnY29sb3JzJ1xuICB9LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICBwcm9wZXJ0eTogJ2JhY2tncm91bmRDb2xvcicsXG4gICAgc2NhbGU6ICdjb2xvcnMnXG4gIH0sXG4gIG9wYWNpdHk6IHRydWVcbn07XG5jb25maWcuYmcgPSBjb25maWcuYmFja2dyb3VuZENvbG9yO1xuZXhwb3J0IHZhciBjb2xvciA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgY29sb3I7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgZm9udFNpemVzOiBbMTIsIDE0LCAxNiwgMjAsIDI0LCAzMiwgNDgsIDY0LCA3Ml1cbn07XG52YXIgY29uZmlnID0ge1xuICBmb250RmFtaWx5OiB7XG4gICAgcHJvcGVydHk6ICdmb250RmFtaWx5JyxcbiAgICBzY2FsZTogJ2ZvbnRzJ1xuICB9LFxuICBmb250U2l6ZToge1xuICAgIHByb3BlcnR5OiAnZm9udFNpemUnLFxuICAgIHNjYWxlOiAnZm9udFNpemVzJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLmZvbnRTaXplc1xuICB9LFxuICBmb250V2VpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdmb250V2VpZ2h0JyxcbiAgICBzY2FsZTogJ2ZvbnRXZWlnaHRzJ1xuICB9LFxuICBsaW5lSGVpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdsaW5lSGVpZ2h0JyxcbiAgICBzY2FsZTogJ2xpbmVIZWlnaHRzJ1xuICB9LFxuICBsZXR0ZXJTcGFjaW5nOiB7XG4gICAgcHJvcGVydHk6ICdsZXR0ZXJTcGFjaW5nJyxcbiAgICBzY2FsZTogJ2xldHRlclNwYWNpbmdzJ1xuICB9LFxuICB0ZXh0QWxpZ246IHRydWUsXG4gIGZvbnRTdHlsZTogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgdHlwb2dyYXBoeSA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgdHlwb2dyYXBoeTtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGNvbmZpZyA9IHtcbiAgYWxpZ25JdGVtczogdHJ1ZSxcbiAgYWxpZ25Db250ZW50OiB0cnVlLFxuICBqdXN0aWZ5SXRlbXM6IHRydWUsXG4gIGp1c3RpZnlDb250ZW50OiB0cnVlLFxuICBmbGV4V3JhcDogdHJ1ZSxcbiAgZmxleERpcmVjdGlvbjogdHJ1ZSxcbiAgLy8gaXRlbVxuICBmbGV4OiB0cnVlLFxuICBmbGV4R3JvdzogdHJ1ZSxcbiAgZmxleFNocmluazogdHJ1ZSxcbiAgZmxleEJhc2lzOiB0cnVlLFxuICBqdXN0aWZ5U2VsZjogdHJ1ZSxcbiAgYWxpZ25TZWxmOiB0cnVlLFxuICBvcmRlcjogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgZmxleGJveCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgZmxleGJveDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgZ3JpZEdhcDoge1xuICAgIHByb3BlcnR5OiAnZ3JpZEdhcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBncmlkQ29sdW1uR2FwOiB7XG4gICAgcHJvcGVydHk6ICdncmlkQ29sdW1uR2FwJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGdyaWRSb3dHYXA6IHtcbiAgICBwcm9wZXJ0eTogJ2dyaWRSb3dHYXAnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZEF1dG9GbG93OiB0cnVlLFxuICBncmlkQXV0b0NvbHVtbnM6IHRydWUsXG4gIGdyaWRBdXRvUm93czogdHJ1ZSxcbiAgZ3JpZFRlbXBsYXRlQ29sdW1uczogdHJ1ZSxcbiAgZ3JpZFRlbXBsYXRlUm93czogdHJ1ZSxcbiAgZ3JpZFRlbXBsYXRlQXJlYXM6IHRydWUsXG4gIGdyaWRBcmVhOiB0cnVlXG59O1xuZXhwb3J0IHZhciBncmlkID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBncmlkO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgY29uZmlnID0ge1xuICBib3JkZXI6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlcicsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJXaWR0aDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyV2lkdGgnLFxuICAgIHNjYWxlOiAnYm9yZGVyV2lkdGhzJ1xuICB9LFxuICBib3JkZXJTdHlsZToge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyU3R5bGUnLFxuICAgIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xuICB9LFxuICBib3JkZXJDb2xvcjoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyQ29sb3InLFxuICAgIHNjYWxlOiAnY29sb3JzJ1xuICB9LFxuICBib3JkZXJSYWRpdXM6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclJhZGl1cycsXG4gICAgc2NhbGU6ICdyYWRpaSdcbiAgfSxcbiAgYm9yZGVyVG9wOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJUb3AnLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyVG9wTGVmdFJhZGl1czoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyVG9wTGVmdFJhZGl1cycsXG4gICAgc2NhbGU6ICdyYWRpaSdcbiAgfSxcbiAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJyxcbiAgICBzY2FsZTogJ3JhZGlpJ1xuICB9LFxuICBib3JkZXJSaWdodDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyUmlnaHQnLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyQm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJCb3R0b20nLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsXG4gICAgc2NhbGU6ICdyYWRpaSdcbiAgfSxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbVJpZ2h0UmFkaXVzJyxcbiAgICBzY2FsZTogJ3JhZGlpJ1xuICB9LFxuICBib3JkZXJMZWZ0OiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJMZWZ0JyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlclg6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ2JvcmRlckxlZnQnLCAnYm9yZGVyUmlnaHQnXSxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlclk6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ2JvcmRlclRvcCcsICdib3JkZXJCb3R0b20nXSxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH1cbn07XG5jb25maWcuYm9yZGVyVG9wV2lkdGggPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyVG9wV2lkdGgnLFxuICBzY2FsZTogJ2JvcmRlcldpZHRocydcbn07XG5jb25maWcuYm9yZGVyVG9wQ29sb3IgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyVG9wQ29sb3InLFxuICBzY2FsZTogJ2NvbG9ycydcbn07XG5jb25maWcuYm9yZGVyVG9wU3R5bGUgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyVG9wU3R5bGUnLFxuICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbn07XG5jb25maWcuYm9yZGVyVG9wTGVmdFJhZGl1cyA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJUb3BMZWZ0UmFkaXVzJyxcbiAgc2NhbGU6ICdyYWRpaSdcbn07XG5jb25maWcuYm9yZGVyVG9wUmlnaHRSYWRpdXMgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyVG9wUmlnaHRSYWRpdXMnLFxuICBzY2FsZTogJ3JhZGlpJ1xufTtcbmNvbmZpZy5ib3JkZXJCb3R0b21XaWR0aCA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21XaWR0aCcsXG4gIHNjYWxlOiAnYm9yZGVyV2lkdGhzJ1xufTtcbmNvbmZpZy5ib3JkZXJCb3R0b21Db2xvciA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21Db2xvcicsXG4gIHNjYWxlOiAnY29sb3JzJ1xufTtcbmNvbmZpZy5ib3JkZXJCb3R0b21TdHlsZSA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21TdHlsZScsXG4gIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xufTtcbmNvbmZpZy5ib3JkZXJCb3R0b21MZWZ0UmFkaXVzID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbUxlZnRSYWRpdXMnLFxuICBzY2FsZTogJ3JhZGlpJ1xufTtcbmNvbmZpZy5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsXG4gIHNjYWxlOiAncmFkaWknXG59O1xuY29uZmlnLmJvcmRlckxlZnRXaWR0aCA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJMZWZ0V2lkdGgnLFxuICBzY2FsZTogJ2JvcmRlcldpZHRocydcbn07XG5jb25maWcuYm9yZGVyTGVmdENvbG9yID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckxlZnRDb2xvcicsXG4gIHNjYWxlOiAnY29sb3JzJ1xufTtcbmNvbmZpZy5ib3JkZXJMZWZ0U3R5bGUgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyTGVmdFN0eWxlJyxcbiAgc2NhbGU6ICdib3JkZXJTdHlsZXMnXG59O1xuY29uZmlnLmJvcmRlclJpZ2h0V2lkdGggPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyUmlnaHRXaWR0aCcsXG4gIHNjYWxlOiAnYm9yZGVyV2lkdGhzJ1xufTtcbmNvbmZpZy5ib3JkZXJSaWdodENvbG9yID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclJpZ2h0Q29sb3InLFxuICBzY2FsZTogJ2NvbG9ycydcbn07XG5jb25maWcuYm9yZGVyUmlnaHRTdHlsZSA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJSaWdodFN0eWxlJyxcbiAgc2NhbGU6ICdib3JkZXJTdHlsZXMnXG59O1xuZXhwb3J0IHZhciBib3JkZXIgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGJvcmRlcjtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGNvbmZpZyA9IHtcbiAgYmFja2dyb3VuZDogdHJ1ZSxcbiAgYmFja2dyb3VuZEltYWdlOiB0cnVlLFxuICBiYWNrZ3JvdW5kU2l6ZTogdHJ1ZSxcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiB0cnVlLFxuICBiYWNrZ3JvdW5kUmVwZWF0OiB0cnVlXG59O1xuY29uZmlnLmJnSW1hZ2UgPSBjb25maWcuYmFja2dyb3VuZEltYWdlO1xuY29uZmlnLmJnU2l6ZSA9IGNvbmZpZy5iYWNrZ3JvdW5kU2l6ZTtcbmNvbmZpZy5iZ1Bvc2l0aW9uID0gY29uZmlnLmJhY2tncm91bmRQb3NpdGlvbjtcbmNvbmZpZy5iZ1JlcGVhdCA9IGNvbmZpZy5iYWNrZ3JvdW5kUmVwZWF0O1xuZXhwb3J0IHZhciBiYWNrZ3JvdW5kID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBiYWNrZ3JvdW5kO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgZGVmYXVsdHMgPSB7XG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl1cbn07XG52YXIgY29uZmlnID0ge1xuICBwb3NpdGlvbjogdHJ1ZSxcbiAgekluZGV4OiB7XG4gICAgcHJvcGVydHk6ICd6SW5kZXgnLFxuICAgIHNjYWxlOiAnekluZGljZXMnXG4gIH0sXG4gIHRvcDoge1xuICAgIHByb3BlcnR5OiAndG9wJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdyaWdodCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBib3R0b206IHtcbiAgICBwcm9wZXJ0eTogJ2JvdHRvbScsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBsZWZ0OiB7XG4gICAgcHJvcGVydHk6ICdsZWZ0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH1cbn07XG5leHBvcnQgdmFyIHBvc2l0aW9uID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsImltcG9ydCB7IGdldCwgc3lzdGVtLCBjb21wb3NlIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgZGVmYXVsdHMgPSB7XG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl1cbn07XG5cbnZhciBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKG4pIHtcbiAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obik7XG59O1xuXG52YXIgZ2V0TWFyZ2luID0gZnVuY3Rpb24gZ2V0TWFyZ2luKG4sIHNjYWxlKSB7XG4gIGlmICghaXNOdW1iZXIobikpIHtcbiAgICByZXR1cm4gZ2V0KHNjYWxlLCBuLCBuKTtcbiAgfVxuXG4gIHZhciBpc05lZ2F0aXZlID0gbiA8IDA7XG4gIHZhciBhYnNvbHV0ZSA9IE1hdGguYWJzKG4pO1xuICB2YXIgdmFsdWUgPSBnZXQoc2NhbGUsIGFic29sdXRlLCBhYnNvbHV0ZSk7XG5cbiAgaWYgKCFpc051bWJlcih2YWx1ZSkpIHtcbiAgICByZXR1cm4gaXNOZWdhdGl2ZSA/ICctJyArIHZhbHVlIDogdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKiAoaXNOZWdhdGl2ZSA/IC0xIDogMSk7XG59O1xuXG52YXIgY29uZmlncyA9IHt9O1xuY29uZmlncy5tYXJnaW4gPSB7XG4gIG1hcmdpbjoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpblRvcDoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luVG9wJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpblJpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW5SaWdodCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5Cb3R0b206IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpbkJvdHRvbScsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5MZWZ0OiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW5MZWZ0JyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpblg6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIG1hcmdpblk6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICB0cmFuc2Zvcm06IGdldE1hcmdpbixcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH1cbn07XG5jb25maWdzLm1hcmdpbi5tID0gY29uZmlncy5tYXJnaW4ubWFyZ2luO1xuY29uZmlncy5tYXJnaW4ubXQgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5Ub3A7XG5jb25maWdzLm1hcmdpbi5tciA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpblJpZ2h0O1xuY29uZmlncy5tYXJnaW4ubWIgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5Cb3R0b207XG5jb25maWdzLm1hcmdpbi5tbCA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpbkxlZnQ7XG5jb25maWdzLm1hcmdpbi5teCA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpblg7XG5jb25maWdzLm1hcmdpbi5teSA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpblk7XG5jb25maWdzLnBhZGRpbmcgPSB7XG4gIHBhZGRpbmc6IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmcnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1RvcDoge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ1RvcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nUmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmdSaWdodCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nQm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nQm90dG9tJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdMZWZ0OiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nTGVmdCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nWDoge1xuICAgIHByb3BlcnRpZXM6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nWToge1xuICAgIHByb3BlcnRpZXM6IFsncGFkZGluZ1RvcCcsICdwYWRkaW5nQm90dG9tJ10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9XG59O1xuY29uZmlncy5wYWRkaW5nLnAgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZztcbmNvbmZpZ3MucGFkZGluZy5wdCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nVG9wO1xuY29uZmlncy5wYWRkaW5nLnByID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdSaWdodDtcbmNvbmZpZ3MucGFkZGluZy5wYiA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nQm90dG9tO1xuY29uZmlncy5wYWRkaW5nLnBsID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdMZWZ0O1xuY29uZmlncy5wYWRkaW5nLnB4ID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdYO1xuY29uZmlncy5wYWRkaW5nLnB5ID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmdZO1xuZXhwb3J0IHZhciBtYXJnaW4gPSBzeXN0ZW0oY29uZmlncy5tYXJnaW4pO1xuZXhwb3J0IHZhciBwYWRkaW5nID0gc3lzdGVtKGNvbmZpZ3MucGFkZGluZyk7XG5leHBvcnQgdmFyIHNwYWNlID0gY29tcG9zZShtYXJnaW4sIHBhZGRpbmcpO1xuZXhwb3J0IGRlZmF1bHQgc3BhY2U7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbmV4cG9ydCB2YXIgc2hhZG93ID0gc3lzdGVtKHtcbiAgYm94U2hhZG93OiB7XG4gICAgcHJvcGVydHk6ICdib3hTaGFkb3cnLFxuICAgIHNjYWxlOiAnc2hhZG93cydcbiAgfSxcbiAgdGV4dFNoYWRvdzoge1xuICAgIHByb3BlcnR5OiAndGV4dFNoYWRvdycsXG4gICAgc2NhbGU6ICdzaGFkb3dzJ1xuICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IHNoYWRvdztcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvZGx2XG5leHBvcnQgdmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmosIGtleSwgZGVmLCBwLCB1bmRlZikge1xuICBrZXkgPSBrZXkgJiYga2V5LnNwbGl0ID8ga2V5LnNwbGl0KCcuJykgOiBba2V5XTtcblxuICBmb3IgKHAgPSAwOyBwIDwga2V5Lmxlbmd0aDsgcCsrKSB7XG4gICAgb2JqID0gb2JqID8gb2JqW2tleVtwXV0gOiB1bmRlZjtcbiAgfVxuXG4gIHJldHVybiBvYmogPT09IHVuZGVmID8gZGVmIDogb2JqO1xufTtcbnZhciBkZWZhdWx0QnJlYWtwb2ludHMgPSBbNDAsIDUyLCA2NF0ubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBuICsgJ2VtJztcbn0pO1xudmFyIGRlZmF1bHRUaGVtZSA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXSxcbiAgZm9udFNpemVzOiBbMTIsIDE0LCAxNiwgMjAsIDI0LCAzMiwgNDgsIDY0LCA3Ml1cbn07XG52YXIgYWxpYXNlcyA9IHtcbiAgYmc6ICdiYWNrZ3JvdW5kQ29sb3InLFxuICBtOiAnbWFyZ2luJyxcbiAgbXQ6ICdtYXJnaW5Ub3AnLFxuICBtcjogJ21hcmdpblJpZ2h0JyxcbiAgbWI6ICdtYXJnaW5Cb3R0b20nLFxuICBtbDogJ21hcmdpbkxlZnQnLFxuICBteDogJ21hcmdpblgnLFxuICBteTogJ21hcmdpblknLFxuICBwOiAncGFkZGluZycsXG4gIHB0OiAncGFkZGluZ1RvcCcsXG4gIHByOiAncGFkZGluZ1JpZ2h0JyxcbiAgcGI6ICdwYWRkaW5nQm90dG9tJyxcbiAgcGw6ICdwYWRkaW5nTGVmdCcsXG4gIHB4OiAncGFkZGluZ1gnLFxuICBweTogJ3BhZGRpbmdZJ1xufTtcbnZhciBtdWx0aXBsZXMgPSB7XG4gIG1hcmdpblg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICBtYXJnaW5ZOiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgcGFkZGluZ1g6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gIHBhZGRpbmdZOiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICBzaXplOiBbJ3dpZHRoJywgJ2hlaWdodCddXG59O1xudmFyIHNjYWxlcyA9IHtcbiAgY29sb3I6ICdjb2xvcnMnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJDb2xvcjogJ2NvbG9ycycsXG4gIG1hcmdpbjogJ3NwYWNlJyxcbiAgbWFyZ2luVG9wOiAnc3BhY2UnLFxuICBtYXJnaW5SaWdodDogJ3NwYWNlJyxcbiAgbWFyZ2luQm90dG9tOiAnc3BhY2UnLFxuICBtYXJnaW5MZWZ0OiAnc3BhY2UnLFxuICBtYXJnaW5YOiAnc3BhY2UnLFxuICBtYXJnaW5ZOiAnc3BhY2UnLFxuICBwYWRkaW5nOiAnc3BhY2UnLFxuICBwYWRkaW5nVG9wOiAnc3BhY2UnLFxuICBwYWRkaW5nUmlnaHQ6ICdzcGFjZScsXG4gIHBhZGRpbmdCb3R0b206ICdzcGFjZScsXG4gIHBhZGRpbmdMZWZ0OiAnc3BhY2UnLFxuICBwYWRkaW5nWDogJ3NwYWNlJyxcbiAgcGFkZGluZ1k6ICdzcGFjZScsXG4gIHRvcDogJ3NwYWNlJyxcbiAgcmlnaHQ6ICdzcGFjZScsXG4gIGJvdHRvbTogJ3NwYWNlJyxcbiAgbGVmdDogJ3NwYWNlJyxcbiAgZ3JpZEdhcDogJ3NwYWNlJyxcbiAgZ3JpZENvbHVtbkdhcDogJ3NwYWNlJyxcbiAgZ3JpZFJvd0dhcDogJ3NwYWNlJyxcbiAgZ2FwOiAnc3BhY2UnLFxuICBjb2x1bW5HYXA6ICdzcGFjZScsXG4gIHJvd0dhcDogJ3NwYWNlJyxcbiAgZm9udEZhbWlseTogJ2ZvbnRzJyxcbiAgZm9udFNpemU6ICdmb250U2l6ZXMnLFxuICBmb250V2VpZ2h0OiAnZm9udFdlaWdodHMnLFxuICBsaW5lSGVpZ2h0OiAnbGluZUhlaWdodHMnLFxuICBsZXR0ZXJTcGFjaW5nOiAnbGV0dGVyU3BhY2luZ3MnLFxuICBib3JkZXI6ICdib3JkZXJzJyxcbiAgYm9yZGVyVG9wOiAnYm9yZGVycycsXG4gIGJvcmRlclJpZ2h0OiAnYm9yZGVycycsXG4gIGJvcmRlckJvdHRvbTogJ2JvcmRlcnMnLFxuICBib3JkZXJMZWZ0OiAnYm9yZGVycycsXG4gIGJvcmRlcldpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyU3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyVG9wV2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJUb3BDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlclRvcFN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyQm90dG9tV2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJCb3R0b21Db2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlckJvdHRvbVN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyTGVmdFdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyTGVmdENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyTGVmdFN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyUmlnaHRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlclJpZ2h0Q29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJSaWdodFN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgb3V0bGluZUNvbG9yOiAnY29sb3JzJyxcbiAgYm94U2hhZG93OiAnc2hhZG93cycsXG4gIHRleHRTaGFkb3c6ICdzaGFkb3dzJyxcbiAgekluZGV4OiAnekluZGljZXMnLFxuICB3aWR0aDogJ3NpemVzJyxcbiAgbWluV2lkdGg6ICdzaXplcycsXG4gIG1heFdpZHRoOiAnc2l6ZXMnLFxuICBoZWlnaHQ6ICdzaXplcycsXG4gIG1pbkhlaWdodDogJ3NpemVzJyxcbiAgbWF4SGVpZ2h0OiAnc2l6ZXMnLFxuICBmbGV4QmFzaXM6ICdzaXplcycsXG4gIHNpemU6ICdzaXplcycsXG4gIC8vIHN2Z1xuICBmaWxsOiAnY29sb3JzJyxcbiAgc3Ryb2tlOiAnY29sb3JzJ1xufTtcblxudmFyIHBvc2l0aXZlT3JOZWdhdGl2ZSA9IGZ1bmN0aW9uIHBvc2l0aXZlT3JOZWdhdGl2ZShzY2FsZSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgdmFsdWUgPj0gMCkge1xuICAgIHJldHVybiBnZXQoc2NhbGUsIHZhbHVlLCB2YWx1ZSk7XG4gIH1cblxuICB2YXIgYWJzb2x1dGUgPSBNYXRoLmFicyh2YWx1ZSk7XG4gIHZhciBuID0gZ2V0KHNjYWxlLCBhYnNvbHV0ZSwgYWJzb2x1dGUpO1xuICBpZiAodHlwZW9mIG4gPT09ICdzdHJpbmcnKSByZXR1cm4gJy0nICsgbjtcbiAgcmV0dXJuIG4gKiAtMTtcbn07XG5cbnZhciB0cmFuc2Zvcm1zID0gWydtYXJnaW4nLCAnbWFyZ2luVG9wJywgJ21hcmdpblJpZ2h0JywgJ21hcmdpbkJvdHRvbScsICdtYXJnaW5MZWZ0JywgJ21hcmdpblgnLCAnbWFyZ2luWScsICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnXS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICB2YXIgX2V4dGVuZHMyO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYWNjLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltjdXJyXSA9IHBvc2l0aXZlT3JOZWdhdGl2ZSwgX2V4dGVuZHMyKSk7XG59LCB7fSk7XG5leHBvcnQgdmFyIHJlc3BvbnNpdmUgPSBmdW5jdGlvbiByZXNwb25zaXZlKHN0eWxlcykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgdmFyIG5leHQgPSB7fTtcbiAgICB2YXIgYnJlYWtwb2ludHMgPSBnZXQodGhlbWUsICdicmVha3BvaW50cycsIGRlZmF1bHRCcmVha3BvaW50cyk7XG4gICAgdmFyIG1lZGlhUXVlcmllcyA9IFtudWxsXS5jb25jYXQoYnJlYWtwb2ludHMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBcIiArIG4gKyBcIilcIjtcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0eXBlb2Ygc3R5bGVzW2tleV0gPT09ICdmdW5jdGlvbicgPyBzdHlsZXNba2V5XSh0aGVtZSkgOiBzdHlsZXNba2V5XTtcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBuZXh0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUuc2xpY2UoMCwgbWVkaWFRdWVyaWVzLmxlbmd0aCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG1lZGlhID0gbWVkaWFRdWVyaWVzW2ldO1xuXG4gICAgICAgIGlmICghbWVkaWEpIHtcbiAgICAgICAgICBuZXh0W2tleV0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRbbWVkaWFdID0gbmV4dFttZWRpYV0gfHwge307XG4gICAgICAgIGlmICh2YWx1ZVtpXSA9PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgbmV4dFttZWRpYV1ba2V5XSA9IHZhbHVlW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXh0O1xuICB9O1xufTtcbmV4cG9ydCB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9wcyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB0aGVtZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0VGhlbWUsIHt9LCBwcm9wcy50aGVtZSB8fCBwcm9wcyk7XG5cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIG9iaiA9IHR5cGVvZiBhcmdzID09PSAnZnVuY3Rpb24nID8gYXJncyh0aGVtZSkgOiBhcmdzO1xuICAgIHZhciBzdHlsZXMgPSByZXNwb25zaXZlKG9iaikodGhlbWUpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgICAgdmFyIHggPSBzdHlsZXNba2V5XTtcbiAgICAgIHZhciB2YWwgPSB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyA/IHgodGhlbWUpIDogeDtcblxuICAgICAgaWYgKGtleSA9PT0gJ3ZhcmlhbnQnKSB7XG4gICAgICAgIHZhciB2YXJpYW50ID0gY3NzKGdldCh0aGVtZSwgdmFsKSkodGhlbWUpO1xuICAgICAgICByZXN1bHQgPSBfZXh0ZW5kcyh7fSwgcmVzdWx0LCB7fSwgdmFyaWFudCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gY3NzKHZhbCkodGhlbWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3AgPSBnZXQoYWxpYXNlcywga2V5LCBrZXkpO1xuICAgICAgdmFyIHNjYWxlTmFtZSA9IGdldChzY2FsZXMsIHByb3ApO1xuICAgICAgdmFyIHNjYWxlID0gZ2V0KHRoZW1lLCBzY2FsZU5hbWUsIGdldCh0aGVtZSwgcHJvcCwge30pKTtcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBnZXQodHJhbnNmb3JtcywgcHJvcCwgZ2V0KTtcbiAgICAgIHZhciB2YWx1ZSA9IHRyYW5zZm9ybShzY2FsZSwgdmFsLCB2YWwpO1xuXG4gICAgICBpZiAobXVsdGlwbGVzW3Byb3BdKSB7XG4gICAgICAgIHZhciBkaXJzID0gbXVsdGlwbGVzW3Byb3BdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdFtkaXJzW2ldXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsImltcG9ydCB7IGdldCwgY3JlYXRlUGFyc2VyIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG5pbXBvcnQgY3NzIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2Nzcyc7XG5leHBvcnQgdmFyIHZhcmlhbnQgPSBmdW5jdGlvbiB2YXJpYW50KF9yZWYpIHtcbiAgdmFyIF9jb25maWc7XG5cbiAgdmFyIHNjYWxlID0gX3JlZi5zY2FsZSxcbiAgICAgIF9yZWYkcHJvcCA9IF9yZWYucHJvcCxcbiAgICAgIHByb3AgPSBfcmVmJHByb3AgPT09IHZvaWQgMCA/ICd2YXJpYW50JyA6IF9yZWYkcHJvcCxcbiAgICAgIF9yZWYkdmFyaWFudHMgPSBfcmVmLnZhcmlhbnRzLFxuICAgICAgdmFyaWFudHMgPSBfcmVmJHZhcmlhbnRzID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkdmFyaWFudHMsXG4gICAgICBrZXkgPSBfcmVmLmtleTtcbiAgdmFyIHN4O1xuXG4gIGlmIChPYmplY3Qua2V5cyh2YXJpYW50cykubGVuZ3RoKSB7XG4gICAgc3ggPSBmdW5jdGlvbiBzeCh2YWx1ZSwgc2NhbGUsIHByb3BzKSB7XG4gICAgICByZXR1cm4gY3NzKGdldChzY2FsZSwgdmFsdWUsIG51bGwpKShwcm9wcy50aGVtZSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBzeCA9IGZ1bmN0aW9uIHN4KHZhbHVlLCBzY2FsZSkge1xuICAgICAgcmV0dXJuIGdldChzY2FsZSwgdmFsdWUsIG51bGwpO1xuICAgIH07XG4gIH1cblxuICBzeC5zY2FsZSA9IHNjYWxlIHx8IGtleTtcbiAgc3guZGVmYXVsdHMgPSB2YXJpYW50cztcbiAgdmFyIGNvbmZpZyA9IChfY29uZmlnID0ge30sIF9jb25maWdbcHJvcF0gPSBzeCwgX2NvbmZpZyk7XG4gIHZhciBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoY29uZmlnKTtcbiAgcmV0dXJuIHBhcnNlcjtcbn07XG5leHBvcnQgZGVmYXVsdCB2YXJpYW50O1xuZXhwb3J0IHZhciBidXR0b25TdHlsZSA9IHZhcmlhbnQoe1xuICBrZXk6ICdidXR0b25zJ1xufSk7XG5leHBvcnQgdmFyIHRleHRTdHlsZSA9IHZhcmlhbnQoe1xuICBrZXk6ICd0ZXh0U3R5bGVzJyxcbiAgcHJvcDogJ3RleHRTdHlsZSdcbn0pO1xuZXhwb3J0IHZhciBjb2xvclN0eWxlID0gdmFyaWFudCh7XG4gIGtleTogJ2NvbG9yU3R5bGVzJyxcbiAgcHJvcDogJ2NvbG9ycydcbn0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3R5bGVGdW5jdGlvbiwgY3JlYXRlUGFyc2VyIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7IC8vIHY0IGFwaSBzaGltc1xuXG5pbXBvcnQgbGF5b3V0IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2xheW91dCc7XG5pbXBvcnQgY29sb3IgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29sb3InO1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdHlwb2dyYXBoeSc7XG5pbXBvcnQgZmxleGJveCBmcm9tICdAc3R5bGVkLXN5c3RlbS9mbGV4Ym94JztcbmltcG9ydCBncmlkIGZyb20gJ0BzdHlsZWQtc3lzdGVtL2dyaWQnO1xuaW1wb3J0IGJvcmRlciBmcm9tICdAc3R5bGVkLXN5c3RlbS9ib3JkZXInO1xuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYmFja2dyb3VuZCc7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vcG9zaXRpb24nO1xuZXhwb3J0IHsgZ2V0LCBjcmVhdGVQYXJzZXIsIGNyZWF0ZVN0eWxlRnVuY3Rpb24sIGNvbXBvc2UsIHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xuZXhwb3J0IHsgbWFyZ2luLCBwYWRkaW5nLCBzcGFjZSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3NwYWNlJztcbmV4cG9ydCB7IGNvbG9yIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29sb3InO1xuZXhwb3J0IHsgbGF5b3V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vbGF5b3V0JztcbmV4cG9ydCB7IHR5cG9ncmFwaHkgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90eXBvZ3JhcGh5JztcbmV4cG9ydCB7IGZsZXhib3ggfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9mbGV4Ym94JztcbmV4cG9ydCB7IGJvcmRlciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JvcmRlcic7XG5leHBvcnQgeyBiYWNrZ3JvdW5kIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vYmFja2dyb3VuZCc7XG5leHBvcnQgeyBwb3NpdGlvbiB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3Bvc2l0aW9uJztcbmV4cG9ydCB7IGdyaWQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9ncmlkJztcbmV4cG9ydCB7IHNoYWRvdyB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3NoYWRvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGJveFNoYWRvdywgZGVmYXVsdCBhcyB0ZXh0U2hhZG93IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vc2hhZG93JztcbmV4cG9ydCB7IHZhcmlhbnQsIGJ1dHRvblN0eWxlLCB0ZXh0U3R5bGUsIGNvbG9yU3R5bGUgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS92YXJpYW50JztcbnZhciB3aWR0aCA9IGxheW91dC53aWR0aCxcbiAgICBoZWlnaHQgPSBsYXlvdXQuaGVpZ2h0LFxuICAgIG1pbldpZHRoID0gbGF5b3V0Lm1pbldpZHRoLFxuICAgIG1pbkhlaWdodCA9IGxheW91dC5taW5IZWlnaHQsXG4gICAgbWF4V2lkdGggPSBsYXlvdXQubWF4V2lkdGgsXG4gICAgbWF4SGVpZ2h0ID0gbGF5b3V0Lm1heEhlaWdodCxcbiAgICBzaXplID0gbGF5b3V0LnNpemUsXG4gICAgdmVydGljYWxBbGlnbiA9IGxheW91dC52ZXJ0aWNhbEFsaWduLFxuICAgIGRpc3BsYXkgPSBsYXlvdXQuZGlzcGxheSxcbiAgICBvdmVyZmxvdyA9IGxheW91dC5vdmVyZmxvdyxcbiAgICBvdmVyZmxvd1ggPSBsYXlvdXQub3ZlcmZsb3dYLFxuICAgIG92ZXJmbG93WSA9IGxheW91dC5vdmVyZmxvd1k7XG52YXIgb3BhY2l0eSA9IGNvbG9yLm9wYWNpdHk7XG52YXIgZm9udFNpemUgPSB0eXBvZ3JhcGh5LmZvbnRTaXplLFxuICAgIGZvbnRGYW1pbHkgPSB0eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgZm9udFdlaWdodCA9IHR5cG9ncmFwaHkuZm9udFdlaWdodCxcbiAgICBsaW5lSGVpZ2h0ID0gdHlwb2dyYXBoeS5saW5lSGVpZ2h0LFxuICAgIHRleHRBbGlnbiA9IHR5cG9ncmFwaHkudGV4dEFsaWduLFxuICAgIGZvbnRTdHlsZSA9IHR5cG9ncmFwaHkuZm9udFN0eWxlLFxuICAgIGxldHRlclNwYWNpbmcgPSB0eXBvZ3JhcGh5LmxldHRlclNwYWNpbmc7XG52YXIgYWxpZ25JdGVtcyA9IGZsZXhib3guYWxpZ25JdGVtcyxcbiAgICBhbGlnbkNvbnRlbnQgPSBmbGV4Ym94LmFsaWduQ29udGVudCxcbiAgICBqdXN0aWZ5SXRlbXMgPSBmbGV4Ym94Lmp1c3RpZnlJdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCA9IGZsZXhib3guanVzdGlmeUNvbnRlbnQsXG4gICAgZmxleFdyYXAgPSBmbGV4Ym94LmZsZXhXcmFwLFxuICAgIGZsZXhEaXJlY3Rpb24gPSBmbGV4Ym94LmZsZXhEaXJlY3Rpb24sXG4gICAgZmxleCA9IGZsZXhib3guZmxleCxcbiAgICBmbGV4R3JvdyA9IGZsZXhib3guZmxleEdyb3csXG4gICAgZmxleFNocmluayA9IGZsZXhib3guZmxleFNocmluayxcbiAgICBmbGV4QmFzaXMgPSBmbGV4Ym94LmZsZXhCYXNpcyxcbiAgICBqdXN0aWZ5U2VsZiA9IGZsZXhib3guanVzdGlmeVNlbGYsXG4gICAgYWxpZ25TZWxmID0gZmxleGJveC5hbGlnblNlbGYsXG4gICAgb3JkZXIgPSBmbGV4Ym94Lm9yZGVyO1xudmFyIGdyaWRHYXAgPSBncmlkLmdyaWRHYXAsXG4gICAgZ3JpZENvbHVtbkdhcCA9IGdyaWQuZ3JpZENvbHVtbkdhcCxcbiAgICBncmlkUm93R2FwID0gZ3JpZC5ncmlkUm93R2FwLFxuICAgIGdyaWRDb2x1bW4gPSBncmlkLmdyaWRDb2x1bW4sXG4gICAgZ3JpZFJvdyA9IGdyaWQuZ3JpZFJvdyxcbiAgICBncmlkQXV0b0Zsb3cgPSBncmlkLmdyaWRBdXRvRmxvdyxcbiAgICBncmlkQXV0b0NvbHVtbnMgPSBncmlkLmdyaWRBdXRvQ29sdW1ucyxcbiAgICBncmlkQXV0b1Jvd3MgPSBncmlkLmdyaWRBdXRvUm93cyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zID0gZ3JpZC5ncmlkVGVtcGxhdGVDb2x1bW5zLFxuICAgIGdyaWRUZW1wbGF0ZVJvd3MgPSBncmlkLmdyaWRUZW1wbGF0ZVJvd3MsXG4gICAgZ3JpZFRlbXBsYXRlQXJlYXMgPSBncmlkLmdyaWRUZW1wbGF0ZUFyZWFzLFxuICAgIGdyaWRBcmVhID0gZ3JpZC5ncmlkQXJlYTtcbnZhciBib3JkZXJXaWR0aCA9IGJvcmRlci5ib3JkZXJXaWR0aCxcbiAgICBib3JkZXJTdHlsZSA9IGJvcmRlci5ib3JkZXJTdHlsZSxcbiAgICBib3JkZXJDb2xvciA9IGJvcmRlci5ib3JkZXJDb2xvcixcbiAgICBib3JkZXJUb3AgPSBib3JkZXIuYm9yZGVyVG9wLFxuICAgIGJvcmRlclJpZ2h0ID0gYm9yZGVyLmJvcmRlclJpZ2h0LFxuICAgIGJvcmRlckJvdHRvbSA9IGJvcmRlci5ib3JkZXJCb3R0b20sXG4gICAgYm9yZGVyTGVmdCA9IGJvcmRlci5ib3JkZXJMZWZ0LFxuICAgIGJvcmRlclJhZGl1cyA9IGJvcmRlci5ib3JkZXJSYWRpdXM7XG52YXIgYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZC5iYWNrZ3JvdW5kSW1hZ2UsXG4gICAgYmFja2dyb3VuZFNpemUgPSBiYWNrZ3JvdW5kLmJhY2tncm91bmRTaXplLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbiA9IGJhY2tncm91bmQuYmFja2dyb3VuZFBvc2l0aW9uLFxuICAgIGJhY2tncm91bmRSZXBlYXQgPSBiYWNrZ3JvdW5kLmJhY2tncm91bmRSZXBlYXQ7XG52YXIgekluZGV4ID0gcG9zaXRpb24uekluZGV4LFxuICAgIHRvcCA9IHBvc2l0aW9uLnRvcCxcbiAgICByaWdodCA9IHBvc2l0aW9uLnJpZ2h0LFxuICAgIGJvdHRvbSA9IHBvc2l0aW9uLmJvdHRvbSxcbiAgICBsZWZ0ID0gcG9zaXRpb24ubGVmdDtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm9yZGVycyB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2JvcmRlcic7XG5leHBvcnQgeyB3aWR0aCwgaGVpZ2h0LCBtaW5XaWR0aCwgbWluSGVpZ2h0LCBtYXhXaWR0aCwgbWF4SGVpZ2h0LCBzaXplLCB2ZXJ0aWNhbEFsaWduLCBkaXNwbGF5LCBvdmVyZmxvdywgb3ZlcmZsb3dYLCBvdmVyZmxvd1kgLy8gY29sb3Jcbiwgb3BhY2l0eSAvLyB0eXBvZ3JhcGh5XG4sIGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250V2VpZ2h0LCBsaW5lSGVpZ2h0LCB0ZXh0QWxpZ24sIGZvbnRTdHlsZSwgbGV0dGVyU3BhY2luZyAvLyBmbGV4Ym94XG4sIGFsaWduSXRlbXMsIGFsaWduQ29udGVudCwganVzdGlmeUl0ZW1zLCBqdXN0aWZ5Q29udGVudCwgZmxleFdyYXAsIGZsZXhEaXJlY3Rpb24sIGZsZXgsIGZsZXhHcm93LCBmbGV4U2hyaW5rLCBmbGV4QmFzaXMsIGp1c3RpZnlTZWxmLCBhbGlnblNlbGYsIG9yZGVyIC8vIGdyaWRcbiwgZ3JpZEdhcCwgZ3JpZENvbHVtbkdhcCwgZ3JpZFJvd0dhcCwgZ3JpZENvbHVtbiwgZ3JpZFJvdywgZ3JpZEF1dG9GbG93LCBncmlkQXV0b0NvbHVtbnMsIGdyaWRBdXRvUm93cywgZ3JpZFRlbXBsYXRlQ29sdW1ucywgZ3JpZFRlbXBsYXRlUm93cywgZ3JpZFRlbXBsYXRlQXJlYXMsIGdyaWRBcmVhIC8vIGJvcmRlclxuLCBib3JkZXJXaWR0aCwgYm9yZGVyU3R5bGUsIGJvcmRlckNvbG9yLCBib3JkZXJUb3AsIGJvcmRlclJpZ2h0LCBib3JkZXJCb3R0b20sIGJvcmRlckxlZnQsIGJvcmRlclJhZGl1cyAvLyBiYWNrZ3JvdW5kXG4sIGJhY2tncm91bmRJbWFnZSwgYmFja2dyb3VuZFNpemUsIGJhY2tncm91bmRQb3NpdGlvbiwgYmFja2dyb3VuZFJlcGVhdCAvLyBwb3NpdGlvblxuLCB6SW5kZXgsIHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9OyAvLyB2NCBzdHlsZSBBUEkgc2hpbVxuXG5leHBvcnQgdmFyIHN0eWxlID0gZnVuY3Rpb24gc3R5bGUoX3JlZikge1xuICB2YXIgcHJvcCA9IF9yZWYucHJvcCxcbiAgICAgIGNzc1Byb3BlcnR5ID0gX3JlZi5jc3NQcm9wZXJ0eSxcbiAgICAgIGFsaWFzID0gX3JlZi5hbGlhcyxcbiAgICAgIGtleSA9IF9yZWYua2V5LFxuICAgICAgdHJhbnNmb3JtVmFsdWUgPSBfcmVmLnRyYW5zZm9ybVZhbHVlLFxuICAgICAgc2NhbGUgPSBfcmVmLnNjYWxlLFxuICAgICAgcHJvcGVydGllcyA9IF9yZWYucHJvcGVydGllcztcbiAgdmFyIGNvbmZpZyA9IHt9O1xuICBjb25maWdbcHJvcF0gPSBjcmVhdGVTdHlsZUZ1bmN0aW9uKHtcbiAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuICAgIHByb3BlcnR5OiBjc3NQcm9wZXJ0eSB8fCBwcm9wLFxuICAgIHNjYWxlOiBrZXksXG4gICAgZGVmYXVsdFNjYWxlOiBzY2FsZSxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVZhbHVlXG4gIH0pO1xuICBpZiAoYWxpYXMpIGNvbmZpZ1thbGlhc10gPSBjb25maWdbcHJvcF07XG4gIHZhciBwYXJzZSA9IGNyZWF0ZVBhcnNlcihjb25maWcpO1xuICByZXR1cm4gcGFyc2U7XG59O1xuIiwiaW1wb3J0IHsgQ2FyZFByb3BzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdmFyaWFudCB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5pbnRlcmZhY2UgQ2FyZENhcm91c2VsUHJvcHMgZXh0ZW5kcyBDYXJkUHJvcHMsIE9iamVjdCB7fVxuXG5jb25zdCBCZWZvcmVDYXJkID0gc3R5bGVkKFwiZGl2XCIpKFxuICB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBwYWRkaW5nOiBcImNhbGMoMS41JSAtIDF2bWluKSBjYWxjKDElIC0gMXZtaW4pXCIsXG4gICAgbWFyZ2luOiBcIjIwcHggYXV0b1wiLFxuICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgY2xpcFBhdGg6XG4gICAgICBcInBvbHlnb24oMjAlIDAlLCAxMDAlIDAsIDEwMCUgMjAlLCAxMDAlIDgwJSwgODAlIDEwMCUsIDAgMTAwJSwgMCUgODAlLCAwIDApO1wiLFxuICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoNnB4KSBzYXR1cmF0ZSgxODAlKVwiLFxuICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG5cbiAgICBcIiY6YmVmb3JlXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB3aWR0aDogXCI2cHhcIixcbiAgICAgIGhlaWdodDogXCIzNiVcIixcbiAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICAgIHRyYW5zZm9ybTogXCJza2V3KC0zNWRlZylcIixcbiAgICAgIGJvdHRvbTogXCItMXB4XCIsXG4gICAgICByaWdodDogXCIwXCIsXG4gICAgICB6SW5kZXg6IFwiNFwiLFxuICAgIH0sXG4gIH0sXG4gIHZhcmlhbnQoe1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICBNYXRyaXg6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyOiBcIjRweCBzb2xpZCAjMDBmZjMyXCIsXG4gICAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzAwZmYzMlwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFJvc2U6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyOiBcIjRweCBzb2xpZCAjZmYyOTZkXCIsXG4gICAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmMjk2ZFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFB1bms6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyOiBcIjRweCBzb2xpZCAjOGU1MmY1XCIsXG4gICAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzhlNTJmNVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIEdvbGQ6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgYm9yZGVyOiBcIjRweCBzb2xpZCAjOTVmMTFjXCIsXG4gICAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzk1ZjExY1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgQ2FyZHRUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxJSAyJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmNvbnN0IENhcmR0Qm9keSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBncmlkLWF1dG8tY29sdW1uczogbWlubWF4KDEzMHB4LCBhdXRvKTtcbiAgZ2FwOiAyJTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgc2Nyb2xsLXBhZGRpbmc6IDAgMXJlbTtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcblxuICAmOmFjdGl2ZSB7XG4gICAgY3Vyc29yOiBncmFiYmluZztcbiAgfVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICA+ICoge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMDZkZWcsICMwMGY2ZmYgOCUsICNmZmVjMDAgNTAlLCAjZmYwMGVjIDg3JSk7XG4gICAgYmFja2dyb3VuZDogIzhlNTJmNTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IENhcmR0Rm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDIlIDQlO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkOiBSZWFjdC5GQzxDYXJkUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGJvZHksXG4gIGVuZCxcbiAgQ2FyZEJvZHksXG4gIGJhY2tncm91bmQsXG4gIHdpZHRoID0gXCJjYWxjKDM1MHB4IC0gMnZtaW4pXCIsXG4gIGhlaWdodCA9IFwiMzBlbVwiLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCZWZvcmVDYXJkXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIGJhY2tncm91bmQgPT09IHVuZGVmaW5lZCA/IFwicmdiYSgxNywgMjUsIDQwLCAwLjc1KVwiIDogYmFja2dyb3VuZCxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIH19PlxuICAgICAgPENhcmR0VGl0bGU+e3RpdGxlfTwvQ2FyZHRUaXRsZT5cbiAgICAgIDxDYXJkdEJvZHk+e2JvZHl9PC9DYXJkdEJvZHk+XG4gICAgICA8Q2FyZHRGb290ZXI+e2VuZH08L0NhcmR0Rm9vdGVyPlxuICAgIDwvQmVmb3JlQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJkQ2Fyb3VzZWw6IFJlYWN0LkZDPENhcmRDYXJvdXNlbFByb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBib2R5LFxuICBlbmQsXG4gIENhcmRCb2R5LFxuICB2YXJpYW50LFxuICBiYWNrZ3JvdW5kLFxuICB3aWR0aCA9IFwiY2FsYygzNTBweCAtIDJ2bWluKVwiLFxuICBoZWlnaHQgPSBcIjMwZW1cIixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmVmb3JlQ2FyZFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICBiYWNrZ3JvdW5kID09PSB1bmRlZmluZWQgPyBcInJnYmEoMTcsIDI1LCA0MCwgMC43NSlcIiA6IGJhY2tncm91bmQsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICB9fT5cbiAgICAgIDxDYXJkdFRpdGxlPnt0aXRsZX08L0NhcmR0VGl0bGU+XG4gICAgICA8Q2FyZHRCb2R5PlxuICAgICAgeyBDYXJkQm9keSB9XG4gICAgICA8L0NhcmR0Qm9keT5cbiAgICAgIDxDYXJkdEZvb3Rlcj57ZW5kfTwvQ2FyZHRGb290ZXI+XG4gICAgPC9CZWZvcmVDYXJkPlxuICApO1xufTtcbiIsImltcG9ydCB7IEJ1dHRvblByb3BzLCBUaGVtZVByb3BzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBidXR0b25TdHlsZSwgY29sb3IsIGZvbnRTaXplLCBzcGFjZSB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIsIGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IG5vaXNlMiA9IGtleWZyYW1lc2BcbiAgMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDM4JSAwIDU4JSAwKTtcblx0fVxuXHQgNSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDI5JSAwIDI3JSAwKTtcblx0fVxuXHQgMTAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg1NiUgMCAyMSUgMCk7XG5cdH1cblx0IDE1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMzclIDAgMTklIDApO1xuXHR9XG5cdCAyMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDE0JSAwIDMwJSAwKTtcblx0fVxuXHQgMjUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg4MyUgMCAxOCUgMCk7XG5cdH1cblx0IDMwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMzElIDAgNjYlIDApO1xuXHR9XG5cdCAzNSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDkxJSAwIDUlIDApO1xuXHR9XG5cdCA0MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDk2JSAwIDIlIDApO1xuXHR9XG5cdCA0NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDc3JSAwIDUlIDApO1xuXHR9XG5cdCA1MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDElIDAgNjclIDApO1xuXHR9XG5cdCA1NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDc0JSAwIDclIDApO1xuXHR9XG5cdCA2MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDU3JSAwIDI3JSAwKTtcblx0fVxuXHQgNjUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg1MSUgMCAyOSUgMCk7XG5cdH1cblx0IDcwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMSUgMCA2MCUgMCk7XG5cdH1cblx0IDc1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMzklIDAgMzUlIDApO1xuXHR9XG5cdCA4MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDUzJSAwIDYlIDApO1xuXHR9XG5cdCA4NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDYzJSAwIDE3JSAwKTtcblx0fVxuXHQgOTAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgxOSUgMCAxJSAwKTtcblx0fVxuXHQgOTUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgyMSUgMCAxMCUgMCk7XG5cdH1cblx0IDEwMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDIxJSAwIDU4JSAwKTtcblx0fVxuYDtcbmNvbnN0IG5vaXNlMSA9IGtleWZyYW1lc2BcbiAgMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDYlIDAgNDIlIDApO1xuXHR9XG5cdCA1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNTklIDAgMjklIDApO1xuXHR9XG5cdCAxMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDkzJSAwIDQlIDApO1xuXHR9XG5cdCAxNSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDEwMCUgMCAxJSAwKTtcblx0fVxuXHQgMjAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg4NSUgMCAxNSUgMCk7XG5cdH1cblx0IDI1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNTAlIDAgMTglIDApO1xuXHR9XG5cdCAzMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDY3JSAwIDE2JSAwKTtcblx0fVxuXHQgMzUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg0MyUgMCA0OCUgMCk7XG5cdH1cblx0IDQwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMzclIDAgOSUgMCk7XG5cdH1cblx0IDQ1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoOTElIDAgNyUgMCk7XG5cdH1cblx0IDUwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMiUgMCA3MiUgMCk7XG5cdH1cblx0IDU1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMTclIDAgMTclIDApO1xuXHR9XG5cdCA2MCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDEzJSAwIDg1JSAwKTtcblx0fVxuXHQgNjUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgxOCUgMCAzOCUgMCk7XG5cdH1cblx0IDcwJSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoMTIlIDAgODglIDApO1xuXHR9XG5cdCA3NSUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDQyJSAwIDMxJSAwKTtcblx0fVxuXHQgODAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg5NSUgMCAyJSAwKTtcblx0fVxuXHQgODUlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCg1OSUgMCA4JSAwKTtcblx0fVxuXHQgOTAlIHtcblx0XHQgY2xpcC1wYXRoOiBpbnNldCgyNCUgMCA0NCUgMCk7XG5cdH1cblx0IDk1JSB7XG5cdFx0IGNsaXAtcGF0aDogaW5zZXQoNTclIDAgNSUgMCk7XG5cdH1cblx0IDEwMCUge1xuXHRcdCBjbGlwLXBhdGg6IGluc2V0KDkzJSAwIDMlIDApO1xuXHR9XG5gO1xuXG5jb25zdCBSb3NlR3JhZGllbnQgPVxuICBcImxpbmVhci1ncmFkaWVudCgxMDZkZWcsICMwMGY2ZmYgOCUsICNmZmVjMDAgNTAlLCAjZmYwMGVjIDg3JSlcIjtcblxuY29uc3QgQ3liZXJTa3kgPVxuICBcImxpbmVhci1ncmFkaWVudCgxMDZkZWcsICNmZmU5MDAgOCUsICMwMDQzZmYgNDQlLCAjYTIwMGZmIDg3JSlcIjtcblxuXG5jb25zdCB0aGVtZTogVGhlbWVQcm9wcyA9IHtcbiAgY29sb3JzOiB7XG4gICAgbWF0cml4OiBcIiMwMGZmMzJcIixcbiAgICBnb2xkOiBcIiM5NWYxMWNcIixcbiAgICBjeWJlcjogXCIjZWRkYTBjXCIsXG4gICAgcm9zZTogXCIjZmYyOTZkXCIsXG4gICAgcHVuazogXCIjOGU1MmY1XCIsXG4gIH0sXG4gIHRleHRTdHlsZXM6IHtcbiAgICBvdXRsaW5lZDoge1xuICAgICAgdHJhbnNmb3JtOiBcInNrZXcoLTIxZGVnKVwiLFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICBPdXRsaW5lZEN5YmVyUm9zZToge1xuICAgICAgdHJhbnNmb3JtOiBcInNrZXcoLTIxZGVnKVwiLFxuICAgICAgY29sb3I6IFwiI2ZmMjk2ZFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4IDEycHhcIixcbiAgICAgIGJvcmRlcjogXCIycHggc29saWRcIixcbiAgICAgIGJvcmRlckltYWdlU2xpY2U6IFwiMVwiLFxuICAgICAgYm9yZGVyV2lkdGg6IFwiMnB4XCIsXG4gICAgICBib3JkZXJJbWFnZVNvdXJjZTogYCR7Um9zZUdyYWRpZW50fWAsXG4gICAgfSxcbiAgICBPdXRsaW5lZEN5YmVyU2t5OiB7XG4gICAgICB0cmFuc2Zvcm06IFwic2tldygtMjFkZWcpXCIsXG4gICAgICBjb2xvcjogXCIjMDA0M0ZGXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgcGFkZGluZzogXCI2cHggMTJweFwiLFxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZFwiLFxuICAgICAgYm9yZGVySW1hZ2VTbGljZTogXCIxXCIsXG4gICAgICBib3JkZXJXaWR0aDogXCIycHhcIixcbiAgICAgIGJvcmRlckltYWdlU291cmNlOiBgJHtDeWJlclNreX1gLFxuICAgIH0sXG4gICAgTWF0cml4OiB7XG4gICAgICB0cmFuc2Zvcm06IFwic2tldygtMjFkZWcpXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgcGFkZGluZzogXCI2cHggMTJweFwiLFxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjMDBmZjMyXCIsXG4gICAgICBjb2xvcjogXCIjMDBmZjMyXCIsXG4gICAgICBib3hTaGFkb3c6IFwiMCA0cHggNnB4IDAgIzAwZmYzMlwiLFxuICAgIH0sXG4gICAgUm9zZToge1xuICAgICAgdHJhbnNmb3JtOiBcInNrZXcoLTMxZGVnKVwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIHBhZGRpbmc6IFwiNnB4IDEycHhcIixcbiAgICAgIGNvbG9yOiBcIiNmZjI5NmRcIixcbiAgICAgIGJvcmRlcjogXCIycHggc29saWQgI2ZmMjk2ZFwiLFxuICAgICAgYm94U2hhZG93OiBcIjAgNHB4IDZweCAwICNmZjI5NmRcIixcbiAgICB9LFxuICAgIFB1bms6IHtcbiAgICAgIHRyYW5zZm9ybTogXCJza2V3KC0yMWRlZylcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICBwYWRkaW5nOiBcIjZweCAxMnB4XCIsXG4gICAgICBjb2xvcjogXCIjOGU1MmY1XCIsXG4gICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICM4ZTUyZjVcIixcbiAgICAgIGJveFNoYWRvdzogXCIwIDRweCA2cHggMCAjOGU1MmY1XCIsXG4gICAgfSxcbiAgICBHb2xkOiB7XG4gICAgICB0cmFuc2Zvcm06IFwic2tldygtMjFkZWcpXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgcGFkZGluZzogXCI2cHggMTJweFwiLFxuICAgICAgY29sb3I6IFwiIzk1ZjExY1wiLFxuICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjOTVmMTFjXCIsXG4gICAgICBib3hTaGFkb3c6IFwiMCA0cHggNnB4IDAgIzk1ZjExY1wiLFxuICAgIH0sXG4gIH0sXG4gIGJnOiB7XG4gICAgdHlwZTogeyBiYWNrZ3JvdW5kOiBcInJlZFwiIH0sXG4gIH0sXG59O1xuY29uc3QgQmVmb3JlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjxCdXR0b25Qcm9wcz5gXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgbWFyZ2luOiA1cHg7XG5cbiAgJjphY3RpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDVweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gICR7Y29sb3J9XG4gICR7c3BhY2V9XG4gICR7Zm9udFNpemV9XG4gICR7YnV0dG9uU3R5bGV9XG5gO1xuXG5jb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRyYW5zaXRpb246IDFzO1xuICBsZXR0ZXItc3BhY2luZzogMC4zZW07XG4gIHRyYW5zZm9ybTogc2tld1goMjBkZWcpICFpbXBvcnRhbnQ7XG4gIDpob3Zlcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgcmVkO1xuICAgIHRvcDogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYW5pbWF0aW9uOiAke25vaXNlMX0gMnMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZS1yZXZlcnNlO1xuICB9XG5cbiAgOmhvdmVyOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTBweDtcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDAgcmVkO1xuICAgIHRvcDogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBhbmltYXRpb246ICR7bm9pc2UyfSAxNXMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZS1yZXZlcnNlO1xuICB9XG59YDtcblxuQmVmb3JlQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogXCJwcmltYXJ5XCIsXG59O1xuXG5jb25zdCBCdXR0b24gPSAoeyB0ZXh0LCB2YXJpYW50LCBjb2xvciB9OiBCdXR0b25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8QmVmb3JlQnV0dG9uIGNvbG9yPXtjb2xvcn0gdmFyaWFudD17dmFyaWFudH0+XG4gICAgICAgIDxTcGFuIGRhdGEtdGV4dD17dGV4dH0+e3RleHR9PC9TcGFuPlxuICAgICAgPC9CZWZvcmVCdXR0b24+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgQnV0dG9uIH07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0eXBlPzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuY29uc3QgQ3liZXJJbnB1dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdHlwZSA9IFwidGV4dFwiLCBsYWJlbCwgdmFsdWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInNpbXBsZS1mb3JtLWdyb3VwXCI+XG4gICAge2xhYmVsICYmIDxsYWJlbCBjbGFzc05hbWU9XCJzaW1wbGUtdGV4dC1sYWJlbFwiPntsYWJlbH08L2xhYmVsPn1cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgICBjbGFzc05hbWU9XCJzaW1wbGUtdGV4dC1pbnB1dFwiXG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDeWJlcklucHV0OyIsImltcG9ydCB7IENhcmQsIENhcmRDYXJvdXNlbCB9IGZyb20gJy4vY2FyZC9pbmRleCdcblxuaW1wb3J0IHsgQnV0dG9uIGFzIEN5YmVyQnV0dG9uIH0gZnJvbSAnLi9idXR0b24vaW5kZXgnO1xuaW1wb3J0IEN5YmVySW5wdXQgZnJvbSBcIi4vaW5wdXQvaW5kZXhcIjtcblxuLy8gZXhwb3J0IHsgQ3liZXJJbnB1dCwgQ3liZXJCdXR0b24sIENhcmQsIENhcmRDYXJvdXNlbCB9O1xuZXhwb3J0IGRlZmF1bHQge1xuICBDeWJlcklucHV0LCBDeWJlckJ1dHRvbiwgQ2FyZCwgQ2FyZENhcm91c2VsXG59XG4iXSwibmFtZXMiOlsibCIsIlN5bWJvbCIsImZvciIsIm4iLCJwIiwicSIsInIiLCJ0IiwidSIsInYiLCJ3IiwieCIsInkiLCJ6IiwiaXRlcmF0b3IiLCJBIiwiYSIsIl90eXBlb2YiLCJCIiwiaXNNb3VudGVkIiwiZW5xdWV1ZUZvcmNlVXBkYXRlIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsImVucXVldWVTZXRTdGF0ZSIsIkMiLCJPYmplY3QiLCJhc3NpZ24iLCJEIiwiRSIsImIiLCJlIiwicHJvcHMiLCJjb250ZXh0IiwicmVmcyIsInVwZGF0ZXIiLCJwcm90b3R5cGUiLCJpc1JlYWN0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJFcnJvciIsImZvcmNlVXBkYXRlIiwiRiIsIkciLCJIIiwiY29uc3RydWN0b3IiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsIkkiLCJBcnJheSIsImlzQXJyYXkiLCJKIiwiaGFzT3duUHJvcGVydHkiLCJLIiwiY3VycmVudCIsIkwiLCJrZXkiLCJyZWYiLCJfX3NlbGYiLCJfX3NvdXJjZSIsIk0iLCJkIiwiYyIsImsiLCJoIiwiY2FsbCIsImciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjaGlsZHJlbiIsImYiLCJtIiwiZGVmYXVsdFByb3BzIiwiJCR0eXBlb2YiLCJ0eXBlIiwiX293bmVyIiwiTiIsIk8iLCJlc2NhcGUiLCJyZXBsYWNlIiwiUCIsIlEiLCJ0b1N0cmluZyIsIlIiLCJwdXNoIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsIlN0cmluZyIsImtleXMiLCJqb2luIiwiUyIsIlQiLCJfc3RhdHVzIiwiX3Jlc3VsdCIsInRoZW4iLCJkZWZhdWx0IiwiVSIsIlYiLCJ0cmFuc2l0aW9uIiwiVyIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyIsIlJlYWN0Q3VycmVudE93bmVyIiwicmVhY3RfcHJvZHVjdGlvbl9taW4iLCJDaGlsZHJlbiIsIm1hcCIsImZvckVhY2giLCJhcHBseSIsImNvdW50IiwidG9BcnJheSIsIm9ubHkiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIlByb2ZpbGVyIiwiU3RyaWN0TW9kZSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlQ29udGV4dCIsIl9jdXJyZW50VmFsdWUiLCJfY3VycmVudFZhbHVlMiIsIl90aHJlYWRDb3VudCIsIlByb3ZpZGVyIiwiQ29uc3VtZXIiLCJfZGVmYXVsdFZhbHVlIiwiX2dsb2JhbE5hbWUiLCJfY29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJiaW5kIiwiY3JlYXRlUmVmIiwiZm9yd2FyZFJlZiIsInJlbmRlciIsImlzVmFsaWRFbGVtZW50IiwibGF6eSIsIl9wYXlsb2FkIiwiX2luaXQiLCJtZW1vIiwiY29tcGFyZSIsInN0YXJ0VHJhbnNpdGlvbiIsInVuc3RhYmxlX2FjdCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZURlYnVnVmFsdWUiLCJ1c2VEZWZlcnJlZFZhbHVlIiwidXNlRWZmZWN0IiwidXNlSWQiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlSW5zZXJ0aW9uRWZmZWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwidXNlVHJhbnNpdGlvbiIsInZlcnNpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJyZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQiLCJSZWFjdFZlcnNpb24iLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRUFDVF9QT1JUQUxfVFlQRSIsIlJFQUNUX0ZSQUdNRU5UX1RZUEUiLCJSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIiwiUkVBQ1RfUFJPRklMRVJfVFlQRSIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSIsIlJFQUNUX01FTU9fVFlQRSIsIlJFQUNUX0xBWllfVFlQRSIsIlJFQUNUX09GRlNDUkVFTl9UWVBFIiwiTUFZQkVfSVRFUkFUT1JfU1lNQk9MIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIm1heWJlSXRlcmF0b3IiLCJSZWFjdEN1cnJlbnRBY3RRdWV1ZSIsImlzQmF0Y2hpbmdMZWdhY3kiLCJkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCJjdXJyZW50RXh0cmFTdGFja0ZyYW1lIiwic2V0RXh0cmFTdGFja0ZyYW1lIiwic3RhY2siLCJnZXRDdXJyZW50U3RhY2siLCJnZXRTdGFja0FkZGVuZHVtIiwiaW1wbCIsImVuYWJsZVNjb3BlQVBJIiwiZW5hYmxlQ2FjaGVFbGVtZW50IiwiZW5hYmxlVHJhbnNpdGlvblRyYWNpbmciLCJlbmFibGVMZWdhY3lIaWRkZW4iLCJlbmFibGVEZWJ1Z1RyYWNpbmciLCJSZWFjdFNoYXJlZEludGVybmFscyIsIndhcm4iLCJmb3JtYXQiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJwcmludFdhcm5pbmciLCJlcnJvciIsIl9sZW4yIiwiX2tleTIiLCJsZXZlbCIsImNvbmNhdCIsImFyZ3NXaXRoRm9ybWF0IiwiaXRlbSIsInVuc2hpZnQiLCJGdW5jdGlvbiIsImNvbnNvbGUiLCJkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQiLCJ3YXJuTm9vcCIsInB1YmxpY0luc3RhbmNlIiwiY2FsbGVyTmFtZSIsIl9jb25zdHJ1Y3RvciIsImNvbXBvbmVudE5hbWUiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJ3YXJuaW5nS2V5IiwiUmVhY3ROb29wVXBkYXRlUXVldWUiLCJjYWxsYmFjayIsImNvbXBsZXRlU3RhdGUiLCJwYXJ0aWFsU3RhdGUiLCJlbXB0eU9iamVjdCIsImZyZWV6ZSIsImRlcHJlY2F0ZWRBUElzIiwicmVwbGFjZVN0YXRlIiwiZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nIiwibWV0aG9kTmFtZSIsImluZm8iLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInVuZGVmaW5lZCIsImZuTmFtZSIsIkNvbXBvbmVudER1bW15IiwiUHVyZUNvbXBvbmVudCIsInB1cmVDb21wb25lbnRQcm90b3R5cGUiLCJyZWZPYmplY3QiLCJzZWFsIiwiaXNBcnJheUltcGwiLCJ0eXBlTmFtZSIsImhhc1RvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJ3aWxsQ29lcmNpb25UaHJvdyIsInRlc3RTdHJpbmdDb2VyY2lvbiIsImNoZWNrS2V5U3RyaW5nQ29lcmNpb24iLCJnZXRXcmFwcGVkTmFtZSIsIm91dGVyVHlwZSIsImlubmVyVHlwZSIsIndyYXBwZXJOYW1lIiwiZnVuY3Rpb25OYW1lIiwiZ2V0Q29udGV4dE5hbWUiLCJnZXRDb21wb25lbnROYW1lRnJvbVR5cGUiLCJ0YWciLCJwcm92aWRlciIsIm91dGVyTmFtZSIsImxhenlDb21wb25lbnQiLCJwYXlsb2FkIiwiaW5pdCIsIlJFU0VSVkVEX1BST1BTIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImRpZFdhcm5BYm91dFN0cmluZ1JlZnMiLCJoYXNWYWxpZFJlZiIsImNvbmZpZyIsImdldHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImlzUmVhY3RXYXJuaW5nIiwiaGFzVmFsaWRLZXkiLCJkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlciIsIndhcm5BYm91dEFjY2Vzc2luZ0tleSIsImNvbmZpZ3VyYWJsZSIsImRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nUmVmIiwid2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkIiwic3RhdGVOb2RlIiwiUmVhY3RFbGVtZW50Iiwic2VsZiIsInNvdXJjZSIsIm93bmVyIiwiZWxlbWVudCIsIl9zdG9yZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsInByb3BOYW1lIiwiY2hpbGRyZW5MZW5ndGgiLCJjaGlsZEFycmF5IiwiaSIsImNsb25lQW5kUmVwbGFjZUtleSIsIm9sZEVsZW1lbnQiLCJuZXdLZXkiLCJuZXdFbGVtZW50IiwiX3NlbGYiLCJfc291cmNlIiwib2JqZWN0IiwiU0VQQVJBVE9SIiwiU1VCU0VQQVJBVE9SIiwiZXNjYXBlUmVnZXgiLCJlc2NhcGVyTG9va3VwIiwiZXNjYXBlZFN0cmluZyIsIm1hdGNoIiwiZGlkV2FybkFib3V0TWFwcyIsInVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4IiwiZXNjYXBlVXNlclByb3ZpZGVkS2V5IiwidGV4dCIsImdldEVsZW1lbnRLZXkiLCJpbmRleCIsIm1hcEludG9BcnJheSIsImFycmF5IiwiZXNjYXBlZFByZWZpeCIsIm5hbWVTb0ZhciIsImludm9rZUNhbGxiYWNrIiwiX2NoaWxkIiwibWFwcGVkQ2hpbGQiLCJjaGlsZEtleSIsImVzY2FwZWRDaGlsZEtleSIsImNoaWxkIiwibmV4dE5hbWUiLCJzdWJ0cmVlQ291bnQiLCJuZXh0TmFtZVByZWZpeCIsIml0ZXJhdG9yRm4iLCJpdGVyYWJsZUNoaWxkcmVuIiwiZW50cmllcyIsInN0ZXAiLCJpaSIsImNoaWxkcmVuU3RyaW5nIiwibWFwQ2hpbGRyZW4iLCJmdW5jIiwicmVzdWx0IiwiY291bnRDaGlsZHJlbiIsImZvckVhY2hDaGlsZHJlbiIsImZvckVhY2hGdW5jIiwiZm9yRWFjaENvbnRleHQiLCJvbmx5Q2hpbGQiLCJkZWZhdWx0VmFsdWUiLCJoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyIsImhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyIiwiaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwic2V0IiwiX1Byb3ZpZGVyIiwiX2N1cnJlbnRSZW5kZXJlciIsIl9jdXJyZW50UmVuZGVyZXIyIiwiVW5pbml0aWFsaXplZCIsIlBlbmRpbmciLCJSZXNvbHZlZCIsIlJlamVjdGVkIiwibGF6eUluaXRpYWxpemVyIiwiY3RvciIsInRoZW5hYmxlIiwibW9kdWxlT2JqZWN0IiwicmVzb2x2ZWQiLCJyZWplY3RlZCIsInBlbmRpbmciLCJsYXp5VHlwZSIsInByb3BUeXBlcyIsIm5ld0RlZmF1bHRQcm9wcyIsIm5ld1Byb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwib3duTmFtZSIsIlJFQUNUX01PRFVMRV9SRUZFUkVOQ0UiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXRNb2R1bGVJZCIsInJlc29sdmVEaXNwYXRjaGVyIiwiZGlzcGF0Y2hlciIsIkNvbnRleHQiLCJyZWFsQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJpbml0aWFsQXJnIiwiaW5pdGlhbFZhbHVlIiwiY3JlYXRlIiwiZGVwcyIsImZvcm1hdHRlckZuIiwic3Vic2NyaWJlIiwiZ2V0U25hcHNob3QiLCJnZXRTZXJ2ZXJTbmFwc2hvdCIsImRpc2FibGVkRGVwdGgiLCJwcmV2TG9nIiwicHJldkluZm8iLCJwcmV2V2FybiIsInByZXZFcnJvciIsInByZXZHcm91cCIsInByZXZHcm91cENvbGxhcHNlZCIsInByZXZHcm91cEVuZCIsImRpc2FibGVkTG9nIiwiX19yZWFjdERpc2FibGVkTG9nIiwiZGlzYWJsZUxvZ3MiLCJsb2ciLCJncm91cCIsImdyb3VwQ29sbGFwc2VkIiwiZ3JvdXBFbmQiLCJyZWVuYWJsZUxvZ3MiLCJSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEiLCJwcmVmaXgiLCJkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSIsIm93bmVyRm4iLCJ0cmltIiwicmVlbnRyeSIsImNvbXBvbmVudEZyYW1lQ2FjaGUiLCJQb3NzaWJseVdlYWtNYXAiLCJXZWFrTWFwIiwiTWFwIiwiZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSIsImZuIiwiY29uc3RydWN0IiwiZnJhbWUiLCJjb250cm9sIiwicHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSIsInByZXBhcmVTdGFja1RyYWNlIiwicHJldmlvdXNEaXNwYXRjaGVyIiwiRmFrZSIsIlJlZmxlY3QiLCJzYW1wbGUiLCJzYW1wbGVMaW5lcyIsInNwbGl0IiwiY29udHJvbExpbmVzIiwicyIsIl9mcmFtZSIsImluY2x1ZGVzIiwic3ludGhldGljRnJhbWUiLCJkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUiLCJzaG91bGRDb25zdHJ1Y3QiLCJkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEiLCJzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJoYXMiLCJ0eXBlU3BlY05hbWUiLCJlcnJvciQxIiwiZXJyIiwiZXgiLCJtZXNzYWdlIiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMSIsInByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duIiwiZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtIiwiZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0iLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzIiwiZWxlbWVudFByb3BzIiwib3duZXJIYXNLZXlVc2VXYXJuaW5nIiwiZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyIsInBhcmVudFR5cGUiLCJwYXJlbnROYW1lIiwidmFsaWRhdGVFeHBsaWNpdEtleSIsInZhbGlkYXRlZCIsImN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJjaGlsZE93bmVyIiwidmFsaWRhdGVDaGlsZEtleXMiLCJub2RlIiwidmFsaWRhdGVQcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJfbmFtZSIsImdldERlZmF1bHRQcm9wcyIsImlzUmVhY3RDbGFzc0FwcHJvdmVkIiwidmFsaWRhdGVGcmFnbWVudFByb3BzIiwiZnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24iLCJ2YWxpZFR5cGUiLCJzb3VyY2VJbmZvIiwidHlwZVN0cmluZyIsImRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5IiwiY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIiwidmFsaWRhdGVkRmFjdG9yeSIsImNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIiwic2NvcGUiLCJvcHRpb25zIiwicHJldlRyYW5zaXRpb24iLCJjdXJyZW50VHJhbnNpdGlvbiIsIl91cGRhdGVkRmliZXJzIiwiU2V0IiwidXBkYXRlZEZpYmVyc0NvdW50Iiwic2l6ZSIsImNsZWFyIiwiZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwiLCJlbnF1ZXVlVGFza0ltcGwiLCJlbnF1ZXVlVGFzayIsInRhc2siLCJyZXF1aXJlU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwibm9kZVJlcXVpcmUiLCJtb2R1bGUiLCJzZXRJbW1lZGlhdGUiLCJfZXJyIiwiTWVzc2FnZUNoYW5uZWwiLCJjaGFubmVsIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3J0MiIsInBvc3RNZXNzYWdlIiwiYWN0U2NvcGVEZXB0aCIsImRpZFdhcm5Ob0F3YWl0QWN0IiwiYWN0IiwicHJldkFjdFNjb3BlRGVwdGgiLCJwcmV2SXNCYXRjaGluZ0xlZ2FjeSIsInF1ZXVlIiwiZmx1c2hBY3RRdWV1ZSIsInBvcEFjdFNjb3BlIiwidGhlbmFibGVSZXN1bHQiLCJ3YXNBd2FpdGVkIiwicmVzb2x2ZSIsInJlamVjdCIsInJldHVyblZhbHVlIiwicmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayIsIlByb21pc2UiLCJfcXVldWUiLCJfdGhlbmFibGUiLCJfdGhlbmFibGUyIiwiaXNGbHVzaGluZyIsImNyZWF0ZUVsZW1lbnQkMSIsImNsb25lRWxlbWVudCQxIiwiY3JlYXRlRmFjdG9yeSIsImV4cG9ydHMiLCJTdXNwZW5zZSIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wIiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJyZWFjdElzX3Byb2R1Y3Rpb25fbWluIiwiQ29udGV4dENvbnN1bWVyIiwiRWxlbWVudCIsIkZvcndhcmRSZWYiLCJMYXp5IiwiTWVtbyIsIlBvcnRhbCIsIlN1c3BlbnNlTGlzdCIsImlzQXN5bmNNb2RlIiwiaXNDb250ZXh0Q29uc3VtZXIiLCJpc0NvbnRleHRQcm92aWRlciIsImlzRWxlbWVudCIsImlzRm9yd2FyZFJlZiIsImlzRnJhZ21lbnQiLCJpc0xhenkiLCJpc01lbW8iLCJpc1BvcnRhbCIsImlzU3RyaWN0TW9kZSIsImlzU3VzcGVuc2UiLCJpc1N1c3BlbnNlTGlzdCIsInR5cGVPZiIsIlJFQUNUX1NFUlZFUl9DT05URVhUX1RZUEUiLCIkJHR5cGVvZlR5cGUiLCJDb250ZXh0UHJvdmlkZXIiLCJoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSIsImhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUiLCJpc0NvbmN1cnJlbnRNb2RlIiwiaXNQcm9maWxlciIsInJlYWN0SXNfZGV2ZWxvcG1lbnQiLCJzdHlsaXNfbWluIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsInN1YnN0cmluZyIsImNhIiwiWCIsImRhIiwiZWEiLCJmYSIsIlkiLCJoYSIsImlhIiwiWiIsImluZGV4T2YiLCJqYSIsImthIiwidGVzdCIsImFhIiwiYmEiLCJsYSIsIm1hIiwibmEiLCJvYSIsInVzZSIsInVuaXRsZXNzS2V5cyIsImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IiwiYm9yZGVySW1hZ2VPdXRzZXQiLCJib3JkZXJJbWFnZVNsaWNlIiwiYm9yZGVySW1hZ2VXaWR0aCIsImJveEZsZXgiLCJib3hGbGV4R3JvdXAiLCJib3hPcmRpbmFsR3JvdXAiLCJjb2x1bW5Db3VudCIsImNvbHVtbnMiLCJmbGV4IiwiZmxleEdyb3ciLCJmbGV4UG9zaXRpdmUiLCJmbGV4U2hyaW5rIiwiZmxleE5lZ2F0aXZlIiwiZmxleE9yZGVyIiwiZ3JpZFJvdyIsImdyaWRSb3dFbmQiLCJncmlkUm93U3BhbiIsImdyaWRSb3dTdGFydCIsImdyaWRDb2x1bW4iLCJncmlkQ29sdW1uRW5kIiwiZ3JpZENvbHVtblNwYW4iLCJncmlkQ29sdW1uU3RhcnQiLCJtc0dyaWRSb3ciLCJtc0dyaWRSb3dTcGFuIiwibXNHcmlkQ29sdW1uIiwibXNHcmlkQ29sdW1uU3BhbiIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0Iiwib3BhY2l0eSIsIm9yZGVyIiwib3JwaGFucyIsInRhYlNpemUiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwiV2Via2l0TGluZUNsYW1wIiwiZmlsbE9wYWNpdHkiLCJmbG9vZE9wYWNpdHkiLCJzdG9wT3BhY2l0eSIsInN0cm9rZURhc2hhcnJheSIsInN0cm9rZURhc2hvZmZzZXQiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZVdpZHRoIiwibWVtb2l6ZSIsImNhY2hlIiwiYXJnIiwicmVhY3RQcm9wc1JlZ2V4IiwiaXNQcm9wVmFsaWQiLCJwcm9wIiwiQXN5bmNNb2RlIiwiQ29uY3VycmVudE1vZGUiLCJoYXNTeW1ib2wiLCJSRUFDVF9BU1lOQ19NT0RFX1RZUEUiLCJSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSIsIlJFQUNUX0JMT0NLX1RZUEUiLCJSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIiwiUkVBQ1RfUkVTUE9OREVSX1RZUEUiLCJSRUFDVF9TQ09QRV9UWVBFIiwicmVhY3RJcyIsIlJFQUNUX1NUQVRJQ1MiLCJjaGlsZENvbnRleHRUeXBlcyIsImNvbnRleHRUeXBlIiwiY29udGV4dFR5cGVzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibWl4aW5zIiwiS05PV05fU1RBVElDUyIsImNhbGxlciIsImNhbGxlZSIsImFyaXR5IiwiRk9SV0FSRF9SRUZfU1RBVElDUyIsIk1FTU9fU1RBVElDUyIsIlRZUEVfU1RBVElDUyIsImdldFN0YXRpY3MiLCJjb21wb25lbnQiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZ2V0UHJvdG90eXBlT2YiLCJvYmplY3RQcm90b3R5cGUiLCJob2lzdE5vblJlYWN0U3RhdGljcyIsInRhcmdldENvbXBvbmVudCIsInNvdXJjZUNvbXBvbmVudCIsImJsYWNrbGlzdCIsImluaGVyaXRlZENvbXBvbmVudCIsInRhcmdldFN0YXRpY3MiLCJzb3VyY2VTdGF0aWNzIiwiZGVzY3JpcHRvciIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzX2NqcyIsIm8iLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsInRlc3QxIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJ0ZXN0MyIsImxldHRlciIsIm9iamVjdEFzc2lnbiIsInRhcmdldCIsImZyb20iLCJ0byIsInN5bWJvbHMiLCJtZXJnZSIsIl9hc3NpZ24iLCJzb3J0Iiwib2JqIiwibG9jYWxlQ29tcGFyZSIsIm51bWVyaWMiLCJzZW5zaXRpdml0eSIsImRlZmF1bHRzIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVNZWRpYVF1ZXJ5IiwiZ2V0VmFsdWUiLCJzY2FsZSIsImRlZiIsInVuZGVmIiwiY3JlYXRlUGFyc2VyIiwicGFyc2UiLCJzdHlsZXMiLCJzaG91bGRTb3J0IiwiaXNDYWNoZURpc2FibGVkIiwidGhlbWUiLCJkaXNhYmxlU3R5bGVkU3lzdGVtQ2FjaGUiLCJzeCIsInJhdyIsIm1lZGlhIiwicGFyc2VSZXNwb25zaXZlU3R5bGUiLCJwYXJzZVJlc3BvbnNpdmVPYmplY3QiLCJwcm9wTmFtZXMiLCJmaWx0ZXIiLCJfY3JlYXRlUGFyc2VyIiwibWVkaWFRdWVyaWVzIiwiX3Byb3BzIiwic3R5bGUiLCJfYXNzaWduMiIsImJyZWFrcG9pbnQiLCJfYXNzaWduMyIsImNyZWF0ZVN0eWxlRnVuY3Rpb24iLCJfcmVmIiwicHJvcGVydGllcyIsInByb3BlcnR5IiwiX3JlZiR0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJkZWZhdWx0U2NhbGUiLCJzeXN0ZW0iLCJjb25mIiwicGFyc2VyIiwiY29tcG9zZSIsInBhcnNlcnMiLCJpc051bWJlciIsImlzTmFOIiwiZ2V0V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImRpc3BsYXkiLCJ2ZXJ0aWNhbEFsaWduIiwibGF5b3V0IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiZyIsImZvbnRTaXplcyIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJmb250U3R5bGUiLCJ0eXBvZ3JhcGh5IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImp1c3RpZnlJdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmbGV4RGlyZWN0aW9uIiwiZmxleEJhc2lzIiwianVzdGlmeVNlbGYiLCJhbGlnblNlbGYiLCJmbGV4Ym94Iiwic3BhY2UiLCJncmlkR2FwIiwiZ3JpZENvbHVtbkdhcCIsImdyaWRSb3dHYXAiLCJncmlkQXV0b0Zsb3ciLCJncmlkQXV0b0NvbHVtbnMiLCJncmlkQXV0b1Jvd3MiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsImdyaWRUZW1wbGF0ZUFyZWFzIiwiZ3JpZEFyZWEiLCJncmlkIiwiYm9yZGVyIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJMZWZ0IiwiYm9yZGVyWCIsImJvcmRlclkiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclRvcENvbG9yIiwiYm9yZGVyVG9wU3R5bGUiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbUNvbG9yIiwiYm9yZGVyQm90dG9tU3R5bGUiLCJib3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJMZWZ0Q29sb3IiLCJib3JkZXJMZWZ0U3R5bGUiLCJib3JkZXJSaWdodFdpZHRoIiwiYm9yZGVyUmlnaHRDb2xvciIsImJvcmRlclJpZ2h0U3R5bGUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmdJbWFnZSIsImJnU2l6ZSIsImJnUG9zaXRpb24iLCJiZ1JlcGVhdCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiZ2V0TWFyZ2luIiwiaXNOZWdhdGl2ZSIsImFic29sdXRlIiwiYWJzIiwiY29uZmlncyIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblgiLCJtYXJnaW5ZIiwibXQiLCJtciIsIm1iIiwibWwiLCJteCIsIm15IiwicGFkZGluZyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwicHQiLCJwciIsInBiIiwicGwiLCJweCIsInB5IiwiYm94U2hhZG93IiwidGV4dFNoYWRvdyIsIl9leHRlbmRzIiwiZGVmYXVsdEJyZWFrcG9pbnRzIiwiZGVmYXVsdFRoZW1lIiwiYWxpYXNlcyIsIm11bHRpcGxlcyIsInNjYWxlcyIsImdhcCIsImNvbHVtbkdhcCIsInJvd0dhcCIsIm91dGxpbmVDb2xvciIsImZpbGwiLCJzdHJva2UiLCJwb3NpdGl2ZU9yTmVnYXRpdmUiLCJ0cmFuc2Zvcm1zIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIl9leHRlbmRzMiIsInJlc3BvbnNpdmUiLCJjc3MiLCJ2YXJpYW50Iiwic2NhbGVOYW1lIiwiZGlycyIsIl9jb25maWciLCJfcmVmJHByb3AiLCJfcmVmJHZhcmlhbnRzIiwidmFyaWFudHMiLCJidXR0b25TdHlsZSIsImtleWZyYW1lcyIsIlRoZW1lUHJvdmlkZXIiLCJDeWJlckJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQVNhLEVBQUEsSUFBSUEsQ0FBQyxHQUFDQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7Q0FBQ0MsSUFBQUEsQ0FBQyxHQUFDRixNQUFNLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7Q0FBQ0UsSUFBQUEsQ0FBQyxHQUFDSCxNQUFNLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztDQUFDRyxJQUFBQSxDQUFDLEdBQUNKLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0NBQUNJLElBQUFBLENBQUMsR0FBQ0wsTUFBTSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7Q0FBQ0ssSUFBQUEsQ0FBQyxHQUFDTixNQUFNLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztDQUFDTSxJQUFBQSxDQUFDLEdBQUNQLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztDQUFDTyxJQUFBQSxDQUFDLEdBQUNSLE1BQU0s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
