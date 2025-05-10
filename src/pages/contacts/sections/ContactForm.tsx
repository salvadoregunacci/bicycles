import Input from "../../../components/ui/Input.tsx";
import TextArea from "../../../components/ui/TextArea.tsx";
import Container from "../../../components/Container.tsx";
import Button from "../../../components/ui/Button.tsx";

const ContactForm = () => {
    return (
        <section className="contact-form">
            <Container>
                <div className="content">
                    <h2>зв'яжіться з нами з будь-яких питань</h2>
                    <form>
                        <div className="row">
                            <Input placeholder="Ім'я" required={true}/>
                            <Input placeholder="E-mail"/>
                        </div>
                        <div className="row">
                            <Input placeholder="Телефон" required={true}/>
                            <Input placeholder="Компанія"/>
                        </div>
                        <TextArea placeholder="Повідомлення" required={true}/>
                        <Button className="submit-btn">Задати питання</Button>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default ContactForm;