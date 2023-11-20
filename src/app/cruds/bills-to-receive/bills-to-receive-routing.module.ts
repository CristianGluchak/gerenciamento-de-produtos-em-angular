import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BillsToReceiveComponent } from './bills-to-receive.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: BillsToReceiveComponent }
	])],
	exports: [RouterModule]
})
export class BillsToReceiveRoutingModule { }
