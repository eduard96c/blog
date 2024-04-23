(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>x});var i=t(601),o=t.n(i),r=t(314),a=t.n(r),l=t(417),c=t.n(l),d=new URL(t(639),t.b),p=a()(o()),s=c()(d);p.push([n.id,`html {\n  min-height: 100%;\n  margin: 0;\n}\nbody {\n  display: flex;\n  margin: 0;\n  min-height: 100%;\n  flex-direction: column;\n  align-items: center;\n  font-family: "Questrial";\n  letter-spacing: 0.9px;\n  background-attachment: fixed;\n  position: relative;\n  /* Folosește o singură proprietate background */\n  background: linear-gradient(\n      174deg,\n      rgba(233, 244, 255, 0.8) 40%,\n      rgb(13, 93, 178, 0.8) 17%\n    ),\n    url(${s}) center left / auto no-repeat; /* Adaugă calea către imaginea ta */\n}\n\n.logo-container {\n  /*imagine logo*/\n  display: flexbox;\n  align-items: center;\n  width: 90px;\n  height: 90px;\n}\n.titlu {\n  color: #51768f;\n  font-size: 30px;\n}\n\nheader h1 {\n  font-size: 40px;\n  text-align: center;\n  display: flex;\n  margin-left: 20px;\n}\n#main-heading {\n  font-size: 50px;\n  text-align: center;\n}\n*,\n::after,\n::before {\n  box-sizing: border-box;\n}\n#main {\n  display: flex;\n  flex: 3;\n  width: 1200px;\n  margin-top: 20px;\n}\nbody h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #51768f;\n}\nheader {\n  width: 100%;\n  flex: 1;\n}\n#nav {\n  padding: 20px 50px 20px 50px;\n  display: flex;\n  width: 100%;\n  height: 120px;\n  background: linear-gradient(to right, #ffffff, #88ffe2, #0d5db2);\n  box-shadow: 1px 1px 3px #aaa;\n  justify-content: space-between;\n}\n#nav ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n}\n#nav li {\n  padding: 10px;\n}\n#nav a {\n  font-size: 20px;\n  text-decoration: none;\n  color: #fafafa;\n  font-weight: bold;\n  transition: all 0.4s;\n}\n#nav a:hover {\n  color: black;\n}\n#main-content {\n  flex: 2;\n  margin: 10px;\n}\n\n#side-menu {\n  max-width: 350px;\n  flex: 1;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  height: 80vh;\n  position: sticky;\n  top: 0;\n}\n#side-menu section {\n  background-color: white;\n  box-shadow: 1px 1px 3px #aaa;\n}\n#subscribe {\n  flex: 1;\n  margin-bottom: 10px;\n  text-align: center;\n}\n#subscribe h3 {\n  margin: 10px;\n  font-size: 24px;\n}\n#subscribe-form {\n  padding: 0 15px 15px 15px;\n  display: flex;\n  flex-direction: column;\n}\n#subscribe-form input {\n  margin-top: 5px;\n  padding: 10px;\n  font-size: 15px;\n}\n#subscribe-form input:not(:last-child) {\n  border: 1px solid #e4e4e4;\n}\n\n#subscribe-form input:last-child {\n  background-color: #0d6efd;\n  border: none;\n  color: white;\n  margin-top: 10px;\n}\n#subscribe-form input:last-child:hover {\n  background-color: #0b5ed7;\n  cursor: pointer;\n}\n#categories {\n  flex: 3;\n  padding: 0 15px 15px 15px;\n}\n#categories h3 {\n  font-size: 26px;\n  margin: 10px;\n  text-align: center;\n}\n.side-menu-list {\n  list-style-type: none;\n  padding: 0;\n  margin-top: 0px;\n}\n#categories ul li {\n  margin-top: 10px 0 10px 0;\n  padding: 10px;\n  transition: all 0.5s;\n}\n#categories ul li:hover {\n  background-color: #0d6efd;\n  cursor: pointer;\n}\n#categories ul li:hover a {\n  color: white;\n}\n#categories ul li a {\n  font-size: 17px;\n  color: #0d6efd;\n  text-decoration: none;\n}\n#main-article-wrapper {\n  position: relative;\n  height: 300px;\n}\n#main-article-wrapper h2 {\n  color: white;\n}\n#main-article-wrapper:hover .main-article-overlay-cover {\n  width: 60%;\n  cursor: pointer;\n}\n#main-article-wrapper:hover {\n  cursor: pointer;\n}\n#main-article-wrapper:hover .main-article-overlay-content div:last-child {\n  color: black;\n}\n#main-article-wrapper:hover .main-article-overlay-content div:first-child {\n  padding-left: 30px;\n}\n.main-article-card {\n  position: relative;\n}\n.main-article-card img {\n  width: 100%;\n  border-radius: 15px;\n}\n.main-article-overlay-cover {\n  transition: all 0.4s;\n  background-color: rgba(91, 91, 91, 0.6);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  border-radius: 15px;\n}\n.main-article-overlay-content {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  line-height: 25px;\n  color: white;\n  border-radius: 15px;\n}\n.main-article-overlay-content div {\n  transition: all 0.4s;\n  flex: 1;\n  padding: 15px;\n  overflow: hidden;\n}\n.main-article-overlay-content div:last-child {\n  text-align: right;\n}\n#main-article-continue:after {\n  margin-left: 5px;\n  content: "\\00BB";\n}\n#main-article-continue {\n  font-weight: bold;\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 10px;\n}\n.content-container {\n  border-radius: 0.25rem;\n  box-shadow: 1px 1px 3px #aaa;\n}\n\n#blog-landing-articles {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n.article-container {\n  padding: 10px;\n  width: 50%;\n}\n\n/* ADD*/\n#main-article {\n  border: 1px solid #ccc;\n  padding: 20px;\n  transition: height 0.5s ease; /* Adaugăm o tranziție pentru o animație mai lină */\n  overflow: hidden; /* Ascundem conținutul care depășește fereastra */\n}\n\n#additional-content {\n  display: none; /* Textul suplimentar este ascuns în mod implicit */\n}\n\n#main-article-wrapper .content {\n  padding: 18px;\n  display: none;\n  overflow: hidden;\n  background-color: #fff; /* culoarea ferestrei albe */\n  border: 1px solid #ccc; /* adaugă o bordură subtilă */\n  z-index: 1;\n}\n.content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-30%, 5%);\n  background-color: white;\n  padding: 40px;\n  border: 1px solid #ccc;\n  border-radius: 15px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n/* ADD*/\n\n.article-card-content-holder {\n  background-color: white;\n  height: 260px;\n  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.35);\n  position: relative;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  overflow: hidden;\n  position: relative;\n}\n.card-button-holder {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.article-card-content {\n  padding: 15px;\n  position: relative;\n}\n.article-card-image-holder {\n  height: 165px;\n}\n.article-card-heading {\n  margin-bottom: 10px;\n}\n.article-card-heading h3 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  color: #464646;\n}\n.article-card-heading-info span {\n  font-size: 10px;\n  color: #6c757d;\n}\n\n.article-card-image-holder img {\n  width: 100%;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.article-card-text {\n  font-size: 15px;\n  line-height: 25px;\n  color: #464646;\n  overflow: hidden;\n  /*  -webkit-line-clamp: 4;*/\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  text-align: left;\n  word-break: break-all;\n}\n.article-card-text p {\n  margin: 0;\n  max-height: 75px;\n  overflow: hidden;\n}\n.article-card-content-holder a {\n  display: block;\n  transition: all 0.3s;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  color: #464646;\n  background-color: #d3def1;\n  padding: 7px 0 23px 20px;\n  height: 0px;\n  font-size: 15px;\n  font-weight: bold;\n  text-decoration: none;\n  padding-left: 1rem !important;\n  box-sizing: border-box;\n  height: 25px;\n}\n.article-card-content-holder a:after {\n  content: "\\00BB";\n}\n.article-card-content-holder a:hover {\n  cursor: pointer;\n  height: 45px;\n  padding-top: 15px;\n  color: #1c5fc3;\n}\n#more-articles {\n  font-size: 18px;\n  padding: 10px 35px 10px 35px;\n  /* margin-left: 10px; */\n  margin: 0 auto;\n  display: block;\n  width: 98%;\n  background-color: transparent;\n  border: 2px solid gray;\n  transition: all 0.6s;\n  background: darkgreen;\n  color: white;\n}\n#more-articles:hover {\n  border-color: white;\n  cursor: pointer;\n  background-color: #0d6efd;\n  color: white;\n}\n.section-rule {\n  width: 100%;\n  margin-bottom: 0;\n}\n#about {\n  margin-top: 50px;\n  margin-bottom: 50px;\n  width: 100%;\n  overflow: hidden;\n}\n#about h2 {\n  text-align: center;\n  font-size: 35px;\n  margin: 0;\n}\n#slide-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  margin: auto;\n}\n#slide-cards {\n  display: flex;\n  height: 420px;\n  justify-content: center;\n  align-items: center;\n}\n.slide-card {\n  display: none;\n  position: relative;\n  left: 0;\n  padding: 10px;\n}\n.about-separator {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n#slide-card-one {\n  /* display: none; */\n  box-shadow: 1px 1px 3px #aaa;\n  background-color: white;\n  height: 300px;\n  max-width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n}\n#slide-card-one img {\n  height: 200px;\n  width: 200px;\n  border-radius: 190px;\n  border: 1px solid #2a80d7;\n  padding: 5px;\n}\n#slide-card-one .about-name {\n  font-weight: bold;\n}\n#slide-card-one .about-occupation {\n  display: block;\n  color: #6c757d;\n}\n#slide-card-one .card-image-holder {\n  text-align: center;\n  padding: 15px;\n  flex: 1;\n  border-right: 1px solid #cbcdcf;\n}\n#slide-card-one .card-image-holder div {\n  line-height: 30px;\n}\n#slide-card-one .card-content-holder {\n  padding: 20px;\n  line-height: 30px;\n  flex: 2;\n}\n#slide-card-one .card-content-holder div:nth-child(2) {\n  flex: 2;\n  padding: 15px;\n  font-size: 25px;\n  display: flex;\n  /* justify-content: center; */\n  color: #1c5fc3;\n  gap: 30px;\n}\n#slide-card-two {\n  border-radius: 25px;\n  display: flex;\n  max-width: 1000px;\n  height: 300px;\n  margin: auto;\n  background-color: white;\n  box-shadow: 1px 1px 3px #aaa;\n}\n#slide-card-two .card-image-holder {\n  flex: 2;\n  margin: auto;\n  text-align: center;\n  height: 100%;\n}\n#slide-card-two .card-content-holder {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n  padding: 10px;\n  flex: 4;\n  display: flex;\n  flex-direction: column;\n}\n#slide-card-two .card-content-holder div:first-child {\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 60px;\n  padding-left: 60px;\n  align-items: end;\n}\n#slide-card-two .card-content-holder div:nth-child(2) {\n  flex: 2;\n}\n#slide-card-two .card-content-holder div:nth-child(3) {\n  flex: 2;\n  padding: 15px;\n  font-size: 25px;\n  display: flex;\n  justify-content: center;\n  color: #1c5fc3;\n  gap: 70px;\n}\n#slide-card-two img {\n  height: 100%;\n  width: 100%;\n  object-fit: fill;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n}\n#slide-card-two .about-name {\n  font-weight: bold;\n  font-size: 25px;\n  width: 50px;\n  line-height: 32px;\n  text-align: left;\n}\n#slide-card-two .about-occupation {\n  color: #6c757d;\n}\n#slide-card-two p {\n  line-height: 25px;\n  width: 80%;\n  text-align: left;\n  margin: 0 auto;\n  margin-top: 15px;\n}\n#slide-card-three {\n  /* display: none; */\n  width: 700px;\n  display: flex;\n  z-index: 99;\n  position: relative;\n  /* padding: 15px; */\n  height: 250px;\n  margin: auto;\n  border: 1px solid #bdc4cc;\n  box-shadow: 0px 23px 39px -25px rgba(0, 0, 0, 0.75);\n}\n#slide-card-three img {\n  height: 150px;\n  width: 150px;\n  border-radius: 190px;\n  position: absolute;\n  top: 15%;\n  left: 20%;\n}\n#slide-card-three .card-image-holder {\n  background: linear-gradient(\n    235deg,\n    white 0,\n    white 143px,\n    #037f9a 0,\n    #037f9a 100%\n  );\n\n  flex: 2;\n  position: relative;\n}\n#slide-card-three .card-content-holder {\n  flex: 4;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: center;\n  background: white;\n}\n#slide-card-three .about-name {\n  display: block;\n  font-size: 30px;\n  font-weight: bold;\n}\n#slide-card-three .about-occupation {\n  font-style: italic;\n  color: #037f9a;\n}\n#slide-card-three p {\n  font-size: 18px;\n  line-height: 25px;\n}\n.slide-card .card-footer {\n  width: 95%;\n  display: flex;\n  justify-content: center;\n  gap: 0px;\n  margin: auto;\n  text-align: center;\n  padding: 10px;\n  border: 1px solid #bdc4cc;\n  border-top: 0;\n  font-size: 25px;\n  gap: 45px;\n  color: #1c5fc3;\n  background: white;\n}\nfooter {\n  display: flex;\n  flex: 1;\n  width: 100%;\n  padding: 35px;\n  background-color: #2a3e52;\n  color: white;\n}\nfooter div {\n  margin: 0 auto;\n}\n#footer-text span:nth-child(1) {\n  display: block;\n  font-size: 27px;\n  text-align: center;\n}\n#footer-text span:nth-child(2) {\n  font-size: 18px;\n  display: block;\n  margin-top: 10px;\n  text-align: center;\n}\nfooter ul {\n  list-style: none;\n  display: flex;\n  padding: 0;\n  margin-top: 20px;\n}\n.link-separator {\n  margin-right: 15px;\n  margin-left: 15px;\n  margin-top: 0px;\n  color: #6c757d;\n}\nfooter a:visited {\n  color: white;\n}\n.slide-in {\n  animation: slide-in 1s 1;\n  display: block;\n}\n\n@keyframes slide-in {\n  0% {\n    left: 100%;\n  }\n\n  100% {\n    left: 0;\n  }\n}\n\n#slide-options {\n  padding-right: 15px;\n  margin: 0 auto;\n  width: 1000px;\n  font-size: 25px;\n}\n#slide-options span {\n  font-size: 17px;\n}\n#slide-selectors {\n  height: 0;\n  transition: all 0.5s;\n  padding-right: 15px;\n  margin: 0 auto;\n  width: 80%;\n  font-size: 25px;\n  text-align: center;\n}\n#slide-control:hover {\n  cursor: pointer;\n}\n.dot {\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n.dot:hover {\n  background-color: #717171;\n  cursor: pointer;\n}\n\n.selected-card {\n  background-color: #717171;\n}\n#article-main {\n  display: flex;\n  flex: 1;\n  width: 90%;\n  flex-wrap: wrap;\n  gap: 0;\n}\n#article-main h1 {\n  width: 100%;\n  max-height: 25px;\n  text-align: center;\n}\n#left-section {\n  display: flex;\n  flex-direction: column;\n  height: 80vh;\n  /* border: 1px solid red; */\n  flex: 2;\n  margin: 10px;\n}\n#article-wrapper {\n  flex: 5;\n  display: flex;\n  flex-direction: column;\n  /* height: 100%; */\n  margin: 10px;\n}\n#right-section {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0 0 10px;\n  min-width: 300px;\n  height: 80vh;\n  flex: 1;\n  position: sticky;\n  top: 0;\n}\n#right-section section {\n  background-color: white;\n  box-shadow: 1px 1px 3px #aaa;\n}\n#right-section #subscribe h3 {\n  padding-top: 5px;\n}\n#table-of-contents {\n  padding: 0 10px 0 10px;\n  flex: 6;\n}\n#table-of-contents h3 {\n  font-size: 26px;\n  text-align: center;\n}\n#table-of-contents li {\n  margin: 20px 0 20px 0;\n}\n#table-of-contents a {\n  color: #0d6efd;\n  text-decoration: none;\n  font-size: 15px;\n}\n#table-of-contents a:hover {\n  cursor: pointer;\n  color: #0a58ca;\n}\n#article-header {\n  flex: 1;\n}\n#article-header img {\n  width: 100%;\n  box-shadow: 0px 23px 39px -25px rgba(0, 0, 0, 0.75);\n}\n#article-header #image-holder {\n  height: 350px;\n}\n#article-content {\n  margin-top: 10px;\n  flex: 1;\n  /* border: 1px solid red; */\n  /* box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3); */\n  padding: 15px;\n  /* margin-top: 20px; */\n  border-radius: 5px;\n  overflow: auto;\n  height: 100%;\n  word-break: break-all;\n}\n#article-info {\n  font-size: 14px;\n  padding: 10px;\n  width: 90%;\n  margin: auto;\n  /* border: 1px solid #bdc4cc; */\n  border-top: 0;\n  /* background: #fff; */\n  padding-top: 0;\n}\n#date,\n#author {\n  font-weight: bold;\n  font-weight: normal;\n  background: #037f9a;\n  color: white;\n  padding: 10px;\n  border-radius: 10px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n#date,\n#category {\n  float: left;\n  margin-right: 5px;\n}\n#author {\n  background: #ffb001;\n}\n#author {\n  float: right;\n}\n.article-content-section p {\n  font-size: 17px;\n  line-height: 30px;\n  text-align: justify;\n}\n.article-image-holder {\n  text-align: center;\n}\n.article-image-holder img {\n  height: 300px;\n  width: 90%;\n  margin: auto;\n  display: block;\n}\n.article-image-holder span {\n  text-align: center;\n  font-style: italic;\n  margin-top: 5px;\n  display: block;\n}\n.code-section {\n  border-left: 10px solid #358ccb;\n}\n.code-content {\n  width: 100%;\n  display: block;\n  background-color: white;\n}\n.code-content p {\n  display: block;\n  font-size: 0;\n  line-height: 20px;\n  margin: 0;\n  padding-left: 50px;\n}\n.code-content span {\n  font-size: 17px;\n}\n.code-content p:nth-child(odd) {\n  background-color: #f6f9fb;\n}\n.var {\n  color: blue;\n}\n.var-name {\n  color: red;\n}\n.function {\n  color: #d3c763;\n}\n.string {\n  color: #bd8806;\n}\n.indent-1 {\n  text-indent: 40px;\n}\n.indent-2 {\n  text-indent: 70px;\n}\n.about-placeholder {\n  font-style: italic;\n  text-decoration: underline;\n}\n#article-author-card {\n  /* margin: 15px; */\n  display: flex;\n  flex-direction: column;\n  flex: 3;\n  /* border: 1px solid blue; */\n  background-color: white;\n  box-shadow: 3px 2px 10px #aaa;\n  flex-wrap: nowrap;\n  text-align: center;\n}\n#article-author-card h3 {\n  margin-bottom: 0;\n}\n#author-card-header {\n  padding: 10px;\n  flex: 2;\n  text-align: center;\n  border-bottom: 1px solid #bdc4cc;\n}\n#author-card-header img {\n  height: 170px;\n  width: 170px;\n  padding: 2px;\n  border: 1px solid #037f9a;\n  border-radius: 140px;\n  margin: auto;\n  display: block;\n}\n#author-card-header div {\n  margin-top: 5px;\n}\n#author-card-header span {\n  font-size: 17px;\n  font-weight: bold;\n}\n#author-card-body {\n  flex: 2;\n  /* max-height: 180px; */\n  padding: 10px;\n  border-bottom: 1px solid #bdc4cc;\n  flex-shrink: 5;\n}\n#author-card-body p {\n  text-align: center;\n  margin-top: 0px;\n  font-size: 15px;\n  line-height: 20px;\n}\n#author-card-body div {\n  display: flex;\n  /* align-items: center; */\n  justify-content: space-evenly;\n}\n#author-card-body div:nth-child(3) {\n  justify-content: space-evenly;\n  /* margin-top: 25px; */\n  padding: 15px 0 0 0;\n}\n#author-card-body div:nth-child(3) span:nth-child(2) {\n  font-weight: bold;\n}\n#author-card-body div:nth-child(3) div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#author-card-body button {\n  color: white;\n  font-size: 18px;\n  padding: 10px 20px 10px 20px;\n  background-color: #037f9a;\n  border: 1px solid #a0a0a0;\n  border-radius: 4px;\n}\n#author-card-body button:hover {\n  cursor: pointer;\n}\n#author-card-footer {\n  flex: 1;\n  padding: 10px;\n  background: #ededed;\n}\n.card-skill {\n  padding: 5px;\n  border: 1px solid black;\n  float: left;\n  margin: 5px;\n}\n#author-articles {\n  padding: 0 10px 0 10px;\n  flex: 1;\n  margin-top: 10px;\n  box-shadow: 3px 2px 10px #aaa;\n  background-color: white;\n}\n#author-articles li::before {\n  content: "\\27A5";\n  color: black;\n}\n#author-articles li:hover {\n  cursor: pointer;\n}\n#author-articles li {\n  margin: 15px 0 10px 0;\n  font-size: 15px;\n  color: #0d6efd;\n  line-height: 25px;\n}\n#author-articles button {\n  margin-bottom: 10px;\n  font-size: 17px;\n}\n#comments {\n  flex: 1;\n  margin-top: 15px;\n  padding: 10px;\n  background-color: white;\n}\n#comments .input-group {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  font-size: 17px;\n}\n#comments .input-group input,\n#comments textarea {\n  font-size: 17px;\n  border: 1px solid #e4e4e4;\n  padding: 5px;\n}\n#comments #name,\n#comments #email {\n  max-width: 300px;\n}\n#submit-comment {\n  margin-top: 10px;\n  font-size: 17px;\n  padding: 10px;\n  background-color: #0d6efd;\n  border: 1px solid gray;\n  color: white;\n  border-radius: 5px;\n}\n#submit-comment:hover {\n  cursor: pointer;\n}\n.comment-wrapper {\n  /* width: 70%; */\n  padding: 10px;\n  line-height: 25px;\n  border-left: 5px solid #0d6efd;\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);\n  border-top-right-radius: 20px;\n  margin: 10px;\n}\n.comment-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.comment-name {\n  font-style: italic;\n  font-weight: bold;\n}\n.comment-wrapper img {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n}\n.comment-date {\n  font-size: 15px;\n  color: #6c757d;\n}\n.comment-date span {\n  font-weight: normal;\n}\n#more-section {\n  flex: 3;\n  /* border: 1px solid; */\n  width: 90%;\n  margin-top: 20px;\n  text-align: center;\n}\n#more-articles-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n.more-card {\n  flex: 1;\n  border: 1px solid;\n  margin: 5px;\n}\n\n/*add*/\n.contentsmall {\n  position: fixed;\n  top: 20%;\n  left: 5%;\n  width: 60%; /* Latimea de 100% a containerului */\n  height: 60%; /* Inaltimea de 100% a containerului */\n  background-color: white;\n  padding: 40px;\n  border: 1px solid #ccc;\n  border-radius: 15px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  transform: translate(50%, 20%);\n  z-index: 9999;\n  overflow-y: auto; /* Permite scroll pe axa verticală */\n}\n\n/*button*/\nbutton {\n  border-radius: 5px;\n  box-shadow: #000000;\n  color: rgb(0, 0, 0);\n  padding: 10px 20px 10px 20px;\n  background-color: #d3def1;\n}\n\n#article-create-modal,\n#article-modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(0, 0, 0, 0.5);\n  top: 0;\n  right: 0;\n}\n#modal-form-wrapper {\n  padding: 20px;\n  width: 75%;\n  height: 80vh;\n  background-color: white;\n  margin: 0 auto;\n  position: sticky;\n  top: 40px;\n  border-radius: 5px;\n  display: flex;\n}\n#form-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.close-modal {\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 180px;\n  border: 1px solid black;\n}\n#modal-form-wrapper h3 {\n  margin: 0;\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n.input-group select {\n  width: 200px;\n  padding: 5px;\n  font-size: 17px;\n}\n.input-group label {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.input-group input {\n  width: 70%;\n  font-size: 17px;\n  padding: 5px;\n}\n#save-article {\n  padding: 10px;\n  border-radius: 3px;\n  border: 1px solid;\n  background-color: green;\n  color: white;\n  cursor: pointer;\n}\n.control-btn {\n  cursor: pointer;\n}\n.control-btn:hover {\n  font-size: 17px;\n}\n#article-content-wrapper {\n  position: relative;\n  padding: 20px;\n  width: 80%;\n  height: 95vh;\n  background-color: white;\n  margin: 0 auto;\n  position: sticky;\n  top: 20px;\n  border-radius: 5px;\n}\n#article-title {\n  text-align: center;\n  width: 70%;\n  margin: auto;\n  /* padding: 15px; */\n  height: 55px;\n}\n#close-article {\n  position: absolute;\n  top: 25px;\n  right: 50px;\n  cursor: pointer;\n}\n#preview-wrapper {\n  height: 100%;\n  flex: 1;\n  /* background-color: black; */\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);\n  margin: 5px;\n  padding: 15px;\n  overflow: auto;\n}\n#create-article-form {\n  flex: 1;\n  margin: 5px;\n}\n.article-image {\n  display: block;\n  margin: 0 auto;\n}\n#article-bloc {\n  height: 93%;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.content-heading {\n  cursor: pointer;\n  padding: 20px;\n  color: #51768f;\n  font-weight: bold;\n}\n.content-heading:hover {\n  background-color: #dcebeb;\n}\n#table-of-content hr {\n  margin: 0;\n}\n#table-of-content {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  text-align: start;\n  overflow: auto;\n  height: 70%;\n  padding: 0 20px;\n}\n\n#article-table {\n  text-align: center;\n}\n.article-paragraph {\n  text-align: justify;\n  line-height: 21px;\n}\n#main-article-preview {\n  max-height: 70px;\n  overflow: hidden;\n}\n\n#article-content::-webkit-scrollbar {\n  height: 6px;\n  width: 6px;\n}\n#article-content::-webkit-scrollbar-track {\n  border-radius: 6px;\n  background-color: #dfe9eb;\n}\n\n#article-content::-webkit-scrollbar-track:hover {\n  background-color: #b8c0c2;\n}\n\n#article-content::-webkit-scrollbar-track:active {\n  background-color: #b8c0c2;\n}\n\n#article-content::-webkit-scrollbar-thumb {\n  border-radius: 0px;\n  background-color: #4d2a75;\n  border: 1px ridge #ffffff;\n}\n\n#article-content::-webkit-scrollbar-thumb:hover {\n  background-color: #4d2a75;\n}\n\n#article-content::-webkit-scrollbar-thumb:active {\n  background-color: #4d2a75;\n}\n`,""]);const x=p},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);i&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],l=0;l<n.length;l++){var c=n[l],d=i.base?c[0]+i.base:c[0],p=r[d]||0,s="".concat(d," ").concat(p);r[d]=p+1;var x=t(s),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==x)e[x].references++,e[x].updater(h);else{var g=o(h,i);i.byIndex=l,e.splice(l,0,{identifier:s,updater:g,references:1})}a.push(s)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var l=t(r[a]);e[l].references--}for(var c=i(n,o),d=0;d<r.length;d++){var p=t(r[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}r=c}}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},639:(n,e,t)=>{n.exports=t.p+"33792709ced4daaf172b.png"}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),i=t(825),o=t.n(i),r=t(659),a=t.n(r),l=t(56),c=t.n(l),d=t(540),p=t.n(d),s=t(113),x=t.n(s),h=t(208),g={};g.styleTagTransform=x(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),e()(h.A,g),h.A&&h.A.locals&&h.A.locals,console.warn("start");let f=["marketing-seo","it-web_design","ux-graphic_design"],u=!1,b=[],m=!1,w=2,v=0,y=!1,k=!1,z="http://localhost:3000/articles-json",L=window.location;function T(n,e=!1){return e?document.querySelectorAll(n):document.querySelector(n)}function j(){document.querySelectorAll(".continue_reading").forEach((function(n){n.addEventListener("click",C)})),document.querySelectorAll(".delete-article").forEach((function(n){n.addEventListener("click",(function(){var e;e=n.closest(".article-container").dataset.id,fetch("http://localhost:3000/articles-json/delete",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}).then((n=>n.json())).then((n=>{n.success&&window.location.reload()}))}))})),document.querySelectorAll(".start-update").forEach((function(n){n.addEventListener("click",(function(){const e=n.closest(".article-container").dataset.id;H(),function(n){u=n;const e=b.find((e=>e.id==n));T("#create-article-form");for(const n in e){const t=T("#"+n);t&&(t.value=e[n])}}(e)}))})),T("#close-article").addEventListener("click",$)}function E(n){var e=T("#article-content").querySelectorAll("h3");if("A"==n.target.tagName){var t=Array.from(e).find((e=>(console.log(e.innerHTML),e.innerHTML==n.target.innerHTML)));t&&t.scrollIntoView()}}function M(n){let e="";return n.split("\n").forEach((function(n){const t=n.toLowerCase().indexOf("h3:");if(t>=0){const t=n.substring(3);e+=`<h3 class="article-heading">${t}</h3>`}const i=n.indexOf("img:");if(i>=0){const t=n.substring(4);e+=`<img class="article-image" width="200" height="100" src="${t}">`}t<0&&i<0&&(e+=`<p class="article-paragraph">${n}</p>`)})),e}function A(){const n=function(){let n=z;return w&&(n+="?limit="+w+"&offset="+v),y&&(n+=w?"&category="+y:"?category="+y),n}();return fetch(n)}function S(){const n={};return document.querySelectorAll("#create-article-form input,select,textarea").forEach((function(e){const t=e.id,i=e.value;n[t]=i})),n}function $(){T("#article-modal").style.display="none"}function H(){T("#article-create-modal").style.display="block"}function C(n){T("#article-modal").style.display="block";var e=(n.target.closest(".article-container")||n.target.closest("#main-article-wrapper")).dataset.id;const t=b.find((n=>n.id==e));T("#table-of-content").innerHTML="",function(n){var e,t;T("article-content-wrapper"),T("#article-title").innerHTML=n.title,T("#article-content").innerHTML=M(n.content),e=T("#article-content").querySelectorAll("h3"),T("#article-table"),t=T("#table-of-content"),e.forEach((function(n,i){var o=`<li class="content-heading"><a>${n.innerHTML}</a></li>`;i!=e.length-1&&(o+="<hr>"),t.innerHTML+=o})),T("#table-of-content").addEventListener("click",E)}(t)}function O(n){const e=n.split("\n");let t="";return e.find((function(n){const e=n.indexOf("h3:"),i=n.indexOf("img:");if(e<0&&i<0)return t=n.slice(0,100),t}))}function _(n){let e=T("#blog-landing-articles");n.forEach((function(n){if(n.title==m.title)return;let t="";const i=O(n.content);t=`<div class="article-container" data-id="${n.id}">\n    <div class="article-card">\n      <div class="article-card-image-holder">\n        <img height="165" src="${k?"":"/images/"}${n.image||"js_blog.png"}">\n      </div>\n      <div class="article-card-content-holder">\n        <div class="article-card-content">\n          <div class="article-card-heading">\n            <h3>\n           ${n.title}\n            </h3>\n            <div class="article-card-heading-info">\n              <span>${I(n.date)}</span>\n              <span>|</span>\n              <span>${T('a[data-id="'+n.category+'"]').innerHTML}</span>\n            </div>\n          </div>\n          <div class="article-card-text">\n            <p>\n             ${i}\n            </p>\n            <div class="card-button-holder">\n              <button type="button" class="continue_reading">\n                Continue Reading\n              </button>\n              <div class="article-control-buttons" style="${k?"height:0px;overflow:hidden;":""}">\n                <span class="start-update control-btn" title="Update">💾</span>\n                <span class="delete-article control-btn" title="Delete">❌</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>`,e.innerHTML+=t}))}function D(n){let e,t=n;return y&&(t=n.filter((n=>n.category===y))),0==v&&(e=t[t.length-1]),w&&(t=t.slice(v,v+w),0==v&&t.push(e)),t}function q(){T("#more-articles").style.display="none"}function I(n){const e=new Date(n),t=e.getFullYear();let i=e.getMonth(),o=e.getDay();return i<10&&(i="0"+i),o<10&&(o="0"+o),t+"-"+i+"-"+o}function N(n){return(n.charAt(0).toUpperCase()+n.slice(1)).replace("-"," & ").replace("_"," ")}var P;"eduard96c.github.io"===window.location.hostname&&(k=!0,z="articles-data.json"),function(){const n=window.location.href.indexOf("?");!1!==n&&(L=window.location.href.slice(0,n))}(),function(){const n=T("#categories-list"),e=T("#category");f.forEach((function(t,i){n.innerHTML+=`<li>\n    <a\n      href="${L}?category=${t}"\n      class="category-selector"\n      data-id="${t}"\n      >${N(t)}</a\n    >\n  </li>`,i<f.length-1&&(n.innerHTML+="<hr>"),e.innerHTML+=` <option value="${t}">${N(t)}</option>`}))}(),T("#create-article").addEventListener("click",H),T(".close-modal").addEventListener("click",(function(){T("#article-create-modal").style.display="none"})),T("#save-article").addEventListener("click",(function(n){n.preventDefault();const e=S();if(u){const n=S();n.id=u,function(n){fetch("http://localhost:3000/articles-json/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json())).then((n=>{n.success&&window.location.reload()}))}(n)}else!function(n){fetch("http://localhost:3000/articles-json/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json())).then((n=>{n.success&&window.location.reload()}))}(e)})),T("#more-articles").addEventListener("click",(function(n){v+=w,A().then((n=>n.json())).then((n=>{let e;e=k?D(n):n.articles,b=b.concat(e),_(e),j(),n.is_last&&q()}))})),T("#content").addEventListener("keydown",(function(n){const e=n.target,t=e.value,i=T("#preview-wrapper");let o=`<h2 id="article-title">${e.parentElement.previousElementSibling.previousElementSibling.children[1].value}</h2>`;o+=M(t),i.innerHTML=o})),(P=window.location.search.substring(1).split("&"))&&(y=P[0].substring(9)),A().then((n=>n.json())).then((n=>{b=k?D(n):n.articles,function(n){0===v&&(m=b[b.length-1],function(n){const e=T("#main-article-wrapper"),t=T("#main-article-title"),i=T("#main-article-preview"),o=T("#main-article-image"),r=T("#main-article-date");t.innerHTML=n.title,i.innerHTML=O(n.content),o.src=k?n.image:"images/"+n.image,r.innerHTML=I(n.date),e.dataset.id=n.id}(m)),console.log(b),_(b),j(),n.is_last&&q()}(n)}))})()})();