import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validation_messages = {
    nombre: [
      { type: "required", message: "El nombre es requerido" },
      { type: "pattern", message: "ojo! este no es un nombre válido" }],
    apellido: [
      { type: "required", message: "El apellido es requerido" },
      { type: "pattern", message: "ojo! este no es un apellido válido" }],
    email: [
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "ojo! este no es un email válido" }],
    password: [
      { type: "required", message: "El password es requerido" },
      { type: "minlength", message: "Mínimo 5 letras para el password" }]
  };
  errorMessage: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController) {
    this.registerForm = this.formBuilder.group({
      nombre: new FormControl("", Validators.compose([
        Validators.required,
        //Validators.pattern("^[a-zA-Z]+$")
        Validators.pattern("^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$")
      ])),
      apellido: new FormControl("", Validators.compose([
        Validators.required,
        //Validators.pattern("^[a-zA-Z]+$")
        Validators.pattern("^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$")
      ])),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))

    });
  }
  ngOnInit() {
  }

}