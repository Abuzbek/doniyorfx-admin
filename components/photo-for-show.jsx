function PhotoForShow(props) {
  const { record, property } = props;
  const value = record.params[property.name];
  return (
    <img
      src={value}
      alt="payment_photo"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}
export default PhotoForShow;
