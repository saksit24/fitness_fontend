import React, { Component } from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew Bold.ttf',
    italics: 'THSarabunNew Italic.ttf',
    bolditalics: 'THSarabunNew BoldItalic.ttf'
  },
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
}

class App extends Component {

  constructor (props){
     super(props)
     this.printPDF = this.printPDF.bind(this)
  }

  printPDF(){

    var docDefinition = {
      content: [
        { text: 'สวัสดีประเทศไทย reat pdf demo ', fontSize: 15 },
      ],
      defaultStyle:{
        font: 'THSarabunNew'
      }
    };
    pdfMake.createPdf(docDefinition).open()

  }

  /**/

  render() {
    return (
      <div >
        <header >
          
          <h1 >Welcome to React</h1>
        </header>
        <p >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="button" value="print PDF" onClick={this.printPDF} />
      </div>
    );
  }
}

export default App;