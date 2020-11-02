import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-test-image',
  templateUrl: './test-image.component.html',
  styleUrls: ['./test-image.component.scss']
})
export class TestImageComponent implements OnInit {

  fileToUpload: File = null;


  constructor(
  ) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadDocument()
  }

  uploadDocument() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.sendPSV(fileReader.result.toString())
    }
    fileReader.readAsDataURL(this.fileToUpload);
  }

  sendPSV(psv: any) {
    console.log(psv)
    alert(psv)
    let info = {
      title: "1920x1080.jpg",
      img: psv
    }
  }
 
}
