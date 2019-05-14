import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'static-page-table', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },

            { path: 'new-static-page', loadChildren: './new-static-page/new-static-page.module#NewStaticPageModule' },
            { path: 'static-page-table', loadChildren: './static-page-table/static-page-table.module#StaticPageTableModule' },
            { path: 'static-page/:id', loadChildren: './new-static-page/new-static-page.module#NewStaticPageModule' },
            { path: 'new-menu', loadChildren: './menu/menu-details/menu-details.module#MenuDetailsModule' },
            { path: 'menu-table', loadChildren: './menu/menu-table/menu-table.module#MenuTableModule' },
            { path: 'menu/:id', loadChildren: './menu/menu-details/menu-details.module#MenuDetailsModule' },
            { path: 'news-page', loadChildren: './news/news-page/news-page.module#NewsPageModule' },
            { path: 'news-table', loadChildren: './news/news-table/news-table.module#NewsTableModule' },
            { path: 'news-page/:id', loadChildren: './news/news-page/news-page.module#NewsPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
