"use strict";var __decorate=this&&this.__decorate||function(e,t,o,n){var c,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(r=(i<3?c(r):i>3?c(t,o,r):c(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),SalesforceComponent=function(){function e(){}return e.prototype.ngOnInit=function(){this.activeConnection?(this.name=this.name||this.activeConnection.name,this.description=this.activeConnection.description,this.connectionId=this.activeConnection.id,this.apiVersion=this.activeConnection.credential.api_version):(this.name="",this.description="")},e.prototype.ngOnChanges=function(e){e.activeConnection},e}();__decorate([core_1.Input(),__metadata("design:type",Object)],SalesforceComponent.prototype,"activeConnection",void 0),SalesforceComponent=__decorate([core_1.Component({moduleId:module.id,selector:"salesforce-component",templateUrl:"salesforce.html",styleUrls:["salesforce.css"]})],SalesforceComponent),exports.SalesforceComponent=SalesforceComponent;