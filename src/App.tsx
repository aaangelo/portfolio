import NavBar from "./NavBar/NavBar";

export default function App() {
  let items = ["hello", "goodbye", "hibye", "nocry"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <h1>this is where the heading will go</h1>
      <NavBar items={items} onSelectItem={handleSelectItem} />
    </div>
  );
}
