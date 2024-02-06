"use client";

import { ReactNode, useState } from "react";

type Props = {
  ButtonContent: ReactNode;
  OnOpenComponent: ReactNode;
  OnCloseComponent: ReactNode;
};

export default function ToggleButton(props: Props) {
  const { ButtonContent, OnOpenComponent, OnCloseComponent } = props;
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpened((state) => !state);
        }}
      >
        {ButtonContent}
      </button>
      {isOpened ? OnOpenComponent : OnCloseComponent}
    </>
  );
}
