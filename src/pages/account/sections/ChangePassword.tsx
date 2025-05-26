import Input from "../../../components/ui/Input.tsx";
import {useState} from "react";
import Button from "../../../components/ui/Button.tsx";

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    return (
        <section className="change-password">
            <h3>Зміна пароля</h3>
            <form
                className="form"
                onSubmit={(e)=> e.preventDefault()}
            >
                <div className="field">
                    <label className="t2" htmlFor="old-pass">Старий пароль</label>
                    <Input
                        id="old-pass"
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="t2" htmlFor="new-pass">Новий пароль</label>
                    <Input
                        id="new-pass"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="t2" htmlFor="repeat-new-pass">Повторіть новий пароль</label>
                    <Input
                        id="repeat-new-pass"
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}
                    />
                </div>
                <Button className="submit-btn">Змінити</Button>
            </form>
        </section>
    );
};

export default ChangePassword;