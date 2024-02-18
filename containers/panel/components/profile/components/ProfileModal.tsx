interface Props {
  name: string;
  number: string;
}

const ProfileModal = ({ name, number }: Props) => {
  return (
    <div className="w-[150px] h-auto border-[1px] border-seconadry bg-primary rounded-md flex flex-col justify-center items-center p-5">
      <div className="rtl">
        <h3 className="text-base text-secondary font-bold">{name}</h3>
        <h3 className="text-sm text-secondary font-semibold">{number}</h3>
      </div>
    </div>
  );
};

export default ProfileModal;
