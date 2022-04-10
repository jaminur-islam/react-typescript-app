type containerProps = {
  styles: React.CSSProperties;
};

const ConteinerStyle = ({ styles }: containerProps) => {
  return <div style={styles}>This is my content</div>;
};

export default ConteinerStyle;
