import Modal from "./Modal.tsx";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import Input from "./ui/Input.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import Button from "./ui/Button.tsx";
import {setOneClickItem} from "../redux/slices/shop/slice.ts";

const OneClickModal = () => {
    const dispatch = useAppDispatch();
    const item = useAppSelector(state => state.shop.oneClickItem);
    const [name, setName] = useState<string>("");
    const [telephone, setTelephone] = useState<string>("");

    const handleCloseModal = () => {
        dispatch(setOneClickItem(null));
    }

    return (
        item ?
            <Modal
                isActive={true}
                onClose={handleCloseModal}
                closeBtnInBody={true}
                className="one-click"
            >
                <div className="one-click__content">
                    <h3>Замовлення в один клік</h3>
                    <div className="one-click__row">
                        <div className="one-click__col col-1">
                            <div className="one-click__item-preview">
                                <img src={item.preview} alt="preview"/>
                            </div>
                            <div className="one-click__item-title sub-h2">{item.title}</div>
                        </div>
                        <div className="one-click__col col-2">
                            <div className="one-click__desc sub-h3">
                                Вкажіть ваше ім'я та телефон, і наш менеджер зв'яжеться з вами для оформлення
                                замовлення.
                            </div>
                            <div className="one-click__fields">
                                <Input
                                    placeholder="Ім'я"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Input
                                    placeholder="Телефон"
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}
                                />
                            </div>
                            <div className="one-click__policy">
                                Натискаючи на кнопку «Замовити» я даю свою згоду на обробку персональних даних і приймаю
                                <Link to="#">умови угоди</Link>
                            </div>
                            <Button className="one-click__submit">Замовити</Button>
                        </div>
                    </div>
                </div>
            </Modal>
            :
            null
    );
};

export default OneClickModal;