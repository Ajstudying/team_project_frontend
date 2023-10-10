import Home from "@/pages/Home";
import { useState } from "react";
import { BookContainer } from "./styles";

const BookList = () => {
  return (
    <>
      <BookContainer>
        <section>
          {/* <h2>도서몰</h2> */}
          <article>
            <div>
              <figure>
                <img src="책이미지" alt="책이미지" />
              </figure>
              <div>
                <h3>책 제목</h3>
                <p>책 저자</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum animi cum nisi illo vitae tenetur ut? Veniam,
                  repudiandae culpa libero ea, commodi natus totam, ducimus
                  voluptas earum debitis dicta vel.
                </p>
              </div>
            </div>
            <ul>
              <li>판매가</li>
              <li>장바구니 담기</li>
            </ul>
          </article>
          <article>
            <div>
              <figure>
                <img src="책이미지" alt="책이미지" />
              </figure>
              <div>
                <h3>책 제목</h3>
                <p>책 저자</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum animi cum nisi illo vitae tenetur ut? Veniam,
                  repudiandae culpa libero ea, commodi natus totam, ducimus
                  voluptas earum debitis dicta vel.
                </p>
              </div>
            </div>
            <ul>
              <li>판매가</li>
              <li>장바구니 담기</li>
            </ul>
          </article>
          <article>
            <div>
              <figure>
                <img src="책이미지" alt="책이미지" />
              </figure>
              <div>
                <h3>책 제목</h3>
                <p>책 저자</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum animi cum nisi illo vitae tenetur ut? Veniam,
                  repudiandae culpa libero ea, commodi natus totam, ducimus
                  voluptas earum debitis dicta vel.
                </p>
              </div>
            </div>
            <ul>
              <li>판매가</li>
              <li>장바구니 담기</li>
            </ul>
          </article>
        </section>
      </BookContainer>
    </>
  );
};

export default BookList;
