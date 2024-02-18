import { CloseButton } from "@/assets/icons/Icons";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
  style?: string;
  width?: string;
}

const Modal = ({ children, style, width, id }: Props) => {
  const modalAction = (
    <div className="modal-action m-0">
      <form method="dialog">
        <button className="bg-none">
          <CloseButton />
        </button>
      </form>
    </div>
  );

  return (
    <div className={style}>
      <dialog id={id} className="modal">
        <div
          className={`modal-box ${width} bg-primary border-[1px] border-secondary`}
        >
          {modalAction}
          {children}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
