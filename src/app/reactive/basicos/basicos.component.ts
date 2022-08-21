import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5),
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre      : ['', [ Validators.required, Validators.minLength(3) ], ],
    precio      : [, [ Validators.required, Validators.min(0) ], ],
    existencias : [, [ Validators.required, Validators.min(0) ], ],
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
      this.miFormulario.setValue({
        nombre:'ngOnInit',
        precio:0,
        existencias:0
      })
  }

  campoEsValido( campo: string){

    return  this.miFormulario.controls[campo].errors &&
            this.miFormulario.controls[campo].touched;
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return ;
    }

    //guardar
    console.log(this.miFormulario);
    this.miFormulario.reset();
  }

}
