import { Button, Htag, P, Rating, Tag } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
export function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  console.log(menu, firstCategory);
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
      {menu?.map((m) => {
        return <li key={m._id.secondCategory}>{m._id.secondCategory}</li>;
      })}
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
