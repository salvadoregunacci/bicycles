import Input from "../../../components/ui/Input.tsx";
import {useState} from "react";
import Button from "../../../components/ui/Button.tsx";

const PersonalData = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [house, setHouse] = useState("");
    const [floor, setFloor] = useState("");
    const [apartment, setApartment] = useState("");

    return (
        <section className="personal-data">
            <h3>Персональні дані</h3>
            <form action="#" className="form">
                <div className="row">
                    <div className="field">
                        <label className="t2" htmlFor="firstname">Ім`я</label>
                        <Input
                            id="firstname"
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label className="t2" htmlFor="lastname">Прізвище</label>
                        <Input
                            id="lastname"
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="t2" htmlFor="nickname">Відображуване ім'я</label>
                    <Input
                        id="nickname"
                        value={nickname}
                        onChange={e => setNickname(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="t2" htmlFor="email">E-mail</label>
                    <Input
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="t2" htmlFor="phone">Телефон</label>
                    <Input
                        id="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="t2" htmlFor="city">Місто</label>
                    <Input
                        id="city"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="t2" htmlFor="street">Вулиця</label>
                    <Input
                        id="street"
                        value={street}
                        onChange={e => setStreet(e.target.value)}
                    />
                </div>
                <div className="row">
                    <div className="field">
                        <label className="t2" htmlFor="house">Будинок</label>
                        <Input
                            id="house"
                            value={house}
                            onChange={e => setHouse(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label className="t2" htmlFor="floor">Поверх</label>
                        <Input
                            id="floor"
                            value={floor}
                            onChange={e => setFloor(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label className="t2" htmlFor="floor">Квартира</label>
                        <Input
                            id="apartment"
                            value={apartment}
                            onChange={e => setApartment(e.target.value)}
                        />
                    </div>
                </div>
                <Button className="submit-btn">Змінити</Button>
            </form>
        </section>
    );
};

export default PersonalData;