import React, { useState } from 'react'
import '../styles/pages/form.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const initialValue = {
    name: '',
    address: '',
    email: '',
    fone: '',
    msg: ''
}

function Form() {
    const [values, setValues] = useState(initialValue)

    function onChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    function onSubmit(e){
        e.preventDefault()
        console.log(values)
    }

    return (
        <>
            <Header />
            <main>
                <form onSubmit={onSubmit} id="form">
                    <fieldset>
                        <div className="input-block">
                            <label htmlFor="name">Nome completo</label>
                            <input name="name" id="name" required onChange={onChange} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="address">Endereço</label>
                            <input name="address" id="address" required onChange={onChange} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" required onChange={onChange} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="fone">Telefone</label>
                            <input type="number" name="fone" id="fone" required onChange={onChange} />
                        </div>
                        <div className="textarea-block">
                            <label htmlFor="msg">Mensagem</label>
                            <textarea name="msg" id="msg" required onChange={onChange}></textarea>
                        </div>

                        <button type="submit">Enviar</button>
                    </fieldset>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Form