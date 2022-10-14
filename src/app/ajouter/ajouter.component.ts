import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $:any;

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
 


  constructor( private _route:Router, private _http:HttpClient) { }
  singup:FormGroup|any;
  signuser:any;
  ngOnInit(): void {
    this.singup = new FormGroup({
      'title': new FormControl(),
      'desc':new FormControl(),
      'price':new FormControl(),
      'image':new FormControl(),
    'ratings': new FormControl()
     

    })
  }

  singupdata(singup:FormGroup){
    //console.log(this.singup.value);
    this.signuser = this.singup.value.fname
    this._http.post<any>("http://localhost:3000/prod", this.singup.value)
    .subscribe(res=>{
      alert('Le produit est bien ajouté');
      this.singup.reset();
      this._route.navigate(['tess']);
    }, err=>{
      alert('Somthing went wrong');
 
    })

  }

  sbtn(){
   
    this._route.navigate(['login']);
    //$('.form-box1').css('z-index', '99');
    $('.form-box').css('display','block');
    $('.form-box1').css('display','none');
  }



  
}
