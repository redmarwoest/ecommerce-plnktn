import { Accordion, Button, Container } from "@components/ui";
import s from "./ProductView.module.scss";
import Image from "next/image";
import { Product } from "@common/types/product";
import { ProductSlider, Swatch } from "@components/product";
import { FC, useState, ChangeEvent } from "react";
import { Choices, getVariant } from "../helpers";
import { useUI } from "@components/ui/context";
import useAddItem from "@framework/cart/use-add-item";
import { LineItem } from "@common/types/cart";
import useUpdateItem from "@framework/cart/use-update-item";
import useRemoveItem from "@framework/cart/use-remove-item";

type AvailableChoices = "color" | "size" | string;

type Choices = {
  [P in AvailableChoices]: string;
};

const accordions = [
  {
    title: "WHY OMEGA-3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    title: "WHY OMEGA-3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    title: "WHY OMEGA-3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    title: "WHY OMEGA-3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

const ProductView = ({
  product,
  item,
}: {
  item: LineItem;
  product: Product;
}) => {
  const [choices, setChoices] = useState<Choices>({});
  const { openSidebar } = useUI();
  const addItem = useAddItem();

  const removeItem = useRemoveItem();
  const updateItem = useUpdateItem();

  // const [quantity, setQuantity] = useState(item.quantity);
  // const price = item.variant.price! * item.quantity || 0;

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

  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: String(variant?.id),
        variantOptions: variant?.options,
        quantity: 1,
      };

      const output = await addItem(item);
      openSidebar();
    } catch {}
  };

  const variant = getVariant(product, choices);
  return (
    <>
      <Container layout="C">
        <div className={s.productDisplay}>
          {" "}
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={s.imageContainer}>
                <Image
                  className={s.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.productInformation}>
          <div className={s.productInformationContainer}>
            <div className={s.productInformationBenefits}>
              <div>
                <Image
                  src={"/anti-inflammatory.svg"}
                  width={30}
                  height={30}
                  alt={""}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/digestion.svg"}
                  width={30}
                  height={30}
                  alt={""}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/heart.svg"}
                  width={30}
                  height={30}
                  alt={""}
                ></Image>
              </div>
              <div>
                <Image
                  src={"/plant-based.svg"}
                  width={30}
                  height={30}
                  alt={""}
                ></Image>
              </div>
            </div>
            <div className={s.productInformationReviews}>
              <Image
                src={"/reviews-bol.svg"}
                width={90}
                height={30}
                alt={""}
              ></Image>
              <p>
                <strong>29 reviews</strong>
              </p>
            </div>
            {product.options.map((option) => (
              <div key={option.id} className="pb-4">
                <h2 className="uppercase font-medium">{option.displayName}</h2>
                <div className="flex flex-row py-4">
                  {option.values.map((optValue) => {
                    const activeChoice =
                      choices[option.displayName.toLowerCase()];
                    return (
                      <Swatch
                        key={`${option.id}-${optValue.label}`}
                        label={optValue.label}
                        color={optValue.hexColor}
                        variant={option.displayName}
                        active={optValue.label.toLowerCase() === activeChoice}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]:
                              optValue.label.toLowerCase(),
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
            <div className={s.productInformationText}>
              <div>
                <h2>{product.name}</h2>
                <p>
                  <strong>
                    {product.price.currencyCode} {product.price.value}
                  </strong>
                </p>
              </div>
              <p className={s.productDescription}>{product.description}</p>
            </div>
            <div className={s.productInformationButtons}>
              <div className={s.productInformationAdd}>
                <div className={s.firstButton}>
                  <Button
                    buttonStyle="B"
                    color="dark-green"
                    onClick={addToCart}
                  >
                    ADD TO CART
                  </Button>
                </div>
                <div className={s.productInformationCounter}>
                  <Button
                    buttonStyle="B"
                    color="dark-green"
                    onClick={() => incrementQuantity(-1)}
                  >
                    -
                  </Button>
                  <Button buttonStyle="B" color="dark-green">
                    {" "}
                    <input
                      type="number"
                      max={99}
                      min={0}
                      className={s.quantity}
                      // value={quantity}
                      onChange={handleQuantity}
                    />
                  </Button>
                  <Button
                    buttonStyle="B"
                    color="dark-green"
                    onClick={() => incrementQuantity(+1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              <Button buttonStyle="B" color="dark-green">
                SUBSCRIBE HERE $26,95 PM
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <div className={s.accordion}>
        {accordions.map((accordion) => (
          <Accordion
            key="accordion"
            title={accordion.title}
            text={accordion.text}
          />
        ))}
      </div>
    </>
  );
};

export default ProductView;
