import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './modules/fm-produtos/components/produtos/produtos.component';

const routes: Routes = [
  {
    path: 'hackathon-unifacisa',
    component: HomeComponent,
    children: [
      {path: 'home', component:HomeComponent},
      {
        path: "produtos",
        loadChildren: './modules/fm-produtos/fm-produtos.module#FmProdutosModule'
      },
      {
        path: 'contribuintes',
        loadChildren: './modules/fm-contribuintes/fm-contribuintes.module#FmContribuintesModule'
      },
      {
        path: "categorias",
        loadChildren: './modules/fm-categorias/fm-categorias.module#FmCategoriasModule'
      },
      {path:'', redirectTo:'/home', pathMatch: 'full'},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
