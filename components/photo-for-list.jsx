function PhotoForList(props) {
  const { record, property } = props;
  const value = record.params[property.name];
  return (
    <img
      src={value}
      alt="payment_photo"
      style={{ width: 32, height: 32, borderRadius: "10px" }}
    />
  );
}
export default PhotoForList;
