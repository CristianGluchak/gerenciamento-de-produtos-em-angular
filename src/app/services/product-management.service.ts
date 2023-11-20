import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { ProductManagement } from '../interfaces/product-management';

@Injectable({
    providedIn: 'root',
})
export class ProductManagementService {
    private dbPathProductManagement = 'product-management';
    private productManagementRef: AngularFirestoreCollection<any>;

    constructor(private db: AngularFirestore) {
        this.productManagementRef = db.collection(this.dbPathProductManagement);
    }

    getAll(): AngularFirestoreCollection<any> {
        return this.productManagementRef;
    }

    create(productManagement: ProductManagement) {
        return this.productManagementRef.add(productManagement);
    }

    update(id: string, data: ProductManagement): Promise<void> {
        return this.productManagementRef.doc(id).update(data);
    }

    delete(id: string): Promise<void> {
        return this.productManagementRef.doc(id).delete();
    }
}
