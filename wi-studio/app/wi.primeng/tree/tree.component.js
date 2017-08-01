"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var n,c=arguments.length,a=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(a=(c<3?n(a):c>3?n(t,o,a):n(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),WITreeComponent=function(){function e(){this.mouseOver=new core_1.EventEmitter,this.doubleClick=new core_1.EventEmitter}return e.prototype.over=function(e){this.mouseOver.emit(e)},e.prototype.dblClick=function(e){this.doubleClick.emit(e)},e}();__decorate([core_1.Input(),__metadata("design:type",Array)],WITreeComponent.prototype,"treeValue",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],WITreeComponent.prototype,"mouseOver",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],WITreeComponent.prototype,"doubleClick",void 0),WITreeComponent=__decorate([core_1.Component({selector:"wi-tree",moduleId:module.id,template:'<p-tree [value]="treeValue">\n                  <template let-node pTemplate="default">\n                    <div (mouseover)=\'over(node)\' (dblclick)="dblClick(node)">{{node.label}}</div>\n                </template>\n              </p-tree>'})],WITreeComponent),exports.WITreeComponent=WITreeComponent;