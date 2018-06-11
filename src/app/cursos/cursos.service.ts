import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'C#'}
    ];
  }

  getCurso(id: Number) {
    const cursos = this.getCursos();

    for (let i = 0; i < cursos.length; i ++) {
      const curso = cursos[i];
      if (curso.id === Number(id)) {
        return curso;
      }
    }
    return null;
  }

}
