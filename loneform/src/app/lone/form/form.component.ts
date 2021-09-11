import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { interval, observable, Observable } from 'rxjs';
import { AuthService } from 'src/services/auth.service';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder ,private elementRef: ElementRef, private auth:AuthService) { }
  
  verificationForm: any;
  OTPForm:any;
  // timerOn = true;
  isprecheck: boolean = false;
  public submitted = false;
  // newId:any;
  // entries:any;
  // TimeSpan:any;
  
 
  // s:any;
  // maxTime:any;
  // hidevalue:any;
  // timer:any;
  


  ngOnInit(): void {
    this.verificationForm = this.formBuilder.group({
      city: ['',[Validators.required,Validators.maxLength(64)]],
      panNumber : ['',[Validators.required, Validators.maxLength(10),Validators.pattern("[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}")]],
      fullName : ['',[Validators.required,Validators.maxLength(140)]],
      email : ['',[Validators.email,Validators.maxLength(255)]],
      mobilenumber :['',[Validators.required, Validators.maxLength(10) ]],

    });
    this.OTPForm=this.formBuilder.group({
      otp:['',[Validators.required,Validators.maxLength(4),Validators.minLength(4)]]
    })

    // this.newId = 'first';
    

    // this.addEntry();
    // interval(1000).subscribe(() => {
    //   if (!this.changeDetectorRef ['destroyed']){
    //     this.changedetector.detectorChanges();
    //   }
    // });
    // this.changedetector.detectorChanges();



   
       
  
    }
    onSubmit(){
      this.submitted = true;
      if (this.verificationForm.invalid) {
          return;
      }
      let value = this.verificationForm.value;
      
      this.auth.post("/getOTP.php", value).subscribe(_ => {
          console.log("sucess")
          // this.toast.success("Sucess")
          }
          , err => {
           console.log("got error")
          }
          // this.toast.success("Error")
          // }
      );
     
     this.isprecheck=true; 
      
      
    }

    onOtpSubmit(){
      this.submitted = true;
      if (this.OTPForm.invalid) {
        return;
    }
    let value = this.verificationForm.value;
    this.auth.post("/verifyOTP.php", value).subscribe(_ => {
      console.log("sucess")
    }
    );

    
        }

  

  //   getElaspsedTime(entry:Entry): TimeSpan{
  //     let totalSecond = Math.floor((new Date().getTime()- entry.created.getTime()) /1000);
  //     let hours = 0;
  //     let minutes = 0;
  //     let seconds = 0;
  //     if(totalSecond >=3600){
  //       hours = Math.floor(totalSecond/ 3600);
  //       totalSecond -= 3600 * hours;
  //     }
  //     if(totalSecond>=60){
  //       minutes = Math.floor(totalSecond / 60);
  //       totalSecond -= 60 * minutes;

  //     }
  //     seconds = totalSecond;

  //     return{
  //       hours:hours,
  //       minutes:minutes,
  //       seconds:seconds

  //     };
  //   }

  //   addEntry(){
  //   this.entries.push({
  //     created: new Date(),
  //     id:this.newId
    
  //   });
  //   this.newId='';
  // }

  // ngOnDestroy(){
  //   this.destroyed$.next();
  //   this.destroyed$.completed();

  // }

    
    
    
    
    
    
    // imeSpan

  //   maxtime: any=30

  // StartTimer(){
  //   this.timer = setTimeout(x => 
  //     {
  //         if(this.maxTime <= 0) { }
  //         this.maxTime -= 1;

  //         if(this.maxTime>0){
  //           this.hidevalue = false;
  //           this.StartTimer();
  //         }

  //         else{
  //             this.hidevalue = true;
  //         }

  //     }, 1000);
       

  
      }   

