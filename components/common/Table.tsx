import { v4 as uuid } from "uuid";
import Image from "next/image";
import documentI from "@/assets/Illustrations/document.svg";

interface Props {
  size: Size;
  variant: TVariant;
  thData: string[];
  tbData: string[][];
  noDataText: string;
}

const Table = ({ size, variant, thData, tbData, noDataText }: Props) => {
  return (
    <div className="w-full flex justify-center items-center min-h-[50vh] max-h-[60vh]  max-sm:hidden overflow-y-auto styled_Scroll">
      {tbData.length === 0 ||
        (tbData[0]?.length === 0 && (
          <div className="flex flex-col gap-y-6 items-center rtl">
            <Image src={documentI} width={200} height={200} alt="document" />
            <h3 className="text-xl font-[700]">{noDataText}</h3>
          </div>
        ))}
      {tbData.length > 0 && tbData[0]?.length > 0 && (
        <table
          className={`table text-center ${
            size === "xs"
              ? "table-xs"
              : size === "sm"
              ? "table-sm"
              : size === "md"
              ? "table-md"
              : "table-lg"
          }      
${
  variant === "zebra"
    ? "table-zebra"
    : variant === "pin-row"
    ? "table-pin-rows"
    : "table-pin-cols"
}  
        `}
        >
          {/* head */}
          <thead>
            <tr className="border-b-[1px] border-secondary bg-primary">
              {thData.map((data) => (
                <th className="text-secondary text-sm font-[600]" key={uuid()}>
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y-scroll">
            {tbData.length > 0 && tbData[0]?.length !== 0 && (
              <>
                {tbData.map((row, index) => (
                  <tr
                    key={uuid()}
                    className="hover:cursor-pointer hover:bg-base-100 hover:bg-opacity-20 transition duration-150 ease-in-out"
                  >
                    <th className="text-secondary">{index + 1}</th>
                    {row.map((data, index) => (
                      <td
                        className="text-sm text-secondary font-[400]"
                        key={uuid()}
                      >
                        {index === 0 ? (
                          <span
                            className={`badge badge-secondary p-3 ${
                              data === "فعال" ? "badge-success" : "badge-error"
                            }`}
                          >
                            {data}
                          </span>
                        ) : (
                          data
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
