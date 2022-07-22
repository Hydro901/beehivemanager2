import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom, Observable } from 'rxjs';
import { BeehivePayload } from 'src/app/DTOs/beehivePayload';
import { BeehiveService } from 'src/app/services/beehive.service';


@Component({
  selector: 'app-beehive',
  templateUrl: './beehive.component.html',
  styleUrls: ['./beehive.component.css']
})

export class BeehiveComponent implements OnInit {
  beehiveInsertForm : FormGroup = new FormGroup({
    model: new FormControl('',[Validators.required]),

  })

  beehives? : BeehivePayload[];
  picture? : File;
  /* http?: HttpClient; */


  constructor(private beehiveService : BeehiveService) { }

  ngOnInit(): void {
    this.beehiveService.getBeehives().subscribe(data => {
      this.beehives = data;
    })
  }



  addBeehive(){
    let beehive : BeehivePayload = {
     //let id = '',
     //id:4,
     //id = this.beehiveInsertForm.get(beehive.id!.valueOf)
     
     model : this.beehiveInsertForm.get("model")!.value
    }
    this.beehiveService.addBeehive(beehive).subscribe(savedBeehive =>{
      alert("salvato")
      if(this.picture != undefined){
       /*  this.beehiveService.savePicture(this.picture!, savedBeehive.id!).subscribe(saved2 =>{
          alert("photo appo")
          this.beehives?.push(saved2) */
          this.beehiveService.savePicture(this.picture!, savedBeehive).subscribe(saved2 =>{
            alert("photo appo")
            this.beehives?.push(saved2)
        })
      }
      else{
        this.beehives?.push(savedBeehive)
      }
    })
  }

  //getImage(id: number): Observable<string> {
    //return http.get(url/id);
//}

  catchFile(event:any){
    this.picture = event.target.files[0];
  }

  
  /* uploadFile( file: File , id : number ) : Observable<any>  
  {  
    let url = "http://localhost:4200/home/uploadImage/" + id ;  

    const formdata: FormData = new FormData();  

    formdata.append('file', file);  

    return this.http!.post(url , formdata);  
  }   */



  /* https://www.javafixing.com/2022/03/fixed-how-to-display-blob-image.html */



}
