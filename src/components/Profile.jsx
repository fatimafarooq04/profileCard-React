import Card from './Card'
import './Profile.css'

const data = [
    {
        id: 1,
        name: 'Fatima',
        experience: 'Frontend developer',
        email:'fatima@gmail.com',
        phone:1234567890

    },
    {
        id: 2,
        name: 'Saad',
        experience: 'Backend developer',
         email:'Saad@gmail.com',
        phone:1234567890

    },
    {
        id: 3,
        name: 'Nasima',
        experience: 'Ui/Ux Designer',
         email:'Nasima@gmail.com',
        phone:1234567890

    },
     {
        id: 4,
        name: 'Faaiz',
        experience: 'full stack Developer',
         email:'Faaiz@gmail.com',
        phone:1234567890

    }, {
        id: 5,
        name: 'Faizan',
        experience: 'Graphic Designer',
         email:'Faizan@gmail.com',
        phone:1234567890

    },
]
export const Profile = () => {
    return (
        <>
            <h1>Users Profiles</h1>
            <div className="profile">

                {
                    data.map((user) => (
                        <Card key={user.id} user={user} />
                    ))
                }
            </div>

        </>
    )
}