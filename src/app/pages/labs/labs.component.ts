import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = signal([
    'Escribir tareas',
    'Instalar visual',
    'Organizar horarios'
  ]);
  name = signal('Nicoll');
  age = 19;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png'

  person = signal({
    name: 'Nicoll',
    age: 19,
    avatar: this.img
  });

  clickHandler(){
    alert('Hola')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
    console.log(input.value);
  }

  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return{
        ...prevState,
        age: parseInt(newValue)
      }
    })
    console.log(input.value);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
