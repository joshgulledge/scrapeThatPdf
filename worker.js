const fs = require('fs');
const pdfParser = require('pdf-parser');
// const idk = require('./pdf/mockReport.pdf')

const PDF_PATH = './pdf/mockReport.pdf';
const PDF_PATHtwo = './pdf/mockReportTwo.pdf';

pdfParser.pdf2json(PDF_PATHtwo, function (error, pdf) {
    if(error != null){
        console.log(error);
    }else{
      const companyName = pdf.pages[0].texts[0].text;
      const companyAddress = pdf.pages[0].texts[2].text;
      const sampleIs = pdf.pages[0].texts[5].text;
      // const lot = `lot# ${pdf.pages[0].texts[9].text}`;
      // const testNumber = pdf.pages[0].texts[15].text;
      // const testResults = pdf.pages[0].texts[25].text + "Score " + pdf.pages[0].texts[29].text;
      // const GenesEffectedOne = pdf.pages[0].texts[33].text;
      // const GenesEffectedTwo = pdf.pages[0].texts[35].text;
      // const GenesEffectedThree = pdf.pages[0].texts[37].text + pdf.pages[0].texts[38].text + pdf.pages[0].texts[39].text
      // const GenesEffectedFour = pdf.pages[0].texts[41].text;

      console.log(companyName);
      console.log(companyAddress);
      console.log(sampleIs);
      // console.log(lot);
      // console.log(testNumber);
      // console.log(testResults);
      // console.log(GenesEffectedOne);
      // console.log(GenesEffectedTwo);
      // console.log(GenesEffectedThree);
      // console.log(GenesEffectedFour);

      // console.log(pdf.pages[0].texts[0].text);
      // console.log(JSON.stringify(pdf));
    }
});
