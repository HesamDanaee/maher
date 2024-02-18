import { ReactNode } from "react";
import { v4 as uuid } from "uuid";

interface Props {
  data: {
    title: string;
    value: string;
  }[];
  style?: string;
  body?: ReactNode;
}

const DataCard = ({ data, body, style }: Props) => {
  return (
    <div
      className={`card w-full bg-primary text-primary-content sm:hidden ${style}`}
    >
      <div className="card-body border-[1px] border-secondary rounded-md px-4 py-5">
        <div>
          <ul className="flex flex-col gap-y-2">
            {data.map(({ title, value }) => (
              <li
                key={uuid()}
                className="flex flex-row justify-between items-center"
              >
                <span className="text-sm text-secondary font-[300]">
                  {value}
                </span>
                <span className="text-sm text-secondary font-[400]">
                  {title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {body}
      </div>
    </div>
  );
};

export default DataCard;
