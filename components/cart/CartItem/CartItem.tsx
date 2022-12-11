import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import s from "./CartItem.module.scss";
import { LineItem } from "@common/types/cart";
import { Swatch } from "@components/product";
import useRemoveItem from "@framework/cart/use-remove-item";
import useUpdateItem from "@framework/cart/use-update-item";
import { ChangeEvent, useState } from "react";
import { Button } from "@components/ui";

const CartItem = ({
  item,
  currencyCode,
}: {
  item: LineItem;
  currencyCode: string;
}) => {
  const removeItem = useRemoveItem();
  const updateItem = useUpdateItem();

  const [quantity, setQuantity] = useState(item.quantity);
  const price = item.variant.price! * item.quantity || 0;
  const { options } = item;

  const handleQuantityChange = (val: number) => {
    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val);
      updateItem({
        id: item.id,
        variantId: item.variantId,
        quantity: val,
      });
    }
  };

  const handleQuantity = async (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    handleQuantityChange(val);
  };

  const incrementQuantity = async (n = 1) => {
    const val = Number(quantity) + n;
    handleQuantityChange(val);
  };

  return (
    <li className={s.root}>
      <div className={s.cartItemImage}>
        <Link href={`/`}>
          <Image
            onClick={() => {}}
            className={s.productImage}
            width={140}
            height={140}
            src={item.variant.image!.url}
            unoptimized
            alt={""}
          />
        </Link>
      </div>
      <div className={s.cartItemInfo}>
        <div>
          <h4>{item.name}</h4>
        </div>
        <div className={s.cartItemInfoSwatch}>
          {/* {options &&
            options.length > 0 &&
            options.map((option) => {
              const value = option.values[0];
              return (
                <Swatch
                  key={`${item.id}-${option.displayName}`}
                  size="sm"
                  onClick={() => {}}
                  label={value.label}
                  color={value.hexColor}
                  variant={option.displayName}
                ></Swatch>
              );
            })} */}
        </div>
        <div className={s.cartItemInfoButtons}>
          <Button color="dark-green" onClick={() => incrementQuantity(-1)}>
            -
          </Button>
          <input
            type="number"
            max={99}
            min={0}
            className={s.quantity}
            value={quantity}
            onChange={handleQuantity}
          />
          <Button color="dark-green" onClick={() => incrementQuantity(+1)}>
            +
          </Button>
        </div>
      </div>
      <div className={s.cartItemCurrency}>
        <span>
          {price} {currencyCode}
        </span>
        <Image
          onClick={() => {
            removeItem({ id: item.id });
          }}
          src="/trash.svg"
          alt={""}
          width={24}
          height={24}
        ></Image>
      </div>
    </li>
  );
};

export default CartItem;
