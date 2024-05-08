const listOfGuests = [
    {
      name: "abc",
      age: 30,
      RSVP: "confirm",
    },
    {
      name: "def",
      age: 20,
      RSVP: "confirm",
    },
    {
      name: "ghi",
      age: 25,
      RSVP: "notconfirm",
    },
    {
      name: "jkl",
      age: 29,
      RSVP: "confirm",
    },
];
  
function listOfGuest(g, ...guests) {
    let array = [...guests];
  
    g.forEach((g) => {
      if(g.RSVP === 'confirm'){
        console.log(
            `Dear ${g.name} ${array[0]} for party from us at ${array[1]}  `
          );
      }
      else{
        console.log('Not confirmed');
      }
    });
}
  
let g = listOfGuests;
  
listOfGuest(g, "we cordially invite you", "Address:123");