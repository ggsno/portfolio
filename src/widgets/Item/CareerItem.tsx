import { Fragment } from "react";

type Props = {
  title: string;
  subTitle: string;
  contents: JSX.Element[];
};

export default function CareerItem({ title, subTitle, contents }: Props) {
  return (
    <>
      <h3>{title}</h3>
      <span>{subTitle}</span>
      {contents.map((content) => (
        <Fragment key={content.key}>{content}</Fragment>
      ))}
    </>
  );
}
