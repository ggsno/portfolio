import { Fragment } from "react";

type Props = {
  title: string;
  role: string;
  team: string;
  ImageComponent: JSX.Element;
  contents: JSX.Element[];
  time: { start: Date; end?: Date };
};

function date(date: Date) {
  return `${date.getFullYear()}.${date
    .getMonth()
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;
}

export default function ProjectItem(props: Props) {
  const { title, role, team, ImageComponent, contents, time } = props;

  return (
    <>
      <h3>{title}</h3>
      <div>
        <h4>기간</h4>
        <span>
          {date(time.start)} ~ {time.end ? date(time.end) : "진행중"}
        </span>
      </div>
      <div>
        <h4>역할</h4>
        <span>{role}</span>
      </div>
      <div>
        <h4>팀 구성</h4>
        <span>{team}</span>
      </div>
      <div className="lg:flex">
        <div className="lg:mb-2">{ImageComponent}</div>
        <div>
          {contents.map((content) => (
            <Fragment key={content.key}>{content}</Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
