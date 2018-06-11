import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos.service';

@Component({
  selector: 'app-curso-nao-encontrado',
  templateUrl: './curso-nao-encontrado.component.html',
  styleUrls: ['./curso-nao-encontrado.component.css']
})
export class CursoNaoEncontradoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) {
    console.log(route);
  }

  ngOnInit() {
  }

}
