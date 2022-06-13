import React from 'react'
import { ButtonSimple } from '../../components/Buttons/ButtonSimple'
import { countries } from "../../data/countries"

export default function Countries() {
    return (
        <div className='py-5 bg-secondary fruits'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>This is our Countries Section</h1>
                        <ul className='text-center'>
                            {countries.map((country, i) => {
                                return <li key={country}>{i + 1} {country}</li>
                            })}
                        </ul>
                        <div className="text-center"><ButtonSimple bgColor="danger" text="Add" icon="fas fa-plus" /></div>
                        <div className="text-center my-2"><ButtonSimple text="Delete" icon="fas fa-trash" /></div>
                        <div className="text-center"><ButtonSimple icon="fas fa-trash" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
