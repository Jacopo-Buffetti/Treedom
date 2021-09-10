module.exports = {
  step1: {
    nome: {
      validation: 'required',
      message: 'Please insert a valid name',
    },
    cognome: {
      validation: 'required',
      message: 'Please insert a valid last name',
    },
    cf: {
      validation: 'regex',
      regex: '^[A-Z]{6}[A-Z0-9]{2}[A-Z][A-Z0-9]{2}[A-Z][A-Z0-9]{3}[A-Z]$',
      message: 'Please insert a valid fiscal code',
    },
  },
  step2: {
    regione: {
      validation: 'required',
      message: 'Please insert a valid regione',
    },
    provincia: {
      validation: 'required',
      message: 'Please insert a valid provincia',
    },
    comune: {
      validation: 'required',
      message: 'Please insert a valid provincia',
    },
    cap: {
      validation: 'required',
      message: 'Please insert a valid cap',
    },
    indirizzo: {
      validation: 'required',
      message: 'Please insert a valid provincia',
    },
  },
  step3: {
    email: {
      validation: 'required',
      message: 'Please insert a valid email',
    },
    pass: {
      validation: 'required',
      message: 'Please insert a valid email',
    }
  }
}
