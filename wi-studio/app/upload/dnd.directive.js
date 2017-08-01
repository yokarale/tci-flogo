"use strict";var __decorate=this&&this.__decorate||function(e,t,i,n){var a,r=arguments.length,d=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(a=e[o])&&(d=(r<3?a(d):r>3?a(t,i,d):a(t,i))||d);return r>3&&d&&Object.defineProperty(t,i,d),d},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),DndDirective=function(){function e(){this.hiddenFileInput=null,this.filesChangeEmiter=new core_1.EventEmitter,this.background="#eee",this.createHiddenInput()}return e.prototype.onDragOver=function(e){e.preventDefault(),e.stopPropagation(),this.background="#999"},e.prototype.onDragLeave=function(e){e.preventDefault(),e.stopPropagation(),this.background="#eee"},e.prototype.onClick=function(e){e.preventDefault(),e.stopPropagation(),this.hiddenFileInput&&this.hiddenFileInput.click()},e.prototype.onDrop=function(e){e.preventDefault(),e.stopPropagation(),this.background="#eee";var t=e.dataTransfer.files;if(t.length>0)for(var i=0;i<t.length;i++)this.filesChangeEmiter.emit(t)},e.prototype.createHiddenInput=function(){var e=this;this.hiddenFileInput&&document.body.removeChild(this.hiddenFileInput),this.hiddenFileInput=document.createElement("input"),this.hiddenFileInput.setAttribute("type","file"),this.hiddenFileInput.setAttribute("multiple","multiple"),this.hiddenFileInput.style.visibility="hidden",this.hiddenFileInput.style.position="absolute",this.hiddenFileInput.style.top="0",this.hiddenFileInput.style.left="0",this.hiddenFileInput.style.height="0",this.hiddenFileInput.style.width="0",this.hiddenFileInput.className="_hiddenInputClassName",document.body.appendChild(this.hiddenFileInput),this.hiddenFileInput.addEventListener("change",function(t){for(var i=[],n=0,a=t.target.files.length;n<a;n++)i.push(t.target.files[n]);e.hiddenFileInput.value="",e.filesChangeEmiter.emit(i)})},e}();__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],DndDirective.prototype,"filesChangeEmiter",void 0),__decorate([core_1.HostBinding("style.background"),__metadata("design:type",Object)],DndDirective.prototype,"background",void 0),__decorate([core_1.HostListener("dragover",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],DndDirective.prototype,"onDragOver",null),__decorate([core_1.HostListener("dragleave",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],DndDirective.prototype,"onDragLeave",null),__decorate([core_1.HostListener("click",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],DndDirective.prototype,"onClick",null),__decorate([core_1.HostListener("drop",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],DndDirective.prototype,"onDrop",null),DndDirective=__decorate([core_1.Directive({selector:"[appDnd]"}),__metadata("design:paramtypes",[])],DndDirective),exports.DndDirective=DndDirective;