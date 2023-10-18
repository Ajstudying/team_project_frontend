import { MutableRefObject, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartData } from "../../cartdata";
import { AddCartContainer } from "./styles";
import MyComponent from "@/components/MyComponent";
import Button from "@/components/Button";
import OrderButton from "@/components/OrderButton";

const AddCart = () => {
  // programatic방식으로 라우팅 처리
  const navigate = useNavigate();

  const itemIdRef = useRef() as MutableRefObject<HTMLInputElement>;
  const gubunRef = useRef() as MutableRefObject<HTMLInputElement>;
  const titleRef = useRef() as MutableRefObject<HTMLInputElement>;
  const coverRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceStandardRef = useRef() as MutableRefObject<HTMLInputElement>;
  const priceSalesRef = useRef() as MutableRefObject<HTMLInputElement>;
  const quantityRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { cartData, createCartData } = useCartData();
  const [isOrder, setIsOrder] = useState(false);

  const cartItem = [
    {
      gubun: "exampleGubun",
      itemId: "1234",
      title: "Example Item1",
      cover: "exampleCoverImage.jpg",
      priceStandard: 10.99,
      priceSales: 8.99,
      quantity: 1,
    },
    {
      gubun: "exampleGubun",
      itemId: "4567",
      title: "Example Item2",
      cover: "exampleCoverImage.jpg",
      priceStandard: 10.99,
      priceSales: 8.99,
      quantity: 1,
    },
  ];

  const handleAddCart = () => {
    console.log("AddCart > handleAddCart start.....");

    // 검증
    // 서버연동
    // 상태값(데이터)변경
    createCartData({
      itemId: Number(itemIdRef.current.value),
      gubun: gubunRef.current.value,
      title: titleRef.current.value,
      cover: coverRef.current.value,
      priceStandard: priceStandardRef.current.value,
      priceSales: priceSalesRef.current.value,
      quantity: quantityRef.current.value,
    });

    console.log("AddCart > handleAddCart : cartData =>" + cartData);

    // 완료가 되면 장바구니 목록 화면으로 이동
    navigate("/cart");
  };

  const gotoCart = () => {
    setIsOrder(true);
  };

  return (
    <AddCartContainer>
      <section>
        <hr />
        <h6>도서정보</h6>
        <hr />
        <article>
          <aside>
            <div>
              <dl>
                <dt>itemId</dt>
                <dd>
                  <input
                    type="text"
                    name="itemId"
                    ref={itemIdRef}
                    value="907990"
                  />
                </dd>
              </dl>

              <dl>
                <dt>도서이미지</dt>
                <dd>
                  <input
                    type="text"
                    name="bookCover"
                    ref={coverRef}
                    value="https://www.cyber.co.kr/book/uploads/cache/2022-godo-goods/thumb-155247724937l0_300x0.jpg"
                  />
                </dd>
              </dl>

              <dl>
                <dt>책제목</dt>
                <dd>
                  <input
                    type="text"
                    name="title"
                    ref={titleRef}
                    value="어린왕자"
                  />
                </dd>
              </dl>

              <dl>
                <dt>정가</dt>
                <dd>
                  <input
                    type="text"
                    name="priceStandard"
                    ref={priceStandardRef}
                    value="10000"
                  />
                </dd>
              </dl>
              <dl>
                <dt>할인가</dt>
                <dd>
                  <input
                    type="text"
                    name="priceSales"
                    ref={priceSalesRef}
                    value="8000"
                  />
                </dd>
              </dl>
              <dl>
                <dt>수량</dt>
                <dd>
                  <input type="text" name="qty" ref={quantityRef} value="1" />
                </dd>
              </dl>
            </div>
            <div>
              {/* <button className={"box-blue"} onClick={handleAddCart}>
                장바구니 담기
              </button> */}
            </div>
            <div>
              <button className={"box-blue"} onClick={gotoCart}>
                장바구니 버튼show
              </button>
              {isOrder && (
                <Button
                  gubun="KOR"
                  itemId={Number(itemIdRef.current.value)}
                  title={titleRef.current.value}
                  cover={coverRef.current.value}
                  priceStandard={priceStandardRef.current.value}
                  priceSales={priceSalesRef.current.value}
                  quantity={quantityRef.current.value}
                />

                // <OrderButton {...cartItem} />
              )}
            </div>
          </aside>
        </article>
      </section>
    </AddCartContainer>
  );
};

export default AddCart;
