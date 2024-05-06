import Person from "./Person";
const NameList = () => {

    const Persons = [
        {
            id: 1,
            name: 'Allam',
            age: '25',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Sallam',
            age: '18',
            skill: 'Angulr'
        },
        {
            id: 3,
            name: 'Kallam',
            age: '16',
            skill: 'Python'
        },
        {
            id: 4,
            name: 'Arsalan',
            age: '35',
            skill: 'Java'
        }
    ];

    const personlist = Persons.map(person => (<Person person = {person}/>));
    return(

        
        <div>
            {
                personlist
            }
        </div>
    );
}

export default NameList;