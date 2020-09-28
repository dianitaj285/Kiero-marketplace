import React from "react";
import styled from "styled-components";
import numeral from "numeral";
import { createNewTransaction } from "./services/transactions.services";
import { kieroLogo, rockwell, waterproofProtector, hardDrive } from "./assets";

const PRODUCTS = [
  { productId: 1, productName: "Taladro", image: rockwell, price: 50000 },
  { productId: 2, productName: "Disco duro", image: hardDrive, price: 20000 },
  {
    productId: 3,
    productName: "Protector a prueba de agua",
    image: waterproofProtector,
    price: 10000,
  },
];

function App() {
  const handleClick = (index) => () => {
    const selectedProduct = PRODUCTS[index];
    console.log(selectedProduct);

    const transactionData = {
      currency: "COP",
      product_id: selectedProduct.productId,
      customer_email: "an@example.com",
      type: 1,
      mount: selectedProduct.price,
      state: 0,
      owner_client: 154,
      owner_shop: 154,
      pay_method: 0,
    };

    createNewTransaction(transactionData).then(({ data }) => {
      console.log("transaction result", data);
      window.location.assign(data.redirect_url);
    });
  };
  return (
    <MainContainer>
      <Logo>
        <HorizontalImage src={kieroLogo} />
      </Logo>
      <PorductsContainer>
        {PRODUCTS.map((product, index) => (
          <Product key={product.productId}>
            <ProductName>{product.productName}</ProductName>
            <Image>
              <HorizontalImage src={product.image} />
            </Image>
            <Price>{numeral(product.price).format("$ 0,0[.]00")}</Price>
            <Button onClick={handleClick(index)}>Comprar</Button>
          </Product>
        ))}
      </PorductsContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
`;

const HorizontalImage = styled.img`
  width: 100%;
  height: auto;
`;

const Image = styled.div`
  width: 100px;
`;

const Logo = styled.div`
  width: 200px;
`;

const PorductsContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  margin: 10px;
  box-shadow: 0px 5px 6px #00000017;
  opacity: 1;
  display: inline-block;
  height: fit-content;
  padding: 30px;
  width: 380px;
  justify-content: space-evenly;
  align-items: center;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ProductName = styled.span`
  margin-bottom: 10px;
`;

const Price = styled.p`
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: linear-gradient(
    180deg,
    rgba(1, 199, 54, 1) 0%,
    rgba(1, 103, 28, 1) 100%
  );
  color: white;
  opacity: 1;
  width: 120px;
  height: 40px;
  border-radius: 3px;
  border: none;
  outline: none;
`;

export default App;
