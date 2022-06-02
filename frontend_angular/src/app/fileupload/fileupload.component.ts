import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  @ViewChild('fileUpload')
  set fileUploadRef(val: ElementRef) {
    if (val) {
      console.log(val);
    }
  }
  showLoadingSymbol : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLoading() {
    this.showLoadingSymbol = !this.showLoadingSymbol;
  }

  fn(){
    // var iframe = document.getElementById('transcriptframe');
    // var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    // innerDoc.body.innerHTML = "லக்னோ: உ.பி., மாநிலம் அயோத்தியில் ராமர் கோயில் கட்டும் பணியை கடந்த 2020ம் ஆண்டு பிரதமர் மோடி அடிக்கல் நாட்டி துவங்கி வைத்தார். தொடர்ந்து பணிகள் விறுவிறுப்பாக நடந்து வருகிறது. இந்நிலையில், கோயில் கருவறைக்கு அடிக்கல் நாட்டு விழா நடந்தது. இந்த விழாவில் கலந்து கொண்டு பேசிய உ.பி., முதல்வர் யோகி ஆதித்யநாத் கூறியதாவது: ராமர் கோயில் கட்டும் பணிகள் வெற்றிகரமாக நடந்து வருகிறது. இந்தியாவின் தேசிய கோயிலாக ராமர் கோயில் இருக்கும். இந்த நாளுக்காக மக்கள் நீண்ட காலமாக காத்துள்ளனர். ராமர் கோயில் இந்தியாவின் ஒற்றுமையின் அடையாளமாக இருக்கும், என்றார்";
  }
}
