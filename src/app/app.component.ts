import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgParent ="";
  showImg = true;

  

  onLoaded(img : string){
    console.log('log padre',img);
  }

  toggleImg(){
    this.showImg = !this.showImg
  }
  // name = 'Cristian';
  // age = 21; 
  // btnDisabled = true;
  // title='hola'
  // person = {
  //   name :'Cristian',
  //   age:14,
  //   avatar:'https://source.unsplash.com/random'
  // }

  // register = {
  //   name: '',
  //   email: '',
  //   password: '',
  // }

  // toggleButton(){
  //   this.btnDisabled = !this.btnDisabled
  // }

  // increseAge(){
  //   this.person.age ++;
  // }
  // onScroll(event:Event){
  //   const element = event.target as HTMLElement;
  //   console.log(element.scrollTop);
  // }
  // changueName(event: Event){
  //   const element = event.target as HTMLInputElement;
  //   this.person.name = element.value;
  // }
  // onRegister(){
  //   console.log(this.register)
  // }
}
