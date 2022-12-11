import { FC } from "react";
import s from "./CartSideBar.module.scss";
import { useUI } from "@components/ui/context";
import cn from "classnames";
import useCart from "@framework/cart/use-cart";
import { LineItem } from "@common/types/cart";
import CartItem from "../CartItem";
import Image from "next/image";
import { Button } from "@components/ui";

interface Props {}

const CartSideBar: FC = () => {
  const { closeSidebar } = useUI();
  const { data, isEmpty } = useCart();

  return (
    <div className={s.root}>
      <header className={s.cartHeader}>
        <div className={s.cartHeaderOuter}>
          <div className={s.cartHeaderInner}>
            <Image
              onClick={closeSidebar}
              src={"/cross.svg"}
              width={30}
              height={30}
              alt={""}
            ></Image>
          </div>
        </div>
      </header>
      {isEmpty ? (
        <div className={s.cartEmpty}>
          <span>
            <Image
              src={"/bagGreen.svg"}
              width={30}
              height={30}
              alt={""}
            ></Image>
          </span>
          <h2>Your cart is empty</h2>

          <Button
            buttonStyle="B"
            isIconLeftBig
            image="/bagWhite.svg"
            color="dark-blue"
          >
            GO SHOP
          </Button>
        </div>
      ) : (
        <>
          <div className={s.cartFull}>
            <h2>MY CART</h2>
          </div>
          <div className={s.cartItems}>
            <ul>
              {data?.lineItems.map((item: LineItem) => (
                <CartItem
                  key={item.id}
                  item={item}
                  currencyCode={data.currency.code}
                />
              ))}
            </ul>
          </div>
          <div className={s.cartSummary}>
            <div className={s.cartSummaryContainer}>
              <ul>
                <li>
                  <span>Subtotal</span>
                  <span>
                    {data?.lineItemsSubtotalPrice} {data?.currency.code}
                  </span>
                </li>

                <li>
                  <span>Estimated Shipping</span>
                  <span>
                    <strong>FREE</strong>
                  </span>
                </li>
              </ul>
              <div className={s.cartTotal}>
                <span>Total</span>
                <span>
                  {data?.totalPrice} {data?.currency.code}
                </span>
              </div>
            </div>
            <div className={s.checkoutButton}>
              <Button
                buttonStyle="B"
                color="dark-blue"
                onClick={() => {
                  alert("Going to checkout!");
                }}
              >
                PROCEED TO CHECKOUT
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default CartSideBar;
