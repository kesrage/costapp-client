import React, { useState } from "react"
import Spinner from "../../Spinner/Spinner";
import './styles.css'

const HeaderCosts = () => {
    const [spinner, setSpinner] = useState(false)



    return (
        <div className="costs-header">
            <form className="d-flex mb-3">
                <div className="form-item">
                    <span className="mb-3">Описание</span>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                    <span className="mb-3">Сколько потрачено</span>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                    <span className="mb-3">Дата</span>
                    <input type="text" className="form-control" />
                </div>
                <button className="btn btn-primary add-btn">{spinner ? <Spinner top={5} left={20} /> : 'Добавить'}</button>
            </form>
            <div>
                Итого:
                <span></span>
                RUB
            </div>
        </div>
    )
};

export default HeaderCosts;
