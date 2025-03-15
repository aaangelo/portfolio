import NavBar from "./NavBar/NavBar";

export default function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <h1>this is where the heading will go</h1>
      <h2>something else idk</h2>
      <NavBar onSelectItem={handleSelectItem} />
    </div>
  );
}
