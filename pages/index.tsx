import { Button, Htag, P, Rating, Tag } from "../components";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={"primary"}>Primary</Button>
      <Button appearance={"ghost"} arrow={"right"}>
        Primary
      </Button>
      <P size={"l"}>Large</P>
      <P size={"m"}>Normal</P>
      <P size={"s"}>Small</P>
      <Tag color={"red"} size={"s"}>
        ff
      </Tag>
      <Tag color={"ghost"} size={"m"}>
        ff
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable={true} />
    </>
  );
}
