"use strict";(self.webpackChunkfktech=self.webpackChunkfktech||[]).push([[772],{9772:(s,e,a)=>{a.r(e),a.d(e,{default:()=>j});var l=a(5705),c=a(2791),i=a(8007),r=a(9434),n=a(2235);class o{constructor(){this.email="",this.password="",this.confirmPassword=""}}var d=a(557),t=(a(5598),a(8074)),m=a(7689),f=a(1896),h=a(5349),u=a(164),x=a(184);const j=s=>{const e=i.Ry().shape({email:i.Z_().email(" Invalid email address").required("email is required"),password:i.Z_().required("password is required").min(6,"Password must be at least 6 characters"),confirmPassword:i.Z_().required("Please confirm your password").oneOf([i.iH("password"),null],"Password must match")}),[a,j]=(0,c.useState)(new o),p=(0,r.I0)(),w=(0,r.v9)((s=>s.loader.showLoader)),v=(0,r.v9)((s=>s.loader.errorMessage)),N=(0,r.v9)((s=>s.loader.successMessage)),b=(0,m.s0)();return(0,c.useEffect)((()=>{p((0,d.uH)("")),p((0,d.GC)(""))}),[]),(0,x.jsxs)("div",{className:"container",children:[w&&(0,x.jsx)(n.Z,{}),v&&(0,x.jsx)(h.Z,{}),N&&(0,x.jsx)(u.Z,{}),(0,x.jsx)("section",{className:"section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row justify-content-center",children:(0,x.jsxs)("div",{className:"col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center",children:[(0,x.jsx)("div",{className:"d-flex justify-content-center py-4",children:(0,x.jsxs)("a",{href:"index.html",className:"logo d-flex align-items-center w-auto",children:[(0,x.jsx)("img",{src:"",alt:""}),(0,x.jsx)("span",{className:"d-none d-lg-block",children:"FKTECH"})]})}),(0,x.jsx)("div",{className:"card mb-3",children:(0,x.jsxs)("div",{className:"card-body",children:[(0,x.jsxs)("div",{className:"pt-4 pb-2",children:[(0,x.jsx)("h5",{className:"card-title text-center pb-0 fs-4",children:"Create an Account"}),(0,x.jsx)("p",{className:"text-center small",children:"Enter your personal details to create account"})]}),(0,x.jsx)(l.J9,{enableReinitialize:!0,initialValues:a,onSubmit:function(s,e){p((0,d.kz)(!0)),p((0,t.q9)(s)).then((s=>{const a=s.type.split("/"),l=a[a.length-1];if("fulfilled"===l)e.resetForm(),p((0,d.uH)("")),p((0,d.GC)("Signup Successfully!")),(0,f.n_)(p,1e3*s.payload.expiresIn,b),b("/login");else if("rejected"===l){const e=(0,f.Z)(s.payload.error);p((0,d.uH)(e)),p((0,d.GC)(""))}}))},validationSchema:e,children:s=>{let{touched:e,errors:a}=s;return(0,x.jsxs)(l.l0,{className:"row g-3 needs-validation",children:[(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsx)("label",{for:"email",className:"form-label",children:"Your Email"}),(0,x.jsx)(l.gN,{type:"email",name:"email",id:"email",className:"form-control \n                                        ".concat(e.email&&a.email&&"is-invalid"," ").concat(e.email&&!a.email&&"is-valid")}),(0,x.jsx)(l.Bc,{name:"email",component:"div",className:"invalid-feedback"})]}),(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsx)("label",{for:"password",className:"form-label",children:"Password"}),(0,x.jsx)(l.gN,{type:"password",name:"password",id:"password",className:"form-control \n                                        ".concat(e.password&&a.password&&"is-invalid"," \n                                        ").concat(e.password&&!a.password&&"is-valid")}),(0,x.jsx)(l.Bc,{name:"password",component:"div",className:"invalid-feedback"})]}),(0,x.jsxs)("div",{className:"col-12",children:[(0,x.jsx)("label",{for:"confirmPassword",className:"form-label",children:"Confirm Password"}),(0,x.jsx)(l.gN,{type:"password",name:"confirmPassword",id:"confirmPassword",className:"form-control \n                                        ".concat(e.confirmPassword&&a.confirmPassword&&"is-invalid"," \n                                        ").concat(e.confirmPassword&&!a.confirmPassword&&"is-valid")}),(0,x.jsx)(l.Bc,{name:"confirmPassword",component:"div",className:"invalid-feedback"})]}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("button",{className:"btn btn-primary w-100",type:"submit",children:"Create Account"})}),(0,x.jsx)("div",{className:"col-12",children:(0,x.jsxs)("p",{className:"small mb-0",children:["Already have an account? ",(0,x.jsx)("a",{href:"/login",children:"Log in"})]})})]})}})]})}),(0,x.jsx)("div",{className:"credits",children:"Designed by FouwaKu"})]})})})})]})}},5598:()=>{}}]);
//# sourceMappingURL=772.95032149.chunk.js.map