import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class AlunosGuard implements CanActivateChild {

    canActivateChild (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> | Promise<boolean> | boolean {

        // aqui verifica se o usuário tem acesso a rota filha que foi definida        

        // console.log(state);

        // caso a url passada tenha incluido nela o 'editar'
        if (state.url.includes('editar')) {
            // aqui vem a logica pra saber se o usuário pode editar os alunos ou não

            // alert('botão bloqueado pelo guarda de rotas filhas do aluno');
            // return false;
        }

        return true;
      }

}