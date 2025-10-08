import './App.css'
import DynamicForm from './components/DynamicForm';

function App() {
   const fields = [
    {
      name: "ime",
      label: "Ime i Prezime",
      type: "text",
      required: true,
      placeholder: "Unesite ime i prezime",
      hint: "Minimalno 3, maksimalno 20 znakova.",
      minLength: { enabled: true, value: 3, message: "Ime mora imati barem 3 znaka." },
      maxLength: { enabled: true, value: 30, message: "Ime može imati najviše 30 znakova." }
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
      placeholder: "primjer@domena.com",
      email: { enabled: true, message: "Molimo unesite ispravnu email adresu." }
    },
    {
      name: "passangerNumber",
      label: "Broj putnika",
      type: "number",
      required: true,
      placeholder: "npr. 5",
      range: { enabled: true, min: 1, max: 10, message: "Godine moraju biti između 18 i 65." }
    },
    {
      name: "city",
      label: "Destinacija",
      type: "select",
      required: true,
      options: [
        {label:"Pariz", value: "Paris"},
        {label:"Rim", value: "Rome"},
        {label:"Barcelona", value: "Barcelona"},
        {label:"Prag", value: "Prague"},
      ],
      placeholder: "-- odaberite grad --"
    },
    {
      name: "travelType",
      label: "Vrsta putovanja",
      type: "radio",
      required: true,
      options: [
        {label: "Avion", value:"plane"},
        {label: "Autobus", value:"bus"},
        {label: "Vlastiti prijevoz", value:"driving"}
      ]
    },
    {
      name: "addition",
      label: "Napomena",
      type: "textarea",
      placeholder: "Dodatne napomene",
      rows: 4,
      maxLength: { enabled: true, value: 150, message: "Opis može imati najviše 120 znakova." }
    },
    {
      name: "newsletter",
      label: "Newsletter",
      type: "checkbox",
      checkboxLabel: "Želim primati newsletter"
    }
  ];

  function handleFormSubmit(data){
    console.log("Podaci iz obrasca: ", data);
    alert("forma poslana! Pogledaj konzolu");
  }
  return (
    <>
      <DynamicForm fields={fields} onSubmit={handleFormSubmit}/>
    </>
  )
}

export default App
