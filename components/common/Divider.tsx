interface Props {
  style?: string;
}

const Divider = ({ style }: Props) => {
  return <div className={`divider ${style}`}></div>;
};

export default Divider;
