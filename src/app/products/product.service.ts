import {
    Injectable
}
from "@angular/core";
import {
    HttpClient,
    HttpErrorResponse
} from '@angular/common/http';
import {
    Observable,
    throwError
} from 'rxjs';
import {
    tap,
    catchError
} from 'rxjs/operators';

import {
    IProduct
} from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl: string = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getProductsFromHttp(): Observable < IProduct[] > {
        return this.http.get < IProduct[] > (this.productUrl).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage: string = '';
        if (err.error instanceof ErrorEvent)
            errorMessage = `An error occurred: ${err.error.message}`;
        else
            errorMessage = `Server returned status ${err.status} with message ${err.message}`;
        console.log(errorMessage);
        return throwError(errorMessage);
    }

    getProducts(): IProduct[] {
        return [{
                'productId': 1,
                'productName': 'Leaf Rake',
                'productCode': 'GDN-0011',
                'releaseDate': 'March 19, 2016',
                'description': 'Leaf rake with 48-inch wooden handle.',
                'price': 19.95,
                'starRating': 3.2,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
            },
            {
                'productId': 2,
                'productName': 'Garden Cart',
                'productCode': 'GDN-0023',
                'releaseDate': 'March 18, 2016',
                'description': '15 gallon capacity rolling garden cart',
                'price': 32.99,
                'starRating': 4.2,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
            },
            {
                'productId': 5,
                'productName': 'Hammer',
                'productCode': 'TBX-0048',
                'releaseDate': 'May 21, 2016',
                'description': 'Curved claw steel hammer',
                'price': 8.9,
                'starRating': 4.8,
                'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    }];
    }
}
