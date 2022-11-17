import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={"primary"}>Primary</Button>
      <Button appearance={"ghost"} arrow={"right"}>
        Primary
      </Button>
    </>
  );
}
