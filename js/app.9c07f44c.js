(function(){"use strict";var t={8132:function(t,e,i){var a=i(9242),s=i(3396);function l(t,e,i,a,l,o){const n=(0,s.up)("project-title"),d=(0,s.up)("add-task"),r=(0,s.up)("filter-task"),c=(0,s.up)("to-do-list");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(n),(0,s.Wm)(d,{onAddNewTask:o.addTask},null,8,["onAddNewTask"]),(0,s.Wm)(r,{onFilter:o.doFilter},null,8,["onFilter"]),(0,s.Wm)(c,{taskList:l.taskList,onDoTaskEdit:o.doTaskEdit,onDoneTaskEdit:o.doneTaskEdit,onWatchChange:o.watchChange,onRemove:o.removeTask},null,8,["taskList","onDoTaskEdit","onDoneTaskEdit","onWatchChange","onRemove"])])}var o=i(7139),n=i.p+"img/minus.75d3dab9.svg";const d={key:0,class:"task-list__item"},r=["onUpdate:modelValue","checked"],c={key:0,class:"task-list__title-block"},k={class:"task-list__title"},u=["onClick"],p=["onUpdate:modelValue"],h=["onClick"],f=["onClick"],m=(0,s._)("img",{src:n,alt:""},null,-1),_=[m];function g(t,e,i,l,n,m){return(0,s.wg)(),(0,s.iD)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.taskList,((i,l)=>((0,s.wg)(),(0,s.iD)("div",{class:"task-list",key:i.id},[i.display?((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("form",{class:"task-list__form",action:"",onSubmit:e[1]||(e[1]=(0,a.iM)((()=>{}),["prevent"]))},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t=>i.checked=t,type:"checkbox",class:"task-list__checkbox",checked:i.checked,onChange:e[0]||(e[0]=(...t)=>m.watchChange&&m.watchChange(...t))},null,40,r),[[a.e8,i.checked]])],32),i.isTaskTitleEdit?((0,s.wg)(),(0,s.iD)("form",{key:1,class:"task-list__title-block task__title-block_edit",action:"#",onSubmit:e[2]||(e[2]=(0,a.iM)(((...e)=>t.submitTitle&&t.submitTitle(...e)),["prevent"]))},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t=>i.taskName=t,class:"task-list__title tasktitle-input input",type:"text",autofocus:""},null,8,p),[[a.nr,i.taskName]]),(0,s._)("a",{class:"task-list__edit",href:"#",onClick:(0,a.iM)((t=>m.doneTaskEdit(l)),["prevent"])},"сохранить",8,h)],32)):((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("h2",k,(0,o.zw)(i.taskName),1),(0,s._)("a",{class:"task-list__edit",href:"#",onClick:(0,a.iM)((e=>m.doTaskEdit(l,t.e)),["prevent"])},"редактировать ",8,u)])),(0,s._)("a",{href:"#",class:"task-list__delete",onClick:(0,a.iM)((e=>t.$emit("remove",i)),["prevent"])},_,8,f)])):(0,s.kq)("",!0)])))),128))])}var v={props:{taskList:{type:Array,required:!0}},methods:{doTaskEdit(t){this.$emit("doTaskEdit",t)},doneTaskEdit(t){this.$emit("doneTaskEdit",t)},watchChange(){this.$emit("watchChange")}}},y=i(89);const T=(0,y.Z)(v,[["render",g]]);var w=T,C=i.p+"img/edit_icon.e7dbf23a.svg",b=i.p+"img/done_icon.5b1d1477.svg";const N={class:"title-section"},E={key:0,class:"title-block"},L={class:"title showed-title"},S=(0,s._)("img",{src:C,alt:""},null,-1),D=[S],O=(0,s._)("img",{src:b,alt:""},null,-1),U=[O];function F(t,e,i,l,n,d){return(0,s.wg)(),(0,s.iD)("div",N,[n.IsEditTitle?((0,s.wg)(),(0,s.iD)("form",{key:1,class:"title-block title-block__edit",action:"#",onSubmit:e[3]||(e[3]=(0,a.iM)(((...t)=>d.doneEdit&&d.doneEdit(...t)),["prevent"]))},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>n.title=t),class:"title title-input input",type:"text",autofocus:""},null,512),[[a.nr,n.title]]),(0,s._)("a",{class:"done",onClick:e[2]||(e[2]=(...t)=>d.doneEdit&&d.doneEdit(...t))},U)],32)):((0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("h1",L,(0,o.zw)(n.title),1),(0,s._)("a",{class:"edit",onClick:e[0]||(e[0]=(...t)=>d.doEdit&&d.doEdit(...t))},D)]))])}var x={data(){return{title:"Название проекта",IsEditTitle:!1}},methods:{doEdit(){this.IsEditTitle=!0},doneEdit(){this.IsEditTitle=!1}},mounted(){localStorage.title&&(this.title=localStorage.title)},watch:{title(t){localStorage.title=t}}};const M=(0,y.Z)(x,[["render",F]]);var j=M,V=i.p+"img/add-icon.bdc67cd9.svg";const W=(0,s._)("img",{src:V,alt:"icon"},null,-1),$=[W];function A(t,e,i,l,o,n){return(0,s.wg)(),(0,s.iD)("form",{class:"add-task__form",action:"#",onSubmit:e[2]||(e[2]=(0,a.iM)(((...t)=>n.addNewTask&&n.addNewTask(...t)),["prevent"]))},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>this.task.taskName=t),type:"text",class:"add-task__input",placeholder:"Введите задачу"},null,512),[[a.nr,this.task.taskName]]),(0,s._)("a",{href:"#",class:"add-task__submit",onClick:e[1]||(e[1]=(0,a.iM)(((...t)=>n.addNewTask&&n.addNewTask(...t)),["prevent"]))},$)],32)}var J={data(){return{task:{taskName:"",isTaskTitleEdit:!1,checked:!1,display:!0}}},methods:{addNewTask(){this.task.taskName&&(this.task.id=Date.now(),this.$emit("addNewTask",this.task),this.task={taskName:"",isTaskTitleEdit:!1,checked:!1,display:!0})}}};const Z=(0,y.Z)(J,[["render",A]]);var I=Z;const P={class:"filter__block"},q=(0,s._)("option",{value:"all"},"все",-1),z=(0,s._)("option",{value:"yes"},"выполненные",-1),K=(0,s._)("option",{value:"no"},"не выполненные",-1),R=[q,z,K];function H(t,e,i,l,o,n){return(0,s.wg)(),(0,s.iD)("form",P,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.filterName=t),type:"text",class:"filter__byname",placeholder:"поиск по имени",onKeyup:e[1]||(e[1]=(...t)=>n.doFilter&&n.doFilter(...t))},null,544),[[a.nr,o.filterName]]),(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.filterChecked=t),onChange:e[3]||(e[3]=(...t)=>n.doFilter&&n.doFilter(...t)),class:"filter__bychecked"},R,544),[[a.bM,o.filterChecked]])])}var Y={data(){return{filterName:"",filterChecked:""}},mounted(){localStorage.filterName&&(this.filterName=localStorage.filterName),localStorage.filterChecked&&(this.filterChecked=localStorage.filterChecked)},methods:{doFilter(){this.$emit("filter",this.filterName,this.filterChecked),localStorage.filterName=this.filterName,localStorage.filterChecked=this.filterChecked}},updated(){this.doFilter()}};const B=(0,y.Z)(Y,[["render",H]]);var G=B,Q={components:{ToDoList:w,ProjectTitle:j,AddTask:I,FilterTask:G},name:"App",data(){return{taskList:[]}},mounted(){localStorage.taskList&&(this.taskList=JSON.parse(localStorage.taskList))},methods:{addTask(t){this.taskList.push(t),localStorage.taskList=JSON.stringify(this.taskList)},removeTask(t){this.taskList=this.taskList.filter((e=>e.id!==t.id)),localStorage.taskList=JSON.stringify(this.taskList)},doTaskEdit(t){this.taskList[t].isTaskTitleEdit=!0},doneTaskEdit(t){this.taskList[t].isTaskTitleEdit=!1,localStorage.taskList=JSON.stringify(this.taskList)},watchChange(){localStorage.taskList=JSON.stringify(this.taskList)},doFilter(t,e){console.log(t,e),this.taskList.forEach((i=>{t&&e?i.taskName.toUpperCase().includes(t.toUpperCase())&&"yes"===e?i.checked?i.display=!0:i.display=!1:i.taskName.toUpperCase().includes(t.toUpperCase())&&"no"===e?i.checked?i.display=!1:i.display=!0:e?i.taskName.toUpperCase().includes(t.toUpperCase())?i.display=!0:i.display=!1:i.display=!0:e?("no"==e&&(i.checked?i.display=!1:i.display=!0),"yes"===e&&(i.checked?i.display=!0:i.display=!1),"all"===e&&(i.display=!0)):t?i.taskName.toUpperCase().includes(t.toUpperCase())?i.display=!0:i.display=!1:i.display=!0}))}}};const X=(0,y.Z)(Q,[["render",l]]);var tt=X;(0,a.ri)(tt).mount("#app")}},e={};function i(a){var s=e[a];if(void 0!==s)return s.exports;var l=e[a]={exports:{}};return t[a](l,l.exports,i),l.exports}i.m=t,function(){var t=[];i.O=function(e,a,s,l){if(!a){var o=1/0;for(c=0;c<t.length;c++){a=t[c][0],s=t[c][1],l=t[c][2];for(var n=!0,d=0;d<a.length;d++)(!1&l||o>=l)&&Object.keys(i.O).every((function(t){return i.O[t](a[d])}))?a.splice(d--,1):(n=!1,l<o&&(o=l));if(n){t.splice(c--,1);var r=s();void 0!==r&&(e=r)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[a,s,l]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/to-do/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,l,o=a[0],n=a[1],d=a[2],r=0;if(o.some((function(e){return 0!==t[e]}))){for(s in n)i.o(n,s)&&(i.m[s]=n[s]);if(d)var c=d(i)}for(e&&e(a);r<o.length;r++)l=o[r],i.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return i.O(c)},a=self["webpackChunkto_do"]=self["webpackChunkto_do"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(8132)}));a=i.O(a)})();
//# sourceMappingURL=app.9c07f44c.js.map