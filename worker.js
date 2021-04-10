const fs = require('fs');
const pdfParser = require('pdf-parser');
// const idk = require('./pdf/mockReport.pdf')


console.log('the js is linked and awaiting your command');


var PDF_PATH = './pdf/mockReport.pdf';

pdfParser.pdf2json(PDF_PATH, function (error, pdf) {
    if(error != null){
        console.log(error);
    }else{
      const companyName = pdf.pages[0].texts[0].text;
      const companyAddress = pdf.pages[0].texts[2].text;
      const sampleIs = pdf.pages[0].texts[5].text;
      const lot = `lot# ${pdf.pages[0].texts[9].text}`;
      const testNumber = pdf.pages[0].texts[15].text;
      const testResults = pdf.pages[0].texts[25].text + "score " + pdf.pages[0].texts[29].text;
      

      // console.log(companyName);
      // console.log(companyAddress);
      // console.log(sampleIs);
      // console.log(lot);

      console.log(pdf.pages[0].texts[29]);
      // console.log(JSON.stringify(pdf));
    }
});
