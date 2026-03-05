var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { time } from "./methodDecorator.js";
import { log } from "./methodDecorator.js";
import { double } from "./methodDecorator.js";
let Product = (() => {
    let _instanceExtraInitializers = [];
    let _taxRate_decorators;
    let _taxRate_initializers = [];
    let _taxRate_extraInitializers = [];
    let _getDetails_decorators;
    let _get_tax_decorators;
    let _set_tax_decorators;
    return class Product {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _taxRate_decorators = [double];
            _getDetails_decorators = [time];
            _get_tax_decorators = [log];
            _set_tax_decorators = [log];
            __esDecorate(this, null, _getDetails_decorators, { kind: "method", name: "getDetails", static: false, private: false, access: { has: obj => "getDetails" in obj, get: obj => obj.getDetails }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _get_tax_decorators, { kind: "getter", name: "tax", static: false, private: false, access: { has: obj => "tax" in obj, get: obj => obj.tax }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _set_tax_decorators, { kind: "setter", name: "tax", static: false, private: false, access: { has: obj => "tax" in obj, set: (obj, value) => { obj.tax = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _taxRate_decorators, { kind: "field", name: "taxRate", static: false, private: false, access: { has: obj => "taxRate" in obj, get: obj => obj.taxRate, set: (obj, value) => { obj.taxRate = value; } }, metadata: _metadata }, _taxRate_initializers, _taxRate_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        name = __runInitializers(this, _instanceExtraInitializers);
        price;
        taxRate = __runInitializers(this, _taxRate_initializers, 20);
        constructor(name, price) {
            __runInitializers(this, _taxRate_extraInitializers);
            this.name = name;
            this.price = price;
        }
        getDetails() {
            return `Name: ${this.name}, Price: $${this.price}`;
        }
        getPrice() {
            return this.price;
        }
        get tax() {
            return (this.price * this.taxRate) / 100;
        }
        set tax(value) {
            this.taxRate = value;
        }
    };
})();
export { Product };
