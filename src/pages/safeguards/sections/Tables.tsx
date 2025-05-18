import {useMemo} from "react";

interface ITableRow {
    title: string,
    value: string | null,
}

const Tables = () => {
    const table1: ITableRow[] = useMemo(() => [
        {title: "BMC", value: "2 роки"},
        {title: "Bont", value: "6 місяців"},
        {title: "Campagnolo", value: "12 місяців"},
        {title: "Cervelo", value: "48 місяців"},
        {title: "Cipollini", value: "60 місяців"},
        {title: "Colnago", value: "24 місяці"},
        {title: "Continental", value: null},
        {title: "CrankBrothers", value: null},
        {title: "Early Rider", value: "12 місяців"},
        {title: "Easton", value: null},
        {title: "Elite", value: null},
        {title: "Fox", value: "12 місяців"},
        {title: "Garmin", value: "24 місяці"},
        {title: "Giant", value: "60 місяців"},
    ], []);

    const table2: ITableRow[] = useMemo(() => [
        {title: "Kask", value: "12 місяців"},
        {title: "Koo", value: null},
        {title: "Lightweight", value: null},
        {title: "Officine Mattio", value: "36 місяців"},
        {title: "Pinarello", value: "24 місяці"},
        {title: "Rohloff", value: "60 місяців"},
        {title: "Scicon", value: "12 місяців"},
        {title: "Scott", value: "60 місяців"},
        {title: "Selleroyal", value: "12 місяців"},
        {title: "Shimano", value: "12 місяців"},
        {title: "Sigma", value: null},
        {title: "SKS", value: "6 місяців"},
        {title: "Tacx", value: "12 місяців"},
        {title: "Wilier", value: "24 місяців"},
    ], []);

    return (
        <section className="safeguards-tables">
            <h3 className="safeguards-tables__title">Гарантія на бренди</h3>
            <div className="safeguards-tables__wrap">
                <table>
                    <thead className="sr-only">
                    <tr>
                        <th>Бренд</th>
                        <th>Гарантія</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        table1.map((item, index) => (
                            <tr key={index}>
                                <td className="t1">{item.title}</td>
                                <td className="sub-h3">{item.value ?? "-"}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <table>
                    <thead className="sr-only">
                    <tr>
                        <th>Бренд</th>
                        <th>Гарантія</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        table2.map((item, index) => (
                            <tr key={index}>
                                <td className="t1">{item.title}</td>
                                <td className="sub-h3">{item.value ?? "-"}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Tables;