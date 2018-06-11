import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

// arquivo que guarda rotas e verifica se o formulario da rota mudou pra perguntar ao usuario se deseja realmente sair
// classe implementa CanDeactivate<IFormCanDeactivate>, IFormCanDeactivate tem metodo podeDesativar
// IFormCanDeactivate é implementado no alunos-form e la tem o metodo podeDesativar

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    console.log('guarda de desativação');

    // return component.podeMudarRota();

    return component.podeDesativar();
  }
}
