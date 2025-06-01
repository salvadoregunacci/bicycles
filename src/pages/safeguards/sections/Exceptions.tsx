const Exceptions = () => {
    return (
        <section className="sefeguards-exceptions">
            <h4 className="h2">Гарантійне обслуговування <strong>НЕ</strong> проводиться, якщо:</h4>
            <div className="sefeguards-exceptions__wrap">
                <div className="sefeguards-exceptions__content">
                    <ul className="t2">
                        <li>загублений або не заповнений гарантійний талон</li>
                        <li>обладнання було поставлено на територію України неофіційно</li>
                        <li>виріб має сліди механічного пошкодження або розтину</li>
                        <li>порушені заводські пломби</li>
                        <li>були порушені умови експлуатації, транспортування або зберігання</li>
                        <li>проводився ремонт особами, які не є співробітниками авторизованого сервісного центру</li>
                        <li>використовувалися неоригінальні комплектуючі</li>
                    </ul>
                    <p className="sefeguards-paragraph">
                        Детальний опис умов надання гарантії ви можете знайти в документації до придбаного товару та/або
                        на сайті відповідного виробника.
                    </p>
                </div>
                <picture>
                    <source
                        srcSet="/images/safeguards/exception_bg@1x.avif 1x, /images/safeguards/exception_bg@2x.avif 2x"
                        type="image/avif"
                    />
                    <img
                        className="sefeguards-exceptions__bg"
                        src="/images/safeguards/exception_bg@1x.webp"
                        srcSet="/images/safeguards/exception_bg@2x.webp 2x"
                        alt=""
                    />
                </picture>
            </div>
        </section>
    );
};

export default Exceptions;