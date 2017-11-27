webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-component {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    \\ Money Matters\n  </h1>\n  <h3></h3>\n</div>\n<article class=\"app-container\">\n\n  <section class=\"rep-list\">\n    <div class=\"rep-filter\">\n      <app-rep-filter (filterChanged)=\"applyFilters($event)\"\n          [bills_list]=\"bills\"\n          [money_max]=\"max_money_filter\"></app-rep-filter>\n    </div>\n    <app-rep-list [reps]=\"reps\"></app-rep-list>\n  </section>\n  <section class=\"rep-chart\">\n\n    <graph [nodes]=\"nodes\" [links]=\"links\" [dataAvailable]=\"dataAvailable\"\n    [dataPromise]=\"p\"></graph>\n\n     <!-- <app-rep-chart [reps]=\"reps\" \n                  [dataAvailable]=\"dataAvailable\">  -->\n                      \n    <!-- </app-rep-chart> -->\n  </section>\n\n</article>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this.title = 'app';
        this.dataAvailable = false;
        // signalChange = 0;
        this.nodes = [];
        this.links = [];
        this.fp = this._dataService.getBillList();
        this.fp.subscribe(function (data) {
            _this.bills = data;
        });
        this.p = this._dataService.getMemberList('house');
        this.p.subscribe(function (data) {
            _this.origReps = data;
            _this.reps = data;
            _this.reps.map(function (rep) { rep.show = true; });
            console.log("app reps");
            console.log(_this.reps);
            var N = _this.reps.length, getIndex = function (number) { return number - 1; };
            var money_max = 0;
            var ri = 0;
            /** constructing the nodes array */
            // let central_node = new Node("center");
            // central_node.party = 'c';
            // this.nodes.push(central_node);
            _this.reps.map(function (rep) {
                // piggyback off this loop to collect the max of contributions
                if (rep.total_contributions > money_max)
                    money_max = rep.total_contributions;
                var n = new __WEBPACK_IMPORTED_MODULE_2__d3__["d" /* Node */](rep.id);
                // console.log(rep.id);
                n.first_name = rep.first_name;
                n.last_name = rep.last_name;
                n.x = 0;
                n.y = 0;
                n.party = rep.party;
                n.active = rep.show;
                n.money = rep.total_contributions;
                _this.nodes.push(n);
                ri++;
            });
            _this.nodes.map(function (n) {
                n.money_max = money_max;
            });
            _this.max_money_filter = money_max;
            _this.origNodes = _this.nodes;
            var dems = _this.nodes.filter(function (n) { return n.party.toLowerCase() == 'd'; });
            for (var i = 0; i < dems.length - 1; i++) {
                var rand = Math.floor(Math.random() * dems.length);
                _this.links.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["c" /* Link */](dems[i], dems[rand]));
                _this.links.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["c" /* Link */](dems[i], dems[i + 1]));
                // this.links.push(new Link(dems[i], central_node));
            }
            var repus = _this.nodes.filter(function (n) { return n.party.toLowerCase() == 'r'; });
            for (var i = 0; i < repus.length - 1; i++) {
                var rand = Math.floor(Math.random() * repus.length);
                _this.links.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["c" /* Link */](repus[i], repus[rand]));
                _this.links.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["c" /* Link */](repus[i], repus[i + 1]));
                // this.links.push(new Link(repus[i], central_node));
            }
            _this.origLinks = _this.links;
            // for (let i = 0; i < N; i++) {
            //   for (let m = i+1; m < N; m++) {
            //   	if(this.nodes[i].party == this.nodes[m].party){
            //     * connecting the nodes before starting the simulation 
            //     this.links.push(new Link(this.nodes[i], this.nodes[m]));
            //   	}
            //   }
            // }
            console.log(_this.links.length);
            // console.log("data" +JSON.stringify(data))
            // console.log("app data")
            // console.log(data)
            // for(let rep of data){
            //   this.reps[rep.id] = new Rep(data)
            //  // }
            // this.reps = data.map(it => new Rep(...it))
            _this.dataAvailable = true;
            _this.p.done = true;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.applyFilters = function (filters) {
        console.log("applyfilters");
        console.log(filters);
        // the party filter
        if (filters.party) {
            var party_1 = filters.party == 'democrat' ? 'd' : 'r';
            this.reps.map(function (rep) { rep.show = rep.party.toLowerCase() == party_1 ? true : false; });
            this.nodes.map(function (node) {
                node.active = node.party.toLowerCase() == party_1 ? true : false;
            });
            this.nodes = this.nodes.slice(); //updates the graph. sends update to ngOnChanges
            // this.linkScramble();
            console.log(this.reps);
        }
        if (filters.money || filters.money == 0) {
            console.log('app updating money filter to ' + filters.money);
            //always filtering on origReps isn't the right way to do this, but it will let me check if this works
            this.reps = this.origReps.filter(function (rep) { return rep.total_contributions > filters.money; });
            this.nodes = this.origNodes.filter(function (node) { return node.money > filters.money; });
            this.linkScramble();
        }
    };
    AppComponent.prototype.linkScramble = function () {
        // demo code that scrambles the links every time. used to check if the graph is working. 
        this.links = [];
        var dems = this.nodes.filter(function (n) { return n.party.toLowerCase() == 'd'; });
        for (var i = 0; i < dems.length - 1; i++) {
            var rand = Math.floor(Math.random() * dems.length);
            this.links.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["c" /* Link */](dems[i], dems[rand]));
            this.links.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["c" /* Link */](dems[i], dems[i + 1]));
            // this.links.push(new Link(dems[i], central_node));
        }
        var repus = this.nodes.filter(function (n) { return n.party.toLowerCase() == 'r'; });
        for (var i = 0; i < repus.length - 1; i++) {
            var rand = Math.floor(Math.random() * repus.length);
            this.links.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["c" /* Link */](repus[i], repus[rand]));
            this.links.push(new __WEBPACK_IMPORTED_MODULE_2__d3__["c" /* Link */](repus[i], repus[i + 1]));
            // this.links.push(new Link(repus[i], central_node));
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]],
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__visuals_graph_graph_component__ = __webpack_require__("../../../../../src/app/visuals/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__visuals_shared__ = __webpack_require__("../../../../../src/app/visuals/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_material_dropdown__ = __webpack_require__("../../../../ng2-material-dropdown/dist/ng2-dropdown.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_material_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_material_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rep_list_rep_list_component__ = __webpack_require__("../../../../../src/app/rep-list/rep-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rep_card_rep_card_component__ = __webpack_require__("../../../../../src/app/rep-card/rep-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rep_chart_rep_chart_component__ = __webpack_require__("../../../../../src/app/rep-chart/rep-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__bill_list_bill_list_component__ = __webpack_require__("../../../../../src/app/bill-list/bill-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rep_filter_rep_filter_component__ = __webpack_require__("../../../../../src/app/rep-filter/rep-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_firstletter_pipe__ = __webpack_require__("../../../../../src/app/pipes/firstletter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__bill_bill_component__ = __webpack_require__("../../../../../src/app/bill/bill.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__rep_list_rep_list_component__["a" /* RepListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__rep_card_rep_card_component__["a" /* RepCardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__rep_chart_rep_chart_component__["a" /* RepChartComponent */],
                __WEBPACK_IMPORTED_MODULE_16__bill_list_bill_list_component__["a" /* BillListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__rep_filter_rep_filter_component__["a" /* RepFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_firstletter_pipe__["a" /* FirstLetter */],
                __WEBPACK_IMPORTED_MODULE_6__visuals_graph_graph_component__["a" /* GraphComponent */]
            ].concat(__WEBPACK_IMPORTED_MODULE_7__visuals_shared__["a" /* SHARED_VISUALS */], __WEBPACK_IMPORTED_MODULE_5__d3__["b" /* D3_DIRECTIVES */], [
                __WEBPACK_IMPORTED_MODULE_20__bill_bill_component__["a" /* BillComponent */]
            ]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_material_dropdown__["Ng2DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatPaginatorModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_17__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__d3__["a" /* D3Service */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/bill-list/bill-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bill-list/bill-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <!-- <app-bill *ngFor=\"let bill of bills\" [bill]=\"bill\"></app-bill> -->\n  <app-bill *ngFor=\"let bill of bills\"\n  \t[measure]=\"bill.measure\"\n  \t[topic]=\"bill.topic\"\n  \t[number]=\"bill.number\"></app-bill>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/bill-list/bill-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillListComponent = (function () {
    function BillListComponent(_billListService) {
        this._billListService = _billListService;
    }
    BillListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._billListService.getBillList().subscribe(function (data) {
            _this.bills = data['bills'];
            console.log(_this.bills);
            // console.log(data)
        });
    };
    BillListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bill-list',
            template: __webpack_require__("../../../../../src/app/bill-list/bill-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bill-list/bill-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], BillListComponent);
    return BillListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bill/bill.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bill{\n\twidth:200px;\n\tmargin-bottom:30px;\n}\n\n.billMeasure{\n\n\tfont-style: italic;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bill/bill.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bill\">\n\n\t <div class=\"billTopic\">{{topic}}</div>\n\t <div class=\"billMeasure\">{{measure}}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bill/bill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillComponent = (function () {
    function BillComponent() {
    }
    BillComponent.prototype.ngOnInit = function () {
        this.measure = String(this.measure).replace(/<[^>]+>/gm, '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BillComponent.prototype, "bill", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BillComponent.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BillComponent.prototype, "jurisdiction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BillComponent.prototype, "session", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BillComponent.prototype, "prefix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BillComponent.prototype, "number", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BillComponent.prototype, "measure", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BillComponent.prototype, "topic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BillComponent.prototype, "has_organizations", void 0);
    BillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bill',
            template: __webpack_require__("../../../../../src/app/bill/bill.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bill/bill.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BillComponent);
    return BillComponent;
}());



/***/ }),

/***/ "../../../../../src/app/d3/d3.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/d3/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var D3Service = (function () {
    /** This service will provide methods to enable user interaction with elements
      * while maintaining the d3 simulations physics
      */
    function D3Service() {
    }
    /** A method to bind a pan and zoom behaviour to an svg element */
    D3Service.prototype.applyZoomableBehaviour = function (svgElement, containerElement) {
        var svg, container, zoomed, zoom;
        svg = __WEBPACK_IMPORTED_MODULE_2_d3__["h" /* select */](svgElement);
        container = __WEBPACK_IMPORTED_MODULE_2_d3__["h" /* select */](containerElement);
        zoomed = function () {
            var transform = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].transform;
            container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
        };
        zoom = __WEBPACK_IMPORTED_MODULE_2_d3__["j" /* zoom */]().on('zoom', zoomed);
        svg.call(zoom);
    };
    /** A method to bind a draggable behaviour to an svg element */
    D3Service.prototype.applyDraggableBehaviour = function (element, node, graph) {
        var d3element = __WEBPACK_IMPORTED_MODULE_2_d3__["h" /* select */](element);
        function started() {
            /** Preventing propagation of dragstart to parent elements */
            __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].sourceEvent.stopPropagation();
            if (!__WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].active) {
                graph.simulation.alphaTarget(0.3).restart();
            }
            __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].on('drag', dragged).on('end', ended);
            function dragged() {
                node.fx = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].x;
                node.fy = __WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].y;
            }
            function ended() {
                if (!__WEBPACK_IMPORTED_MODULE_2_d3__["b" /* event */].active) {
                    graph.simulation.alphaTarget(0);
                }
                node.fx = null;
                node.fy = null;
            }
        }
        d3element.call(__WEBPACK_IMPORTED_MODULE_2_d3__["a" /* drag */]()
            .on('start', started));
    };
    /** The interactable graph we will simulate in this article
    * This method does not interact with the document, purely physical calculations with d3
    */
    D3Service.prototype.getForceDirectedGraph = function (nodes, links, options) {
        var sg = new __WEBPACK_IMPORTED_MODULE_1__models__["a" /* ForceDirectedGraph */](nodes, links, options);
        return sg;
    };
    D3Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], D3Service);
    return D3Service;
}());



/***/ }),

/***/ "../../../../../src/app/d3/directives/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/d3/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3_service__ = __webpack_require__("../../../../../src/app/d3/d3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DraggableDirective = (function () {
    function DraggableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    DraggableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.draggableNode, this.draggableInGraph);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('draggableNode'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models__["c" /* Node */])
    ], DraggableDirective.prototype, "draggableNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('draggableInGraph'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models__["a" /* ForceDirectedGraph */])
    ], DraggableDirective.prototype, "draggableInGraph", void 0);
    DraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[draggableNode]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__d3_service__["a" /* D3Service */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/d3/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zoomable_directive__ = __webpack_require__("../../../../../src/app/d3/directives/zoomable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__draggable_directive__ = __webpack_require__("../../../../../src/app/d3/directives/draggable.directive.ts");
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */




var D3_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__zoomable_directive__["a" /* ZoomableDirective */],
    __WEBPACK_IMPORTED_MODULE_1__draggable_directive__["a" /* DraggableDirective */]
];


/***/ }),

/***/ "../../../../../src/app/d3/directives/zoomable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoomableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3_service__ = __webpack_require__("../../../../../src/app/d3/d3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZoomableDirective = (function () {
    function ZoomableDirective(d3Service, _element) {
        this.d3Service = d3Service;
        this._element = _element;
    }
    ZoomableDirective.prototype.ngOnInit = function () {
        this.d3Service.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('zoomableOf'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ZoomableDirective.prototype, "zoomableOf", void 0);
    ZoomableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[zoomableOf]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__d3_service__["a" /* D3Service */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ZoomableDirective);
    return ZoomableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/d3/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__d3_service__ = __webpack_require__("../../../../../src/app/d3/d3.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__d3_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/d3/models/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__models__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives__ = __webpack_require__("../../../../../src/app/d3/directives/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__directives__["a"]; });





/***/ }),

/***/ "../../../../../src/app/d3/models/force-directed-graph.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForceDirectedGraph; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link__ = __webpack_require__("../../../../../src/app/d3/models/link.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");



var FORCES = {
    LINKS: 1,
    // LINKS: 1/20,
    COLLISION: 0.6,
    // COLLISION: 1,
    CHARGE: -0.01
    // CHARGE: -0.1 
};
var ForceDirectedGraph = (function () {
    function ForceDirectedGraph(nodes, links, options) {
        this.ticker = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nodes = [];
        this.links = [];
        this.nodes = nodes;
        this.links = links;
        this.initSimulation(options);
    }
    ForceDirectedGraph.prototype.connectNodes = function (source, target) {
        var link;
        if (!this.nodes[source] || !this.nodes[target]) {
            throw new Error('One of the nodes does not exist');
        }
        link = new __WEBPACK_IMPORTED_MODULE_1__link__["a" /* Link */](source, target);
        this.simulation.stop();
        this.links.push(link);
        this.simulation.alphaTarget(0.3).restart();
        this.initLinks();
    };
    ForceDirectedGraph.prototype.initNodes = function () {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.nodes(this.nodes);
    };
    ForceDirectedGraph.prototype.initLinks = function () {
        console.log('initLinks');
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet');
        }
        this.simulation.force('links', __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* forceLink */](this.links)
            .id(function (d) { return d['id']; })
            .strength(FORCES.LINKS));
    };
    ForceDirectedGraph.prototype.initSimulation = function (options) {
        if (!options || !options.width || !options.height) {
            throw new Error('missing options when initializing simulation');
        }
        /** Creating the simulation */
        if (!this.simulation) {
            var ticker_1 = this.ticker;
            this.simulation = __WEBPACK_IMPORTED_MODULE_2_d3__["g" /* forceSimulation */]()
                .force('charge', __WEBPACK_IMPORTED_MODULE_2_d3__["f" /* forceManyBody */]()
                .strength(function (d) { return FORCES.CHARGE * d['r']; }))
                .force('collide', __WEBPACK_IMPORTED_MODULE_2_d3__["d" /* forceCollide */]()
                .strength(FORCES.COLLISION)
                .radius(function (d) { return d['r'] + 5; }).iterations(2));
            // Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick', function () {
                ticker_1.emit(this);
            });
            this.initNodes();
            this.initLinks();
        }
        /** Updating the central force of the simulation */
        this.simulation.force('centers', __WEBPACK_IMPORTED_MODULE_2_d3__["c" /* forceCenter */](options.width / 2, options.height / 2));
        /** Restarting the simulation internal timer */
        this.simulation.restart();
    };
    return ForceDirectedGraph;
}());



/***/ }),

/***/ "../../../../../src/app/d3/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__("../../../../../src/app/d3/models/node.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__node__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link__ = __webpack_require__("../../../../../src/app/d3/models/link.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__force_directed_graph__ = __webpack_require__("../../../../../src/app/d3/models/force-directed-graph.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__force_directed_graph__["a"]; });





/***/ }),

/***/ "../../../../../src/app/d3/models/link.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
var Link = (function () {
    function Link(source, target) {
        this.source = source;
        this.target = target;
    }
    return Link;
}());



/***/ }),

/***/ "../../../../../src/app/d3/models/node.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
var Node = (function () {
    function Node(id) {
        var _this = this;
        this.linkCount = 0;
        this.normal = function () {
            // return Math.sqrt(this.money / (this.money_max*0.8));
            return _this.money / (_this.money_max * 0.4);
        };
        this.id = id;
    }
    Object.defineProperty(Node.prototype, "r", {
        get: function () {
            if (this.id == "center") {
                return 100;
            }
            return Math.max(this.normal() * 10, 2);
            // return 50 * this.normal() + 10;
            // return 7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "fontSize", {
        get: function () {
            return Math.max(this.normal() * 4, 1) + "px";
            // return (30 * this.normal() + 10) + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "color", {
        get: function () {
            if (this.id == "center") {
                return 'white';
            }
            if (!this.active) {
                return 'black';
            }
            else {
                if (this.party.toLowerCase() == 'd') {
                    return 'blue';
                }
                else {
                    return 'red';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/firstletter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstLetter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capitalizefirst
 * Example:
 *  // value.name = daniel
 *  {{ value.name | capitalizefirst  }}
 *  fromats to: Daniel
*/
var FirstLetter = (function () {
    function FirstLetter() {
    }
    FirstLetter.prototype.transform = function (value, args) {
        if (value === null)
            return '';
        return value.charAt(0).toUpperCase();
    };
    FirstLetter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'firstLetter'
        })
    ], FirstLetter);
    return FirstLetter;
}());



/***/ }),

/***/ "../../../../../src/app/rep-card/rep-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-card *ngIf=\"rep.show\" class=\"rep-card\">\n\n  <div class=\"rep-watermark {{rep.party | lowercase }}\">{{ rep.party | firstLetter }}</div>\n  <mat-card-title>\n    <h2>{{rep.first_name}} {{rep.last_name}}</h2>\n  </mat-card-title>\n  <mat-card-subtitle>\n    <h4>District {{rep.district}} from {{rep.state}}</h4>\n  </mat-card-subtitle>\n  <mat-card-content>\n    <p>{{rep.total_contributions | currency }}</p>\n  </mat-card-content>\n  <mat-card-actions>\n  <button mat-button>EXPAND</button>\n</mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/rep-card/rep-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  background-color: #fff;\n  color: #424242;\n  padding: 0.5rem !important;\n  width: 160px;\n  height: 150px;\n  position: relative; }\n  .mat-card .mat-card-content {\n    margin-bottom: 5px; }\n  .mat-card .mat-card-actions {\n    position: absolute;\n    bottom: 1rem;\n    right: 16px; }\n\n.mat-card-subtitle {\n  color: #424242; }\n\n.rep-card {\n  margin: 0.5rem;\n  position: relative;\n  padding: 0.5rem;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5); }\n  .rep-card .rep-watermark {\n    font-size: 6rem;\n    position: absolute;\n    right: 1rem;\n    top: 0.5rem;\n    opacity: 0.15;\n    color: #ababab; }\n    .rep-card .rep-watermark.r {\n      color: #F90808; }\n    .rep-card .rep-watermark.d {\n      color: #007EFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rep-card/rep-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rep_rep__ = __webpack_require__("../../../../../src/app/rep/rep.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RepCardComponent = (function () {
    function RepCardComponent() {
    }
    RepCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__rep_rep__["a" /* Rep */])
    ], RepCardComponent.prototype, "rep", void 0);
    RepCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rep-card',
            template: __webpack_require__("../../../../../src/app/rep-card/rep-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rep-card/rep-card.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], RepCardComponent);
    return RepCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rep-chart/rep-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"rep-chart\">\n  <div id=\"canvas\">\n    <svg class=\"congress-chart\" width=\"500px\" height=\"700px\">\n    </svg>\n  </div>\n  <h2>{{reps?.length}} Representatives</h2>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/rep-chart/rep-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rep-chart h2 {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rep-chart/rep-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepChartComponent; });
/* unused harmony export NodeVisualComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepChartComponent = (function () {
    function RepChartComponent() {
        this.houseRows = [60, 58, 53, 49, 45, 41, 37, 33, 30, 28];
        this.dataAvailable = false;
        this.colorParties = function () {
            var elements = this.svg.selectAll('circle')
                .data(this.nodes)
                .map(function (node) {
                // console.log("node: ");
                // console.log(node);
            });
            // node.style("fill", node.color)})
            // .filter(function(d) { return (d.party === "Dem") })
            // .style("fill", "blue");
        };
        this.clusterElements = function () {
            var padding = 1.5, // separation between same-color nodes
            clusterPadding = 6, // separation between different-color nodes
            maxRadius = 12;
            var clusters = new Array();
        };
        this.drawClusters = function (numnode, rad) {
            var _this = this;
            var numNodes = numnode || 100;
            var radius = rad || 300;
            this.createSvg(radius, function (svg) {
                _this.createHouseMembers(svg, numNodes, 5);
            });
        };
    }
    RepChartComponent.prototype.ngOnInit = function () {
    };
    /* ENTRY POINT */
    RepChartComponent.prototype.ngOnChanges = function (changes) {
        console.log("those *simple* changes...");
        console.log(changes);
        // console.log('prev value: ', name.previousValue);
        // console.log('got name: ', name.currentValue);
        this.dataAvailable = changes.dataAvailable.currentValue;
        this.reps = changes.reps.currentValue;
        if (this.dataAvailable) {
            console.log("draw it!");
            this.nodes = this.drawHouse(this.houseRows, 300);
            // this.colorParties();
        }
    };
    RepChartComponent.prototype.drawHouse = function (numnode, rad) {
        var _this = this;
        var _self = this;
        var numNodes = numnode || 100;
        var radius = rad || 250;
        var nodes = this.createHouseNodes(numNodes, radius);
        this.createSvg(radius, function (svg) {
            _this.createHouseMembers(svg, nodes, 5);
        });
    };
    RepChartComponent.prototype.createHouseNodes = function (nodeBase, radius) {
        var nodes = [], angle, x, y, i, party, radius = radius, width, height, ind = 0;
        for (var j = 0; j < nodeBase.length; j++) {
            var localradius = (radius) - 15 * (j + 1);
            // console.log(localradius);
            width = (localradius) + 50;
            height = radius + 50;
            for (i = 0; i < nodeBase[j]; i++) {
                angle = (i / nodeBase[j]) * Math.PI; // Calculate the angle at which the element will be placed.
                // For a semicircle, we would use (i / numNodes) * Math.PI.
                x = -1 * (localradius * Math.cos(angle)) + (15 * j) + (width); // Calculate the x position of the element.
                y = -1 * (localradius * Math.sin(angle)) + (height); // Calculate the y position of the element.
                party = (i % 2 === 0) ? "Dem" : "Rep";
                nodes.push({ 'id': i,
                    'x': x,
                    'y': y,
                    'party': this.reps[ind].party,
                    'color': this.reps[ind].show ?
                        this.reps[ind].party.toLowerCase() == "d" ?
                            "blue" : "red" : "black"
                });
                ind++;
            }
        }
        return nodes;
    };
    RepChartComponent.prototype.createSvg = function (radius, callback) {
        __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* selectAll */]('svg').remove();
        this.svg = __WEBPACK_IMPORTED_MODULE_1_d3__["h" /* select */]('#canvas').append('svg:svg')
            .attr('width', 650)
            .attr('height', 500);
        callback(this.svg);
    };
    RepChartComponent.prototype.createHouseMembers = function (svg, nodes, elementRadius) {
        var element = svg.selectAll('circle')
            .data(nodes)
            .enter().append('svg:circle')
            .attr('r', elementRadius)
            .attr('cx', function (d, i) {
            return d.x;
        })
            .attr('cy', function (d, i) {
            return d.y;
        })
            .attr('style', function (d, i) {
            // console.log("color " + d.color)
            return "fill:" + d.color;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dataAvailable'),
        __metadata("design:type", Object)
    ], RepChartComponent.prototype, "dataAvailable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RepChartComponent.prototype, "reps", void 0);
    RepChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rep-chart',
            template: __webpack_require__("../../../../../src/app/rep-chart/rep-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rep-chart/rep-chart.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]]
        }),
        __metadata("design:paramtypes", [])
    ], RepChartComponent);
    return RepChartComponent;
}());

var NodeVisualComponent = (function () {
    function NodeVisualComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('nodeVisual'),
        __metadata("design:type", Node)
    ], NodeVisualComponent.prototype, "node", void 0);
    NodeVisualComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[nodeVisual]',
            template: "\n    <svg:g [attr.transform]=\"'translate(' + node.x + ',' + node.y + ')'\">\n      <svg:circle\n          class=\"node\"\n          [attr.fill]=\"node.color\"\n          cx=\"0\"\n          cy=\"0\"\n          [attr.r]=\"node.r\">\n      </svg:circle>\n    </svg:g>\n  " //,
            //styleUrls: ['./node-visual.component.css']
        })
    ], NodeVisualComponent);
    return NodeVisualComponent;
}());

// $(document).ready(function() {
//   // draw(40, 150);
// });
// ChartService.instantiate();
// this._dataService.getMemberList('house').subscribe(data => {
//   this.reps = data
// });
// [37, 33, 30, 28];
// 33, 37, 41, 45, 49, 53, 58, 60
// Use the pack layout to initialize node positions.
//       d3.layout.pack()
//         .sort(null)
//         .size([width, height])
//         .children(function(d) { return d.values; })
//         .value(function(d) { return d.radius * d.radius; })
//         .nodes({
//             values: d3.nest()
//             .key(function(d) { return d.cluster; })
//             .entries(nodes)
// });
//
//       var force = d3.layout.force()
//         .nodes(nodes)
//         .size([width, height])
//         .gravity(.02)
//         .charge(0)
//         .on("tick", tick)
//         .start();


/***/ }),

/***/ "../../../../../src/app/rep-filter/rep-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"rep-filters\">\n  <li>\n    <ng2-dropdown (onShow)=\"filterOpened($event)\"\n                  (onHide)=\"filterClosed($event)\"\n                  (onItemClicked)=\"applyPartyFilter($event)\">\n\n      <ng2-dropdown-button>\n        <li>\n          <button mat-raised-button class=\"rep-button\" (click)=\"setActive($event)\">Bills</button>\n        </li>\n      </ng2-dropdown-button>\n\n      <ng2-dropdown-menu>\n        <app-rep-card *ngFor=\"let rep of reps | paginate: { itemsPerPage: 30, currentPage: p }\" [rep]=\"rep\"></app-rep-card>\n          <ng2-menu-item *ngFor=\"let bill of bills_list\" [value]=\"bill.topic\">\n            {{bill.topic}}}\n          </ng2-menu-item>\n      </ng2-dropdown-menu>\n\n    </ng2-dropdown>\n  </li>\n  <li>\n    <ng2-dropdown id=\"moneyFilter\"(onShow)=\"filterOpened($event)\" (onHide)=\"filterClosed($event)\">\n        <ng2-dropdown-button id=\"moneyFilterNGButton\" showCaret=\"True\">\n          <li><button mat-raised-button class=\"rep-button\" >Money</button></li>\n        </ng2-dropdown-button>\n        <ng2-dropdown-menu>\n\n            <ng2-menu-item >\n              <mat-slider #slider min=\"1\" max=\"{{money_max}}\" step=\"0.5\" value=\"100\"\n              (change)=\"applyMoneyFilter($event)\"></mat-slider> {{slider.value}}\n            </ng2-menu-item>\n\n            <!-- <div class='ng2-menu-divider'></div> -->\n\n              <!-- <ul class=\"footer-menu\">\n                <li><button class=\"rep-button\" (click)=\"cancelFilter($event)\">Cancel</button></li>\n                <li>\n                    <button class=\"rep-button\" (click)=\"applyMoneyFilter($event)\">Apply</button>\n                </li>\n              </ul> -->\n        </ng2-dropdown-menu>\n\n    </ng2-dropdown>\n  </li>\n  <li>\n    <ng2-dropdown (onShow)=\"filterOpened($event)\"\n                  (onHide)=\"filterClosed($event)\"\n                  (onItemClicked)=\"applyPartyFilter($event)\">\n\n      <ng2-dropdown-button>\n        <li>\n          <button mat-raised-button class=\"rep-button\" (click)=\"setActive($event)\">Party</button>\n        </li>\n      </ng2-dropdown-button>\n\n      <ng2-dropdown-menu>\n          <ng2-menu-item value=\"democrat\">\n            Democrat\n          </ng2-menu-item>\n          <ng2-menu-item value=\"republican\">\n            Republican\n          </ng2-menu-item>\n      </ng2-dropdown-menu>\n    </ng2-dropdown>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/rep-filter/rep-filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rep-filters {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  list-style-type: none; }\n\n.rep-button {\n  padding: 0.5rem 2rem;\n  font-size: 1rem;\n  background-color: #fff;\n  color: #979797;\n  border: 1px solid #979797;\n  border-radius: 3px; }\n  .rep-button:hover {\n    background-color: #666;\n    color: #fff; }\n  .rep-button.active {\n    color: #fff;\n    background-color: #333; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rep-filter/rep-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rep_rep_service__ = __webpack_require__("../../../../../src/app/rep/rep.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepFilterComponent = (function () {
    function RepFilterComponent() {
        this.filterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RepFilterComponent.prototype.callParent = function (filters) {
        console.log("call parent");
        // this.filterChanged.next('somePhone');
        this.filterChanged.next(filters);
    };
    RepFilterComponent.prototype.filterOpened = function ($event) {
        console.log("filter opened: ");
        console.log($event);
    };
    RepFilterComponent.prototype.filterClosed = function ($event) {
        console.log("filter closed: ");
        console.log($event);
    };
    // could probably have a generic way to do this
    RepFilterComponent.prototype.applyFilter = function ($event) {
        console.log("apply filter: ");
        console.log($event);
    };
    RepFilterComponent.prototype.applyPartyFilter = function ($event) {
        console.log("apply party filter: " + $event.value);
        console.log($event);
        this.callParent({ party: $event.value });
    };
    RepFilterComponent.prototype.applyMoneyFilter = function ($event) {
        console.log("apply money filter: " + $event.value);
        console.log($event);
        this.callParent({ money: $event.value });
    };
    RepFilterComponent.prototype.cancelFilter = function ($event) {
    };
    RepFilterComponent.prototype.collectFilters = function () {
    };
    RepFilterComponent.prototype.setActive = function ($event, filter) {
        // this.callParent();
        var classList = $event.target.className.split(/\s+/);
        if (classList.indexOf("active") === -1) {
            $event.target.classList.add("active");
        }
        else {
            $event.target.classList.remove("active");
        }
        console.log(__WEBPACK_IMPORTED_MODULE_1__rep_rep_service__["a" /* RepService */]);
    };
    RepFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('bills_list'),
        __metadata("design:type", Object)
    ], RepFilterComponent.prototype, "bills_list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('money_max'),
        __metadata("design:type", Object)
    ], RepFilterComponent.prototype, "money_max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], RepFilterComponent.prototype, "filterChanged", void 0);
    RepFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rep-filter',
            template: __webpack_require__("../../../../../src/app/rep-filter/rep-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rep-filter/rep-filter.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], RepFilterComponent);
    return RepFilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rep-list/rep-list.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"rep-list\">\n  <app-rep-card *ngFor=\"let rep of reps | paginate: { itemsPerPage: 30, currentPage: p }\" [rep]=\"rep\"></app-rep-card>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</article>\n"

/***/ }),

/***/ "../../../../../src/app/rep-list/rep-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pagination-controls {\n  width: 100%;\n  margin-top: 3rem;\n  margin-left: auto;\n  margin-right: auto; }\n  pagination-controls pagination-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.rep-list {\n  max-width: 600px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rep-list/rep-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RepListComponent = (function () {
    function RepListComponent(_dataService) {
        this._dataService = _dataService;
    }
    RepListComponent.prototype.ngOnInit = function () {
        // this._dataService.getMemberList('house').subscribe(data => {
        //    // console.log("data" +data)
        //    // for(let rep of data){
        //    //   this.reps[rep.id] = new Rep(data)
        //   //  // }
        //  	// this.reps = data.map(it => new Rep(...it))
        //    this.reps = data;
        //  	console.log(this.reps)
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RepListComponent.prototype, "reps", void 0);
    RepListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rep-list',
            template: __webpack_require__("../../../../../src/app/rep-list/rep-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rep-list/rep-list.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], RepListComponent);
    return RepListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rep/rep.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RepService = (function () {
    function RepService() {
    }
    RepService.prototype.setActiveFilter = function (filter) {
        var toggleFilter = this.activeFilterList[filter];
        if (toggleFilter === false) {
            toggleFilter = true;
        }
        else {
            toggleFilter = false;
        }
    };
    RepService.prototype.getRepFilters = function () {
        return this.activeFilterList;
    };
    RepService.prototype.getReps = function () {
        return this.reps;
    };
    RepService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], RepService);
    return RepService;
}());



/***/ }),

/***/ "../../../../../src/app/rep/rep.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rep; });
var Rep = (function () {
    function Rep(_a) {
        var id = _a.id, name = _a.name, party = _a.party, district = _a.district, FECId = _a.FECId, CRPId = _a.CRPId, total_receipts = _a.total_receipts, total_from_individuals = _a.total_from_individuals, total_from_pacs = _a.total_from_pacs, total_contributions = _a.total_contributions;
        // console.log("rep constructor with " + JSON.stringify(data))
    }
    return Rep;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Http, Headers, Response } from '@angular/http';

 //proper way to import the 'of' operator


//sass src/styles/scss/layout.scss src/styles/css/layout.css && 
var DataService = (function () {
    // results: string[];
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getMemberList = function (chamber) {
        var url = "api/members/" + chamber;
        return this.http.get(url);
    };
    DataService.prototype.getBillList = function () {
        var url = "api/bills";
        return this.http.get(url);
    };
    DataService.prototype.billSearch = function (str) {
        var url = "/bills/search/" + str;
        return this.http.get(url);
    };
    DataService.prototype.getBillPosition = function (billId) {
        var url = "/bill/" + billId + "/position";
        return this.http.get(url);
    };
    DataService.prototype.organizationSearch = function (str) {
        var url = "/organization/search/" + str;
        return this.http.get(url);
    };
    DataService.prototype.getOrganizationPosition = function (orgId) {
        var url = "/organization/" + orgId + "/positions";
        return this.http.get(url);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/visuals/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visuals/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphComponent = (function () {
    function GraphComponent(d3Service, ref) {
        this.d3Service = d3Service;
        this.ref = ref;
        this.started = false;
        this.dataAvailable = false;
        this._options = { width: 700, height: 800 };
    }
    Object.defineProperty(GraphComponent.prototype, "links", {
        //   _allowDay: boolean;
        get: function () {
            return this._links;
        },
        set: function (value) {
            this._links = value;
            this.ref.markForCheck();
            // if(this.started){
            //   this.graph.initSimulation(this.options);
            // }
            // this.graph.initSimulation(this._options) 
        },
        enumerable: true,
        configurable: true
    });
    GraphComponent.prototype.onResize = function (event) {
        this.graph.initSimulation(this.options);
    };
    GraphComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log("graph *simple* changes...");
        console.log(changes);
        console.log("simulation running? " + this.started);
        if (this.started) {
            //will handle things like color updates, but not a new list of links
            // this.graph.initSimulation(this._options); 
            // re-init the entire thing. elements that are the same will stay where they are
            // so nodes will keep their position if links are changed, and then adjust to the 
            // new links
            this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this._links, this.options);
            this.graph.initSimulation(this._options);
            this.graph.ticker.subscribe(function (d) {
                _this.ref.markForCheck();
                // console.log('ticker ' + new Date().getTime())
            });
        }
        //   
        //   // console.log('prev value: ', name.previousValue);
        //   // console.log('got name: ', name.currentValue);
        //   this.dataAvailable = changes.dataAvailable.currentValue
        //   // this.reps = changes.reps.currentValue
        //   if(changes.dataAvailable.currentValue == true 
        //       && changes.dataAvailable.previousValue == false){
        //     /** Receiving an initialized simulated graph from our custom d3 service */
        //     this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
        //     /** Binding change detection check on each tick
        //      * This along with an onPush change detection strategy should enforce checking only when relevant!
        //      * This improves scripting computation duration in a couple of tests I've made, consistently.
        //      * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
        //      */
        //     this.graph.ticker.subscribe((d) => {
        //       this.ref.markForCheck();
        //     });
        //     // this.colorParties();
        //    }
    };
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataPromise.subscribe(function (data) {
            console.log("oninit promise complete");
            /** Receiving an initialized simulated graph from our custom d3 service */
            _this.graph = _this.d3Service.getForceDirectedGraph(_this.nodes, _this._links, _this.options);
            /** Binding change detection check on each tick
             * This along with an onPush change detection strategy should enforce checking only when relevant!
             * This improves scripting computation duration in a couple of tests I've made, consistently.
             * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
             */
            _this.graph.ticker.subscribe(function (d) {
                _this.ref.markForCheck();
                // console.log('ticker ' + new Date().getTime())
            });
            // this.colorParties();
        });
    };
    GraphComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.dataPromise.subscribe(function (data) {
            console.log("afterview promise complete");
            _this.graph.initSimulation(_this.options);
            _this.started = true;
        });
    };
    Object.defineProperty(GraphComponent.prototype, "options", {
        get: function () {
            return this._options; /*= {
              width: window.innerWidth,
              height: window.innerHeight
            };*/
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('nodes'),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "nodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('links'),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "_links", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dataPromise'),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "dataPromise", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dataAvailable'),
        __metadata("design:type", Object)
    ], GraphComponent.prototype, "dataAvailable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GraphComponent.prototype, "onResize", null);
    GraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'graph',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            template: "\n    <svg #svg [attr.width]=\"_options.width\" [attr.height]=\"_options.height\">\n      <g [zoomableOf]=\"svg\">\n        <g [linkVisual]=\"link\" *ngFor=\"let link of links\"></g>\n        <g [nodeVisual]=\"node\" *ngFor=\"let node of nodes\"\n            [draggableNode]=\"node\" [draggableInGraph]=\"graph\"></g>\n      </g>\n    </svg>\n  ",
            styles: [__webpack_require__("../../../../../src/app/visuals/graph/graph.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__d3__["a" /* D3Service */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/visuals/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHARED_VISUALS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_visual_node_visual_component__ = __webpack_require__("../../../../../src/app/visuals/shared/node-visual/node-visual.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__link_visual_link_visual_component__ = __webpack_require__("../../../../../src/app/visuals/shared/link-visual/link-visual.component.ts");
/* unused harmony namespace reexport */




var SHARED_VISUALS = [
    __WEBPACK_IMPORTED_MODULE_0__node_visual_node_visual_component__["a" /* NodeVisualComponent */],
    __WEBPACK_IMPORTED_MODULE_1__link_visual_link_visual_component__["a" /* LinkVisualComponent */]
];


/***/ }),

/***/ "../../../../../src/app/visuals/shared/link-visual/link-visual.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link {\n    stroke-width: 0.25;\n    stroke: rgb(222,237,250);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visuals/shared/link-visual/link-visual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkVisualComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinkVisualComponent = (function () {
    function LinkVisualComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('linkVisual'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__d3__["c" /* Link */])
    ], LinkVisualComponent.prototype, "link", void 0);
    LinkVisualComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[linkVisual]',
            template: "\n    <svg:line\n        class=\"link\"\n        [attr.x1]=\"link.source.x\"\n        [attr.y1]=\"link.source.y\"\n        [attr.x2]=\"link.target.x\"\n        [attr.y2]=\"link.target.y\"\n    ></svg:line>\n  ",
            styles: [__webpack_require__("../../../../../src/app/visuals/shared/link-visual/link-visual.component.css")]
        })
    ], LinkVisualComponent);
    return LinkVisualComponent;
}());



/***/ }),

/***/ "../../../../../src/app/visuals/shared/node-visual/node-visual.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".node {\n    cursor: pointer;\n    transition: stroke-width 0.1s ease-out,\n        fill 0.1s ease-out,\n        stroke 0.1s ease-out;\n\n    stroke: white;\n    stroke-width: 0.25;\n}\n\n.node-name {\n  font-family: 'Lato';\n  text-anchor: middle;\n  alignment-baseline: central;\n  font-weight: 300;\n  fill: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visuals/shared/node-visual/node-visual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeVisualComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3__ = __webpack_require__("../../../../../src/app/d3/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeVisualComponent = (function () {
    function NodeVisualComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('nodeVisual'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__d3__["d" /* Node */])
    ], NodeVisualComponent.prototype, "node", void 0);
    NodeVisualComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[nodeVisual]',
            template: "\n    <svg:g [attr.transform]=\"'translate(' + node.x + ',' + node.y + ')'\">\n      <svg:circle\n          class=\"node\"\n          [attr.fill]=\"node.color\"\n          cx=\"0\"\n          cy=\"0\"\n          [attr.r]=\"node.r\">\n      </svg:circle>\n      <svg:text\n          dy = \"-0.5em\"\n          class=\"node-name\"\n          [attr.font-size]=\"node.fontSize\">\n        {{node.first_name}}\n      </svg:text>\n      <svg:text\n          dy = \"0.5em\"\n          class=\"node-name\"\n          [attr.font-size]=\"node.fontSize\">\n        {{node.last_name}}\n      </svg:text>\n    </svg:g>\n  ",
            styles: [__webpack_require__("../../../../../src/app/visuals/shared/node-visual/node-visual.component.css")]
        })
    ], NodeVisualComponent);
    return NodeVisualComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map