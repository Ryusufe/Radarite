/*
Bundled with Esbuild.
For source code, please refer to the plugin's repository.
*/

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/styles/components/radar/Radarite.module.css
var require_Radarite = __commonJS({
  "src/styles/components/radar/Radarite.module.css"(exports, module2) {
    "use strict";
    (function() {
      if (!document.getElementById("bf39d32b05063ab887f3249b3152fee197fc9bf2804ef5eb606d86732876e4e4")) {
        var e = document.createElement("style");
        e.id = "bf39d32b05063ab887f3249b3152fee197fc9bf2804ef5eb606d86732876e4e4";
        e.textContent = `.container_37134ae7c956ea71834b55e5df82472b_1 {
        container-type: size;
}

.shape_37134ae7c956ea71834b55e5df82472b_5 {
        aspect-ratio: 1/1;
        width: auto;
        height: auto;
        position: relative;
}
@container (max-aspect-ratio: 1/1) {
        .shape_37134ae7c956ea71834b55e5df82472b_5 {
                width: 100%;
                height: auto;
        }
}
@container (min-aspect-ratio: 1/1) {
        .shape_37134ae7c956ea71834b55e5df82472b_5 {
                height: 100%;
                width: auto;
        }
}

.dotContainer_37134ae7c956ea71834b55e5df82472b_24 {
        position: absolute;
        z-index: 10;
        cursor: pointer;

        &:hover .dot-ping_37134ae7c956ea71834b55e5df82472b_29 {
                visibility: visible;
                animation: var(--animate-ping);
        }
}

.dot-ping_37134ae7c956ea71834b55e5df82472b_29 {
        visibility: hidden;
}
`;
        document.head.appendChild(e);
      }
    })();
    module2.exports = JSON.parse('{"container":"container_37134ae7c956ea71834b55e5df82472b_1","shape":"shape_37134ae7c956ea71834b55e5df82472b_5","dotContainer":"dotContainer_37134ae7c956ea71834b55e5df82472b_24","dot-ping":"dot-ping_37134ae7c956ea71834b55e5df82472b_29"}');
  }
});

// src/styles/components/radar/Panel.module.css
var require_Panel = __commonJS({
  "src/styles/components/radar/Panel.module.css"(exports, module2) {
    "use strict";
    (function() {
      if (!document.getElementById("a0e1ebd8303a354eb9c9a10ef168d2bf6fbc9588b6301d3abeb6d6207c39e879")) {
        var e = document.createElement("style");
        e.id = "a0e1ebd8303a354eb9c9a10ef168d2bf6fbc9588b6301d3abeb6d6207c39e879";
        e.textContent = `.panel_47933ee83408c08646de2bac7c56f92b_1 {
        position: absolute;
        min-width: calc(var(--spacing) * 80);
        max-width: calc(var(--spacing) * 90);
        background-color: var(--secondary-color-05);
        border: 1px solid var(--secondary-color-10);
        border-radius: 0.25rem;
        padding: calc(var(--spacing) * 2);
        z-index: 10;
        transition:
                left 0.2s ease-out,
                top 0.2s ease-out;
}

.downIcon_47933ee83408c08646de2bac7c56f92b_15 {
        margin: auto;
        stroke: var(--color-neutral-600);
        transition: rotate 0.1s ease;
}
.dark .downIcon_47933ee83408c08646de2bac7c56f92b_15 {
        stroke: var(--color-neutral-300);
}

.title_47933ee83408c08646de2bac7c56f92b_24 {
        color: var(--color-neutral-900);
}

.dark .title_47933ee83408c08646de2bac7c56f92b_24 {
        color: var(--color-neutral-50);
}

.des_47933ee83408c08646de2bac7c56f92b_32 {
        color: var(--color-neutral-600);
}

.dark .des_47933ee83408c08646de2bac7c56f92b_32 {
        color: var(--color-neutral-400);
}

.tag_47933ee83408c08646de2bac7c56f92b_40 {
        background-color: var(--secondary-color-20);
        border-radius: 0.25rem;
        padding: 1px 3px;
        font-size: 0.8rem;
        line-height: 1;
        height: fit-content;
}

.progressBar_47933ee83408c08646de2bac7c56f92b_49 {
        width: 100%;
        height: 10px;
        border-radius: 5px;
}

.propertyContainer_47933ee83408c08646de2bac7c56f92b_55 {
        display: flex;
        align-items: center;
        justify-content: space-between;
}
.propertyName_47933ee83408c08646de2bac7c56f92b_60 {
        font-weight: 500;
        color: var(--color-neutral-500);
        font-size: var(--text-sm);
        line-height: var(--tw-leading, var(--text-sm--line-height));
        &::first-letter {
                text-transform: capitalize;
        }
}
.propertyValue_47933ee83408c08646de2bac7c56f92b_69 {
        font-weight: 500;
        color: var(--color-neutral-600);
        font-size: var(--text-sm);
        line-height: var(--tw-leading, var(--text-sm--line-height));
}
.dark .propertyValue_47933ee83408c08646de2bac7c56f92b_69 {
        color: var(--color-neutral-400);
}

.divider_47933ee83408c08646de2bac7c56f92b_79 {
        border-top: 1px dashed var(--secondary-color-10);
}
.vert-divider_47933ee83408c08646de2bac7c56f92b_82 {
        border-width: 0 3px 0 0;
        border-color: var(--secondary-color-10);
        height: 15px;
        margin-block: auto;
}
`;
        document.head.appendChild(e);
      }
    })();
    module2.exports = JSON.parse('{"panel":"panel_47933ee83408c08646de2bac7c56f92b_1","downIcon":"downIcon_47933ee83408c08646de2bac7c56f92b_15","title":"title_47933ee83408c08646de2bac7c56f92b_24","des":"des_47933ee83408c08646de2bac7c56f92b_32","tag":"tag_47933ee83408c08646de2bac7c56f92b_40","progressBar":"progressBar_47933ee83408c08646de2bac7c56f92b_49","propertyContainer":"propertyContainer_47933ee83408c08646de2bac7c56f92b_55","propertyName":"propertyName_47933ee83408c08646de2bac7c56f92b_60","propertyValue":"propertyValue_47933ee83408c08646de2bac7c56f92b_69","divider":"divider_47933ee83408c08646de2bac7c56f92b_79","vert-divider":"vert-divider_47933ee83408c08646de2bac7c56f92b_82"}');
  }
});

// src/styles/components/radar/Shape.module.css
var require_Shape = __commonJS({
  "src/styles/components/radar/Shape.module.css"(exports, module2) {
    "use strict";
    (function() {
      if (!document.getElementById("ed1670fa105b490457c1cacbbec19d36b6182e45c09f7f3a700186f1d26d8fd6")) {
        var e = document.createElement("style");
        e.id = "ed1670fa105b490457c1cacbbec19d36b6182e45c09f7f3a700186f1d26d8fd6";
        e.textContent = `.radar-line_d3c5059727ccfb8cdec059f71ac8ff69_1 {
        animation: rotateRadar_d3c5059727ccfb8cdec059f71ac8ff69_1 5s linear infinite;
        transform-origin: center;
}

@keyframes rotateRadar_d3c5059727ccfb8cdec059f71ac8ff69_1 {
        0% {
                transform: rotate(0deg);
        }
        100% {
                transform: rotate(360deg);
        }
}
`;
        document.head.appendChild(e);
      }
    })();
    module2.exports = JSON.parse('{"radar-line":"radar-line_d3c5059727ccfb8cdec059f71ac8ff69_1","rotateRadar":"rotateRadar_d3c5059727ccfb8cdec059f71ac8ff69_1"}');
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => RadariteMain
});
module.exports = __toCommonJS(index_exports);

// node_modules/solid-js/dist/solid.js
var sharedConfig = {
  context: void 0,
  registry: void 0,
  effects: void 0,
  done: false,
  getContextId() {
    return getContextId(this.context.count);
  },
  getNextContextId() {
    return getContextId(this.context.count++);
  }
};
function getContextId(count) {
  const num = String(count), len = num.length - 1;
  return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
}
function setHydrateContext(context) {
  sharedConfig.context = context;
}
function nextHydrateContext() {
  return {
    ...sharedConfig.context,
    id: sharedConfig.getNextContextId(),
    count: 0
  };
}
var IS_DEV = false;
var equalFn = (a, b) => a === b;
var $PROXY = Symbol("solid-proxy");
var $TRACK = Symbol("solid-track");
var $DEVCOMP = Symbol("solid-dev-component");
var signalOptions = {
  equals: equalFn
};
var ERROR = null;
var runEffects = runQueue;
var STALE = 1;
var PENDING = 2;
var UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
var Owner = null;
var Transition = null;
var Scheduler = null;
var ExternalSourceConfig = null;
var Listener = null;
var Updates = null;
var Effects = null;
var ExecCount = 0;
function createRoot(fn, detachedOwner) {
  const listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === void 0 ? owner : detachedOwner, root = unowned ? UNOWNED : {
    owned: null,
    cleanups: null,
    context: current ? current.context : null,
    owner: current
  }, updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
  Owner = root;
  Listener = null;
  try {
    return runUpdates(updateFn, true);
  } finally {
    Listener = listener;
    Owner = owner;
  }
}
function createSignal(value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const s = {
    value,
    observers: null,
    observerSlots: null,
    comparator: options.equals || void 0
  };
  const setter = (value2) => {
    if (typeof value2 === "function") {
      if (Transition && Transition.running && Transition.sources.has(s)) value2 = value2(s.tValue);
      else value2 = value2(s.value);
    }
    return writeSignal(s, value2);
  };
  return [readSignal.bind(s), setter];
}
function createRenderEffect(fn, value, options) {
  const c = createComputation(fn, value, false, STALE);
  if (Scheduler && Transition && Transition.running) Updates.push(c);
  else updateComputation(c);
}
function createEffect(fn, value, options) {
  runEffects = runUserEffects;
  const c = createComputation(fn, value, false, STALE), s = SuspenseContext && useContext(SuspenseContext);
  if (s) c.suspense = s;
  if (!options || !options.render) c.user = true;
  Effects ? Effects.push(c) : updateComputation(c);
}
function createMemo(fn, value, options) {
  options = options ? Object.assign({}, signalOptions, options) : signalOptions;
  const c = createComputation(fn, value, true, 0);
  c.observers = null;
  c.observerSlots = null;
  c.comparator = options.equals || void 0;
  if (Scheduler && Transition && Transition.running) {
    c.tState = STALE;
    Updates.push(c);
  } else updateComputation(c);
  return readSignal.bind(c);
}
function untrack(fn) {
  if (!ExternalSourceConfig && Listener === null) return fn();
  const listener = Listener;
  Listener = null;
  try {
    if (ExternalSourceConfig) return ExternalSourceConfig.untrack(fn);
    return fn();
  } finally {
    Listener = listener;
  }
}
function onMount(fn) {
  createEffect(() => untrack(fn));
}
function onCleanup(fn) {
  if (Owner === null) ;
  else if (Owner.cleanups === null) Owner.cleanups = [fn];
  else Owner.cleanups.push(fn);
  return fn;
}
function startTransition(fn) {
  if (Transition && Transition.running) {
    fn();
    return Transition.done;
  }
  const l = Listener;
  const o = Owner;
  return Promise.resolve().then(() => {
    Listener = l;
    Owner = o;
    let t;
    if (Scheduler || SuspenseContext) {
      t = Transition || (Transition = {
        sources: /* @__PURE__ */ new Set(),
        effects: [],
        promises: /* @__PURE__ */ new Set(),
        disposed: /* @__PURE__ */ new Set(),
        queue: /* @__PURE__ */ new Set(),
        running: true
      });
      t.done || (t.done = new Promise((res) => t.resolve = res));
      t.running = true;
    }
    runUpdates(fn, false);
    Listener = Owner = null;
    return t ? t.done : void 0;
  });
}
var [transPending, setTransPending] = /* @__PURE__ */ createSignal(false);
function useContext(context) {
  let value;
  return Owner && Owner.context && (value = Owner.context[context.id]) !== void 0 ? value : context.defaultValue;
}
var SuspenseContext;
function readSignal() {
  const runningTransition = Transition && Transition.running;
  if (this.sources && (runningTransition ? this.tState : this.state)) {
    if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this);
    else {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(this), false);
      Updates = updates;
    }
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  if (runningTransition && Transition.sources.has(this)) return this.tValue;
  return this.value;
}
function writeSignal(node, value, isComp) {
  let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
  if (!node.comparator || !node.comparator(current, value)) {
    if (Transition) {
      const TransitionRunning = Transition.running;
      if (TransitionRunning || !isComp && Transition.sources.has(node)) {
        Transition.sources.add(node);
        node.tValue = value;
      }
      if (!TransitionRunning) node.value = value;
    } else node.value = value;
    if (node.observers && node.observers.length) {
      runUpdates(() => {
        for (let i = 0; i < node.observers.length; i += 1) {
          const o = node.observers[i];
          const TransitionRunning = Transition && Transition.running;
          if (TransitionRunning && Transition.disposed.has(o)) continue;
          if (TransitionRunning ? !o.tState : !o.state) {
            if (o.pure) Updates.push(o);
            else Effects.push(o);
            if (o.observers) markDownstream(o);
          }
          if (!TransitionRunning) o.state = STALE;
          else o.tState = STALE;
        }
        if (Updates.length > 1e6) {
          Updates = [];
          if (IS_DEV) ;
          throw new Error();
        }
      }, false);
    }
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const time = ExecCount;
  runComputation(
    node,
    Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value,
    time
  );
  if (Transition && !Transition.running && Transition.sources.has(node)) {
    queueMicrotask(() => {
      runUpdates(() => {
        Transition && (Transition.running = true);
        Listener = Owner = node;
        runComputation(node, node.tValue, time);
        Listener = Owner = null;
      }, false);
    });
  }
}
function runComputation(node, value, time) {
  let nextValue;
  const owner = Owner, listener = Listener;
  Listener = Owner = node;
  try {
    nextValue = node.fn(value);
  } catch (err) {
    if (node.pure) {
      if (Transition && Transition.running) {
        node.tState = STALE;
        node.tOwned && node.tOwned.forEach(cleanNode);
        node.tOwned = void 0;
      } else {
        node.state = STALE;
        node.owned && node.owned.forEach(cleanNode);
        node.owned = null;
      }
    }
    node.updatedAt = time + 1;
    return handleError(err);
  } finally {
    Listener = listener;
    Owner = owner;
  }
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.updatedAt != null && "observers" in node) {
      writeSignal(node, nextValue, true);
    } else if (Transition && Transition.running && node.pure) {
      Transition.sources.add(node);
      node.tValue = nextValue;
    } else node.value = nextValue;
    node.updatedAt = time;
  }
}
function createComputation(fn, init, pure, state = STALE, options) {
  const c = {
    fn,
    state,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: Owner ? Owner.context : null,
    pure
  };
  if (Transition && Transition.running) {
    c.state = 0;
    c.tState = state;
  }
  if (Owner === null) ;
  else if (Owner !== UNOWNED) {
    if (Transition && Transition.running && Owner.pure) {
      if (!Owner.tOwned) Owner.tOwned = [c];
      else Owner.tOwned.push(c);
    } else {
      if (!Owner.owned) Owner.owned = [c];
      else Owner.owned.push(c);
    }
  }
  if (ExternalSourceConfig && c.fn) {
    const [track, trigger] = createSignal(void 0, {
      equals: false
    });
    const ordinary = ExternalSourceConfig.factory(c.fn, trigger);
    onCleanup(() => ordinary.dispose());
    const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
    const inTransition = ExternalSourceConfig.factory(c.fn, triggerInTransition);
    c.fn = (x) => {
      track();
      return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
    };
  }
  return c;
}
function runTop(node) {
  const runningTransition = Transition && Transition.running;
  if ((runningTransition ? node.tState : node.state) === 0) return;
  if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
  if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
  const ancestors = [node];
  while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
    if (runningTransition && Transition.disposed.has(node)) return;
    if (runningTransition ? node.tState : node.state) ancestors.push(node);
  }
  for (let i = ancestors.length - 1; i >= 0; i--) {
    node = ancestors[i];
    if (runningTransition) {
      let top = node, prev = ancestors[i + 1];
      while ((top = top.owner) && top !== prev) {
        if (Transition.disposed.has(top)) return;
      }
    }
    if ((runningTransition ? node.tState : node.state) === STALE) {
      updateComputation(node);
    } else if ((runningTransition ? node.tState : node.state) === PENDING) {
      const updates = Updates;
      Updates = null;
      runUpdates(() => lookUpstream(node, ancestors[0]), false);
      Updates = updates;
    }
  }
}
function runUpdates(fn, init) {
  if (Updates) return fn();
  let wait = false;
  if (!init) Updates = [];
  if (Effects) wait = true;
  else Effects = [];
  ExecCount++;
  try {
    const res = fn();
    completeUpdates(wait);
    return res;
  } catch (err) {
    if (!wait) Effects = null;
    Updates = null;
    handleError(err);
  }
}
function completeUpdates(wait) {
  if (Updates) {
    if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);
    else runQueue(Updates);
    Updates = null;
  }
  if (wait) return;
  let res;
  if (Transition) {
    if (!Transition.promises.size && !Transition.queue.size) {
      const sources = Transition.sources;
      const disposed = Transition.disposed;
      Effects.push.apply(Effects, Transition.effects);
      res = Transition.resolve;
      for (const e2 of Effects) {
        "tState" in e2 && (e2.state = e2.tState);
        delete e2.tState;
      }
      Transition = null;
      runUpdates(() => {
        for (const d of disposed) cleanNode(d);
        for (const v of sources) {
          v.value = v.tValue;
          if (v.owned) {
            for (let i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
          }
          if (v.tOwned) v.owned = v.tOwned;
          delete v.tValue;
          delete v.tOwned;
          v.tState = 0;
        }
        setTransPending(false);
      }, false);
    } else if (Transition.running) {
      Transition.running = false;
      Transition.effects.push.apply(Transition.effects, Effects);
      Effects = null;
      setTransPending(true);
      return;
    }
  }
  const e = Effects;
  Effects = null;
  if (e.length) runUpdates(() => runEffects(e), false);
  if (res) res();
}
function runQueue(queue) {
  for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}
function scheduleQueue(queue) {
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const tasks = Transition.queue;
    if (!tasks.has(item)) {
      tasks.add(item);
      Scheduler(() => {
        tasks.delete(item);
        runUpdates(() => {
          Transition.running = true;
          runTop(item);
        }, false);
        Transition && (Transition.running = false);
      });
    }
  }
}
function runUserEffects(queue) {
  let i, userLength = 0;
  for (i = 0; i < queue.length; i++) {
    const e = queue[i];
    if (!e.user) runTop(e);
    else queue[userLength++] = e;
  }
  if (sharedConfig.context) {
    if (sharedConfig.count) {
      sharedConfig.effects || (sharedConfig.effects = []);
      sharedConfig.effects.push(...queue.slice(0, userLength));
      return;
    }
    setHydrateContext();
  }
  if (sharedConfig.effects && (sharedConfig.done || !sharedConfig.count)) {
    queue = [...sharedConfig.effects, ...queue];
    userLength += sharedConfig.effects.length;
    delete sharedConfig.effects;
  }
  for (i = 0; i < userLength; i++) runTop(queue[i]);
}
function lookUpstream(node, ignore) {
  const runningTransition = Transition && Transition.running;
  if (runningTransition) node.tState = 0;
  else node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      const state = runningTransition ? source.tState : source.state;
      if (state === STALE) {
        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount))
          runTop(source);
      } else if (state === PENDING) lookUpstream(source, ignore);
    }
  }
}
function markDownstream(node) {
  const runningTransition = Transition && Transition.running;
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (runningTransition ? !o.tState : !o.state) {
      if (runningTransition) o.tState = PENDING;
      else o.state = PENDING;
      if (o.pure) Updates.push(o);
      else Effects.push(o);
      o.observers && markDownstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(), s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
  }
  if (node.tOwned) {
    for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
    delete node.tOwned;
  }
  if (Transition && Transition.running && node.pure) {
    reset(node, true);
  } else if (node.owned) {
    for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
    node.cleanups = null;
  }
  if (Transition && Transition.running) node.tState = 0;
  else node.state = 0;
}
function reset(node, top) {
  if (!top) {
    node.tState = 0;
    Transition.disposed.add(node);
  }
  if (node.owned) {
    for (let i = 0; i < node.owned.length; i++) reset(node.owned[i]);
  }
}
function castError(err) {
  if (err instanceof Error) return err;
  return new Error(typeof err === "string" ? err : "Unknown error", {
    cause: err
  });
}
function runErrors(err, fns, owner) {
  try {
    for (const f of fns) f(err);
  } catch (e) {
    handleError(e, owner && owner.owner || null);
  }
}
function handleError(err, owner = Owner) {
  const fns = ERROR && owner && owner.context && owner.context[ERROR];
  const error = castError(err);
  if (!fns) throw error;
  if (Effects)
    Effects.push({
      fn() {
        runErrors(error, fns, owner);
      },
      state: STALE
    });
  else runErrors(error, fns, owner);
}
var FALLBACK = Symbol("fallback");
function dispose(d) {
  for (let i = 0; i < d.length; i++) d[i]();
}
function mapArray(list, mapFn, options = {}) {
  let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
  onCleanup(() => dispose(disposers));
  return () => {
    let newItems = list() || [], newLen = newItems.length, i, j;
    newItems[$TRACK];
    return untrack(() => {
      let newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
      if (newLen === 0) {
        if (len !== 0) {
          dispose(disposers);
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
          indexes && (indexes = []);
        }
        if (options.fallback) {
          items = [FALLBACK];
          mapped[0] = createRoot((disposer) => {
            disposers[0] = disposer;
            return options.fallback();
          });
          len = 1;
        }
      } else if (len === 0) {
        mapped = new Array(newLen);
        for (j = 0; j < newLen; j++) {
          items[j] = newItems[j];
          mapped[j] = createRoot(mapper);
        }
        len = newLen;
      } else {
        temp = new Array(newLen);
        tempdisposers = new Array(newLen);
        indexes && (tempIndexes = new Array(newLen));
        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++) ;
        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
          temp[newEnd] = mapped[end];
          tempdisposers[newEnd] = disposers[end];
          indexes && (tempIndexes[newEnd] = indexes[end]);
        }
        newIndices = /* @__PURE__ */ new Map();
        newIndicesNext = new Array(newEnd + 1);
        for (j = newEnd; j >= start; j--) {
          item = newItems[j];
          i = newIndices.get(item);
          newIndicesNext[j] = i === void 0 ? -1 : i;
          newIndices.set(item, j);
        }
        for (i = start; i <= end; i++) {
          item = items[i];
          j = newIndices.get(item);
          if (j !== void 0 && j !== -1) {
            temp[j] = mapped[i];
            tempdisposers[j] = disposers[i];
            indexes && (tempIndexes[j] = indexes[i]);
            j = newIndicesNext[j];
            newIndices.set(item, j);
          } else disposers[i]();
        }
        for (j = start; j < newLen; j++) {
          if (j in temp) {
            mapped[j] = temp[j];
            disposers[j] = tempdisposers[j];
            if (indexes) {
              indexes[j] = tempIndexes[j];
              indexes[j](j);
            }
          } else mapped[j] = createRoot(mapper);
        }
        mapped = mapped.slice(0, len = newLen);
        items = newItems.slice(0);
      }
      return mapped;
    });
    function mapper(disposer) {
      disposers[j] = disposer;
      if (indexes) {
        const [s, set] = createSignal(j);
        indexes[j] = set;
        return mapFn(newItems[j], s);
      }
      return mapFn(newItems[j]);
    }
  };
}
var hydrationEnabled = false;
function createComponent(Comp, props) {
  if (hydrationEnabled) {
    if (sharedConfig.context) {
      const c = sharedConfig.context;
      setHydrateContext(nextHydrateContext());
      const r = untrack(() => Comp(props || {}));
      setHydrateContext(c);
      return r;
    }
  }
  return untrack(() => Comp(props || {}));
}
var narrowedError = (name) => `Stale read from <${name}>.`;
function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return createMemo(mapArray(() => props.each, props.children, fallback || void 0));
}
function Show(props) {
  const keyed = props.keyed;
  const conditionValue = createMemo(() => props.when, void 0, void 0);
  const condition = keyed ? conditionValue : createMemo(conditionValue, void 0, {
    equals: (a, b) => !a === !b
  });
  return createMemo(
    () => {
      const c = condition();
      if (c) {
        const child = props.children;
        const fn = typeof child === "function" && child.length > 0;
        return fn ? untrack(
          () => child(
            keyed ? c : () => {
              if (!untrack(condition)) throw narrowedError("Show");
              return conditionValue();
            }
          )
        ) : child;
      }
      return props.fallback;
    },
    void 0,
    void 0
  );
}

// node_modules/solid-js/web/dist/web.js
var booleans = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
];
var Properties = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "noValidate",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...booleans
]);
function reconcileArrays(parentNode, a, b) {
  let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = a[aEnd - 1].nextSibling, map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
      continue;
    }
    while (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) a[aStart].remove();
        aStart++;
      }
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = /* @__PURE__ */ new Map();
        let i = bStart;
        while (i < bEnd) map.set(b[i], i++);
      }
      const index = map.get(a[aStart]);
      if (index != null) {
        if (bStart < index && index < bEnd) {
          let i = aStart, sequence = 1, t;
          while (++i < aEnd && i < bEnd) {
            if ((t = map.get(a[i])) == null || t !== index + sequence) break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index) parentNode.insertBefore(b[bStart++], node);
          } else parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else aStart++;
      } else a[aStart++].remove();
    }
  }
}
var $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init, options = {}) {
  let disposer;
  createRoot((dispose2) => {
    disposer = dispose2;
    element === document ? code() : insert(element, code(), element.firstChild ? null : void 0, init);
  }, options.owner);
  return () => {
    disposer();
    element.textContent = "";
  };
}
function template(html, isImportNode, isSVG, isMathML) {
  let node;
  const create = () => {
    const t = isMathML ? document.createElementNS("http://www.w3.org/1998/Math/MathML", "template") : document.createElement("template");
    t.innerHTML = html;
    return isSVG ? t.content.firstChild.firstChild : isMathML ? t.firstChild : t.content.firstChild;
  };
  const fn = isImportNode ? () => untrack(() => document.importNode(node || (node = create()), true)) : () => (node || (node = create())).cloneNode(true);
  fn.cloneNode = fn;
  return fn;
}
function delegateEvents(eventNames, document2 = window.document) {
  const e = document2[$$EVENTS] || (document2[$$EVENTS] = /* @__PURE__ */ new Set());
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!e.has(name)) {
      e.add(name);
      document2.addEventListener(name, eventHandler);
    }
  }
}
function setAttribute(node, name, value) {
  if (isHydrating(node)) return;
  if (value == null) node.removeAttribute(name);
  else node.setAttribute(name, value);
}
function className(node, value) {
  if (isHydrating(node)) return;
  if (value == null) node.removeAttribute("class");
  else node.className = value;
}
function style(node, value, prev) {
  if (!value) return prev ? setAttribute(node, "style") : value;
  const nodeStyle = node.style;
  if (typeof value === "string") return nodeStyle.cssText = value;
  typeof prev === "string" && (nodeStyle.cssText = prev = void 0);
  prev || (prev = {});
  value || (value = {});
  let v, s;
  for (s in prev) {
    value[s] == null && nodeStyle.removeProperty(s);
    delete prev[s];
  }
  for (s in value) {
    v = value[s];
    if (v !== prev[s]) {
      nodeStyle.setProperty(s, v);
      prev[s] = v;
    }
  }
  return prev;
}
function use(fn, element, arg) {
  return untrack(() => fn(element, arg));
}
function insert(parent, accessor, marker, initial) {
  if (marker !== void 0 && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
  createRenderEffect((current) => insertExpression(parent, accessor(), current, marker), initial);
}
function isHydrating(node) {
  return !!sharedConfig.context && !sharedConfig.done && (!node || node.isConnected);
}
function eventHandler(e) {
  if (sharedConfig.registry && sharedConfig.events) {
    if (sharedConfig.events.find(([el, ev]) => ev === e)) return;
  }
  let node = e.target;
  const key = `$$${e.type}`;
  const oriTarget = e.target;
  const oriCurrentTarget = e.currentTarget;
  const retarget = (value) => Object.defineProperty(e, "target", {
    configurable: true,
    value
  });
  const handleNode = () => {
    const handler = node[key];
    if (handler && !node.disabled) {
      const data = node[`${key}Data`];
      data !== void 0 ? handler.call(node, data, e) : handler.call(node, e);
      if (e.cancelBubble) return;
    }
    node.host && typeof node.host !== "string" && !node.host._$host && node.contains(e.target) && retarget(node.host);
    return true;
  };
  const walkUpTree = () => {
    while (handleNode() && (node = node._$host || node.parentNode || node.host)) ;
  };
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node || document;
    }
  });
  if (sharedConfig.registry && !sharedConfig.done) sharedConfig.done = _$HY.done = true;
  if (e.composedPath) {
    const path = e.composedPath();
    retarget(path[0]);
    for (let i = 0; i < path.length - 2; i++) {
      node = path[i];
      if (!handleNode()) break;
      if (node._$host) {
        node = node._$host;
        walkUpTree();
        break;
      }
      if (node.parentNode === oriCurrentTarget) {
        break;
      }
    }
  } else walkUpTree();
  retarget(oriTarget);
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  const hydrating = isHydrating(parent);
  if (hydrating) {
    !current && (current = [...parent.childNodes]);
    let cleaned = [];
    for (let i = 0; i < current.length; i++) {
      const node = current[i];
      if (node.nodeType === 8 && node.data.slice(0, 2) === "!$") node.remove();
      else cleaned.push(node);
    }
    current = cleaned;
  }
  while (typeof current === "function") current = current();
  if (value === current) return current;
  const t = typeof value, multi = marker !== void 0;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (hydrating) return current;
    if (t === "number") {
      value = value.toString();
      if (value === current) return current;
    }
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data !== value && (node.data = value);
      } else node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    if (hydrating) return current;
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    createRenderEffect(() => {
      let v = value();
      while (typeof v === "function") v = v();
      current = insertExpression(parent, v, current, marker);
    });
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    const currentArray = current && Array.isArray(current);
    if (normalizeIncomingArray(array, value, current, unwrapArray)) {
      createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (hydrating) {
      if (!array.length) return current;
      if (marker === void 0) return current = [...parent.childNodes];
      let node = array[0];
      if (node.parentNode !== parent) return current;
      const nodes = [node];
      while ((node = node.nextSibling) !== marker) nodes.push(node);
      return current = nodes;
    }
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi) return current;
    } else if (currentArray) {
      if (current.length === 0) {
        appendNodes(parent, array, marker);
      } else reconcileArrays(parent, current, array);
    } else {
      current && cleanChildren(parent);
      appendNodes(parent, array);
    }
    current = array;
  } else if (value.nodeType) {
    if (hydrating && value.parentNode) return current = multi ? [value] : value;
    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, parent.firstChild);
    current = value;
  } else ;
  return current;
}
function normalizeIncomingArray(normalized, array, current, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i], prev = current && current[normalized.length], t;
    if (item == null || item === true || item === false) ;
    else if ((t = typeof item) === "object" && item.nodeType) {
      normalized.push(item);
    } else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
    } else if (t === "function") {
      if (unwrap) {
        while (typeof item === "function") item = item();
        dynamic = normalizeIncomingArray(
          normalized,
          Array.isArray(item) ? item : [item],
          Array.isArray(prev) ? prev : [prev]
        ) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else {
      const value = String(item);
      if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);
      else normalized.push(document.createTextNode(value));
    }
  }
  return dynamic;
}
function appendNodes(parent, array, marker = null) {
  for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === void 0) return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i)
          isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
        else isParent && el.remove();
      } else inserted = true;
    }
  } else parent.insertBefore(node, marker);
  return [node];
}
var RequestContext = Symbol();

// src/features/radarite/Radarite.tsx
var import_Radarite = __toESM(require_Radarite());

// src/lib/calculations/calculatePoint.ts
function calculatePoint(index, value, len, minimal) {
  const angleSlice = Math.PI * 2 / len;
  const angle = angleSlice * index - Math.PI / 2;
  const radius = minimal ? 190 : 150;
  const scaledValue = value / 100 * radius;
  const x = 200 + scaledValue * Math.cos(angle);
  const y = 200 + scaledValue * Math.sin(angle);
  return { x, y };
}

// src/lib/managers/RadariteManager.ts
var RadariteManager = class {
  entries;
  metrics;
  save;
  setRadarite;
  constructor(initialEntries, metrics, save, setRadarite) {
    this.entries = new Map(initialEntries.map((e) => [e.id, e]));
    this.metrics = metrics;
    this.save = save;
    this.setRadarite = setRadarite;
    this.computeAll();
  }
  computeAll() {
    let u = false;
    this.metrics.forEach((metric) => {
      if (metric.value === void 0) {
        u = true;
        metric.value = this.computeMetric(metric);
        metric.percentage = this.valueInPercentage(
          metric.value,
          metric.max
        );
      }
    });
    u && this.update();
  }
  valueInPercentage(value, max) {
    if (!value) {
      return value;
    }
    return Math.min(value / max * 100, 100);
  }
  addEntry(entry) {
    this.entries.set(entry.id, entry);
    this.updateMetricsForEntry([entry]);
  }
  removeEntry(ids) {
    if (ids) {
      const targetEntries = [];
      ids.forEach((id) => {
        const entry = this.entries.get(id);
        if (!entry) return;
        this.entries.delete(id);
        targetEntries.push(entry);
      });
      this.updateMetricsForEntry(targetEntries);
    }
  }
  updateEntry(entry) {
    this.entries.set(entry.id, entry);
    this.updateMetricsForEntry([entry]);
  }
  receiveEntry(entry) {
    if (entry) {
      if (this.entries.get(entry.id)) {
        this.updateEntry(entry);
      } else {
        this.addEntry(entry);
      }
    }
  }
  updateMetricsForEntry(entries) {
    entries.forEach((entry) => {
      for (const metric of this.getAffectedMetrics(entry)) {
        const value = this.computeMetric(metric);
        const percentage = this.valueInPercentage(
          value,
          metric.max
        );
        const target = this.metrics.find(
          (i) => i.id === metric.id
        );
        target.value = value;
        target.percentage = percentage;
      }
    });
    this.update();
  }
  getAffectedMetrics(entry) {
    return this.metrics.filter((metric) => {
      const { filter } = metric;
      if (!filter) return true;
      const matchTags = !filter.tags || filter.tags.some(
        (tag) => entry.tags?.includes(tag)
      );
      const matchTools = !filter.tools || filter.tools.includes(entry.source.tool);
      const matchCards = !filter.cards || filter.cards.includes(entry.source.card);
      return matchTags && matchTools && matchCards;
    });
  }
  computeMetric(metric) {
    const relevantEntries = [...this.entries.values()].filter(
      (entry) => {
        const { filter } = metric;
        if (!filter) return true;
        const tagMatch = !filter.tags || filter.tags.some(
          (t) => entry.tags?.includes(t)
        );
        const toolMatch = !filter.tools || filter.tools.includes(
          entry.source.tool
        );
        const cardMatch = !filter.cards || filter.cards.includes(
          entry.source.card
        );
        return tagMatch && toolMatch && cardMatch;
      }
    );
    if (relevantEntries.length === 0) {
      return void 0;
    }
    switch (metric.computeMethod) {
      case "count":
        return relevantEntries.length;
      case "sum":
        return relevantEntries.reduce(
          (acc, entry) => {
            const flattenedEntry = this.flattenObject(
              entry
            );
            const raw = flattenedEntry[metric.metaKey ?? ""];
            if (Array.isArray(raw)) {
              return acc + raw.length;
            } else if (typeof raw === "boolean") {
              return acc + (raw ? 1 : 0);
            } else {
              const val = Number(raw);
              return acc + (isNaN(val) ? 0 : val);
            }
          },
          0
        );
      case "average":
        let total = 0;
        let count = 0;
        relevantEntries.forEach(
          (entry) => {
            const flattenedEntry = this.flattenObject(
              entry
            );
            const raw = flattenedEntry[metric.metaKey ?? ""];
            if (Array.isArray(raw)) {
              total += raw.length;
              count++;
            } else if (typeof raw === "boolean") {
              total += raw ? 1 : 0;
              count++;
            } else {
              const val = Number(raw);
              if (!isNaN(val)) {
                total += val;
                count++;
              }
            }
          }
        );
        return count ? total / count : 0;
      default:
        return 0;
    }
  }
  flattenObject(obj) {
    const result = {};
    function recurse(current, prop) {
      if (Object(current) !== current || Array.isArray(current)) {
        result[prop] = current;
      } else {
        for (const p in current) {
          if (Object.prototype.hasOwnProperty.call(
            current,
            p
          )) {
            recurse(
              current[p],
              prop ? prop + "." + p : p
            );
            result[p] = current[p];
          }
        }
      }
    }
    recurse(obj, "");
    return result;
  }
  removeMetric(id) {
    this.metrics = this.metrics.filter((m) => m.id !== id);
    this.update();
  }
  modifyMetric(metric) {
    const index = this.metrics.findIndex((m) => m.id === metric.id);
    metric.value = this.computeMetric(metric);
    metric.percentage = this.valueInPercentage(
      metric.value,
      metric.max
    );
    if (index !== -1) {
      this.metrics[index] = metric;
    } else {
      this.metrics.push(metric);
    }
    this.update();
  }
  update() {
    this.setRadarite((prev) => {
      const nObj = {
        ...prev,
        metrics: [...this.metrics]
      };
      this.save(nObj);
      return nObj;
    });
  }
};

// src/hollow/forms.ts
function forms({ id, app, metrics, addMetric }) {
  const target = id && metrics().find((i) => i.id === id);
  const form = {
    id: id ?? crypto.randomUUID(),
    title: id ? "Update Metric" : "Add Metric",
    submit: addMetric,
    update: !!id,
    options: [
      {
        type: "text",
        placeholder: "e.g., Tasks Completed",
        label: "Label",
        key: "label",
        value: target && target.label
      },
      {
        type: "longtext",
        placeholder: "e.g., Number of completed tasks",
        label: "Description",
        key: "description",
        value: target && target.description
      },
      {
        type: "dropdown",
        options: ["count", "sum", "average"],
        label: "Compute Method",
        description: "Compute method is how each metric decides its value, by counting entries, adding up numbers, averaging them.",
        key: "computeMethod",
        value: target && target.computeMethod
      },
      {
        type: "text",
        label: "Meta Key",
        placeholder: "e.g., duration, points",
        description: "metaKey is used only when the compute method is set to sum or average, and it tells which field inside entry.meta holds the number to calculate with.",
        key: "metaKey",
        dependsOn: {
          key: "computeMethod",
          conditions: ["sum", "average"]
        },
        value: target && target.metaKey
      },
      {
        type: "number",
        label: "Max Value",
        min: 0,
        max: 99999,
        description: "defines the maximum possible value on this metric.",
        key: "max",
        value: target && target.max
      },
      {
        type: "keywords",
        placeholder: "e.g., notebook",
        description: "Filter entries to include certain tools.",
        label: "Tools",
        key: "tool",
        optional: true,
        value: target && target.filter?.tools
      },
      {
        type: "keywords",
        placeholder: "e.g., cardOne",
        description: "Filter entries to include certain cards.",
        label: "Cards",
        key: "card",
        optional: true,
        value: target && target.filter?.cards
      },
      {
        type: "keywords",
        placeholder: "e.g., nature",
        description: "Filter entries to include certain tags.",
        label: "Tags",
        key: "tag",
        optional: true,
        value: target && target.filter?.tags
      }
    ]
  };
  app.emit("Form", form);
}

// src/components/radar/MetricsEditor.tsx
var _tmpl$ = /* @__PURE__ */ template(`<div class="bg-secondary-10 w-full gap-5 rounded-lg p-4">`);
var _tmpl$2 = /* @__PURE__ */ template(`<div class="flex w-full flex-col gap-5"><div class="flex w-full justify-between"><h1 class="text-lg font-bold">Metrics Manager</h1><button class=button-secondary>Add Metric</button></div><div>`);
var _tmpl$3 = /* @__PURE__ */ template(`<div class="bg-secondary-10 w-full rounded-lg py-4"><p class="text-secondary-40 m-auto w-fit">No metrics defined. Click "Add Metric" to create your first metric.`);
var _tmpl$4 = /* @__PURE__ */ template(`<span class="text-secondary-90 px-1 text-xs font-semibold">`);
var _tmpl$5 = /* @__PURE__ */ template(`<span class="text-secondary-90 px-1 text-xs font-semibold">Tool: `);
var _tmpl$6 = /* @__PURE__ */ template(`<span class="text-secondary-90 px-1 text-xs font-semibold">Tag:  `);
var _tmpl$7 = /* @__PURE__ */ template(`<div class="bg-secondary-05 border-1 border-secondary-20 rounded p-5"><div class="flex justify-between"><h3 class="text-xl font-bold"></h3><div class="flex gap-1"><button class=button-control><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="lucide lucide-square-pen m-auto h-4 w-4"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path></svg></button><button class=button-control><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="lucide lucide-trash2 m-auto h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1=10 x2=10 y1=11 y2=17></line><line x1=14 x2=14 y1=11 y2=17></line></svg></button></div></div><div class="mt-3 flex flex-wrap gap-1"><span class="text-secondary px-1 text-xs font-semibold"></span><span class="text-secondary-90 px-1 text-xs font-semibold">Max: </span></div><p class="text-secondary-40 mt-2 text-xs">`);
function MetricsEditor(app, metrix, save, manager) {
  const [metrics, setMetrics] = createSignal(metrix);
  const addMetric = (metric) => {
    const {
      tag,
      tool,
      card,
      ...miniMetric
    } = metric;
    const mtrc = {
      ...miniMetric,
      filter: {
        tags: tag,
        tools: tool,
        cards: card
      }
    };
    manager.modifyMetric(mtrc);
    setMetrics([...manager.metrics]);
    save(metrics());
  };
  const removeMetric = (id) => {
    setMetrics((prev) => [...prev.filter((i) => i.id !== id)]);
    manager.removeMetric(id);
  };
  const showForm = (id) => {
    forms({
      id,
      app,
      metrics,
      addMetric
    });
  };
  return (() => {
    var _el$ = _tmpl$2(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$2.nextSibling;
    _el$4.$$click = () => showForm();
    insert(_el$5, createComponent(Show, {
      get when() {
        return metrics().length !== 0;
      },
      get fallback() {
        return _tmpl$3();
      },
      get children() {
        var _el$6 = _tmpl$();
        _el$6.style.setProperty("display", "grid");
        _el$6.style.setProperty("grid-template-columns", "1fr 1fr 1fr");
        insert(_el$6, createComponent(For, {
          get each() {
            return metrics();
          },
          children: (metric) => (() => {
            var _el$8 = _tmpl$7(), _el$9 = _el$8.firstChild, _el$0 = _el$9.firstChild, _el$1 = _el$0.nextSibling, _el$10 = _el$1.firstChild, _el$11 = _el$10.nextSibling, _el$12 = _el$9.nextSibling, _el$13 = _el$12.firstChild, _el$15 = _el$13.nextSibling, _el$16 = _el$15.firstChild, _el$22 = _el$12.nextSibling;
            insert(_el$0, () => metric.label);
            _el$10.$$click = () => showForm(metric.id);
            _el$11.$$click = () => removeMetric(metric.id);
            _el$13.style.setProperty("background", "var(--primary-color)");
            insert(_el$13, () => metric.computeMethod);
            insert(_el$12, createComponent(Show, {
              get when() {
                return metric.metaKey;
              },
              get children() {
                var _el$14 = _tmpl$4();
                _el$14.style.setProperty("background", "var(--secondary-color-20)");
                insert(_el$14, () => metric.metaKey);
                return _el$14;
              }
            }), _el$15);
            _el$15.style.setProperty("background", "var(--secondary-color-20)");
            insert(_el$15, () => metric.max, null);
            insert(_el$12, createComponent(Show, {
              get when() {
                return metric.filter?.tools;
              },
              get children() {
                var _el$17 = _tmpl$5(), _el$18 = _el$17.firstChild;
                _el$17.style.setProperty("background", "var(--secondary-color-20)");
                insert(_el$17, () => metric.filter?.tools, null);
                return _el$17;
              }
            }), null);
            insert(_el$12, createComponent(Show, {
              get when() {
                return metric.filter?.tags;
              },
              get children() {
                var _el$19 = _tmpl$6(), _el$20 = _el$19.firstChild;
                _el$19.style.setProperty("background", "var(--secondary-color-20)");
                insert(_el$19, () => metric.filter?.tags, null);
                return _el$19;
              }
            }), null);
            insert(_el$22, () => metric.description);
            return _el$8;
          })()
        }));
        return _el$6;
      }
    }));
    return _el$;
  })();
}
delegateEvents(["click"]);

// src/hollow/settings.ts
function settings({
  cardName,
  db,
  app,
  radarite,
  setRadarite,
  manager
}) {
  const settings2 = {
    tool: "Radarite",
    card: cardName,
    save: () => {
      db.putData(cardName, radarite());
    },
    options: [
      {
        type: "color",
        label: "Accent Color",
        description: "Change The Radar's Accent Color",
        value: radarite().appearance?.color,
        onChange: (c) => setRadarite((prev) => ({
          ...prev,
          appearance: {
            ...prev.appearance,
            color: c
          }
        }))
      },
      {
        type: "dropdown",
        label: "Shape",
        description: "This defines how the main metric shape",
        value: radarite().appearance?.shapeStyle,
        options: ["polygon", "circle"],
        onChange: (v) => setRadarite((prev) => ({
          ...prev,
          appearance: {
            ...prev.appearance,
            shapeStyle: v
          }
        }))
      },
      {
        type: "boolean",
        label: "Minimal",
        description: "Display with minimal text.",
        value: radarite().appearance?.minimal,
        onChange: (v) => {
          setRadarite((prev) => ({
            ...prev,
            appearance: {
              ...prev.appearance,
              minimal: v
            }
          }));
        }
      },
      {
        type: "boolean",
        label: "Animation",
        description: "Display with animation.",
        value: radarite().appearance?.animate,
        onChange: (v) => {
          setRadarite((prev) => ({
            ...prev,
            appearance: {
              ...prev.appearance,
              animate: v
            }
          }));
        }
      },
      {
        type: "custom",
        render: () => MetricsEditor(
          app,
          radarite().metrics,
          (metx) => {
            setRadarite((prev) => ({
              ...prev,
              metrics: metx
            }));
          },
          manager()
        )
      }
    ]
  };
  app.emit("tool-settings", settings2);
}

// src/components/radar/Panel.tsx
var import_Panel = __toESM(require_Panel());
var _tmpl$8 = /* @__PURE__ */ template(`<span class="rounded px-2 py-1 text-xs font-medium">`);
var _tmpl$22 = /* @__PURE__ */ template(`<hr>`);
var _tmpl$32 = /* @__PURE__ */ template(`<div class="flex flex-col gap-2">`);
var _tmpl$42 = /* @__PURE__ */ template(`<div role=dialog aria-labelledby=panel-title><div class="flex flex-col gap-2 p-2"><div class="flex w-full items-center justify-between"><h1 id=panel-title></h1><button class="button-control hover:bg-secondary-20 rounded-full p-1 transition-colors"><svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="m6 9 6 6 6-6"></path></svg></button></div><h3></h3><div class="flex items-center justify-between text-sm"><span class=font-medium>%</span><span class=text-secondary-70> / </span></div><div></div><div class="overflow-hidden transition-all duration-300 ease-in-out"><div class="flex flex-col gap-3 pt-2"><div><div class="flex items-center gap-2"><svg width=24 height=24 viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path d="M7 12.75V11.25H9.38563L10.7931 6.00266C10.797 5.98811 10.8013 5.97377 10.806 5.95965L10.8102 5.94389L10.8146 5.92986C11.1634 4.81245 12.2058 4 13.44 4C14.9588 4 16.19 5.23122 16.19 6.75C16.19 6.91899 16.1747 7.08506 16.1451 7.24669L16.1396 7.2767L15.8408 8.39079L14.392 8.0022L14.6741 6.9505C14.6845 6.88564 14.69 6.81871 14.69 6.75C14.69 6.05964 14.1304 5.5 13.44 5.5C12.8852 5.5 12.413 5.86199 12.2504 6.36445L10.9394 11.25H12V12.75H10.5368L9.48551 16.6678L9.48495 16.6699L9.41212 16.9414C9.4089 16.9535 9.4054 16.9653 9.40164 16.977L9.38363 17.0435L9.38013 17.0549C9.03607 18.1802 7.98975 19 6.75 19C5.23122 19 4 17.7688 4 16.25C4 15.8992 4.08642 15.5956 4.14978 15.373L4.16503 15.3192L4.30629 14.7925L4.38192 14.5349L5.8212 14.9573L5.75052 15.1981L5.6104 15.7206C5.53143 16.0018 5.5 16.1153 5.5 16.25C5.5 16.9404 6.05964 17.5 6.75 17.5C7.30821 17.5 7.78276 17.1335 7.94256 16.6264L8.03671 16.2792L8.03726 16.2772L8.98331 12.75H7Z"></path></svg><h2 class="text-sm font-medium">Compute Method</h2></div><div class="flex items-center gap-2"><span></span></div></div><hr><span class="text-xs text-secondary-50">ID: `);
var _tmpl$52 = /* @__PURE__ */ template(`<div class="flex items-center gap-2"><h3 class="truncate text-sm text-secondary-70">`);
var _tmpl$62 = /* @__PURE__ */ template(`<svg width=16 height=16 viewBox="0 0 24 24"fill=none stroke=var(--secondary-color-70) stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z">`);
var _tmpl$72 = /* @__PURE__ */ template(`<svg width=16 height=16 viewBox="0 0 24 24"fill=none stroke=var(--secondary-color-70) stroke-width=2 stroke-linecap=round stroke-linejoin=round><rect width=18 height=18 x=3 y=3 rx=2 ry=2></rect><path d="M3 9h18">`);
var _tmpl$82 = /* @__PURE__ */ template(`<svg width=16 height=16 viewBox="0 0 24 24"fill=none stroke=var(--secondary-color-70) stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01">`);
function Panel({
  metric,
  accent,
  left,
  top,
  offset,
  hide
}) {
  let panelRef;
  const [expand, setExpand] = createSignal(false);
  const filterEntries = createMemo(() => Object.entries(metric.filter).filter((f) => f[1].length > 0));
  const progressStyle = createMemo(() => ({
    background: `linear-gradient(to right, ${accent} ${metric.percentage}%, var(--secondary-color-20) ${Math.min((metric.percentage ?? 0) + 10, 100)}%)`,
    transition: "background 0.3s ease-in-out"
  }));
  const handleClickOutside = (e) => {
    if (panelRef && !panelRef.contains(e.target)) {
      hide();
    }
  };
  onMount(() => {
    document.addEventListener("pointerdown", handleClickOutside);
  });
  onCleanup(() => {
    document.removeEventListener("pointerdown", handleClickOutside);
  });
  return (() => {
    var _el$ = _tmpl$42(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$3.nextSibling, _el$8 = _el$7.nextSibling, _el$9 = _el$8.firstChild, _el$0 = _el$9.firstChild, _el$1 = _el$9.nextSibling, _el$10 = _el$1.firstChild, _el$11 = _el$8.nextSibling, _el$12 = _el$11.nextSibling, _el$13 = _el$12.firstChild, _el$14 = _el$13.firstChild, _el$15 = _el$14.firstChild, _el$16 = _el$15.firstChild, _el$17 = _el$16.nextSibling, _el$18 = _el$15.nextSibling, _el$19 = _el$18.firstChild, _el$23 = _el$14.nextSibling, _el$24 = _el$23.nextSibling, _el$25 = _el$24.firstChild;
    var _ref$ = panelRef;
    typeof _ref$ === "function" ? use(_ref$, _el$) : panelRef = _el$;
    left != null ? _el$.style.setProperty("left", left) : _el$.style.removeProperty("left");
    top != null ? _el$.style.setProperty("top", top) : _el$.style.removeProperty("top");
    offset != null ? _el$.style.setProperty("transform", offset) : _el$.style.removeProperty("transform");
    insert(_el$4, () => metric.label);
    _el$5.$$click = () => setExpand(!expand());
    insert(_el$7, () => metric.description);
    accent != null ? _el$9.style.setProperty("color", accent) : _el$9.style.removeProperty("color");
    insert(_el$9, () => metric.percentage ?? 0, _el$0);
    insert(_el$1, () => metric.value, _el$10);
    insert(_el$1, () => metric.max, null);
    setAttribute(_el$16, "fill", accent);
    accent != null ? _el$17.style.setProperty("color", accent) : _el$17.style.removeProperty("color");
    insert(_el$19, () => metric.computeMethod);
    insert(_el$18, createComponent(Show, {
      get when() {
        return metric.computeMethod !== "count";
      },
      get children() {
        var _el$20 = _tmpl$8();
        `${accent}20` != null ? _el$20.style.setProperty("background", `${accent}20`) : _el$20.style.removeProperty("background");
        accent != null ? _el$20.style.setProperty("color", accent) : _el$20.style.removeProperty("color");
        insert(_el$20, () => metric.metaKey?.toUpperCase());
        return _el$20;
      }
    }), null);
    insert(_el$13, createComponent(Show, {
      get when() {
        return filterEntries().some((f) => f[1].length > 0);
      },
      get children() {
        return [(() => {
          var _el$21 = _tmpl$22();
          createRenderEffect(() => className(_el$21, import_Panel.default.divider));
          return _el$21;
        })(), (() => {
          var _el$22 = _tmpl$32();
          insert(_el$22, createComponent(For, {
            get each() {
              return filterEntries();
            },
            children: (list) => (() => {
              var _el$26 = _tmpl$52(), _el$27 = _el$26.firstChild;
              insert(_el$26, () => {
                switch (list[0]) {
                  case "tools":
                    return toolSvg;
                  case "cards":
                    return cardSvg;
                  case "tags":
                    return tagSvg;
                }
              }, _el$27);
              insert(_el$27, () => list[1].join(", "));
              createRenderEffect(() => setAttribute(_el$27, "title", list[1].join(", ")));
              return _el$26;
            })()
          }));
          return _el$22;
        })()];
      }
    }), _el$23);
    insert(_el$24, () => metric.id, null);
    createRenderEffect((_p$) => {
      var _v$ = `${import_Panel.default.panel} panel-transition`, _v$2 = `${import_Panel.default.title} text-lg font-bold`, _v$3 = expand(), _v$4 = expand() ? "Collapse details" : "Expand details", _v$5 = `${import_Panel.default.downIcon} transition-transform duration-300`, _v$6 = expand() ? "rotate(180deg)" : "rotate(0deg)", _v$7 = `${import_Panel.default.des} text-sm text-secondary-70`, _v$8 = import_Panel.default.progressBar, _v$9 = progressStyle(), _v$0 = expand() ? "500px" : "0", _v$1 = expand() ? "1" : "0", _v$10 = import_Panel.default.propertyContainer, _v$11 = import_Panel.default.propertyValue, _v$12 = import_Panel.default.divider;
      _v$ !== _p$.e && className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$4, _p$.t = _v$2);
      _v$3 !== _p$.a && setAttribute(_el$5, "aria-expanded", _p$.a = _v$3);
      _v$4 !== _p$.o && setAttribute(_el$5, "aria-label", _p$.o = _v$4);
      _v$5 !== _p$.i && setAttribute(_el$6, "class", _p$.i = _v$5);
      _v$6 !== _p$.n && ((_p$.n = _v$6) != null ? _el$6.style.setProperty("transform", _v$6) : _el$6.style.removeProperty("transform"));
      _v$7 !== _p$.s && className(_el$7, _p$.s = _v$7);
      _v$8 !== _p$.h && className(_el$11, _p$.h = _v$8);
      _p$.r = style(_el$11, _v$9, _p$.r);
      _v$0 !== _p$.d && ((_p$.d = _v$0) != null ? _el$12.style.setProperty("max-height", _v$0) : _el$12.style.removeProperty("max-height"));
      _v$1 !== _p$.l && ((_p$.l = _v$1) != null ? _el$12.style.setProperty("opacity", _v$1) : _el$12.style.removeProperty("opacity"));
      _v$10 !== _p$.u && className(_el$14, _p$.u = _v$10);
      _v$11 !== _p$.c && className(_el$19, _p$.c = _v$11);
      _v$12 !== _p$.w && className(_el$23, _p$.w = _v$12);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0,
      s: void 0,
      h: void 0,
      r: void 0,
      d: void 0,
      l: void 0,
      u: void 0,
      c: void 0,
      w: void 0
    });
    return _el$;
  })();
}
var toolSvg = _tmpl$62();
var cardSvg = _tmpl$72();
var tagSvg = _tmpl$82();
delegateEvents(["click"]);

// src/components/radar/Shape.tsx
var import_Shape = __toESM(require_Shape());
var _tmpl$9 = /* @__PURE__ */ template(`<svg><g><defs><clipPath id=radarClip clipPathUnits=userSpaceOnUse><polygon></polygon></clipPath><linearGradient id=fadeGradient x1=0% y1=0% x2=0% y2=100%><stop offset=0% stop-opacity=0.3></stop><stop offset=50% stop-opacity=0></stop></linearGradient><mask id=halfMask><rect x=0 y=0 width=200 height=400 fill=white></rect></mask></defs><g></svg>`, false, true, false);
var _tmpl$23 = /* @__PURE__ */ template(`<svg width=100% height=100% viewBox="0 0 400 400"><polygon stroke-width=2>`);
var _tmpl$33 = /* @__PURE__ */ template(`<svg><polygon fill-opacity=0.5></svg>`, false, true, false);
var _tmpl$43 = /* @__PURE__ */ template(`<svg><circle cx=200 cy=200 fill-opacity=0.5></svg>`, false, true, false);
var _tmpl$53 = /* @__PURE__ */ template(`<svg><line stroke-width=2></svg>`, false, true, false);
var _tmpl$63 = /* @__PURE__ */ template(`<svg><line x1=200 y1=200></svg>`, false, true, false);
var _tmpl$73 = /* @__PURE__ */ template(`<svg><circle cx=200 cy=200 fill=url(#fadeGradient) mask=url(#halfMask)></svg>`, false, true, false);
var _tmpl$83 = /* @__PURE__ */ template(`<svg><defs><filter id=line-shadow width=700% height=700% filterUnits=userSpaceOnUse><feFlood flood-opacity=1 result=floodFill></feFlood><feComposite in=floodFill in2=SourceAlpha operator=in result=coloredAlpha></feComposite><feGaussianBlur in=coloredAlpha stdDeviation=10 result=blur></feGaussianBlur><feComponentTransfer in=blur result=boostedGlow><feFuncA type=linear slope=3 intercept=0></feFuncA></feComponentTransfer><feMerge><feMergeNode in=boostedGlow></feMergeNode><feMergeNode in=SourceGraphic></svg>`, false, true, false);
function Shape({
  radarite
}) {
  const fullPoints = createMemo(() => {
    return radarite().metrics.map((stat, i) => {
      const point = calculatePoint(i, stat.percentage ?? 0, radarite().metrics.length, radarite().appearance.minimal);
      return {
        x: point.x,
        y: point.y,
        metric: stat
      };
    });
  });
  const polygonPoints = createMemo(() => {
    return fullPoints().map((point) => `${point.x},${point.y}`).join(" ");
  });
  const gridLines = createMemo(() => {
    const levels = radarite().metrics.length;
    const result = [];
    const shape = radarite().appearance?.shapeStyle ?? "polygon";
    for (let level = 1; level <= levels; level++) {
      const value = level / levels * 100;
      if (shape === "circle") {
        result.push({
          type: "circle",
          radius: value / 100 * (radarite().appearance?.minimal ? 190 : 150)
        });
      } else {
        const points = radarite().metrics.map((_, i) => {
          const point = calculatePoint(i, value, radarite().metrics.length, radarite().appearance.minimal);
          return `${point.x},${point.y}`;
        }).join(" ");
        result.push({
          type: "polygon",
          points
        });
      }
    }
    return result;
  });
  const axisLines = createMemo(() => {
    return radarite().metrics.map((_, i) => {
      const point = calculatePoint(i, 100, radarite().metrics.length, radarite().appearance.minimal);
      return {
        x1: 200,
        y1: 200,
        x2: point.x,
        y2: point.y
      };
    });
  });
  const clipPathPoints = createMemo(() => {
    return radarite().metrics.map((_, i) => {
      const point = calculatePoint(i, 100, radarite().metrics.length, radarite().appearance.minimal);
      return `${point.x},${point.y}`;
    }).join(" ");
  });
  return (() => {
    var _el$ = _tmpl$23(), _el$2 = _el$.firstChild;
    insert(_el$, createComponent(For, {
      get each() {
        return gridLines();
      },
      children: (shape, index) => {
        if (shape.type === "polygon") {
          return (() => {
            var _el$1 = _tmpl$33();
            _el$1.style.setProperty("stroke", "var(--secondary-color-40)");
            _el$1.style.setProperty("fill", "var(--secondary-color-15)");
            createRenderEffect((_p$) => {
              var _v$8 = shape.points, _v$9 = index() + 1 === radarite().metrics.length ? "2" : "1";
              _v$8 !== _p$.e && setAttribute(_el$1, "points", _p$.e = _v$8);
              _v$9 !== _p$.t && setAttribute(_el$1, "stroke-width", _p$.t = _v$9);
              return _p$;
            }, {
              e: void 0,
              t: void 0
            });
            return _el$1;
          })();
        } else if (shape.type === "circle") {
          return (() => {
            var _el$10 = _tmpl$43();
            _el$10.style.setProperty("stroke", "var(--secondary-color-40)");
            _el$10.style.setProperty("fill", "var(--secondary-color-15)");
            createRenderEffect((_p$) => {
              var _v$0 = shape.radius, _v$1 = index() + 1 === radarite().metrics.length ? "2" : "1";
              _v$0 !== _p$.e && setAttribute(_el$10, "r", _p$.e = _v$0);
              _v$1 !== _p$.t && setAttribute(_el$10, "stroke-width", _p$.t = _v$1);
              return _p$;
            }, {
              e: void 0,
              t: void 0
            });
            return _el$10;
          })();
        }
      }
    }), _el$2);
    insert(_el$, createComponent(For, {
      get each() {
        return axisLines();
      },
      children: (line) => (() => {
        var _el$11 = _tmpl$53();
        _el$11.style.setProperty("stroke", "var(--secondary-color-40)");
        createRenderEffect((_p$) => {
          var _v$10 = line.x1, _v$11 = line.y1, _v$12 = line.x2, _v$13 = line.y2;
          _v$10 !== _p$.e && setAttribute(_el$11, "x1", _p$.e = _v$10);
          _v$11 !== _p$.t && setAttribute(_el$11, "y1", _p$.t = _v$11);
          _v$12 !== _p$.a && setAttribute(_el$11, "x2", _p$.a = _v$12);
          _v$13 !== _p$.o && setAttribute(_el$11, "y2", _p$.o = _v$13);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0
        });
        return _el$11;
      })()
    }), _el$2);
    insert(_el$, createComponent(Show, {
      get when() {
        return radarite().appearance?.animate;
      },
      get children() {
        var _el$3 = _tmpl$9(), _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$5.nextSibling, _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$0 = _el$4.nextSibling;
        _el$6.style.setProperty("fill", "white");
        insert(_el$3, createComponent(LineShadow, {
          radarite
        }), _el$0);
        insert(_el$0, () => {
          const point = calculatePoint(0, 100, radarite().metrics.length, radarite().appearance.minimal);
          return [(() => {
            var _el$12 = _tmpl$63();
            _el$12.style.setProperty("stroke-width", "2");
            createRenderEffect((_p$) => {
              var _v$14 = import_Shape.default["radar-line"], _v$15 = point.x, _v$16 = point.y, _v$17 = radarite().appearance?.color, _v$18 = `drop-shadow(-4px 0px 15px ${radarite().appearance?.color})`;
              _v$14 !== _p$.e && setAttribute(_el$12, "class", _p$.e = _v$14);
              _v$15 !== _p$.t && setAttribute(_el$12, "x2", _p$.t = _v$15);
              _v$16 !== _p$.a && setAttribute(_el$12, "y2", _p$.a = _v$16);
              _v$17 !== _p$.o && ((_p$.o = _v$17) != null ? _el$12.style.setProperty("stroke", _v$17) : _el$12.style.removeProperty("stroke"));
              _v$18 !== _p$.i && ((_p$.i = _v$18) != null ? _el$12.style.setProperty("filter", _v$18) : _el$12.style.removeProperty("filter"));
              return _p$;
            }, {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0,
              i: void 0
            });
            return _el$12;
          })(), (() => {
            var _el$13 = _tmpl$73();
            createRenderEffect((_p$) => {
              var _v$19 = import_Shape.default["radar-line"], _v$20 = radarite().appearance.minimal ? 190 : 150;
              _v$19 !== _p$.e && setAttribute(_el$13, "class", _p$.e = _v$19);
              _v$20 !== _p$.t && setAttribute(_el$13, "r", _p$.t = _v$20);
              return _p$;
            }, {
              e: void 0,
              t: void 0
            });
            return _el$13;
          })()];
        });
        createRenderEffect((_p$) => {
          var _v$ = clipPathPoints(), _v$2 = radarite().appearance.color, _v$3 = radarite().appearance.color, _v$4 = radarite().appearance.shapeStyle !== "circle" ? "url(#radarClip)" : void 0;
          _v$ !== _p$.e && setAttribute(_el$6, "points", _p$.e = _v$);
          _v$2 !== _p$.t && setAttribute(_el$8, "stop-color", _p$.t = _v$2);
          _v$3 !== _p$.a && setAttribute(_el$9, "stop-color", _p$.a = _v$3);
          _v$4 !== _p$.o && setAttribute(_el$0, "clip-path", _p$.o = _v$4);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0
        });
        return _el$3;
      }
    }), null);
    createRenderEffect((_p$) => {
      var _v$5 = polygonPoints(), _v$6 = `${radarite().appearance?.color}73`, _v$7 = radarite().appearance?.color;
      _v$5 !== _p$.e && setAttribute(_el$2, "points", _p$.e = _v$5);
      _v$6 !== _p$.t && setAttribute(_el$2, "fill", _p$.t = _v$6);
      _v$7 !== _p$.a && setAttribute(_el$2, "stroke", _p$.a = _v$7);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    return _el$;
  })();
}
var LineShadow = ({
  radarite
}) => (() => {
  var _el$14 = _tmpl$83(), _el$15 = _el$14.firstChild, _el$16 = _el$15.firstChild;
  createRenderEffect(() => setAttribute(_el$16, "flood-color", radarite().appearance.color));
  return _el$14;
})();

// src/features/radarite/Radarite.tsx
var _tmpl$10 = /* @__PURE__ */ template(`<div><div>`);
var _tmpl$24 = /* @__PURE__ */ template(`<div><span class="relative flex gap-3"><span></span><span class="relative inline-flex rounded-full">`);
var _tmpl$34 = /* @__PURE__ */ template(`<h1 class="absolute whitespace-nowrap text-sm font-bold">`);
function Radarite({
  card,
  app,
  db,
  data
}) {
  const [radarite, setRadarite] = createSignal(data);
  const [selected, setSelected] = createSignal(null);
  const manager = createMemo(() => new RadariteManager(app.getCurrentData("entries") ?? [], data.metrics, (nObj) => {
    db.putData(card.name, nObj);
  }, setRadarite));
  const fullPoints = createMemo(() => {
    return radarite().metrics.map((stat, i) => {
      const point = calculatePoint(i, stat.percentage ?? 0, radarite().metrics.length, radarite().appearance.minimal);
      return {
        x: point.x,
        y: point.y,
        metric: stat
      };
    });
  });
  const labelPositions = createMemo(() => {
    return radarite().metrics.map((metric, i) => {
      const point = calculatePoint(i, 105, radarite().metrics.length, radarite().appearance.minimal);
      return {
        metric,
        x: point.x,
        y: point.y
      };
    });
  });
  const showSettings = createMemo(() => () => {
    settings({
      cardName: card.name,
      db,
      app,
      radarite,
      setRadarite,
      manager
    });
  });
  const onReceiveEntry = createMemo(() => (e) => {
    manager().receiveEntry(e);
  });
  const onRemoveEntry = createMemo(() => (id) => {
    manager().removeEntry(typeof id === "string" ? [id] : id);
  });
  const createDotEnterHandler = createMemo(() => (point) => {
    return (l, t, offSet) => {
      radarite().appearance.minimal && setSelected({
        left: l,
        top: t,
        offSet,
        metric: point.metric
      });
    };
  });
  onMount(() => {
    app.on(`radarite-${card.name}-settings`, showSettings());
    app.on("receive-entry", onReceiveEntry());
    app.on("remove-entry", onRemoveEntry());
  });
  onCleanup(() => {
    app.off(`radarite-${card.name}-settings`, showSettings());
    app.off("receive-entry", onReceiveEntry());
    app.off("remove-entry", onRemoveEntry());
  });
  return (() => {
    var _el$ = _tmpl$10(), _el$2 = _el$.firstChild;
    insert(_el$2, createComponent(Shape, {
      radarite
    }), null);
    insert(_el$2, createComponent(For, {
      get each() {
        return fullPoints();
      },
      children: (point) => {
        const onEnter = createDotEnterHandler()(point);
        const percentX = point.x / 400 * 100;
        const percentY = point.y / 400 * 100;
        return (() => {
          var _el$3 = _tmpl$24(), _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling;
          _el$3.addEventListener("mouseenter", () => {
            onEnter(`${percentX}%`, `${percentY}%`, "translate(8px, 8px)");
          });
          `${percentX}%` != null ? _el$3.style.setProperty("left", `${percentX}%`) : _el$3.style.removeProperty("left");
          `${percentY}%` != null ? _el$3.style.setProperty("top", `${percentY}%`) : _el$3.style.removeProperty("top");
          _el$3.style.setProperty("transform", "translate(-5px, -5px)");
          _el$5.style.setProperty("width", "10px");
          _el$5.style.setProperty("height", "10px");
          _el$6.style.setProperty("width", "10px");
          _el$6.style.setProperty("height", "10px");
          createRenderEffect((_p$) => {
            var _v$3 = import_Radarite.default.dotContainer, _v$4 = `${import_Radarite.default["dot-ping"]} absolute inline-flex rounded-full opacity-75`, _v$5 = radarite().appearance.color, _v$6 = radarite().appearance.color;
            _v$3 !== _p$.e && className(_el$3, _p$.e = _v$3);
            _v$4 !== _p$.t && className(_el$5, _p$.t = _v$4);
            _v$5 !== _p$.a && ((_p$.a = _v$5) != null ? _el$5.style.setProperty("background-color", _v$5) : _el$5.style.removeProperty("background-color"));
            _v$6 !== _p$.o && ((_p$.o = _v$6) != null ? _el$6.style.setProperty("background-color", _v$6) : _el$6.style.removeProperty("background-color"));
            return _p$;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0
          });
          return _el$3;
        })();
      }
    }), null);
    insert(_el$2, createComponent(Show, {
      get when() {
        return !radarite().appearance?.minimal;
      },
      get children() {
        return createComponent(For, {
          get each() {
            return labelPositions();
          },
          children: (pack) => {
            const percentX = pack.x / 400 * 100;
            const percentY = pack.y / 400 * 100;
            const translateX = percentX < 50 ? "100%" : percentX > 50 ? "0%" : "50%";
            const translateY = percentY < 50 ? "100%" : percentY > 50 ? "0%" : "50%";
            const onClick = () => {
              setSelected({
                metric: pack.metric,
                left: `${percentX}%`,
                top: `${percentY}%`,
                offSet: `translate(-${translateX}, -${translateY})`
              });
            };
            return (() => {
              var _el$7 = _tmpl$34();
              _el$7.$$click = onClick;
              `${percentX}%` != null ? _el$7.style.setProperty("left", `${percentX}%`) : _el$7.style.removeProperty("left");
              `${percentY}%` != null ? _el$7.style.setProperty("top", `${percentY}%`) : _el$7.style.removeProperty("top");
              `translate(-${translateX}, -${translateY})` != null ? _el$7.style.setProperty("transform", `translate(-${translateX}, -${translateY})`) : _el$7.style.removeProperty("transform");
              _el$7.style.setProperty("color", "var(--secondary-color-70)");
              insert(_el$7, () => pack.metric.label);
              return _el$7;
            })();
          }
        });
      }
    }), null);
    insert(_el$2, createComponent(Show, {
      get when() {
        return selected();
      },
      children: (sel) => createComponent(Panel, {
        get accent() {
          return radarite().appearance?.color;
        },
        get metric() {
          return sel().metric;
        },
        get left() {
          return sel().left;
        },
        get top() {
          return sel().top;
        },
        get offset() {
          return sel().offSet;
        },
        hide: () => setSelected(null)
      })
    }), null);
    createRenderEffect((_p$) => {
      var _v$ = `${import_Radarite.default.container} relative flex h-full w-full flex-col items-center justify-center`, _v$2 = import_Radarite.default.shape;
      _v$ !== _p$.e && className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$2, _p$.t = _v$2);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    return _el$;
  })();
}
delegateEvents(["click"]);

// src/index.ts
var RadariteMain = class {
  db;
  roots = /* @__PURE__ */ new Map();
  constructor(db) {
    this.db = db;
  }
  async onCreate(name) {
    const iniRadariteData = {
      metrics: [
        {
          id: "notes-count",
          label: "Notes",
          description: "Counts the number of notes from the notebook tool.",
          filter: { tools: ["notebook"] },
          computeMethod: "count",
          max: 5
        },
        {
          id: "tags-count",
          label: "Tags Used",
          description: "Counts the number of tags used",
          filter: {},
          computeMethod: "sum",
          metaKey: "tags",
          max: 10
        },
        {
          id: "tasks-completed",
          label: "Tasks Done",
          description: "Counts the number of tasks done.",
          filter: {
            tools: ["kanban"],
            cards: ["done"]
          },
          computeMethod: "count",
          max: 10
        }
      ],
      appearance: {
        showGrid: true,
        shapeStyle: "polygon",
        color: "#4A90E2",
        animate: true,
        minimal: false
      }
    };
    this.db.putData(name, iniRadariteData);
    return true;
  }
  async onDelete(name) {
    this.db.deleteData(name);
    return true;
  }
  async onLoad(card, app) {
    const targetContainer = document.getElementById(
      card.containerID
    );
    const data = await this.db.getData(
      card.name
    );
    if (targetContainer && !this.roots.has(card.name) && data) {
      const dispose2 = createRoot((dispose3) => {
        render(
          () => Radarite({
            card,
            app,
            db: this.db,
            data
          }),
          targetContainer
        );
        return dispose3;
      });
      this.roots.set(card.name, dispose2);
    }
    return true;
  }
  onUnload(name) {
    const dispose2 = this.roots.get(name);
    if (dispose2) {
      dispose2();
      this.roots.delete(name);
    }
  }
};
