import { createNumberMask, createTextMask } from 'redux-form-input-masks';

export default {

    money: createNumberMask({
        prefix: 'R$ ',
        suffix: '',
        decimalPlaces: 2,
        locale: 'pt-BR',
    }),

    phone: createTextMask({
        pattern: '(99) 9999-9999',
    }),
    whats: createTextMask({
        pattern: '(99) 99999-9999',
    }),

    cpf: createTextMask({
        pattern: '999.999.999-99',
    })

}