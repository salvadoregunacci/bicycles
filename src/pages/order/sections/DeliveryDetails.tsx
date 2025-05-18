import Input from "../../../components/ui/Input.tsx";
import {useEffect, useRef} from "react";
import Select, {StylesConfig} from "react-select";
import axios from "axios";
import {ICityApiResponse, IWarehouseApiResponse} from "../../../types.ts";
import Radio from "../../../components/ui/Radio.tsx";
import TextArea from "../../../components/ui/TextArea.tsx";
import {useAppDispatch, useAppSelector} from "../../../hooks.ts";
import {
    setAddress,
    setCityList,
    setDeliveryMethod,
    setEmail,
    setFirstname,
    setLastname,
    setPayMethod,
    setSearchCity,
    setSearchWarehouse,
    setSelectedCity,
    setSelectedWarehouse,
    setTelephone,
    setWarehouseList
} from "../../../redux/slices/order/slice.ts";
import {debounce} from "../../../helpers.ts";

interface IOptionType {
    value: string,
    label: string,
}

const DeliveryDetails = () => {
    const dispatch = useAppDispatch();
    const firstname = useAppSelector(state => state.order.firstname);
    const lastname = useAppSelector(state => state.order.lastname);
    const telephone = useAppSelector(state => state.order.telephone);
    const email = useAppSelector(state => state.order.email);
    const address = useAppSelector(state => state.order.address);
    const searchCity = useAppSelector(state => state.order.searchCity);
    const selectedCity = useAppSelector(state => state.order.selectedCity);
    const cityList = useAppSelector(state => state.order.cityList);
    const searchWarehouse = useAppSelector(state => state.order.searchWarehouse);
    const selectedWarehouse = useAppSelector(state => state.order.selectedWarehouse);
    const warehouseList = useAppSelector(state => state.order.warehouseList);
    const deliveryMethod = useAppSelector(state => state.order.deliveryMethod);
    const payMethod = useAppSelector(state => state.order.payMethod);
    const novaPoshtaApiKey = useAppSelector(state => state.shop.novaPoshtaApiKey);
    const errors = useAppSelector(state => state.order.deliveryErrors);
    const deliveryFormRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (Object.keys(errors).length && deliveryFormRef.current) {
            deliveryFormRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [errors]);

    useEffect(() => {
        async function getCityList() {
            const res = await axios.post<ICityApiResponse>(
                "https://api.novaposhta.ua/v2.0/json/",
                {
                    apiKey: novaPoshtaApiKey,
                    modelName: "AddressGeneral",
                    calledMethod: "getCities",
                    methodProperties: {
                        Page: "1",
                        FindByString: searchCity,
                        Limit: "20",
                    },
                });

            if (res.data && res.data.data) {
                dispatch(setCityList(res.data.data.map(item => item.Description)));
            }
        }

        debounce(getCityList, 800)();
    }, [searchCity]);

    useEffect(() => {
        async function getWarehouseList() {
            const res = await axios.post<IWarehouseApiResponse>(
                "https://api.novaposhta.ua/v2.0/json/",
                {
                    apiKey: novaPoshtaApiKey,
                    modelName: "AddressGeneral",
                    calledMethod: "getWarehouses",
                    methodProperties: {
                        FindByString: selectedWarehouse,
                        CityName: selectedCity,
                        Page: "1",
                        Limit: "50",
                        Language: "UA",
                    }
                });

            if (res.data && res.data.data) {
                dispatch(setWarehouseList(res.data.data.map(item => item.Description)));
            }
        }

        debounce(getWarehouseList, 800)();
    }, [searchWarehouse, selectedCity]);

    const selectStyles: StylesConfig<IOptionType> = {
        control: ((styles, {isFocused}) => ({
            ...styles,
            paddingLeft: "6px",
            backgroundColor: "#F8F8F8",
            height: "46px",
            border: "1px solid #E5E5E5",
            boxShadow: isFocused ? "0 0 0 1px #EB6B16" : styles.boxShadow,
            "&:hover": {
                borderColor: isFocused ? "#EB6B16" : styles.borderColor,
            },
        })),
        option: (styles, {isSelected}) => ({
            ...styles,
            backgroundColor: isSelected ? "#EB6B16" : "",
            "&:hover": {
                backgroundColor: isSelected ? "#EB6B16" : "rgba(235,107,22,0.4)",
            }
        }),
        singleValue: (styles) => ({
            ...styles,
        }),
        placeholder: (styles) => ({
            ...styles,
            color: "#B3B3B3",
        }),
    }

    const errorSelectStyles: StylesConfig<IOptionType> = {
        ...selectStyles,
        control: ((styles, {isFocused}) => ({
            ...styles,
            paddingLeft: "6px",
            backgroundColor: "#F8F8F8",
            height: "46px",
            border: "1px solid #F53A20",
            boxShadow: isFocused ? "0 0 0 1px #F53A20" : styles.boxShadow,
            "&:hover": {
                borderColor: isFocused ? "#EB6B16" : "#F53A20",
            },
        })),
    }

    return (
        <div className="order-delivery">
            <div className="order-block">
                <div className="order-block__row">
                    <div className="order-delivery-form" ref={deliveryFormRef}>
                        <h3>Деталі доставки</h3>
                        <div className="order-delivery-form__content">
                            <div className="row">
                                <Input
                                    error={errors.firstname}
                                    value={firstname}
                                    onChange={(e) => {
                                        dispatch(setFirstname(e.target.value))
                                    }}
                                    placeholder="Ім'я *"
                                />
                                <Input
                                    error={errors.lastname}
                                    value={lastname}
                                    onChange={(e) => {
                                        dispatch(setLastname(e.target.value))
                                    }}
                                    placeholder="Прізвище *"
                                />
                            </div>
                            <div className="row">
                                <Input
                                    error={errors.telephone}
                                    value={telephone}
                                    onChange={(e) => {
                                        dispatch(setTelephone(e.target.value))
                                    }}
                                    placeholder="Телефон *"
                                />
                                <Input
                                    value={email}
                                    onChange={(e) => {
                                        dispatch(setEmail(e.target.value))
                                    }}
                                    placeholder="E-mail"
                                />
                            </div>
                            <div className="row">
                                <div className="select-wrap">
                                    <Select<IOptionType>
                                        styles={errors.selectedCity ? errorSelectStyles : selectStyles}
                                        className="select"
                                        isClearable={true}
                                        isSearchable={true}
                                        options={cityList.map((city) => ({value: city, label: city}))}
                                        value={
                                            selectedCity
                                                ? {value: selectedCity, label: selectedCity}
                                                : null
                                        }
                                        inputValue={searchCity}
                                        onInputChange={(val) => {
                                            dispatch(setSearchCity(val))
                                        }}
                                        onChange={(newValue) => {
                                            dispatch(setSelectedCity(newValue?.value || ""))
                                        }}
                                        placeholder="Місто *"
                                        noOptionsMessage={() => "Не знайдено"}
                                    />
                                    <div className="select-error">
                                        {errors.selectedCity}
                                    </div>
                                </div>
                                {
                                    deliveryMethod === "courier" ?
                                        <Input
                                            error={errors.address}
                                            value={address}
                                            onChange={(e) => {
                                                dispatch(setAddress(e.target.value))
                                            }}
                                            placeholder="Адреса *"
                                            className="address-input"
                                        />
                                        :
                                        <div className="select-wrap">
                                            <Select<IOptionType>
                                                styles={errors.selectedWarehouse ? errorSelectStyles : selectStyles}
                                                className="select"
                                                isClearable={true}
                                                isSearchable={true}
                                                options={warehouseList.map((wirehouse) => ({
                                                    value: wirehouse,
                                                    label: wirehouse
                                                }))}
                                                value={
                                                    selectedWarehouse
                                                        ? {value: selectedWarehouse, label: selectedWarehouse}
                                                        : null
                                                }
                                                inputValue={searchWarehouse}
                                                onInputChange={(val) => {
                                                    dispatch(setSearchWarehouse(val))
                                                }}
                                                onChange={(newValue) => {
                                                    dispatch(setSelectedWarehouse(newValue?.value || ""))
                                                }}
                                                placeholder="Відділення *"
                                                noOptionsMessage={() => "Не знайдено"}
                                            />
                                            <div className="select-error">
                                                {errors.selectedWarehouse}
                                            </div>
                                        </div>
                                }
                            </div>
                            <div className="row">
                                <TextArea
                                    className="comment-area"
                                    placeholder="Коментар до замовлення"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="order-methods-form">
                        <div className="order-methods-form__block">
                            <h4 className="title sub-h2">Спосіб доставки</h4>
                            <div className="fields">
                                <Radio
                                    checked={deliveryMethod === "novaposhta"}
                                    name="delivery-method"
                                    value="novaposhta"
                                    onChange={() => {
                                        dispatch(setDeliveryMethod("novaposhta"))
                                    }}
                                >
                                    Нова пошта
                                </Radio>
                                <Radio
                                    checked={deliveryMethod === "courier"}
                                    name="delivery-method"
                                    value="courier"
                                    onChange={() => {
                                        dispatch(setDeliveryMethod("courier"))
                                    }}
                                >
                                    Кур'єрська доставка
                                </Radio>
                            </div>
                        </div>
                        <div className="order-methods-form__block">
                            <h4 className="title sub-h2">Спосіб оплати</h4>
                            <div className="fields">
                                <Radio
                                    checked={payMethod === "receipt"}
                                    name="pay-method"
                                    value="receipt"
                                    onChange={() => {
                                        dispatch(setPayMethod("receipt"))
                                    }}
                                >
                                    Оплата при отриманні
                                </Radio>
                                <Radio
                                    checked={payMethod === "card"}
                                    name="pay-method"
                                    value="card"
                                    onChange={() => {
                                        dispatch(setPayMethod("card"))
                                    }}
                                >
                                    Оплата картою онлайн
                                </Radio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryDetails;