import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BillsToPayComponent } from './bills-to-pay.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: BillsToPayComponent }
	])],
	exports: [RouterModule]
})
export class BillsToPayRoutingModule { }
