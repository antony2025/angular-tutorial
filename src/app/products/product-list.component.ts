import {
    Component,
    OnInit
} from '@angular/core';

import {
    IProduct
} from './product';

import {
    ProductService
} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';

    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(filterText: string) {
        console.log(filterText);
        this.filteredProducts = this.performFilter(filterText);
        this._listFilter = filterText;
    }

    products: IProduct[] = [];
    filteredProducts: IProduct[];

    constructor(private productService: ProductService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        //        this.products = this.productService.getProducts();
        this.productService.getProductsFromHttp().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = error);
    }

    performFilter(filterText: string): IProduct[] {
        filterText = filterText.toLocaleLowerCase();
        if (filterText === '')
            return this.products;
        else {
            return this.products.filter(item => item.productName.toLocaleLowerCase().indexOf(filterText) !== -1);
        }
    }
}
