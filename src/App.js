import React , {useState} from 'react';
import './App.css';
import CreateProduct from './Components/CreateProduct/CreateProduct';
import ShowProducts from './Components/ShowProducts/ShowProducts';
import CheckoutsProducts from './Components/CheckoutsProducts/CheckoutsProducts';

const simpleProducts = [
    {
      id: 'p1',
      title: 'Chicken',
      stock: 1,
      price: 2000
    },
    {
      id: 'p2',
      title: 'Duck',
      stock: 1,
      price: 1500
    },
    {
      id: 'p3',
      title: 'Pork',
      stock: 1,
      price: 4000
    },
    {
      id: 'p4',
      title: 'Fish',
      stock: 1,
      price: 7500
    },
    {
      id: 'p5',
      title: 'Egg',
      stock: 1,
      price: 6000
    },
    {
      id: 'p6',
      title: 'Puaun',
      stock: 1,
      price: 3000
    },
    {
      id: 'p7',
      title: 'Chicken',
      stock: 1,
      price: 2000
    },
    {
      id: 'p8',
      title: 'Chicken',
      stock: 1,
      price: 2000
    },
  ];
function App() {
  const [allProducts,setAllProducts] = useState(simpleProducts);
  const [checkProducts,setCheckProducts] = useState([]);

  const productHandler = (getNewProduct) => {
	setAllProducts((preventProducts) => {
		return [
			getNewProduct,
			...preventProducts
		]
	})
  }

  const saveProductHandler = (showProductsData) => {
    const filterData = checkProducts.filter((checkProduct) => {
        return showProductsData.id === checkProduct.id;
    });

    setCheckProducts((checkOutData)=>{
      if(filterData.length > 0){
          filterData[0].stock += 1
          return [
            ...checkOutData,
          ]
      }else{
        return [
          ...checkOutData,
          showProductsData
        ]  
      }
    });
  }

  return (
    <section>
		<div className="row">
			<div className="col-1 border-right p-0">
				<CheckoutsProducts checkOutProducts={checkProducts} />
			</div>
			<div className="col-2 border-right product_background_color">
				<ShowProducts products={allProducts} saveProductHandler={saveProductHandler} />
			</div>
			<div className="col-1">
				<CreateProduct allProducts={allProducts} productHandler={productHandler} />
			</div>
		</div>
	</section>
  );
}

export default App;