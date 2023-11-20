import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection
} from '@angular/fire/compat/firestore';
import { BillToPay } from '../interfaces/bill-to-pay';

@Injectable({
  providedIn: 'root'
})
export class BillsToPayService {
  private dbPathBillsPay = 'bills-pay';
  private billsPayRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
      this.billsPayRef = db.collection(this.dbPathBillsPay);
    }

    getAll(): AngularFirestoreCollection<any> {
        return this.billsPayRef;
    }

    create(billToPay: BillToPay) {
        return this.billsPayRef.add({ ...billToPay });
    }

    update(id: string, data: BillToPay): Promise<void> {
        return this.billsPayRef.doc(id).update(data);
    }

    delete(id: string): Promise<void> {
        return this.billsPayRef.doc(id).delete();
    }
}
