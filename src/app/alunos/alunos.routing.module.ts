import { CanActivateChild } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';

// canActivate chamando de dentro do routing pra ver se o usuario
// tem acesso aos menus filhos, o menu /alunos continua sendo guardado pelo app.routing.module

// resolve chama o AlunoDetalheResolver para encontrar o aluno antes de carregar o componente

const alunosRoutes: Routes = [
    { path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    // verificacao canActivateChild, só sera verificado
    // se realmente entrar nos menus filhos dentro do menu aluno
    children: [
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent, resolve: { aluno : AlunoDetalheResolver } },
        { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
