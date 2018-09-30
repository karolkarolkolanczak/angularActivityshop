import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './product.model';
import { ProductCategory } from './productCategory.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // cross Component Comunication
  productSelected=new EventEmitter<Product>();

  private productList: Product[]=[
    new Product(1,'shoe 1','description shoe 1',1.00,'Shoes','shoes','cotton','123','male','assets/images/shoe1.jpg'),
    new Product(2,'shoe 2','description shoe 2',2.00,'Shoes','shoes','cotton','123','male','assets/images/shoe2.jpg'),
    new Product(3,'shoe 3','description shoe 3',3.00,'Shoes','shoes','cotton','123','male','assets/images/shoe3.jpg'),
    new Product(4,'shoe 4','description shoe 4',4.00,'Shoes','shoes','cotton','123','male','assets/images/shoe4.jpg'),
    new Product(5,'shoe 5','description shoe 5',5.00,'Shoes','shoes','cotton','123','male','assets/images/shoe5.jpg'),
    new Product(6,'shoe 6','description shoe 6',6.00,'Shoes','shoes','cotton','123','male','assets/images/shoe6.jpg'),
    new Product(7,'shoe 7','description shoe 7',7.00,'Shoes','shoes','cotton','123','male','assets/images/shoe7.jpg'),


    new Product(8,'jacket 1','description jacket 1',3.00,'Jackets','red','cotton','123','male','assets/images/jacket1.jpg'),
    new Product(9,'jacket 2','description jacket 2',4.00,'Jackets','jackets','cotton','123','male','assets/images/jacket2.jpg'),
    new Product(10,'jacket 3','description jacket 3',5.00,'Jackets','jackets','cotton','123','male','assets/images/jacket3.jpg'),


    new Product(11,'socks 1','description socks 1',5.00,'Socks','socks','cotton','123','male','assets/images/sock1.jpg'),
    new Product(12,'socks 2','description socks 2',6.00,'Socks','socks','cotton','123','male','assets/images/sock2.jpg'),
    new Product(13,'socks 3','description socks 3',5.00,'Socks','socks','cotton','123','male','assets/images/sock3.jpg'),
    new Product(14,'socks 4','description socks 4',6.00,'Socks','socks','cotton','123','male','assets/images/sock4.jpg'),

    new Product(15,'t-shirt 1','description t-shirt 1',7.00,'T-shirts','t-shirts','cotton','123','male','assets/images/tshirt1.jpg'),
    new Product(16,'t-shirt 2','description t-shirt 2',8.00,'T-shirts','t-shirts','cotton','123','male','assets/images/tshirt2.jpg'),
    new Product(17,'t-shirt 3','description t-shirt 3',8.00,'T-shirts','t-shirts','cotton','123','male','assets/images/tshirt3.jpg'),
    new Product(18,'t-shirt 4','description t-shirt 4',8.00,'T-shirts','t-shirts','cotton','123','male','assets/images/tshirt4.jpg'),
    new Product(19,'t-shirt 5','description t-shirt 5',8.00,'T-shirts','t-shirts','cotton','123','male','assets/images/tshirt5.jpg'),

    new Product(20,'watch 1','description watch 1',7.00,'Watches','t-shirts','cotton','123','male','assets/images/watch1.jpg'),
    new Product(21,'watch 2','description watch 2',8.00,'Watches','t-shirts','cotton','123','male','assets/images/watch2.jpg'),
    new Product(22,'watch 3','description watch 3',8.00,'Watches','t-shirts','cotton','123','male','assets/images/watch3.jpg'),
    new Product(23,'watch 4','description watch 4',8.00,'Watches','t-shirts','cotton','123','male','assets/images/watch4.jpg'),
    new Product(24,'watch 5','description watch 5',8.00,'Watches','t-shirts','cotton','123','male','assets/images/watch5.jpg'),

    new Product(25,'earrings 1','description earrings 1',7.00,'Earrings','t-shirts','cotton','123','male','assets/images/earrings1.jpg'),
    new Product(26,'earrings 2','description earrings 2',8.00,'Earrings','t-shirts','cotton','123','male','assets/images/earrings2.jpg'),
    new Product(27,'earrings 3','description earrings 3',8.00,'Earrings','t-shirts','cotton','123','male','assets/images/earrings3.jpg'),
    new Product(28,'earrings 4','description earrings 4',8.00,'Earrings','t-shirts','cotton','123','male','assets/images/earrings4.jpg'),
    new Product(29,'earrings 5','description earrings 5',8.00,'Earrings','t-shirts','cotton','123','male','assets/images/earrings5.jpg'),


    new Product(30,'necklace 1','description necklace 1',7.00,'Necklaces','t-shirts','cotton','123','male','assets/images/necklace1.jpg'),
    new Product(31,'necklace 2','description necklace 2',8.00,'Necklaces','t-shirts','cotton','123','male','assets/images/necklace2.jpg'),
    new Product(32,'necklace 3','description necklace 3',8.00,'Necklaces','t-shirts','cotton','123','male','assets/images/necklace3.jpg'),
    new Product(33,'necklace 4','description necklace 4',8.00,'Necklaces','t-shirts','cotton','123','male','assets/images/necklace4.jpg'),
    new Product(34,'necklace 5','description necklace 5',8.00,'Necklaces','t-shirts','cotton','123','male','assets/images/necklace5.jpg'),
    new Product(35,'necklace 6','description necklace 6',8.00,'Necklaces','t-shirts','cotton','123','male','assets/images/necklace6.jpg'),

    new Product(36,'purse 1','description purse 1',7.00,'Purses','t-shirts','cotton','123','male','assets/images/purse1.jpg'),
    new Product(37,'purse 2','description purse 2',8.00,'Purses','t-shirts','cotton','123','male','assets/images/purse2.jpg'),
    new Product(38,'purse 3','description purse 3',8.00,'Purses','t-shirts','cotton','123','male','assets/images/purse3.jpg'),
    new Product(39,'purse 4','description purse 4',8.00,'Purses','t-shirts','cotton','123','male','assets/images/purse4.jpg'),
    new Product(40,'purse 5','description purse 5',8.00,'Purses','t-shirts','cotton','123','male','assets/images/purse5.jpg'),
    new Product(41,'purse 6','description purse 6',8.00,'Purses','t-shirts','cotton','123','male','assets/images/purse6.jpg')


  ];
  constructor() { }

  getProductList(): Product[]{
    return this.productList;
  }

  addProdcut(product: Product){
    this.productList.push(product);
    console.log("product added(service): "+product.name+ " " +product.category+ " "+product.gender);
  }

  searchProductListByCategory(productCategory: ProductCategory): Product[]{
    let filteredListOfProducts: Product[]=[];

    for(let value of this.productList){
      if(value.category.toLowerCase() == productCategory.name.toLowerCase()){
        filteredListOfProducts.push(value);
      }
    }
    return  filteredListOfProducts;
  }

  getProductById(id: number){
    const product: Product = this.productList.find(
      (s) => {
        return s.productId === id;
      }
    );
    console.log("FROM PRODUCT SERVICE: "+product.productId+" "+product.name);
    return product;
  }
}




