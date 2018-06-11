import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../guards/auth.guard';
import { CursosGuard } from './../guards/cursos.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './../pagina-nao-encontrada/pagina-nao-encontrada.component';


// import { CursosComponent } from '../cursos/cursos.component';
// import { CursoDetalheComponent } from '../cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from '../cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    // configuração lazyLoad com modulos comuns
    {   path: 'cursos',
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
        // canActivateChild: [CursosGuard]
    },
    {   path: 'alunos',
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
        // canActivateChild: [AlunosGuard] // << Chamando canActivateChild do alunos routing
    },
    // { path: 'cursos', component: CursosComponent },
    // { path: 'curso/:id', component: CursoDetalheComponent },
    {
        path: 'login',
        component: LoginComponent
    },
    // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        // component: HomeComponent,
        canActivate: [AuthGuard]
    },
    // rota para pagina não encontrada
    {
        path: '**',
        component: PaginaNaoEncontradaComponent,
        // canActivate: [AuthGuard] <<< faz redirecionar para login
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
