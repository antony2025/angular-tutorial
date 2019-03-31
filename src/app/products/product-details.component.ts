import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';

@Component({
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    pageTitle: string = "Product Details";
    product = {
        'productId': -1,
        'productName': 'TBD'
    };

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.product.productId = +this.route.snapshot.paramMap.get('id');
    }

    onBack(): void {
        this.router.navigate(['./products']);
    }

}
