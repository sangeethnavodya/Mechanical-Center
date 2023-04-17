import React, { useState } from "react";
import vehicle1i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic1.jpg'
import vehicle2i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic2.jpg'
import vehicle3i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic3.jpg'
import vehicle4i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic4.jpg'
import vehicle5i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic5.jpg'
import vehicle6i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic6.jpg'
import vehicle7i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic7.jpg'
import vehicle8i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic8.jpg'
import vehicle9i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic9.jpg'
import vehicle10i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic10.jpg'
import vehicle11i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic11.jpg'
import vehicle12i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic12.jpg'
import vehicle13i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic13.jpg'
import vehicle14i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic14.jpg'
import vehicle15i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic15.jpg'
import vehicle16i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic16.jpg'
import vehicle17i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic17.jpg'
import vehicle18i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic18.jpg'
import vehicle19i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic19.jpg'
import vehicle20i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic20.jpg'
import vehicle21i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic21.jpg'
import '../../Components/Tire/tire.css'

function TireComparision() {
    const [selectedOption, setSelectedOption] = useState("Please choose an option");
    const [vehicle1, setvehicle1] = useState(false);
    const [vehicle2, setvehicle2] = useState(false);
    const [vehicle3, setvehicle3] = useState(false);
    const [vehicle4, setvehicle4] = useState(false);
    const [vehicle5, setvehicle5] = useState(false);
    const [vehicle6, setvehicle6] = useState(false);
    const [vehicle7, setvehicle7] = useState(false);
    function handleDropdownChange(event) {
        const vehicle = event.target.value;
        setSelectedOption(vehicle);
        if (vehicle === 'Maruti WagonR') {
            setvehicle1(true)
            setvehicle2(false)
            setvehicle3(false)
            setvehicle4(false)
            setvehicle5(false)
            setvehicle6(false)
            setvehicle7(false)
        }
        if (vehicle === 'Hyundai i20') {
            setvehicle1(false)
            setvehicle2(true)
            setvehicle3(false)
            setvehicle4(false)
            setvehicle5(false)
            setvehicle6(false)
            setvehicle7(false)
        }
        if (vehicle === 'Honda City') {
            setvehicle1(false)
            setvehicle2(false)
            setvehicle3(true)
            setvehicle4(false)
            setvehicle5(false)
            setvehicle6(false)
            setvehicle7(false)
        }
        if (vehicle === 'Hyundai Elantra') {
            setvehicle1(false)
            setvehicle2(false)
            setvehicle3(false)
            setvehicle4(true)
            setvehicle5(false)
            setvehicle6(false)
            setvehicle7(false)
        }
        if (vehicle === 'Toyota Camry') {
            setvehicle1(false)
            setvehicle2(false)
            setvehicle3(false)
            setvehicle4(false)
            setvehicle5(true)
            setvehicle6(false)
            setvehicle7(false)
        }
        if (vehicle === 'Tata Nexon') {
            setvehicle1(false)
            setvehicle2(false)
            setvehicle3(false)
            setvehicle4(false)
            setvehicle5(false)
            setvehicle6(true)
            setvehicle7(false)
        }
        if (vehicle === 'Mahindra XUV300') {
            setvehicle1(false)
            setvehicle2(false)
            setvehicle3(false)
            setvehicle4(false)
            setvehicle5(false)
            setvehicle6(false)
            setvehicle7(true)
        }
    }
    const vehi1 = [
        '145/70R12H202CHINA',
        ': LKR 18,525.00',
        'Designed for economic cars with high-cost performance.',
        'The special tread block provide super silence and excellent grip',
        'The silica compound delivers low rolling resistance and fuel efficiency',
        'Optimized outline provides comfortable driving experience',
        'Stable and excellent performance for all season'
    ]
    const vehi2 = [
        '145/70R12E-LOGICSRI LANKA',
        'LKR 18,924.75',
        'Best selling Tyre in Sri Lanka'
    ]
    const vehi3 = [
        '145/70R12 MILAZE',
        ': LKR 17,917.25',
        'Tyres that can go around the world.Twice.',
        'Need tyres that not only run longer than usual but also offer uncompromised safety?',
        'CEAT Milaze X3 is just the right product',
        'These tyres have been specially designed to offer long tread life and superior performance',
        'The innovative tread compound and robust construction minimize tread wear and the tread pattern offers confident wet and dry grip'
    ]
    const vehi4 = [
        '195/55R15 SPORTSWAY',
        'LKR 24,850.00',
        '.Four wide circumferential tread grooves and lateral grooves with fine sipes provide efficient water evacuation, outstanding wet performance',
        'Continuous block patterns on shoulder enhance the ride stability at high speed cornering. The rim protector will protect wheels from curb damage',
        'Continuous outside tread blocks enhance excellent performance and precise control when cornering at high speed. The special rib segment design optimize contact pressure distribution, improve road contact area and provide precise control. The serrated groove walls absorb noise and deliver a quieter ride.',
        'Special tread compound delivers excellent grip on both dry and wet roads and reduce the rolling resistance to save oil and protect environment',
    ]
    const vehi5 = [
        '195/55R16 BLUTRACHP THAILAND',
        'LKR 41,100.75',
        'Best selling Tyre in Sri Lanka'
    ]
    const vehi6 = [
        '195/65R15SPTRGT1 (INDONESIA)',
        ': LKR 35,900.25',
        'Touring tyre featuring long life, enhanced stability on wet roads',
        'low noise and ride comfort',
        'The tread compound is a combination of 2 types of special polymer to provide enhanced grip and longer life',
        'The construction and contact shape have been enhanced to reduce irregular wear and improve handling.'
    ]
    const vehi7 = [
        '185/70R14 SAFEWAY CHINA',
        'Price: LKR 23,450.00',
        'Other details :  Best selling Tyre in Sri Lanka'
    ]

    return (
        <div className="tier-main-div">
            <div className="tier-inner-div">
                <h2 className="tier-h2">Find Your Tier</h2>
                <label htmlFor="dropdown" className='labelHead'>Select Your Car</label>
                <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="Maruti WagonR">Maruti WagonR</option>
                    <option value="Hyundai i20">Hyundai i20</option>
                    <option value="Honda City">Honda City</option>
                    <option value="Hyundai Elantra">Hyundai Elantra</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="Tata Nexon">Tata Nexon</option>
                    <option value="Mahindra XUV300">Mahindra XUV300</option>
                </select>
            </div>
            <div>
                {vehicle1 &&
                    <div className="card-view-div">
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle1i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi1[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi1[1]}</div>
                                <div className="tier-features"> {vehi1[2]}</div>
                                <div className="tier-features">{vehi1[3]}</div>
                                <div className="tier-features">{vehi1[4]}</div>
                                <div className="tier-features">{vehi1[5]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle2i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi2[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi2[1]}</div>
                                <div className="tier-features"> {vehi2[2]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle3i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi3[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">           {vehi3[1]}</div>
                                <div className="tier-features">           {vehi3[2]}</div>
                                <div className="tier-features">{vehi3[3]}</div>
                                <div className="tier-features">{vehi3[4]}</div>
                                <div className="tier-features">{vehi3[5]}</div>
                                <div className="tier-features">{vehi3[6]}</div>
                                <div className="tier-features">{vehi3[7]}</div>
                                <div className="tier-features">{vehi3[8]}</div>
                                <div className="tier-features">{vehi3[9]}</div>

                            </div>
                        </card>
                    </div>
                }

            </div>

        </div>
    )
}
export default TireComparision