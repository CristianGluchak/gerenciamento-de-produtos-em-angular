import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductManagementComponent } from './product-management.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProductManagementComponent }
	])],
	exports: [RouterModule]
})
export class BillsToPayRoutingModule { }
