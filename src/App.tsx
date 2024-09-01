import ListGroup from "./ListGroup/ListGroup";

export default function App() {
  let items = ["hello", "goodbye", "hibye", "nocry"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Yolo swag"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
