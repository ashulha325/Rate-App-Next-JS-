import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./Star.svg";
import { useEffect, useState } from "react";
export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const constructRating = (currentRating: number): void => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={(): void => {
            changeDisplay(i + 1);
          }}
          onMouseLeave={(): void => {
            changeDisplay(rating);
          }}
          onClick={(): void => {
            handleSetRating(i + 1);
          }}
        >
          <StarIcon />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);

    //eslint-disable-next-line
  }, [rating]);

  const changeDisplay = (i: number): void => {
    if (!isEditable) return;
    constructRating(i);
  };

  const handleSetRating = (i: number): void => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r: JSX.Element, i: number) => {
        return <span key={i}>{r}</span>;
      })}
    </div>
  );
};
