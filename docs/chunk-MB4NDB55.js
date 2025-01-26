import{$ as E,$a as j,Aa as V,Ba as R,Ca as i,Da as o,Ea as d,Fa as z,Ga as r,Ha as F,I as S,Ia as I,Ja as N,Ka as _,La as f,Ma as a,N as v,Na as q,Oa as H,Pa as Q,T as y,U as w,Ua as b,aa as g,ab as A,ba as u,ja as D,ka as C,oa as O,pa as B,sa as m,ua as P,za as M}from"./chunk-24A3DCWW.js";var J=["button"],U=["*"],X=(s,e,t)=>({"is-command":s,"is-equal":e,"is-pressed":t}),p=class s{isPressed=u(!1);onClick=E();contentValue=O("button");isCommand=g(!1,{transform:e=>typeof e=="string"?e==="":e});isDoubleSize=g(!1,{transform:e=>typeof e=="string"?e==="":e});handleClick(){this.contentValue()?.nativeElement&&this.onClick.emit(this.contentValue().nativeElement.innerText.trim())}keyboardPressedStyle(e){!this.contentValue()||this.contentValue().nativeElement.innerText!==e||(this.isPressed.set(!0),setTimeout(()=>{this.isPressed.set(!1)},150))}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=m({type:s,selectors:[["calculator-button"]],viewQuery:function(t,n){t&1&&_(n.contentValue,J,5),t&2&&f()},hostAttrs:[1,"border-r","border-b","border-indigo-400"],hostVars:4,hostBindings:function(t,n){t&2&&V("w-2/4",n.isDoubleSize())("w-1/4",!n.isDoubleSize())},inputs:{isCommand:[1,"isCommand"],isDoubleSize:[1,"isDoubleSize"]},outputs:{onClick:"onClick"},ngContentSelectors:U,decls:3,vars:5,consts:[["button",""],[3,"click","ngClass"]],template:function(t,n){if(t&1){let c=z();I(),i(0,"button",1,0),r("click",function(){return y(c),w(n.handleClick())}),N(2),o()}t&2&&M("ngClass",Q(1,X,n.isCommand(),n.isDoubleSize(),n.isPressed()))},dependencies:[A,j],styles:["button[_ngcontent-%COMP%]{height:4rem;width:100%;font-size:1.25rem;line-height:1.75rem;font-weight:300;color:#fff;--tw-text-opacity: .5;outline:2px solid transparent;outline-offset:2px}button[_ngcontent-%COMP%]:hover{background-color:#4338ca33}button[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}.is-command[_ngcontent-%COMP%]{background-color:#4338ca1a}.is-equal[_ngcontent-%COMP%]{background-color:#4338ca4d}.is-equal[_ngcontent-%COMP%]:hover{background-color:#4338ca66}@keyframes _ngcontent-%COMP%_ping{75%,to{transform:scale(2);opacity:0}}.is-pressed[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_ping 1s cubic-bezier(0,0,.2,1) infinite;background-color:#4338ca66}"],changeDetection:0})};var L=["0","1","2","3","4","5","6","7","8","9"],W=["+","-","\u2A09","\xF7","%"],Y=["+ / -",".","=","C","Backspace"],h=class s{resultText=u("1234.56");subResultText=u("0");lastOperator=u("");constructOperation(e){if(![...L,...W,...Y].includes(e)){console.log("invalid input",e);return}switch(e){case"=":if(this.lastOperator()==="")return;this.calculateResult();return;case"C":this.resultText.set("0"),this.subResultText.set("0"),this.lastOperator.set("");return;case"Backspace":if(this.resultText()==="0")return;if(this.resultText().length===1||this.resultText().startsWith("-")&&this.resultText().length===2){this.resultText.set("0");return}this.resultText.update(t=>t.slice(0,-1));return;case"+ / -":if(this.resultText().includes("-")){this.resultText.update(t=>t.slice(1));return}this.resultText.update(t=>"-"+t);return}if(this.resultText().length>=8){console.log("Max length reached");return}if(W.includes(e)){this.lastOperator()!==""?this.lastOperator.set(e):(this.lastOperator.set(e),this.subResultText.set(this.resultText()),this.resultText.set("0"));return}if(e==="."&&!this.resultText().includes(".")){this.resultText.update(t=>t+".");return}if(!(e==="0"&&(this.resultText()==="0"||this.resultText()==="-0"))&&L.includes(e)){if(this.resultText()==="0"||this.resultText()==="-0"){this.resultText.update(t=>t.replace("0",e));return}this.resultText.update(t=>t+e)}}calculateResult(){let e=parseFloat(this.subResultText()),t=parseFloat(this.resultText()),n=0;switch(this.lastOperator()){case"+":n=e+t;break;case"-":n=e-t;break;case"\u2A09":n=e*t;break;case"\xF7":n=e/t;break;case"%":n=e%t;break}this.resultText.set(n.toString()),this.subResultText.set("0"),this.lastOperator.set("")}static \u0275fac=function(t){return new(t||s)};static \u0275prov=S({token:s,factory:s.\u0275fac,providedIn:"root"})};function Z(s,e){if(s&1&&(i(0,"span",7),a(1),o(),d(2,"br")),s&2){let t=F();C(),H("",t.subResultText()," ",t.lastOperator(),"")}}var G={Escape:"C",Clear:"C",c:"C","*":"\u2A09","/":"\xF7",Enter:"="},k=class s{_calculatorService=v(h);calculatorButtons=B(p);resultText=b(()=>this._calculatorService.resultText());subResultText=b(()=>this._calculatorService.subResultText());lastOperator=b(()=>this._calculatorService.lastOperator());handleClick(e){let t=G[e]??e;this._calculatorService.constructOperation(t)}handleKeyboardEvent({key:e}){let t=G[e]??e;this.handleClick(t),this.calculatorButtons().forEach(n=>{n.keyboardPressedStyle(t)})}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=m({type:s,selectors:[["calculator"]],viewQuery:function(t,n){t&1&&_(n.calculatorButtons,p,5),t&2&&f()},hostBindings:function(t,n){t&1&&r("keyup",function(l){return n.handleKeyboardEvent(l)},!1,D)},decls:49,vars:2,consts:[[1,"w-screen","max-w-[300px]","h-40","bg-gradient-to-b","from-gray-800","to-gray-700","flex","items-end","text-right"],[1,"w-full","py-5","px-6","text-6xl","text-white","font-thin"],[1,"w-full","bg-gradient-to-b","from-indigo-400","to-indigo-500"],[1,"flex","w-full"],[3,"onClick"],["isCommand","",3,"onClick"],["isDoubleSize","",3,"onClick"],[1,"text-4xl"]],template:function(t,n){t&1&&(i(0,"div",0)(1,"div",1),P(2,Z,3,2),i(3,"span"),a(4),o()()(),i(5,"div",2)(6,"div",3)(7,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(8,"C"),o(),i(9,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(10,"+ / -"),o(),i(11,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(12,"%"),o(),i(13,"calculator-button",5),r("onClick",function(l){return n.handleClick(l)}),a(14,"\xF7"),o()(),i(15,"div",3)(16,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(17,"7"),o(),i(18,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(19,"8"),o(),i(20,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(21,"9"),o(),i(22,"calculator-button",5),r("onClick",function(l){return n.handleClick(l)}),a(23,"\u2A09"),o()(),i(24,"div",3)(25,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(26,"4"),o(),i(27,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(28,"5"),o(),i(29,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(30,"6"),o(),i(31,"calculator-button",5),r("onClick",function(l){return n.handleClick(l)}),a(32,"-"),o()(),i(33,"div",3)(34,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(35,"1"),o(),i(36,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(37,"2"),o(),i(38,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(39,"3"),o(),i(40,"calculator-button",5),r("onClick",function(l){return n.handleClick(l)}),a(41,"+"),o()(),i(42,"div",3)(43,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(44,"0"),o(),i(45,"calculator-button",4),r("onClick",function(l){return n.handleClick(l)}),a(46,"."),o(),i(47,"calculator-button",6),r("onClick",function(l){return n.handleClick(l)}),a(48,"="),o()()()),t&2&&(C(2),R(n.subResultText()!=="0"?2:-1),C(2),q(n.resultText()))},dependencies:[p],encapsulation:2,changeDetection:0})};var T=class s{static \u0275fac=function(t){return new(t||s)};static \u0275cmp=m({type:s,selectors:[["calculator-view"]],decls:2,vars:0,consts:[[1,"w-full","mx-auto","rounded-xl","bg-gray-100","shadow-xl","text-gray-800","relative","overflow-hidden"]],template:function(t,n){t&1&&(i(0,"div",0),d(1,"calculator"),o())},dependencies:[k],encapsulation:2,changeDetection:0})};export{T as default};
