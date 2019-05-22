var pageData = {
  home: {
    title: "home", 
    content:'../contents/home.ejs',
    descr: 'empty.....',
    nav: "",
    header: "",
    footer: "",
    params: []
  },
  pag2: {
    title: importData.newData,
    content:'../contents/pag2.ejs',
    descr: 'empty.....',
    nav: "",
    header: "",
    footer: "",
    params: []
  }
}

for(k in pageData) {
  //k.footer = "../partials/footer2.ejs"
   console.log("lev.1) " + k + ": " + pageData[k])
    for(kk in pageData[k]) {
               
        pageData[k].header = "../partials/header.ejs"
        pageData[k].nav = "../partials/nav.ejs"
        pageData[k].footer = "../partials/footer.ejs"
           
        console.log(kk + ": " + pageData[k][kk])

    }

}
