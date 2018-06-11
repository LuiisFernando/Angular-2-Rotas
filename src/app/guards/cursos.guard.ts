import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class CursosGuard implements CanActivateChild {

    canActivateChild (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> | Promise<boolean> | boolean {

        console.log(route);
        console.log(state);
        // aqui verifica se o usuário tem acesso a rota filha que foi definida
        return true;
      }

}
