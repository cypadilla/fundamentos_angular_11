import { Component, OnInit, Input, Output, EventEmitter, OnChanges,AfterViewInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  img:string = '';

  @Input('img')
  set changueImg(newImg : string){
    this.img = newImg;
    console.log('changue jus img =>',this.img)
  }
  @Input() alt:string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  counter = 0;
  counterFn : number | undefined  ;

  constructor() { 
    //Noasync once time
    console.log('Constructor', 'imgValue => ',this.img )
  }
  
  ngOnChanges(changues : SimpleChanges){
    // antes del render durante render  y mira los cambios en los inputs
    console.log('NgOnChangues', 'imgValue => ',this.img );
    console.log('changues',changues);
  }
  
  ngOnInit(): void {
    // ANTES DEL RENDER una vez 
    // LLAMADAS ASINCRONAS 
    console.log('Nginit', 'imgValue => ',this.img );
    this.counterFn = window.setInterval(()=>{
      this.counter++;
      console.log('run counter')
    },1000);
  }
  ngAfterViewInit(){
    //  despues del render
    // manipular hijos
    console.log('afterviweInit')
  }
  ngOnDestroy(){
    // cuando se elimina el componente
    console.log('destroy')
    window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imageDefault
  }
  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
  // https://www.w3schools.com/howto/img_avatar.png

}
