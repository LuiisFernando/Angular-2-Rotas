import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    // Usando o serviço para pegar o aluno ao iniciar o componente

    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];

    //     this.aluno = this.alunosService.getAluno(id);
    //   }
    // );

    this.inscricao = this.route.data.subscribe(
      (info) => {
        // info.aluno, aluno tem que ser o mesmo nome declarado no resolve do routing
        this.aluno = info.aluno;
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
