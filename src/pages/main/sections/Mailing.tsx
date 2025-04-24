import Input from "../../../components/ui/Input.tsx";
import {useState} from "react";
import Button from "../../../components/ui/Button.tsx";
import Checkbox from "../../../components/ui/Checkbox.tsx";
import Container from "../../../components/Container.tsx";

const Mailing = () => {
    const [value, setValue] = useState<string>("");

    return (
        <section className="section section_mailing">
            <Container>
                <div className="mailing__offer">
                    <h2>Підпишіться на наші новини</h2>
                    <form className="mailing__form" method="POST" action="#">
                        <div className="mailing__form-row">
                            <Input
                                className="mailing__input"
                                placeholder="E-mail"
                                type="email"
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                            <Button>
                                Підписатися
                            </Button>
                        </div>
                        <Checkbox className="mailing__checkbox">
                            Згоден(на) на обробку персональних даних
                        </Checkbox>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Mailing;