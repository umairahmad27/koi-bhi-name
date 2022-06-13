import React from 'react'

export default function Fruits() {

    const fruits = ["Apple", "Mango", "Orange", "Banana", "Mango", "Straw", "Peach"];
    const user = { firstName: "Rizwan", lastName: "Ahmad", city: "Faisalabad", coutry: "Pakistan", age: 20 }

    const { firstName, lastName, age } = user

    const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red',
        owner: "Ahmad"
    }

    const updateMyVehicle = {
        type: 'car',
        year: 2021,
        // color: 'yellow'
    }

    const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }

    // console.log(myUpdatedVehicle)

    let cgpa = 2.5;


    return (
        <div className='py-5 bg-light fruits'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>This is our Fruits Section</h1>
                        <p className='text-center'>{cgpa >= 3 ? "Brilliant" : "Passed"}</p>
                        <p className='text-center'>{cgpa >= 3 && "Brilliant"}</p>
                        <p className='text-center'>User Name is: {firstName} {lastName} and age is {age}</p>
                        <div className="text-center">
                            <ul>
                                {
                                    fruits.map((fruit, index) => {
                                        return <li key={index} className="text-success">{index + 1} {fruit}</li>
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
