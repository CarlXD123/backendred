const GENDER_MALE = 'M'
const GENDER_FEMALE = 'F'
const GENDER_OTHER = 'O'

const GENDER_STR: { [key: string]: any } = {
    [GENDER_MALE]: 'Masculino',
    [GENDER_FEMALE]: 'Femenino',
    [GENDER_OTHER]: 'Otro'
}
const status: { [key: string]: any } = {
    'S': "Solicitada",
    'C': "Confirmada",
    'E': "Ejecutada",
    'D': "Eliminada"
}


const CIVIL_STATUS_MARRIED = 'M'
const CIVIL_STATUS_SINGLE = 'S'
const CIVIL_STATUS_DIVORCED = 'D'
const CIVIL_STATUS_WIDOWER = 'W'
const CIVIL_STATUS_NA = 'N'

const CIVIL_STATUS_STR: { [key: string]: any } = {
    [CIVIL_STATUS_MARRIED]: 'Casado',
    [CIVIL_STATUS_SINGLE]: 'Soltero',
    [CIVIL_STATUS_DIVORCED]: 'Divorciado',
    [CIVIL_STATUS_WIDOWER]: 'Viudo',
    [CIVIL_STATUS_NA]: 'No especifica'
}

const TYPE_DIRECTION_STREET = 'C'
const TYPE_DIRECTION_AVENUE = 'V'
const TYPE_DIRECTION_APARTMENT = 'A'
const TYPE_DIRECTION_URBANIZATION = 'U'
const TYPE_DIRECTION_HOUSE = 'S'
const TYPE_DIRECTION_BLOCK = 'M'
const TYPE_DIRECTION_JIRON = 'J'

const TYPE_DIRECTION_STR: { [key: string]: any } = {
    [TYPE_DIRECTION_STREET]: 'Calle',
    [TYPE_DIRECTION_AVENUE]: 'Avenida',
    [TYPE_DIRECTION_APARTMENT]: 'Apartamento',
    [TYPE_DIRECTION_URBANIZATION]: 'Urbanización',
    [TYPE_DIRECTION_HOUSE]: 'Casa',
    [TYPE_DIRECTION_BLOCK]: 'Manzana',
    [TYPE_DIRECTION_JIRON]: 'Jiron'
}

export default {
    GENDER_OTHER,
    GENDER_FEMALE,
    GENDER_MALE,
    GENDER_STR,
    status,
    CIVIL_STATUS_MARRIED,
    CIVIL_STATUS_SINGLE,
    CIVIL_STATUS_DIVORCED,
    CIVIL_STATUS_WIDOWER,
    CIVIL_STATUS_NA,
    CIVIL_STATUS_STR,
    TYPE_DIRECTION_STREET,
    TYPE_DIRECTION_AVENUE,
    TYPE_DIRECTION_APARTMENT,
    TYPE_DIRECTION_URBANIZATION,
    TYPE_DIRECTION_HOUSE,
    TYPE_DIRECTION_BLOCK,
    TYPE_DIRECTION_JIRON,
    TYPE_DIRECTION_STR
}