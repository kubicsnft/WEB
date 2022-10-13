import React, { useState } from 'react';
import MensajesSp from '../lang/sp.json';
import MensajesEn from '../lang/en.json';
import { IntlProvider } from 'react-intl';

// Definir el contexto
const langContext = React.createContext();

// Para poder usar este contexto hay que encerrar toda la app en un provedor

// Se crea provedor
const LangProvider = ({ children }) => {

    const [mensajes, setMensajes] = useState(MensajesSp);
    const [locale, setLocale] = useState('sp');

    const establecerIdioma = (idioma) => {
        switch (idioma) {
            case 'sp':
                setMensajes(MensajesSp);
                setLocale('sp');
                break;
            case 'en':
                setMensajes(MensajesEn);
                setLocale('en');
                break;
            default:
                setMensajes(MensajesSp);
                setLocale('sp');
        }
    }

    return (
        <langContext.Provider value={{ establecerIdioma}}>
            <IntlProvider locale={locale} messages={mensajes} defaultLocale={locale}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { langContext, LangProvider };
